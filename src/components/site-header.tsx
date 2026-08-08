'use client';

import { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

import { BrandLogo } from '@/components/brand-logo';
import { LocaleSelector } from '@/components/locale-selector';
import { SiteUserMenu } from '@/components/site-user-menu';
import { ThemeToggle } from '@/components/theme-toggle';
import { buttonVariants } from '@/components/ui/button';
import { useSession } from '@/core/auth/client';
import { Link } from '@/core/i18n/navigation';
import { cn } from '@/lib/utils';
import { m } from '@/paraglide/messages.js';

export interface NavLink {
  href: string;
  label: string;
  /** Open in a new tab. Off-site (http) hrefs always open in a new tab. */
  external?: boolean;
  /** Optional second-level navigation items. */
  children?: NavLink[];
}

/** Off-site URLs render as plain <a>; internal paths use the locale-aware Link. */
const isExternalHref = (href: string) => /^https?:\/\//.test(href);

export interface HeaderCta {
  href: string;
  label: string;
}

function DesktopNavLink({ link }: { link: NavLink }) {
  const linkClass =
    'text-muted-foreground hover:text-foreground text-sm transition-colors';

  if (isExternalHref(link.href)) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
      >
        {link.label}
      </a>
    );
  }

  return (
    <Link
      href={link.href}
      target={link.external ? '_blank' : undefined}
      className={linkClass}
    >
      {link.label}
    </Link>
  );
}

function DesktopNavItem({ link }: { link: NavLink }) {
  if (!link.children?.length) {
    return <DesktopNavLink link={link} />;
  }

  return (
    <div className="group relative flex h-16 items-center">
      <div className="flex items-center gap-1">
        <DesktopNavLink link={link} />
        <ChevronDown className="text-muted-foreground size-3.5 transition-transform group-hover:rotate-180 group-focus-within:rotate-180" />
      </div>

      <div className="pointer-events-none invisible absolute top-full left-1/2 z-50 w-64 -translate-x-1/2 pt-2 opacity-0 transition-all duration-150 group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:opacity-100">
        <div className="border-border bg-popover text-popover-foreground rounded-xl border p-2 shadow-lg">
          {link.children.map((child) =>
            isExternalHref(child.href) ? (
              <a
                key={child.href}
                href={child.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-accent hover:text-accent-foreground block rounded-lg px-3 py-2.5 text-sm transition-colors"
              >
                {child.label}
              </a>
            ) : (
              <Link
                key={child.href}
                href={child.href}
                target={child.external ? '_blank' : undefined}
                className="hover:bg-accent hover:text-accent-foreground block rounded-lg px-3 py-2.5 text-sm transition-colors"
              >
                {child.label}
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export function SiteHeader({
  navLinks,
  cta,
}: {
  navLinks?: NavLink[];
  cta?: HeaderCta;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const { data: session } = useSession();
  const user = session?.user;

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileSubmenu(null);
  };

  return (
    <header className="bg-background/80 sticky top-0 z-50 w-full backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Brand */}
        <Link href="/" className="flex items-center">
          <BrandLogo />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden h-16 items-center gap-6 md:flex">
          {navLinks?.map((link) => (
            <DesktopNavItem key={link.href} link={link} />
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 md:flex">
          <LocaleSelector />
          <ThemeToggle />
          {user ? (
            <SiteUserMenu
              name={user.name || 'User'}
              email={user.email}
              image={user.image}
            />
          ) : cta ? (
            isExternalHref(cta.href) ? (
              <a
                href={cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants())}
              >
                {cta.label}
              </a>
            ) : (
              <Link href={cta.href} className={cn(buttonVariants())}>
                {cta.label}
              </Link>
            )
          ) : (
            <Link href="/settings" className={cn(buttonVariants())}>
              {m['common.nav.get_started']()}
            </Link>
          )}
        </div>

        {/* Mobile toggle */}
        <button
          className="p-2 md:hidden"
          onClick={() => {
            setMobileOpen(!mobileOpen);
            if (mobileOpen) setMobileSubmenu(null);
          }}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-border border-t px-4 pt-2 pb-4 md:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks?.map((link) => {
              const submenuOpen = mobileSubmenu === link.href;

              if (!link.children?.length) {
                return isExternalHref(link.href) ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:bg-accent hover:text-foreground rounded-md px-3 py-2 text-sm transition-colors"
                    onClick={closeMobileMenu}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    className="text-muted-foreground hover:bg-accent hover:text-foreground rounded-md px-3 py-2 text-sm transition-colors"
                    onClick={closeMobileMenu}
                  >
                    {link.label}
                  </Link>
                );
              }

              return (
                <div key={link.href}>
                  <div className="flex items-center">
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:bg-accent hover:text-foreground min-w-0 flex-1 rounded-md px-3 py-2 text-sm transition-colors"
                      onClick={closeMobileMenu}
                    >
                      {link.label}
                    </Link>
                    <button
                      type="button"
                      className="text-muted-foreground hover:bg-accent hover:text-foreground rounded-md p-2"
                      aria-label={`${submenuOpen ? 'Hide' : 'Show'} ${link.label} submenu`}
                      aria-expanded={submenuOpen}
                      onClick={() =>
                        setMobileSubmenu(submenuOpen ? null : link.href)
                      }
                    >
                      <ChevronDown
                        className={cn(
                          'size-4 transition-transform',
                          submenuOpen && 'rotate-180'
                        )}
                      />
                    </button>
                  </div>

                  {submenuOpen ? (
                    <div className="border-border ml-3 flex flex-col gap-1 border-l pl-3">
                      {link.children.map((child) =>
                        isExternalHref(child.href) ? (
                          <a
                            key={child.href}
                            href={child.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:bg-accent hover:text-foreground rounded-md px-3 py-2 text-sm transition-colors"
                            onClick={closeMobileMenu}
                          >
                            {child.label}
                          </a>
                        ) : (
                          <Link
                            key={child.href}
                            href={child.href}
                            target={child.external ? '_blank' : undefined}
                            className="text-muted-foreground hover:bg-accent hover:text-foreground rounded-md px-3 py-2 text-sm transition-colors"
                            onClick={closeMobileMenu}
                          >
                            {child.label}
                          </Link>
                        )
                      )}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </nav>
          <div className="border-border mt-3 flex items-center gap-2 border-t pt-3">
            <LocaleSelector />
            <ThemeToggle />
            <div className="flex-1" />
            {user ? (
              <SiteUserMenu
                name={user.name || 'User'}
                email={user.email}
                image={user.image}
              />
            ) : cta ? (
              isExternalHref(cta.href) ? (
                <a
                  href={cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonVariants())}
                  onClick={closeMobileMenu}
                >
                  {cta.label}
                </a>
              ) : (
                <Link
                  href={cta.href}
                  className={cn(buttonVariants())}
                  onClick={closeMobileMenu}
                >
                  {cta.label}
                </Link>
              )
            ) : (
              <Link
                href="/settings"
                className={cn(buttonVariants())}
                onClick={closeMobileMenu}
              >
                {m['common.nav.get_started']()}
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
