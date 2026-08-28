import { createFileRoute } from '@tanstack/react-router';

import { buildGamePageHead } from '@/lib/game-content-seo';
import {
  ArticleSection,
  ContentCardGrid,
  FactList,
  GameContentLayout,
} from '@/components/game-content-layout';
import { GameLongformExpansion } from '@/components/game-longform-expansion';

function WikiPage() {
  return (
    <GameContentLayout
      eyebrow="Wiki"
      title="Bills Must Be Paid Wiki"
      description="A source-checked reference for the game’s systems, piggy banks, hammers, skill tree, achievements and full-release progression."
      breadcrumbs={[{ label: 'Wiki' }]}
      imageKey="piggies"
      imageAlt="Official Bills Must Be Paid piggy bank collection screenshot"
      toc={[
        { label: 'Gameplay systems', href: '#gameplay' },
        { label: 'Equipment and upgrades', href: '#equipment' },
        { label: 'Collections and completion', href: '#completion' },
        { label: 'Evidence policy', href: '#evidence' },
        { label: 'What this wiki covers', href: '#wiki-scope' },
        { label: 'Versioning', href: '#wiki-versioning' },
        { label: 'Research policy', href: '#wiki-research' },
      ]}
      related={[
        {
          title: 'Guides',
          description:
            'Problem-solving pages for beginners, progression and challenges.',
          href: '/guides',
        },
        {
          title: 'Tier Lists',
          description:
            'What can and cannot be ranked from the evidence currently available.',
          href: '/tier-lists',
        },
        {
          title: 'Demo vs Full Game',
          description: 'Separate demo mechanics from the July 29 full release.',
          href: '/demo-vs-full-game',
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
          label: 'Steam Community — Bills Must Be Paid',
          url: 'https://steamcommunity.com/app/4421010',
        },
        {
          label: 'Steam Community — official achievements',
          url: 'https://steamcommunity.com/stats/4421010/achievements/',
        },
      ]}
    >
      <ArticleSection id="gameplay" title="Gameplay systems">
        <ContentCardGrid
          items={[
            {
              title: 'Beginner Guide',
              description:
                'The complete relationship between smashing, stamina, bills, perks and progression.',
              href: '/guides/beginner-guide',
            },
            {
              title: 'Prestige & Bankruptcy',
              description:
                'Failing bills, new cycles, progression points and jewelry.',
              href: '/guides/prestige-bankruptcy',
            },
            {
              title: 'Piggy Banks',
              description:
                'Verified facts about piggy behavior, random loot and collection goals.',
              href: '/wiki/piggy-banks',
            },
          ]}
        />
      </ArticleSection>

      <ArticleSection id="equipment" title="Equipment and upgrades">
        <ContentCardGrid
          items={[
            {
              title: 'Hammers',
              description:
                'Official tradeoff dimensions plus confirmed balance changes to named hammers.',
              href: '/wiki/hammers',
            },
            {
              title: 'Skill Tree',
              description:
                'What the official press kit and screenshots reveal about upgrade directions.',
              href: '/wiki/skill-tree',
            },
            {
              title: 'Tier Lists',
              description:
                'Why Phase 1 avoids unsupported S/A/B rankings and what evidence is still needed.',
              href: '/tier-lists',
            },
          ]}
        />
      </ArticleSection>

      <ArticleSection id="completion" title="Collections and completion">
        <ContentCardGrid
          items={[
            {
              title: 'Bills Must Be Paid Coins',
              description:
                'Rare coins, Coin Collector and what first-party sources do or do not say about Coin Rain.',
              href: '/wiki/coins',
            },
            {
              title: 'Achievements',
              description:
                'All 27 official Steam achievements, grouped by goal type.',
              href: '/achievements',
            },
            {
              title: 'Piggy Shuffle',
              description:
                'The Eyes on the Piggy objective and a labeled community workaround.',
              href: '/guides/piggy-shuffle',
            },
            {
              title: 'Double or Nothing',
              description:
                'The coin flip, 50/50 and All or Nothing achievement requirements.',
              href: '/guides/double-or-nothing',
            },
          ]}
        />
      </ArticleSection>

      <ArticleSection id="evidence" title="Evidence policy">
        <FactList
          items={[
            'First-party Rike Games, Steam store and developer announcements take priority.',
            'Official screenshots are used as page illustrations; they are kept separate from inferred numerical claims.',
            'Steam Community player tips are explicitly labeled as community material.',
            'When two official sources use different terminology, both are shown instead of silently choosing one.',
          ]}
        />
      </ArticleSection>

      <GameLongformExpansion page="wiki" />
    </GameContentLayout>
  );
}

export const Route = createFileRoute('/wiki/')({
  head: () =>
    buildGamePageHead({
      path: '/wiki',
      title:
        'Bills Must Be Paid Wiki — Piggy Banks, Skill Tree, Hammers & More',
      description:
        'Bills Must Be Paid wiki: piggy banks, skill tree, hammers, achievements & bankruptcy — source-checked reference pages with official links.',
      image: '/images/game/piggy-types-collection.jpg',
    }),
  component: WikiPage,
});
