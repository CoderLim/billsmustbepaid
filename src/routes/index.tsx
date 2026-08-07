import { createFileRoute } from '@tanstack/react-router';

import { envConfigs } from '@/config';
import { gameSeoImages } from '@/config/game-seo-images';
import { m } from '@/paraglide/messages.js';
import { getLocale, locales, localizeUrl } from '@/paraglide/runtime.js';
import { Footer } from '@/blocks/footer';
import { GamePlay } from '@/blocks/game-play';
import { GameSeo } from '@/blocks/game-seo';
import { Header } from '@/blocks/header';

function HomePage() {
  return (
    <div className="bg-background text-foreground flex min-h-screen flex-col">
      <Header />
      <main>
        <GamePlay />
        <GameSeo />
      </main>
      <Footer />
    </div>
  );
}

function buildJsonLd(locale: string) {
  const url = localizeUrl(`${envConfigs.app_url}/`, {
    locale: locale as ReturnType<typeof getLocale>,
  }).href;

  return [
    {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'Bills Must Be Paid',
      url,
      applicationCategory: 'GameApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires JavaScript. Desktop browser recommended.',
      description: m['landing.seo.meta_description'](
        {},
        { locale: locale as any }
      ),
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
      author: {
        '@type': 'Organization',
        name: 'Rike Games',
        url: 'https://rikegames.com/',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        'free',
        'browser',
        'steam',
        'developer',
        'controls',
        'idle',
      ].map((key) => ({
        '@type': 'Question',
        name: m[`landing.seo.faq.${key}.question` as keyof typeof m](
          {},
          { locale: locale as any }
        ),
        acceptedAnswer: {
          '@type': 'Answer',
          text: m[`landing.seo.faq.${key}.answer` as keyof typeof m](
            {},
            { locale: locale as any }
          ),
        },
      })),
    },
  ];
}

export const Route = createFileRoute('/')({
  loader: () => {
    const locale = getLocale();
    return { locale };
  },
  head: ({ loaderData }) => {
    const locale = loaderData?.locale ?? 'en';
    const urlFor = (loc: string) =>
      localizeUrl(`${envConfigs.app_url}/`, { locale: loc as any }).href;
    const title = m['landing.seo.meta_title']({}, { locale: locale as any });
    const description = m['landing.seo.meta_description'](
      {},
      { locale: locale as any }
    );
    const ogImage = `${envConfigs.app_url}${gameSeoImages.smash.src}`;

    return {
      meta: [
        { title },
        { name: 'description', content: description },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:url', content: urlFor(locale) },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: envConfigs.app_name },
        { property: 'og:image', content: ogImage },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: ogImage },
      ],
      links: [
        { rel: 'canonical', href: urlFor(locale) },
        ...locales.map((loc) => ({
          rel: 'alternate',
          hrefLang: loc,
          href: urlFor(loc),
        })),
        { rel: 'alternate', hrefLang: 'x-default', href: urlFor('en') },
      ],
      scripts: buildJsonLd(locale).map((data) => ({
        type: 'application/ld+json',
        children: JSON.stringify(data),
      })),
    };
  },
  component: HomePage,
});
