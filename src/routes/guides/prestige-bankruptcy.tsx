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

function PrestigeBankruptcyPage() {
  return (
    <GameContentLayout
      eyebrow="Progression Guide"
      title="Bills Must Be Paid: How Prestige & Bankruptcy Unlock Rings, Bracelets & New Cycles"
      description="See how bankruptcy becomes progression in Bills Must Be Paid, how Prestige/Legacy Points connect to paid bills, and how rings and bracelets strengthen future cycles."
      breadcrumbs={[{ label: 'Guides', href: '/guides' }, { label: 'Prestige & Bankruptcy' }]}
      imageKey="bills"
      imageAlt="Bills Must Be Paid bill payment screen"
      toc={[
        { label: 'What triggers bankruptcy', href: '#trigger' },
        { label: 'What a new cycle means', href: '#cycle' },
        { label: 'Prestige vs legacy points', href: '#points' },
        { label: 'Rings and bracelets', href: '#jewelry' },
        { label: 'Demo save warning', href: '#demo-save' },
        { label: 'Prestige loop', href: '#prestige-loop' },
        { label: 'Points and jewelry', href: '#prestige-jewelry' },
        { label: 'Version notes', href: '#prestige-version' },
      ]}
      related={[
        {
          title: 'Beginner Guide',
          description: 'See where bankruptcy fits into the wider game loop.',
          href: '/guides/beginner-guide',
        },
        {
          title: 'Demo vs Full Game',
          description: 'The full release changed progression enough that demo saves do not transfer.',
          href: '/demo-vs-full-game',
        },
        {
          title: 'Achievements',
          description: 'Fresh Start and other official objectives tied to progression.',
          href: '/achievements',
        },
      ]}
      sources={[
        {
          label: 'Steam — Bills Must Be Paid',
          url: 'https://store.steampowered.com/app/4421010/Bills_Must_Be_Paid/',
          note: 'Current full-game description uses the term “legacy points” and describes rings/bracelets after bankruptcy.',
        },
        {
          label: 'Steam Community — Bills Must Be Paid developer announcements',
          url: 'https://steamcommunity.com/app/4421010',
          note: 'June release-date announcement describes bankruptcy, new cycles and “Prestige Points”; launch announcement explains why demo saves do not transfer.',
        },
        {
          label: 'Steam Community — official achievements',
          url: 'https://steamcommunity.com/stats/4421010/achievements/',
          note: '“Fresh Start” explicitly requires declaring bankruptcy and starting a new cycle.',
        },
        {
          label: 'Whisper of the House — Bills Must Be Paid Guide',
          url: 'https://www.whisperofthehouse.com/bills-must-be-paid',
          note: 'Community-recorded launch-version example: five bills totaling $2,015 produced 40 Legacy Points. This is presented as version-specific community evidence, not an official fixed conversion formula.',
        },
      ]}
    >
      <ArticleSection id="trigger" title="What triggers bankruptcy?">
        <p>
          In the full game, official Steam material says that failing or ignoring a bill results in bankruptcy. This is not merely a game-over label: the developer’s pre-launch explanation ties it directly to the next progression cycle and to the persistent upgrades you buy afterward.
        </p>
        <GameScreenshot
          imageKey="bills"
          alt="A bill screen in Bills Must Be Paid"
          caption="Bills are the pressure point that connects each run to the larger progression loop."
        />
      </ArticleSection>

      <ArticleSection id="cycle" title="Bankruptcy starts a new cycle">
        <p>
          The clearest first-party confirmation is reinforced by Steam’s <strong>Fresh Start</strong> achievement: “Declare bankruptcy and start a new cycle.” That wording establishes the reset/cycle relationship without requiring us to infer it from player behavior.
        </p>
      </ArticleSection>

      <ArticleSection id="points" title="Prestige Points vs legacy points">
        <p>
          Pay more before bankruptcy and the progression reward grows. Rike Games’ June pre-launch announcement says Prestige Points are based on the total amount paid toward bills, with more paid producing more points. A launch-version community run documented by Whisper of the House paid five bills totaling <strong>$2,015</strong> and received <strong>40 Legacy Points</strong> at bankruptcy.
        </p>
        <SourceNote title="The $2,015 → 40 points example is community evidence">
          <p>
            The $2,015 figure is useful as a concrete launch-version example, but it is not an official universal formula. Rike Games confirms the relationship between paid bills and post-bankruptcy points, while community sources differ on the exact calculation shown by specific builds. Treat the number as version-specific evidence rather than a guaranteed conversion for every patch.
          </p>
        </SourceNote>
        <SourceNote title="Terminology changed in official material">
          <p>
            Rike Games’ June announcement uses <strong>Prestige Points</strong>, while the current Steam store description calls the post-bankruptcy currency <strong>legacy points</strong>. Functionally, both descriptions connect bill-paying, bankruptcy and jewelry-based persistent progression.
          </p>
        </SourceNote>
      </ArticleSection>

      <ArticleSection id="jewelry" title="What are the points spent on?">
        <p>
          Both official descriptions connect the post-bankruptcy resource to <strong>rings and bracelets</strong>. The developer announcement says these jewelry items upgrade your hand and can provide unique perks.
        </p>
        <FactList
          items={[
            'Paying more toward bills before bankruptcy is explicitly tied to earning more progression points in the June announcement.',
            'Rings and bracelets are the documented persistent-progression destination for those points.',
            'The official achievements include “Prestige Jewelry — Unlock all rings and bracelets,” confirming jewelry is a completion system as well as progression.',
          ]}
        />
      </ArticleSection>

      <ArticleSection id="demo-save" title="The demo save does not transfer to the full game">
        <p>
          On launch day, Rike Games said demo saves cannot be carried into the full game because the full release changes prestige/bankruptcy, some skill-tree nodes, balance and under-the-hood systems. If you are moving from the browser or Steam demo, treat the full release as a fresh progression start.
        </p>
        <p>
          See <Link href="/demo-vs-full-game" className="text-foreground underline underline-offset-4">Demo vs Full Game</Link> for the complete first-party comparison we can verify.
        </p>
      </ArticleSection>

      <GameLongformExpansion page="prestige-bankruptcy" />
    </GameContentLayout>
  );
}

export const Route = createFileRoute('/guides/prestige-bankruptcy')({
  head: () =>
    buildGamePageHead({
      path: '/guides/prestige-bankruptcy',
      title: 'Bills Must Be Paid Game: Bankruptcy, Rings & Legacy Points',
      description:
        'Bills Must Be Paid: bankruptcy unlocks rings and bracelets. Sources tie Legacy Points to paid bills; one community run reports $2,015 paid → 40 points.',
      image: '/images/game/pay-bill-rent.jpg',
    }),
  component: PrestigeBankruptcyPage,
});
