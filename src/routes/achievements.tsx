import { createFileRoute } from '@tanstack/react-router';

import {
  ArticleSection,
  FactList,
  GameContentLayout,
} from '@/components/game-content-layout';
import { GameLongformExpansion } from '@/components/game-longform-expansion';
import { Link } from '@/core/i18n/navigation';
import { buildGamePageHead } from '@/lib/game-content-seo';

const progression = [
  ['Bills Must Be Paid', 'Pay your first bill'],
  ['One Step at a Time', 'Pay 5 bills'],
  ['Making Progress', 'Pay 10 bills'],
  ['Keeping Up', 'Pay 20 bills'],
  ['Fresh Start', 'Declare bankruptcy and start a new cycle'],
  ['Freedom', 'Pay all your bills'],
] as const;

const smashing = [
  ['Rookie Smasher', 'Smash 10 piggies'],
  ['Serial Smasher', 'Smash 100 piggies'],
  ['Not a Single Miss', 'Complete a run with 100% accuracy'],
  ['Twice as Precise', 'Maintain 100% accuracy across 2 consecutive runs'],
  ['Strong Start', 'Destroy 2 piggies with your first hit of a run'],
  ['Multismasher', 'Destroy 3 piggies at once'],
  ['Eyes on the Piggy', 'Pick the correct piggy in Piggy Shuffle'],
] as const;

const moneyAndRisk = [
  ['Better than Nothing', 'Earn $100 in a single run'],
  ['High Roller', 'Earn $1000 in a single run'],
  ['Five Figures', 'Earn $10000 in a single run'],
  ['The Richest Broke Person', 'Own $1000000 at once'],
  ['50/50', 'Win a coinflip'],
  ['All or Nothing', 'Go all in on a gamble'],
  ['Super Jackpot', 'Hit the Super Jackpot once'],
  ['Take a Loan', 'Call Big Toni and take a loan'],
  ['Pay Back a Loan', 'Pay Big Toni his money back'],
] as const;

const completion = [
  ['Piggy Bank Collector', 'Unlock every piggy bank'],
  ['Coin Collector', 'Complete the full coin collection'],
  ['Bought It All', 'Buy every item in the shop'],
  ['Prestige Jewelry', 'Unlock all rings and bracelets'],
  ['Maxed Out', 'Buy all skill tree upgrades'],
] as const;

function AchievementList({ items }: { items: readonly (readonly [string, string])[] }) {
  return (
    <div className="border-border divide-border overflow-hidden rounded-xl border">
      {items.map(([name, objective]) => (
        <div key={name} className="divide-border grid gap-1 border-b p-4 last:border-b-0 sm:grid-cols-[220px_1fr] sm:gap-5">
          <strong>{name}</strong>
          <span>{objective}</span>
        </div>
      ))}
    </div>
  );
}

function AchievementsPage() {
  return (
    <GameContentLayout
      eyebrow="Completion Guide"
      title="Bills Must Be Paid Achievements: All 27 Steam Achievements"
      description="All 27 official Steam achievements in one checklist, with direct guide links for Eyes on the Piggy, Fresh Start, Piggy Bank Collector and other completion goals."
      breadcrumbs={[{ label: 'Achievements' }]}
      imageKey="coins"
      imageAlt="Bills Must Be Paid rare coin collection screen"
      toc={[
        { label: 'Progression', href: '#progression' },
        { label: 'Smashing and accuracy', href: '#smashing' },
        { label: 'Money, gambling and loans', href: '#money-risk' },
        { label: 'Collection and completion', href: '#completion' },
        { label: 'Guide links', href: '#guides' },
        { label: 'Achievement structure', href: '#achievement-overview' },
        { label: 'Completion roadmap', href: '#achievement-completion' },
        { label: 'Verification', href: '#achievement-verification' },
      ]}
      related={[
        {
          title: 'Eyes on the Piggy / Piggy Shuffle Guide',
          description: 'Focused help for the Piggy Shuffle achievement, including a clearly labeled community slow-motion method.',
          href: '/guides/piggy-shuffle',
        },
        {
          title: 'Prestige & Bankruptcy',
          description: 'Background for Fresh Start and Prestige Jewelry.',
          href: '/guides/prestige-bankruptcy',
        },
        {
          title: 'Piggy Banks',
          description: 'Background for Piggy Bank Collector.',
          href: '/wiki/piggy-banks',
        },
      ]}
      sources={[
        {
          label: 'Steam Community — Bills Must Be Paid global achievements',
          url: 'https://steamcommunity.com/stats/4421010/achievements/',
          note: 'Primary source for all 27 names and objective text. Percentages are intentionally omitted because they change over time.',
        },
        {
          label: 'Steam — Bills Must Be Paid',
          url: 'https://store.steampowered.com/app/4421010/Bills_Must_Be_Paid/',
          note: 'Confirms Steam Achievements as a supported feature.',
        },
      ]}
    >
      <ArticleSection id="progression" title="Progression and bills">
        <AchievementList items={progression} />
      </ArticleSection>

      <ArticleSection id="smashing" title="Smashing, accuracy and Piggy Shuffle">
        <AchievementList items={smashing} />
      </ArticleSection>

      <ArticleSection id="money-risk" title="Money, gambling and Big Toni">
        <AchievementList items={moneyAndRisk} />
      </ArticleSection>

      <ArticleSection id="completion" title="Collection and 100% completion">
        <AchievementList items={completion} />
      </ArticleSection>

      <ArticleSection id="guides" title="Use the objectives as guide entry points">
        <FactList
          items={[
            <><Link href="/guides/piggy-shuffle" className="text-foreground font-semibold underline underline-offset-4">Bills Must Be Paid Piggy Shuffle guide for Eyes on the Piggy</Link> explains the verified objective and the labeled community slow-motion method.</>,
            <><Link href="/guides/prestige-bankruptcy" className="text-foreground underline underline-offset-4">Fresh Start</Link> is directly tied to declaring bankruptcy and beginning a new cycle.</>,
            <><Link href="/wiki/piggy-banks" className="text-foreground underline underline-offset-4">Piggy Bank Collector</Link> confirms that unlocking every piggy is a formal completion goal.</>,
            <><Link href="/wiki/skill-tree" className="text-foreground underline underline-offset-4">Maxed Out</Link> confirms that buying every skill-tree upgrade is part of 100% completion.</>,
          ]}
        />
      </ArticleSection>

      <GameLongformExpansion page="achievements" />
    </GameContentLayout>
  );
}

export const Route = createFileRoute('/achievements')({
  head: () =>
    buildGamePageHead({
      path: '/achievements',
      title: 'Bills Must Be Paid Achievements - All 27 Steam Achievements',
      description:
        'Bills Must Be Paid achievements guide with all 27 Steam achievements, official objectives, and help for Eyes on the Piggy, Fresh Start, Freedom and Maxed Out.',
      image: '/images/game/rare-coins-collection.jpg',
    }),
  component: AchievementsPage,
});
