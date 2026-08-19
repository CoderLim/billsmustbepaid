import { createFileRoute } from '@tanstack/react-router';

import { ValidatedSearchPage } from '@/components/validated-search-page';
import { getValidatedSearchPage } from '@/content/validated-search-pages';
import { buildGamePageHead } from '@/lib/game-content-seo';
import { getLocale } from '@/paraglide/runtime.js';

function DoubleOrNothingPage() {
  return <ValidatedSearchPage pageKey="double-or-nothing" imageKey="coins" />;
}

export const Route = createFileRoute('/guides/double-or-nothing')({
  head: () => {
    const content = getValidatedSearchPage('double-or-nothing', getLocale());
    return buildGamePageHead({
      path: '/guides/double-or-nothing',
      title: content.metaTitle,
      description: content.metaDescription,
      image: '/images/game/rare-coins-collection.jpg',
    });
  },
  component: DoubleOrNothingPage,
});
