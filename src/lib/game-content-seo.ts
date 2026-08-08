import { envConfigs } from '@/config';
import { getLocalizedGamePage } from '@/content/game-page-locales';
import { getLocale, locales, localizeUrl } from '@/paraglide/runtime.js';

export function buildGamePageHead({
  path,
  title,
  description,
  image = '/images/game/bills-must-be-paid-header.jpg',
}: {
  path: string;
  title: string;
  description: string;
  image?: string;
}) {
  const locale = getLocale();
  const localized = getLocalizedGamePage(path, locale);
  const localizedTitle = localized?.metaTitle ?? title;
  const localizedDescription = localized?.metaDescription ?? description;
  const urlFor = (loc: string) =>
    localizeUrl(new URL(path, envConfigs.app_url).href, {
      locale: loc as (typeof locales)[number],
    }).href;
  const canonical = urlFor(locale);
  const ogImage = new URL(image, envConfigs.app_url).href;

  return {
    meta: [
      { title: localizedTitle },
      { name: 'description', content: localizedDescription },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:title', content: localizedTitle },
      { property: 'og:description', content: localizedDescription },
      { property: 'og:type', content: 'article' },
      { property: 'og:url', content: canonical },
      { property: 'og:site_name', content: envConfigs.app_name },
      { property: 'og:image', content: ogImage },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: localizedTitle },
      { name: 'twitter:description', content: localizedDescription },
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
    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: localizedTitle,
          description: localizedDescription,
          url: canonical,
          image: ogImage,
          inLanguage: locale,
          dateModified: '2026-08-08',
          about: {
            '@type': 'VideoGame',
            name: 'Bills Must Be Paid',
          },
        }),
      },
    ],
  };
}
