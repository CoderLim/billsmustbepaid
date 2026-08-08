import { createFileRoute } from '@tanstack/react-router';

import {
  ArticleSection,
  ContentCardGrid,
  FactList,
  GameContentLayout,
  SourceNote,
} from '@/components/game-content-layout';
import { GameLongformExpansion } from '@/components/game-longform-expansion';
import { Link } from '@/core/i18n/navigation';
import { buildGamePageHead } from '@/lib/game-content-seo';

function TierListsPage() {
  return (
    <GameContentLayout
      eyebrow="Tier Lists"
      title="Bills Must Be Paid Tier Lists"
      description="A deliberately evidence-first tier-list hub. Phase 1 documents the comparison criteria we can verify and avoids made-up S/A/B placements."
      breadcrumbs={[{ label: 'Tier Lists' }]}
      imageKey="hammers"
      imageAlt="Bills Must Be Paid hammer selection screen"
      toc={[
        { label: 'Current status', href: '#status' },
        { label: 'Hammer ranking evidence', href: '#hammers' },
        { label: 'Skill ranking evidence', href: '#skills' },
        { label: 'What a future tier list needs', href: '#requirements' },
        { label: 'Ranking method', href: '#tier-method' },
        { label: 'Ranking criteria', href: '#tier-criteria' },
        { label: 'Why rankings are incomplete', href: '#tier-search-intent' },
      ]}
      related={[
        {
          title: 'Hammers',
          description: 'The verified equipment tradeoffs and named patch changes.',
          href: '/wiki/hammers',
        },
        {
          title: 'Skill Tree',
          description: 'Verified upgrade examples and full-game change notes.',
          href: '/wiki/skill-tree',
        },
        {
          title: 'Beginner Guide',
          description: 'Understand the systems before optimizing them.',
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
          label: 'Steam Community — developer announcements',
          url: 'https://steamcommunity.com/app/4421010',
          note: 'Shows that balance changes can alter hammer performance over time.',
        },
      ]}
    >
      <ArticleSection id="status" title="Current status: no unsupported S/A/B rankings">
        <SourceNote title="Why this page exists without a finished ranking">
          <p>
            Search demand for a tier list does not justify inventing one. The first-party material we reviewed explains important tradeoffs and selected balance changes, but it does not provide a complete current stat dataset for every hammer or skill node.
          </p>
        </SourceNote>
        <p>
          This page therefore acts as a transparent hub until a ranking can be tied to a reproducible version and evidence set.
        </p>
      </ArticleSection>

      <ArticleSection id="hammers" title="What can be verified for a hammer tier list">
        <p>
          Official descriptions explicitly compare hammers through <strong>critical chance, hit radius, speed and damage</strong>. Rike Games also documented balance changes to the Ultracrit-Hammer and Toy-Hammer in Demo Bug Fix v0.2.7.
        </p>
        <p>
          Those facts belong on the <Link href="/wiki/hammers" className="text-foreground underline underline-offset-4">Hammers wiki page</Link>, but they are not enough on their own to rank every hammer from S to F.
        </p>
      </ArticleSection>

      <ArticleSection id="skills" title="What can be verified for a skill tier list">
        <p>
          Rike Games names several upgrade themes and examples, but the launch announcement also says some skill-tree nodes changed between the demo and full game. A tier list copied from an older build could therefore be wrong even if it was once accurate.
        </p>
        <ContentCardGrid
          items={[
            {
              title: 'Skill Tree reference',
              description: 'See the upgrade examples and version caveat we can currently source.',
              href: '/wiki/skill-tree',
            },
          ]}
        />
      </ArticleSection>

      <ArticleSection id="requirements" title="What a publishable tier list needs">
        <FactList
          items={[
            'A clearly identified game version.',
            'A complete list of current items or nodes being ranked.',
            'Verified numerical effects or repeatable in-game tests.',
            'Explicit ranking criteria such as damage efficiency, radius, speed or progression value.',
            'A changelog note when balance patches invalidate previous placements.',
          ]}
        />
      </ArticleSection>

      <GameLongformExpansion page="tier-lists" />
    </GameContentLayout>
  );
}

export const Route = createFileRoute('/tier-lists')({
  head: () =>
    buildGamePageHead({
      path: '/tier-lists',
      title: 'Bills Must Be Paid Tier Lists - Hammers & Skills',
      description:
        'Evidence-first Bills Must Be Paid tier-list hub for hammers and skills, with verified comparison criteria and no fabricated rankings.',
      image: '/images/game/hammer-shop.jpg',
    }),
  component: TierListsPage,
});
