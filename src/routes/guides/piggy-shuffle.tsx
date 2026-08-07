import { createFileRoute } from '@tanstack/react-router';

import {
  ArticleSection,
  FactList,
  GameContentLayout,
  SourceNote,
} from '@/components/game-content-layout';
import { Link } from '@/core/i18n/navigation';
import { buildGamePageHead } from '@/lib/game-content-seo';

function PiggyShufflePage() {
  return (
    <GameContentLayout
      eyebrow="Challenge Guide"
      title="Bills Must Be Paid Piggy Shuffle Guide"
      description="The verified Piggy Shuffle objective plus a clearly labeled Steam Community workaround for tracking the correct piggy."
      breadcrumbs={[{ label: 'Guides', href: '/guides' }, { label: 'Piggy Shuffle' }]}
      imageKey="piggies"
      imageAlt="Bills Must Be Paid piggy bank collection screen"
      toc={[
        { label: 'What the challenge requires', href: '#objective' },
        { label: 'Community slow-motion method', href: '#community-method' },
        { label: 'What is not verified', href: '#not-verified' },
      ]}
      related={[
        {
          title: 'Piggy Banks',
          description: 'What official sources say about piggy types, behavior and collection.',
          href: '/wiki/piggy-banks',
        },
        {
          title: 'Achievements',
          description: 'See Eyes on the Piggy in the complete official achievement list.',
          href: '/achievements',
        },
        {
          title: 'Beginner Guide',
          description: 'Return to the main game loop and progression systems.',
          href: '/guides/beginner-guide',
        },
      ]}
      sources={[
        {
          label: 'Steam Community — official achievements',
          url: 'https://steamcommunity.com/stats/4421010/achievements/',
          note: 'Confirms the “Eyes on the Piggy” objective: pick the correct piggy in Piggy Shuffle.',
        },
        {
          label: 'Steam Community Guide — “HOW to get the Right pig 100% everytime” by Luca',
          url: 'https://steamcommunity.com/sharedfiles/filedetails/?id=3774109835',
          note: 'Player-created workaround using a phone recording and slow-motion playback. This is community advice, not developer documentation.',
        },
      ]}
    >
      <ArticleSection id="objective" title="What Piggy Shuffle actually asks you to do">
        <p>
          Steam’s official achievement list contains <strong>Eyes on the Piggy</strong>, whose objective is to “Pick the correct piggy in Piggy Shuffle.” That is the reliable first-party description of the challenge we can verify.
        </p>
      </ArticleSection>

      <ArticleSection id="community-method" title="Community workaround: record the shuffle in slow motion">
        <p>
          A Steam Community guide by Luca recommends recording the shuffle with a phone, replaying the recording in slow motion, and then selecting the piggy that was originally marked. This is a player-created method rather than an official mechanic explanation.
        </p>
        <FactList
          items={[
            'Start a recording before the shuffle movement becomes difficult to follow.',
            'Replay the recording slowly enough to track the target pig through the swaps.',
            'Return to the game and select the tracked piggy.',
          ]}
        />
        <SourceNote title="Community tip, not a guarantee">
          <p>
            The guide title claims a 100% method, but Rike Games does not document this workaround as an intended solution. We therefore present it as community advice and do not guarantee a perfect success rate.
          </p>
        </SourceNote>
      </ArticleSection>

      <ArticleSection id="not-verified" title="What we are not treating as verified">
        <p>
          Player comments may describe visual tells or movement patterns, but those observations are anecdotal unless they are confirmed by first-party documentation or repeatable evidence. This page intentionally keeps those claims out of the main instructions.
        </p>
        <p>
          For the broader pig roster, use the <Link href="/wiki/piggy-banks" className="text-foreground underline underline-offset-4">Piggy Banks wiki page</Link>.
        </p>
      </ArticleSection>
    </GameContentLayout>
  );
}

export const Route = createFileRoute('/guides/piggy-shuffle')({
  head: () =>
    buildGamePageHead({
      path: '/guides/piggy-shuffle',
      title: 'Bills Must Be Paid Piggy Shuffle Guide - Eyes on the Piggy',
      description:
        'How the Bills Must Be Paid Piggy Shuffle challenge works, plus a clearly labeled Steam Community slow-motion workaround for Eyes on the Piggy.',
      image: '/images/game/piggy-types-collection.jpg',
    }),
  component: PiggyShufflePage,
});
