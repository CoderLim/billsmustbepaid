import { createFileRoute } from '@tanstack/react-router';

import {
  ArticleSection,
  FactList,
  GameContentLayout,
  GameScreenshot,
} from '@/components/game-content-layout';
import { GameLongformExpansion } from '@/components/game-longform-expansion';
import { Link } from '@/core/i18n/navigation';
import { buildGamePageHead } from '@/lib/game-content-seo';

function PiggyBanksPage() {
  return (
    <GameContentLayout
      eyebrow="Wiki"
      title="Piggy Banks in Bills Must Be Paid"
      description="What official sources actually confirm about piggy bank variety, behavior, loot, unlocks and completion goals."
      breadcrumbs={[{ label: 'Wiki', href: '/wiki' }, { label: 'Piggy Banks' }]}
      imageKey="piggies"
      imageAlt="Bills Must Be Paid piggy bank types and collection screen"
      toc={[
        { label: 'Different piggy types', href: '#types' },
        { label: 'Loot and behavior', href: '#loot' },
        { label: 'Collection goals', href: '#collection' },
        { label: 'Piggy Shuffle', href: '#shuffle' },
        { label: 'Role in a run', href: '#piggy-role' },
        { label: 'Known behavior', href: '#piggy-known-behavior' },
        { label: 'Completion context', href: '#piggy-completion' },
      ]}
      related={[
        {
          title: 'Piggy Shuffle Guide',
          description: 'Solve the Eyes on the Piggy challenge with verified and labeled sources.',
          href: '/guides/piggy-shuffle',
        },
        {
          title: 'Achievements',
          description: 'Piggy Bank Collector and the rest of the official checklist.',
          href: '/achievements',
        },
        {
          title: 'Beginner Guide',
          description: 'See how piggies fit into money, stamina and progression.',
          href: '/guides/beginner-guide',
        },
      ]}
      sources={[
        {
          label: 'Rike Games — Bills Must Be Paid press kit',
          url: 'https://rikegames.com/press/bills-must-be-paid/',
        },
        {
          label: 'Steam — Bills Must Be Paid',
          url: 'https://store.steampowered.com/app/4421010/Bills_Must_Be_Paid/',
        },
        {
          label: 'Steam Community — official achievements',
          url: 'https://steamcommunity.com/stats/4421010/achievements/',
        },
      ]}
    >
      <ArticleSection id="types" title="The game has multiple piggy bank types">
        <p>
          Rike Games explicitly says new piggy types appear as you progress. Official descriptions characterize them by behavior rather than presenting every pig as a simple reskin: some run away, some are lazy, and some carry a lot of money.
        </p>
        <GameScreenshot
          imageKey="piggies"
          alt="Bills Must Be Paid piggy collection interface"
          caption="Official collection imagery confirms that piggy types are a discoverable/unlockable system."
        />
      </ArticleSection>

      <ArticleSection id="loot" title="Piggies can differ in loot and behavior">
        <p>
          The first-party press kit says smashing piggies can produce random loot and that piggy types can differ in movement and value. That supports comparing piggies by behavior and rewards, but it does not justify inventing exact HP or drop-rate tables where the official material does not provide them.
        </p>
        <FactList
          items={[
            'Piggy behavior can vary, including mobile and relatively passive types.',
            'Loot can be random.',
            'Some piggy types are described as carrying more money than others.',
          ]}
        />
      </ArticleSection>

      <ArticleSection id="collection" title="Unlocking every piggy is an official completion goal">
        <p>
          Steam’s achievement list contains <strong>Piggy Bank Collector</strong> with the objective “Unlock every piggy bank.” That makes piggy discovery a documented completion target, not just incidental variety.
        </p>
        <p>
          Track this alongside the rest of the <Link href="/achievements" className="text-foreground underline underline-offset-4">27 achievements</Link>.
        </p>
      </ArticleSection>

      <ArticleSection id="shuffle" title="Piggy Shuffle is a separate challenge">
        <p>
          The achievement <strong>Eyes on the Piggy</strong> asks players to pick the correct piggy in Piggy Shuffle. Because the most detailed workaround we found is player-created, it lives in a separate <Link href="/guides/piggy-shuffle" className="text-foreground underline underline-offset-4">Piggy Shuffle guide</Link> where community advice is clearly labeled.
        </p>
      </ArticleSection>

      <GameLongformExpansion page="piggy-banks" />
    </GameContentLayout>
  );
}

export const Route = createFileRoute('/wiki/piggy-banks')({
  head: () =>
    buildGamePageHead({
      path: '/wiki/piggy-banks',
      title: 'Bills Must Be Paid Piggy Banks - Types, Loot & Collection',
      description:
        'Verified Bills Must Be Paid piggy bank guide covering official behavior descriptions, random loot, unlocks, Piggy Bank Collector and Piggy Shuffle.',
      image: '/images/game/piggy-types-collection.jpg',
    }),
  component: PiggyBanksPage,
});
