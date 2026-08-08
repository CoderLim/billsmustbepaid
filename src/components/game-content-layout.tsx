import { Fragment, type ReactNode } from 'react';
import { BookOpen, ExternalLink, ShieldCheck } from 'lucide-react';

import { Footer } from '@/blocks/footer';
import { SiteHeader } from '@/components/site-header';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import {
  gameSeoImages,
  type GameSeoImageKey,
} from '@/config/game-seo-images';
import { Link } from '@/core/i18n/navigation';

export type ContentBreadcrumb = {
  label: string;
  href?: string;
};

export type ContentSource = {
  label: string;
  url: string;
  note?: string;
};

export type RelatedPage = {
  title: string;
  description: string;
  href: string;
};

export type TocItem = {
  label: string;
  href: string;
};

const innerNavLinks = [
  { href: '/', label: 'Play' },
  {
    href: '/guides',
    label: 'Guides',
    children: [
      { href: '/guides/beginner-guide', label: 'Beginner Guide' },
      {
        href: '/guides/prestige-bankruptcy',
        label: 'Prestige & Bankruptcy',
      },
      { href: '/guides/piggy-shuffle', label: 'Piggy Shuffle' },
      { href: '/demo-vs-full-game', label: 'Demo vs Full Game' },
    ],
  },
  {
    href: '/wiki',
    label: 'Wiki',
    children: [
      { href: '/wiki/piggy-banks', label: 'Piggy Banks' },
      { href: '/wiki/hammers', label: 'Hammers' },
      { href: '/wiki/skill-tree', label: 'Skill Tree' },
    ],
  },
  { href: '/achievements', label: 'Achievements' },
  { href: '/tier-lists', label: 'Tier Lists' },
];

export function GameContentLayout({
  eyebrow,
  title,
  description,
  breadcrumbs,
  imageKey,
  imageAlt,
  toc,
  children,
  related = [],
  sources,
}: {
  eyebrow: string;
  title: string;
  description: string;
  breadcrumbs: ContentBreadcrumb[];
  imageKey: GameSeoImageKey;
  imageAlt: string;
  toc?: TocItem[];
  children: ReactNode;
  related?: RelatedPage[];
  sources: ContentSource[];
}) {
  const image = gameSeoImages[imageKey];

  return (
    <div className="bg-background text-foreground min-h-screen">
      <SiteHeader
        navLinks={innerNavLinks}
        cta={{ href: '/', label: 'Play Now' }}
      />

      <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:py-12">
        <Breadcrumb className="mb-7">
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link href="/" className="hover:text-foreground transition-colors">
                Play
              </Link>
            </BreadcrumbItem>
            {breadcrumbs.map((item) => (
              <Fragment key={`${item.label}-${item.href ?? 'current'}`}>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="hover:text-foreground transition-colors"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <BreadcrumbPage>{item.label}</BreadcrumbPage>
                  )}
                </BreadcrumbItem>
              </Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>

        <section className="border-border grid gap-8 border-b pb-10 lg:grid-cols-[minmax(0,1fr)_460px] lg:items-center">
          <div>
            <div className="text-primary mb-3 text-sm font-semibold tracking-wide uppercase">
              {eyebrow}
            </div>
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-balance sm:text-5xl">
              {title}
            </h1>
            <p className="text-muted-foreground mt-5 max-w-2xl text-lg leading-8">
              {description}
            </p>
            <div className="text-muted-foreground mt-5 flex flex-wrap items-center gap-4 text-sm">
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="text-primary size-4" />
                Source-checked
              </span>
              <span>Updated August 7, 2026</span>
            </div>
          </div>

          <figure className="overflow-hidden rounded-2xl border bg-black shadow-sm">
            <img
              src={image.src}
              width={image.width}
              height={image.height}
              alt={imageAlt}
              className="aspect-video h-auto w-full object-cover"
            />
            <figcaption className="border-border bg-background/95 text-muted-foreground border-t px-4 py-3 text-xs">
              Official Bills Must Be Paid screenshot from Rike Games / Steam.
            </figcaption>
          </figure>
        </section>

        <div className="grid gap-10 py-10 lg:grid-cols-[minmax(0,1fr)_220px] lg:gap-14">
          <article className="min-w-0 max-w-3xl">{children}</article>

          {toc?.length ? (
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <div className="mb-3 flex items-center gap-2 text-sm font-semibold">
                  <BookOpen className="size-4" />
                  On this page
                </div>
                <nav className="border-border flex flex-col gap-2 border-l pl-4">
                  {toc.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="text-muted-foreground hover:text-foreground text-sm leading-6 transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>
          ) : null}
        </div>

        {related.length ? (
          <section className="border-border border-t py-10">
            <h2 className="text-2xl font-bold tracking-tight">Related pages</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="border-border hover:border-foreground/25 group rounded-xl border p-5 transition-colors"
                >
                  <h3 className="font-semibold group-hover:underline">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground mt-2 text-sm leading-6">
                    {item.description}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        ) : null}

        <SourceList sources={sources} />
      </main>

      <Footer />
    </div>
  );
}

export function ArticleSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 [&+section]:mt-10">
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
      <div className="text-muted-foreground mt-4 space-y-4 text-base leading-7 [&_strong]:text-foreground">
        {children}
      </div>
    </section>
  );
}

export function FactList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-2 pl-5">
      {items.map((item, index) => (
        <li key={index} className="list-disc pl-1">
          {item}
        </li>
      ))}
    </ul>
  );
}

export function SourceNote({
  title = 'Source note',
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <div className="border-primary/25 bg-primary/5 rounded-xl border p-5">
      <div className="text-foreground mb-2 flex items-center gap-2 font-semibold">
        <ShieldCheck className="text-primary size-4" />
        {title}
      </div>
      <div>{children}</div>
    </div>
  );
}

export function GameScreenshot({
  imageKey,
  alt,
  caption,
}: {
  imageKey: GameSeoImageKey;
  alt: string;
  caption: string;
}) {
  const image = gameSeoImages[imageKey];
  return (
    <figure className="border-border my-7 overflow-hidden rounded-xl border">
      <img
        src={image.src}
        width={image.width}
        height={image.height}
        alt={alt}
        loading="lazy"
        className="aspect-video h-auto w-full object-cover"
      />
      <figcaption className="bg-muted/40 text-muted-foreground border-border border-t px-4 py-3 text-sm">
        {caption}
      </figcaption>
    </figure>
  );
}

export function ContentCardGrid({ items }: { items: RelatedPage[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="border-border hover:border-foreground/25 rounded-xl border p-5 transition-colors"
        >
          <div className="font-semibold">{item.title}</div>
          <p className="text-muted-foreground mt-2 text-sm leading-6">
            {item.description}
          </p>
        </Link>
      ))}
    </div>
  );
}

function SourceList({ sources }: { sources: ContentSource[] }) {
  return (
    <section className="border-border border-t py-10" aria-labelledby="sources-title">
      <h2 id="sources-title" className="text-2xl font-bold tracking-tight">
        Original sources
      </h2>
      <p className="text-muted-foreground mt-2 max-w-3xl text-sm leading-6">
        Facts on this page are tied to the first-party or clearly labeled community sources below. Community advice is not presented as an official game mechanic.
      </p>
      <ol className="mt-5 space-y-4">
        {sources.map((source, index) => (
          <li key={source.url} className="flex gap-3 text-sm">
            <span className="text-muted-foreground shrink-0">{index + 1}.</span>
            <div>
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium underline underline-offset-4"
              >
                {source.label}
                <ExternalLink className="ml-1 inline size-3.5" />
              </a>
              {source.note ? (
                <p className="text-muted-foreground mt-1 leading-6">
                  {source.note}
                </p>
              ) : null}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
