import { Link } from '@/core/i18n/navigation';
import { getLocale } from '@/paraglide/runtime.js';
import { getHomepageGuideHub } from '@/content/related-guides';

export function GuidesHub() {
  const locale = getLocale();
  const hub = getHomepageGuideHub(locale);
  const sections = [
    { key: 'guides' as const, items: hub.groups.guides },
    { key: 'wiki' as const, items: hub.groups.wiki },
    { key: 'lists' as const, items: hub.groups.lists },
  ];

  return (
    <section
      id="guides-hub"
      aria-labelledby="guides-hub-heading"
      className="border-border border-t"
    >
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8">
        <h2
          id="guides-hub-heading"
          className="text-muted-foreground text-sm font-semibold tracking-wide uppercase"
        >
          {hub.title}
        </h2>
        <nav aria-label={hub.title} className="mt-3 flex flex-col gap-2">
          {sections.map((section) => {
            const hubHref =
              section.key === 'guides'
                ? '/guides'
                : section.key === 'wiki'
                  ? '/wiki'
                  : null;

            return (
              <div
                key={section.key}
                className="flex flex-wrap items-baseline gap-x-2 gap-y-1 sm:gap-x-3"
              >
                {hubHref ? (
                  <Link
                    href={hubHref}
                    className="text-muted-foreground/80 hover:text-foreground w-14 shrink-0 text-[11px] font-semibold tracking-wide uppercase transition-colors sm:w-16"
                  >
                    {hub.groupLabels[section.key]}
                  </Link>
                ) : (
                  <span className="text-muted-foreground/80 w-14 shrink-0 text-[11px] font-semibold tracking-wide uppercase sm:w-16">
                    {hub.groupLabels[section.key]}
                  </span>
                )}
                <ul className="flex min-w-0 flex-1 flex-wrap items-center gap-x-1 gap-y-1">
                  {section.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-muted-foreground hover:text-foreground hover:bg-muted/50 inline-flex rounded-md px-2 py-0.5 text-[13px] leading-5 transition-colors"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </nav>
      </div>
    </section>
  );
}
