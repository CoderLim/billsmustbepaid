import { createFileRoute } from '@tanstack/react-router';

import {
  ArticleSection,
  FactList,
  GameContentLayout,
  GameScreenshot,
  SourceNote,
} from '@/components/game-content-layout';
import { GameLongformExpansion } from '@/components/game-longform-expansion';
import { Link } from '@/core/i18n/navigation';
import { buildGamePageHead } from '@/lib/game-content-seo';

function BeginnerGuidePage() {
  return (
    <GameContentLayout
      eyebrow="Guide"
      title="Bills Must Be Paid Beginner Guide"
      description="A first-run explanation of the verified game loop: smash piggy banks for money and loot, manage stamina, pay bills, pick upgrades and build toward later cycles."
      breadcrumbs={[{ label: 'Guides', href: '/guides' }, { label: 'Beginner Guide' }]}
      imageKey="smash"
      imageAlt="Official Bills Must Be Paid screenshot showing the hammer and piggy banks"
      toc={[
        { label: 'The core loop', href: '#core-loop' },
        { label: 'Bills and perks', href: '#bills' },
        { label: 'Skill tree', href: '#skill-tree' },
        { label: 'Hammers', href: '#hammers' },
        { label: 'Bankruptcy progression', href: '#bankruptcy' },
        { label: 'Collections', href: '#collections' },
        { label: 'Beginner priorities', href: '#beginner-priorities' },
        { label: 'Reading game systems', href: '#beginner-read-systems' },
        { label: 'Next steps', href: '#beginner-next-steps' },
      ]}
      related={[
        {
          title: 'Prestige & Bankruptcy',
          description: 'Understand the cycle reset and permanent jewelry progression.',
          href: '/guides/prestige-bankruptcy',
        },
        {
          title: 'Hammers',
          description: 'See the confirmed hammer tradeoffs and balance changes.',
          href: '/wiki/hammers',
        },
        {
          title: 'Skill Tree',
          description: 'See the upgrade paths documented by Rike Games.',
          href: '/wiki/skill-tree',
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
          label: 'Steam Community — Bills Must Be Paid developer announcements',
          url: 'https://steamcommunity.com/app/4421010',
        },
      ]}
    >
      <ArticleSection id="core-loop" title="1. Learn the core loop first">
        <p>
          Rike Games describes Bills Must Be Paid as an active incremental game built around smashing piggy banks to earn money and loot. Every swing costs stamina, and a run ends when your hand is too tired to continue.
        </p>
        <FactList
          items={[
            <><strong>Smash piggy banks:</strong> this is the main way the game turns active play into money and drops.</>,
            <><strong>Watch stamina:</strong> attacks consume it, so a run has a natural stopping point.</>,
            <><strong>Use the money:</strong> bills and upgrades compete for the resources you earn.</>,
          ]}
        />
        <GameScreenshot
          imageKey="smash"
          alt="Piggy banks and hammer during a Bills Must Be Paid run"
          caption="The official Steam imagery centers the run around actively smashing piggy banks rather than passive idle income."
        />
      </ArticleSection>

      <ArticleSection id="bills" title="2. Bills are progression, not just a score target">
        <p>
          Official descriptions consistently make bills the central pressure system. Paying them moves progression forward and unlocks perks. The current full-game Steam description also says that ignoring bills leads to bankruptcy.
        </p>
        <p>
          If you are playing the browser/demo build, do not assume every full-release bankruptcy or prestige rule is present in exactly the same form. See the <Link href="/demo-vs-full-game" className="text-foreground underline underline-offset-4">demo vs full game comparison</Link> before using a full-game guide as a demo reference.
        </p>
      </ArticleSection>

      <ArticleSection id="skill-tree" title="3. The skill tree changes how runs work">
        <p>
          Rike Games explicitly lists upgrades such as grip strength, caffeine and gym-related improvements, plus more unusual nodes involving your wrist, luck, falling rocks and an electrified hammer. The point of the tree is broader than a single damage stat.
        </p>
        <GameScreenshot
          imageKey="skill_tree"
          alt="Bills Must Be Paid skill tree"
          caption="Official skill-tree screenshot. Our skill-tree page only documents branches and examples supported by first-party material."
        />
        <p>
          For a system-focused reference, open the <Link href="/wiki/skill-tree" className="text-foreground underline underline-offset-4">Skill Tree wiki page</Link>.
        </p>
      </ArticleSection>

      <ArticleSection id="hammers" title="4. Hammers are built around tradeoffs">
        <p>
          The official store description gives a concrete design example: one hammer can lean toward higher critical chance with a smaller hit radius, while another can be faster with a larger radius but lower damage. That means “best hammer” depends on the stats and situation being compared.
        </p>
        <SourceNote title="Why this guide does not name an S-tier hammer">
          <p>
            The first-party pages we use for Phase 1 do not publish a complete, versioned stat table for every hammer. We therefore document confirmed tradeoffs on the <Link href="/wiki/hammers" className="text-foreground underline underline-offset-4">Hammers page</Link> instead of inventing a ranking.
          </p>
        </SourceNote>
      </ArticleSection>

      <ArticleSection id="bankruptcy" title="5. The full game continues through bankruptcy cycles">
        <p>
          The full release added a bankruptcy/prestige loop. A June developer announcement says failing a bill causes bankruptcy and starts a new cycle, while points tied to the amount you paid toward bills can be spent on rings and bracelets for persistent hand upgrades and unique perks.
        </p>
        <p>
          The current Steam store copy uses the term <strong>legacy points</strong>, while the pre-launch developer announcement used <strong>Prestige Points</strong>. We preserve both labels rather than silently treating the wording as unchanged. The detailed breakdown is in the <Link href="/guides/prestige-bankruptcy" className="text-foreground underline underline-offset-4">Prestige & Bankruptcy guide</Link>.
        </p>
      </ArticleSection>

      <ArticleSection id="collections" title="6. Piggy banks and rare coins support completion goals">
        <p>
          Rike Games says different piggy bank types behave differently and that rare coins can be collected. Steam achievements confirm dedicated completion goals for unlocking every piggy bank and completing the coin collection.
        </p>
        <p>
          Continue with <Link href="/wiki/piggy-banks" className="text-foreground underline underline-offset-4">Piggy Banks</Link> or use the <Link href="/achievements" className="text-foreground underline underline-offset-4">Achievements checklist</Link> to see the official completion objectives.
        </p>
      </ArticleSection>

      <GameLongformExpansion page="beginner-guide" />
    </GameContentLayout>
  );
}

export const Route = createFileRoute('/guides/beginner-guide')({
  head: () =>
    buildGamePageHead({
      path: '/guides/beginner-guide',
      title: 'Bills Must Be Paid Beginner Guide - How the Game Works',
      description:
        'Beginner guide to Bills Must Be Paid: smashing piggy banks, stamina, bills, perks, skill tree, hammers and bankruptcy progression, with original sources.',
      image: '/images/game/smash-piggy-banks.jpg',
    }),
  component: BeginnerGuidePage,
});
