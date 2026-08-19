import { createFileRoute } from '@tanstack/react-router';

import { ValidatedSearchPage } from '@/components/validated-search-page';
import { getValidatedSearchPage } from '@/content/validated-search-pages';
import { buildGamePageHead } from '@/lib/game-content-seo';
import { getLocale } from '@/paraglide/runtime.js';

function CoinsPage() {
  return <ValidatedSearchPage pageKey="coins" imageKey="coins" />;
}

export const Route = createFileRoute('/wiki/coins')({
  head: () => {
    const content = getValidatedSearchPage('coins', getLocale());
    return buildGamePageHead({
      path: '/wiki/coins',
      title: content.metaTitle,
      description: content.metaDescription,
      image: '/images/game/rare-coins-collection.jpg',
    });
  },
  component: CoinsPage,
});
