import { envConfigs } from '@/config';

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
  const canonical = new URL(path, envConfigs.app_url).href;
  const ogImage = new URL(image, envConfigs.app_url).href;

  return {
    meta: [
      { title },
      { name: 'description', content: description },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: 'article' },
      { property: 'og:url', content: canonical },
      { property: 'og:site_name', content: envConfigs.app_name },
      { property: 'og:image', content: ogImage },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: ogImage },
    ],
    links: [{ rel: 'canonical', href: canonical }],
    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: title,
          description,
          url: canonical,
          image: ogImage,
          dateModified: '2026-08-07',
          about: {
            '@type': 'VideoGame',
            name: 'Bills Must Be Paid',
          },
        }),
      },
    ],
  };
}
