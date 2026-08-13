import { createFileRoute } from '@tanstack/react-router';

import {
  ArticleSection,
  FactList,
  GameContentLayout,
  SourceNote,
} from '@/components/game-content-layout';
import { GameLongformExpansion } from '@/components/game-longform-expansion';
import { Link } from '@/core/i18n/navigation';
import { buildGamePageHead } from '@/lib/game-content-seo';

function PiggyShufflePage() {
  return (
    <GameContentLayout
      eyebrow="Challenge Guide"
      title="Bills Must Be Paid Piggy Shuffle: Eyes on the Piggy Guide"
      description="Learn the verified Eyes on the Piggy objective and a clearly labeled slow-motion community method for tracking the correct piggy in Piggy Shuffle."
      breadcrumbs={[{ label: 'Guides', href: '/guides' }, { label: 'Piggy Shuffle' }]}
      imageKey="piggies"
      imageAlt="Bills Must Be Paid piggy bank collection screen"
      toc={[
        { label: 'What the challenge requires', href: '#objective' },
        { label: 'Community slow-motion method', href: '#community-method' },
        { label: 'What is not verified', href: '#not-verified' },
        { label: 'Challenge context', href: '#shuffle-context' },
        { label: 'Slow-motion method', href: '#shuffle-method' },
        { label: 'Troubleshooting', href: '#shuffle-troubleshooting' },
      ]}
      related={[
        {
          title: 'Achievements',
          description: 'See Eyes on the Piggy in the complete list of 27 official Steam achievements.',
          href: '/achievements',
        },
        {
          title: 'Piggy Banks',
          description: 'What official sources say about piggy types, behavior and collection.',
          href: '/wiki/piggy-banks',
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
          For the broader pig roster, use the <Link href="/wiki/piggy-banks" className="text-foreground underline underline-offset-4">Piggy Banks wiki page</Link>. For the complete achievement checklist, open <Link href="/achievements" className="text-foreground font-medium underline underline-offset-4">Bills Must Be Paid Achievements</Link>.
        </p>
      </ArticleSection>

      <GameLongformExpansion page="piggy-shuffle" />
    </GameContentLayout>
  );
}

export const Route = createFileRoute('/guides/piggy-shuffle')({
  head: () =>
    buildGamePageHead({
      path: '/guides/piggy-shuffle',
      title: 'Bills Must Be Paid Piggy Shuffle - Eyes on the Piggy Guide',
      description:
        'Bills Must Be Paid Piggy Shuffle guide: learn the Eyes on the Piggy objective and a clearly labeled slow-motion community method for tracking the correct piggy.',
      image: '/images/game/piggy-types-collection.jpg',
    }),
  component: PiggyShufflePage,
});
