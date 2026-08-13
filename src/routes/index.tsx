import { createFileRoute } from '@tanstack/react-router';

import { envConfigs } from '@/config';
import { gameSeoImages } from '@/config/game-seo-images';
import { m } from '@/paraglide/messages.js';
import { getLocale, locales, localizeUrl } from '@/paraglide/runtime.js';
import { Footer } from '@/blocks/footer';
import { GamePlay } from '@/blocks/game-play';
import { GameSeo } from '@/blocks/game-seo';
import { Header } from '@/blocks/header';
import { PiggyShufflePromo } from '@/components/piggy-shuffle-promo';

const ENGLISH_FAQ_ANSWERS = {
  free:
    'Yes. Bills Must Be Paid can be played in a browser for free, and Rike Games also offers free demos on Steam and itch.io. The complete Steam release is paid.',
  browser:
    'Yes. The player at the top of this page runs in the browser, so no local game installation is required. Rike Games also links to its own free browser build, and itch.io hosts an HTML5 demo.',
  steam:
    'The free browser and demo versions cover the core loop. The full Steam game adds documented systems including bankruptcy and prestige progression, rings and bracelets, more piggies, hammers and perks, desk gadgets, risk mechanics, an ending, achievements, and Steam Cloud support.',
  developer:
    'Rike Games — Roxy and Mike, a two-person indie studio based in Frankfurt, Germany. Its official press kit says the studio has shipped mobile and web games since 2019, reaching more than 500,000 mobile downloads and over 20 million web plays across its catalog.',
  controls:
    'Use the left mouse button on desktop to move the hammer over piggy banks. The hammer swings while you hover over targets, and smashing consumes stamina.',
  idle:
    'No. Rike Games describes Bills Must Be Paid as an active incremental game. Runs involve smashing targets, watching stamina, paying bills, choosing perks, and deciding how to spend money on upgrades.',
} as const;

const FAQ_KEYS = [
  'free',
  'browser',
  'steam',
  'developer',
  'controls',
  'idle',
] as const;

const HOME_SEO = {
  en: {
    title: 'Bills Must Be Paid Game - Play Free Online',
    description:
      'Bills Must Be Paid game online: play the free browser demo, smash piggy banks, pay bills, upgrade hammers and skills, and compare the full Steam game.',
  },
  zh: {
    title: 'Bills Must Be Paid Game - 免费在线玩',
    description:
      'Bills Must Be Paid Game 免费在线玩：浏览器直接试玩，砸存钱罐、付账单、升级锤子与技能树，并了解 Steam 完整版差异。',
  },
  es: {
    title: 'Bills Must Be Paid Game - Juega Gratis Online',
    description:
      'Bills Must Be Paid juego online: juega gratis en el navegador, rompe alcancías, paga facturas, mejora tu build y compara la versión completa de Steam.',
  },
} as const;

function getHomeSeo(locale: string) {
  return HOME_SEO[locale as keyof typeof HOME_SEO] ?? HOME_SEO.en;
}

function HomePage() {
  return (
    <div className="bg-background text-foreground flex min-h-screen flex-col">
      <Header />
      <main>
        <GamePlay />
        <GameSeo />
        <PiggyShufflePromo />
      </main>
      <Footer />
    </div>
  );
}

function buildJsonLd(locale: string) {
  const url = localizeUrl(`${envConfigs.app_url}/`, {
    locale: locale as ReturnType<typeof getLocale>,
  }).href;
  const isEnglish = locale === 'en';
  const seo = getHomeSeo(locale);

  return [
    {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'Bills Must Be Paid',
      url,
      applicationCategory: 'GameApplication',
      operatingSystem: 'Any',
      browserRequirements: 'Requires JavaScript. Desktop browser recommended.',
      description: seo.description,
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
      mainEntity: FAQ_KEYS.map((key) => ({
        '@type': 'Question',
        name: m[`landing.seo.faq.${key}.question` as keyof typeof m](
          {},
          { locale: locale as any }
        ),
        acceptedAnswer: {
          '@type': 'Answer',
          text: isEnglish
            ? ENGLISH_FAQ_ANSWERS[key]
            : m[`landing.seo.faq.${key}.answer` as keyof typeof m](
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
    const { title, description } = getHomeSeo(locale);
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
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
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
