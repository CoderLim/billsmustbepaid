import { envConfigs } from '@/config';
import { getLocale, locales, localizeUrl } from '@/paraglide/runtime.js';

/** Head metadata for authenticated / utility pages that should not be indexed. */
export function buildPrivatePageHead(title?: string) {
  return {
    meta: [
      { title: title ?? envConfigs.app_name },
      { name: 'robots', content: 'noindex, nofollow' },
    ],
  };
}

/** Open Graph + Twitter tags for static MDX pages. */
export function buildStaticPageHead({
  path,
  title,
  description,
}: {
  path: string;
  title: string;
  description: string;
}) {
  const locale = getLocale();
  const urlFor = (loc: string) =>
    localizeUrl(new URL(path, envConfigs.app_url).href, {
      locale: loc as (typeof locales)[number],
    }).href;
  const canonical = urlFor(locale);
  const ogImage = new URL('/logo.png', envConfigs.app_url).href;

  return {
    meta: [
      { title },
      { name: 'description', content: description },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: canonical },
      { property: 'og:site_name', content: envConfigs.app_name },
      { property: 'og:image', content: ogImage },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: ogImage },
    ],
    links: [
      { rel: 'canonical', href: canonical },
      ...locales.map((loc) => ({
        rel: 'alternate',
        hrefLang: loc,
        href: urlFor(loc),
      })),
      { rel: 'alternate', hrefLang: 'x-default', href: urlFor('en') },
    ],
  };
}
