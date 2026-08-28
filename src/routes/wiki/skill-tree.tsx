import { createFileRoute } from '@tanstack/react-router';

import { Link } from '@/core/i18n/navigation';
import { buildGamePageHead } from '@/lib/game-content-seo';
import {
  ArticleSection,
  FactList,
  GameContentLayout,
  GameScreenshot,
  SourceNote,
} from '@/components/game-content-layout';
import { GameLongformExpansion } from '@/components/game-longform-expansion';

function SkillTreePage() {
  return (
    <GameContentLayout
      eyebrow="Wiki"
      title="Bills Must Be Paid Skill Tree"
      description="A verified overview of the upgrade directions and named examples Rike Games shows for the Bills Must Be Paid skill tree."
      breadcrumbs={[{ label: 'Wiki', href: '/wiki' }, { label: 'Skill Tree' }]}
      imageKey="skill_tree"
      imageAlt="Bills Must Be Paid skill tree interface"
      toc={[
        { label: 'What the skill tree does', href: '#purpose' },
        { label: 'Confirmed upgrade examples', href: '#examples' },
        { label: 'Full-game changes', href: '#changes' },
        { label: 'Tier-list limits', href: '#ranking' },
        { label: 'Progression role', href: '#skill-purpose-expanded' },
        { label: 'Version differences', href: '#skill-versioning-expanded' },
        { label: 'How to read advice', href: '#skill-build-reading' },
      ]}
      related={[
        {
          title: 'Beginner Guide',
          description:
            'See how skill-tree spending fits alongside bills, stamina and hammers.',
          href: '/guides/beginner-guide',
        },
        {
          title: 'Hammers',
          description:
            'Compare the equipment tradeoffs documented by Rike Games.',
          href: '/wiki/hammers',
        },
        {
          title: 'Tier Lists',
          description: 'Our current evidence standard for upgrade rankings.',
          href: '/tier-lists',
        },
      ]}
      sources={[
        {
          label: 'Rike Games — Bills Must Be Paid press kit',
          url: 'https://rikegames.com/press/bills-must-be-paid/',
          note: 'Names several upgrade themes and examples from the skill tree.',
        },
        {
          label: 'Steam — Bills Must Be Paid',
          url: 'https://store.steampowered.com/app/4421010/Bills_Must_Be_Paid/',
          note: 'Current full-game description confirms the skill-tree system.',
        },
        {
          label: 'Steam Community — developer announcements',
          url: 'https://steamcommunity.com/app/4421010',
          note: 'Launch announcement says some skill-tree nodes changed between demo and full game.',
        },
      ]}
    >
      <ArticleSection id="purpose" title="What the skill tree does">
        <p>
          The skill tree is a progression system for changing your hand and run
          performance. Rike Games describes both straightforward physical
          upgrades and more unusual effects, so the tree should not be reduced
          to a single “damage path.”
        </p>
        <GameScreenshot
          imageKey="skill_tree"
          alt="Official Bills Must Be Paid skill tree"
          caption="The official skill-tree screenshot is used as the visual reference for this page."
        />
      </ArticleSection>

      <ArticleSection id="examples" title="Confirmed upgrade examples">
        <p>First-party material explicitly mentions examples including:</p>
        <FactList
          items={[
            'Grip-strength improvements.',
            'Caffeine-related upgrades.',
            'Gym-related upgrades.',
            'Upgrades involving your wrist and luck.',
            'More unusual effects such as rocks falling from the sky and an electrified hammer.',
          ]}
        />
        <p>
          These are examples from the developer’s own description. This Phase 1
          page does not invent a complete node list or numerical values that are
          not present in the cited material.
        </p>
      </ArticleSection>

      <ArticleSection
        id="changes"
        title="The full game changed some demo skill-tree nodes"
      >
        <p>
          Rike Games’ launch announcement explicitly says the full game changed
          some upgrade nodes, along with balance and underlying mechanics. This
          is one of the reasons the developer gave for demo saves not
          transferring to the full release.
        </p>
        <p>
          If you are comparing builds from the browser demo with Steam guides,
          first read{' '}
          <Link
            href="/demo-vs-full-game"
            className="text-foreground underline underline-offset-4"
          >
            Demo vs Full Game
          </Link>
          .
        </p>
      </ArticleSection>

      <ArticleSection id="ranking" title="Why we do not rank every node yet">
        <SourceNote title="A tier list needs versioned evidence">
          <p>
            A useful skill tier list requires the full current node set, exact
            effects and enough context to compare opportunity cost. The
            first-party public pages used here do not provide that complete
            dataset, so Phase 1 stops at verified descriptions.
          </p>
        </SourceNote>
      </ArticleSection>

      <GameLongformExpansion page="skill-tree" />
    </GameContentLayout>
  );
}

export const Route = createFileRoute('/wiki/skill-tree')({
  head: () =>
    buildGamePageHead({
      path: '/wiki/skill-tree',
      title: 'Bills Must Be Paid Skill Tree — Upgrades, Nodes & Guide',
      description:
        'Bills Must Be Paid skill tree guide: verified upgrade paths, full-game changes, and what we know about grip, caffeine, gym, luck & special nodes.',
      image: '/images/game/skill-tree.jpg',
    }),
  component: SkillTreePage,
});
