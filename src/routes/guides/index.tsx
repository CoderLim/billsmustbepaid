import { createFileRoute } from '@tanstack/react-router';

import { buildGamePageHead } from '@/lib/game-content-seo';
import {
  ArticleSection,
  ContentCardGrid,
  FactList,
  GameContentLayout,
} from '@/components/game-content-layout';
import { GameLongformExpansion } from '@/components/game-longform-expansion';

const sources = [
  {
    label: 'Rike Games — Bills Must Be Paid press kit',
    url: 'https://rikegames.com/press/bills-must-be-paid/',
    note: 'First-party overview of the core loop, skill tree, piggy banks, hammers and rare coins.',
  },
  {
    label: 'Steam — Bills Must Be Paid',
    url: 'https://store.steampowered.com/app/4421010/Bills_Must_Be_Paid/',
    note: 'Current full-game description, release information and feature list.',
  },
  {
    label: 'Steam Community — Bills Must Be Paid',
    url: 'https://steamcommunity.com/app/4421010',
    note: 'Developer announcements for launch, bankruptcy/prestige changes and demo-to-full-game differences.',
  },
];

function GuidesPage() {
  return (
    <GameContentLayout
      eyebrow="Guides"
      title="Bills Must Be Paid Guides"
      description="Source-checked guides for learning the core loop, understanding bankruptcy and progression, and solving specific challenges without inventing hidden rules."
      breadcrumbs={[{ label: 'Guides' }]}
      imageKey="smash"
      imageAlt="Bills Must Be Paid gameplay with piggy banks ready to be smashed"
      toc={[
        { label: 'Start here', href: '#start-here' },
        { label: 'Progression guides', href: '#progression' },
        { label: 'Challenge guides', href: '#challenges' },
        { label: 'How we verify guides', href: '#verification' },
        { label: 'How to use these guides', href: '#guide-roadmap' },
        { label: 'Version context', href: '#guide-version-context' },
        { label: 'Guide evidence', href: '#guide-evidence' },
      ]}
      related={[
        {
          title: 'Bills Must Be Paid Wiki',
          description:
            'Reference pages for piggy banks, hammers and the skill tree.',
          href: '/wiki',
        },
        {
          title: 'Achievements',
          description:
            'All 27 official Steam achievements and their objectives.',
          href: '/achievements',
        },
        {
          title: 'Demo vs Full Game',
          description:
            'What changed between the free demo and the July 29 full release.',
          href: '/demo-vs-full-game',
        },
      ]}
      sources={sources}
    >
      <ArticleSection id="start-here" title="Start here">
        <p>
          If you are new to the game, begin with the core-loop guide before
          jumping into individual systems.
        </p>
        <ContentCardGrid
          items={[
            {
              title: 'Beginner Guide',
              description:
                'How smashing, stamina, bills, perks, hammers and upgrades fit together.',
              href: '/guides/beginner-guide',
            },
            {
              title: 'Demo vs Full Game',
              description:
                'Know which mechanics belong to the free demo and which were added or changed for the full release.',
              href: '/demo-vs-full-game',
            },
          ]}
        />
      </ArticleSection>

      <ArticleSection id="progression" title="Progression guides">
        <ContentCardGrid
          items={[
            {
              title: 'Prestige & Bankruptcy',
              description:
                'What bankruptcy does, how a new cycle begins, and what official materials say about Prestige/legacy points.',
              href: '/guides/prestige-bankruptcy',
            },
            {
              title: 'Skill Tree',
              description:
                'A verified overview of the upgrade paths and examples shown by Rike Games.',
              href: '/wiki/skill-tree',
            },
            {
              title: 'Hammers',
              description:
                'The officially documented hammer tradeoffs and confirmed balance changes.',
              href: '/wiki/hammers',
            },
          ]}
        />
      </ArticleSection>

      <ArticleSection id="challenges" title="Challenge guides">
        <ContentCardGrid
          items={[
            {
              title: 'Piggy Shuffle Guide',
              description:
                'The official Eyes on the Piggy objective plus a clearly labeled community workaround.',
              href: '/guides/piggy-shuffle',
            },
            {
              title: 'Double or Nothing',
              description:
                'The coin flip, 50/50 and All or Nothing achievements, plus what is and is not verified about odds or aim.',
              href: '/guides/double-or-nothing',
            },
            {
              title: 'Bills Must Be Paid Coins',
              description:
                'Rare coins, Coin Collector and a source-checked answer to the Coin Rain search term.',
              href: '/wiki/coins',
            },
            {
              title: 'Achievements',
              description:
                'Use the official objective list as the checklist for 100% completion.',
              href: '/achievements',
            },
          ]}
        />
      </ArticleSection>

      <ArticleSection id="verification" title="How we verify guides">
        <FactList
          items={[
            'First-party Rike Games and Steam material is preferred for mechanics and release facts.',
            'Steam Community developer announcements are used when they document changes that are not fully described on the store page.',
            'Player-created tips are labeled as community advice instead of being presented as official mechanics.',
            'We do not publish exact tier rankings when the available sources do not support them.',
          ]}
        />
      </ArticleSection>

      <GameLongformExpansion page="guides" />
    </GameContentLayout>
  );
}

export const Route = createFileRoute('/guides/')({
  head: () =>
    buildGamePageHead({
      path: '/guides',
      title:
        'Bills Must Be Paid Guides — Piggy Shuffle, Skill Tree, Prestige & More',
      description:
        'Bills Must Be Paid guides: Piggy Shuffle, skill tree, prestige & bankruptcy, Double or Nothing, and beginner tips — all source-checked with official links.',
      image: '/images/game/smash-piggy-banks.jpg',
    }),
  component: GuidesPage,
});
