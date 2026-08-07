import { createFileRoute } from '@tanstack/react-router';

import {
  ArticleSection,
  FactList,
  GameContentLayout,
  SourceNote,
} from '@/components/game-content-layout';
import { Link } from '@/core/i18n/navigation';
import { buildGamePageHead } from '@/lib/game-content-seo';

function DemoVsFullGamePage() {
  return (
    <GameContentLayout
      eyebrow="Versions"
      title="Bills Must Be Paid Demo vs Full Game"
      description="The verified differences between the free demo/browser experience and the Steam full release, including dates, save compatibility and systems added or changed for launch."
      breadcrumbs={[{ label: 'Demo vs Full Game' }]}
      imageKey="header"
      imageAlt="Bills Must Be Paid official game header art"
      toc={[
        { label: 'Release dates', href: '#dates' },
        { label: 'Save compatibility', href: '#saves' },
        { label: 'Full-game additions', href: '#additions' },
        { label: 'Browser and Steam demo', href: '#browser' },
      ]}
      related={[
        {
          title: 'Beginner Guide',
          description: 'Learn the shared core loop before diving into full-release progression.',
          href: '/guides/beginner-guide',
        },
        {
          title: 'Prestige & Bankruptcy',
          description: 'The major full-game progression system described before launch.',
          href: '/guides/prestige-bankruptcy',
        },
        {
          title: 'Skill Tree',
          description: 'Some upgrade nodes changed between demo and full release.',
          href: '/wiki/skill-tree',
        },
      ]}
      sources={[
        {
          label: 'Steam — Bills Must Be Paid Demo',
          url: 'https://store.steampowered.com/app/4577620/Bills_Must_Be_Paid_Demo/',
          note: 'Official Steam demo page; release date April 21, 2026.',
        },
        {
          label: 'Steam — Bills Must Be Paid',
          url: 'https://store.steampowered.com/app/4421010/Bills_Must_Be_Paid/',
          note: 'Full-game page; release date July 29, 2026.',
        },
        {
          label: 'Steam Community — Bills Must Be Paid developer announcements',
          url: 'https://steamcommunity.com/app/4421010',
          note: 'June and launch-day posts describe full-game additions and explain that demo saves do not transfer.',
        },
        {
          label: 'Rike Games — Bills Must Be Paid press kit',
          url: 'https://rikegames.com/press/bills-must-be-paid/',
          note: 'Links the free itch.io/browser demo and the Steam release.',
        },
        {
          label: 'Rike Games on itch.io — Bills Must Be Paid',
          url: 'https://rikegames.itch.io/bills-must-be-paid',
          note: 'First-party browser demo page.',
        },
      ]}
    >
      <ArticleSection id="dates" title="Release dates">
        <FactList
          items={[
            <><strong>Steam demo:</strong> April 21, 2026.</>,
            <><strong>Full game:</strong> July 29, 2026.</>,
          ]}
        />
        <p>
          Rike Games also distributes a free browser-playable demo through its itch.io page, which is the same game project rather than an unrelated namesake.
        </p>
      </ArticleSection>

      <ArticleSection id="saves" title="Demo saves do not transfer to the full game">
        <p>
          Rike Games stated this directly on launch day. The reason given was not just a technical limitation: the full release changes prestige/bankruptcy, some upgrade nodes, balance and under-the-hood systems.
        </p>
        <SourceNote title="Plan on a fresh start">
          <p>
            If you have substantial progress in the browser or Steam demo, do not expect that save to become full-game progression. The developer explicitly says it will not transfer.
          </p>
        </SourceNote>
      </ArticleSection>

      <ArticleSection id="additions" title="What the developer announced for the full game">
        <p>
          In the June release-date announcement, Rike Games highlighted several launch features beyond the demo:
        </p>
        <FactList
          items={[
            'Prestige/bankruptcy progression with points tied to bill payments.',
            'Rings and bracelets for persistent hand upgrades and unique perks.',
            'A new shop with desk gadgets.',
            'More piggy types, perks and hammers.',
            'An ending.',
            'More gambling and risk mechanics.',
          ]}
        />
        <p>
          The announcement presents these as launch highlights rather than a mathematically exhaustive list, so this page does not claim that every difference is captured here.
        </p>
      </ArticleSection>

      <ArticleSection id="browser" title="Browser demo vs Steam demo">
        <p>
          The Rike Games press kit points to itch.io as a free demo / browser-play option and to Steam for the PC release. The Steam demo is a separate Steam app, while the itch.io version runs in the browser.
        </p>
        <p>
          For mechanics that are shared across builds, start with the <Link href="/guides/beginner-guide" className="text-foreground underline underline-offset-4">Beginner Guide</Link>. For full-release-specific progression, use the <Link href="/guides/prestige-bankruptcy" className="text-foreground underline underline-offset-4">Prestige & Bankruptcy guide</Link>.
        </p>
      </ArticleSection>
    </GameContentLayout>
  );
}

export const Route = createFileRoute('/demo-vs-full-game')({
  head: () =>
    buildGamePageHead({
      path: '/demo-vs-full-game',
      title: 'Bills Must Be Paid Demo vs Full Game - What Changed?',
      description:
        'Bills Must Be Paid demo vs full game: official release dates, save compatibility, prestige, bankruptcy, shop, piggies, hammers and launch additions.',
      image: '/images/game/bills-must-be-paid-header.jpg',
    }),
  component: DemoVsFullGamePage,
});
