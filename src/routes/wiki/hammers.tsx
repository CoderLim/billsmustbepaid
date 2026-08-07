import { createFileRoute } from '@tanstack/react-router';

import {
  ArticleSection,
  FactList,
  GameContentLayout,
  GameScreenshot,
  SourceNote,
} from '@/components/game-content-layout';
import { Link } from '@/core/i18n/navigation';
import { buildGamePageHead } from '@/lib/game-content-seo';

function HammersPage() {
  return (
    <GameContentLayout
      eyebrow="Wiki"
      title="Hammers in Bills Must Be Paid"
      description="A source-backed hammer reference focused on the tradeoffs Rike Games documents and the balance changes it has explicitly announced."
      breadcrumbs={[{ label: 'Wiki', href: '/wiki' }, { label: 'Hammers' }]}
      imageKey="hammers"
      imageAlt="Bills Must Be Paid hammer shop screenshot"
      toc={[
        { label: 'How hammers differ', href: '#tradeoffs' },
        { label: 'Confirmed named changes', href: '#patches' },
        { label: 'How to compare hammers', href: '#compare' },
        { label: 'Tier-list status', href: '#tier-list' },
      ]}
      related={[
        {
          title: 'Tier Lists',
          description: 'Why we are not fabricating an S/A/B hammer ranking without a complete stat source.',
          href: '/tier-lists',
        },
        {
          title: 'Skill Tree',
          description: 'Other upgrade choices that can change how a hammer build behaves.',
          href: '/wiki/skill-tree',
        },
        {
          title: 'Beginner Guide',
          description: 'See where hammer choice fits in the full game loop.',
          href: '/guides/beginner-guide',
        },
      ]}
      sources={[
        {
          label: 'Rike Games — Bills Must Be Paid press kit',
          url: 'https://rikegames.com/press/bills-must-be-paid/',
          note: 'Explains that hammers trade critical chance, hit radius, speed and damage.',
        },
        {
          label: 'Steam — Bills Must Be Paid',
          url: 'https://store.steampowered.com/app/4421010/Bills_Must_Be_Paid/',
          note: 'Current store description repeats the hammer tradeoff design.',
        },
        {
          label: 'Steam Community — developer announcements',
          url: 'https://steamcommunity.com/app/4421010',
          note: 'Demo Bug Fix v0.2.7 records a larger Ultracrit-Hammer radius and faster Toy-Hammer hits.',
        },
      ]}
    >
      <ArticleSection id="tradeoffs" title="Hammers are designed around stat tradeoffs">
        <p>
          The official description gives a direct example of how hammer choice works: a hammer may provide higher critical chance but a smaller hit radius, while another may swing faster and cover a larger radius at the cost of damage.
        </p>
        <GameScreenshot
          imageKey="hammers"
          alt="Hammer selection and shop in Bills Must Be Paid"
          caption="Official hammer-shop screenshot. The current wiki avoids adding numerical values that are not backed by a cited source."
        />
      </ArticleSection>

      <ArticleSection id="patches" title="Confirmed named hammer balance changes">
        <p>
          Rike Games’ Demo Bug Fix v0.2.7 announcement names two specific hammers and changes:
        </p>
        <FactList
          items={[
            <><strong>Ultracrit-Hammer:</strong> its radius was made a bit bigger.</>,
            <><strong>Toy-Hammer:</strong> it was changed to hit a bit faster.</>,
          ]}
        />
        <p>
          These patch notes are important because they prove hammer balance can change over time. Any future ranking should therefore be versioned rather than treated as permanent.
        </p>
      </ArticleSection>

      <ArticleSection id="compare" title="The verified comparison dimensions">
        <FactList
          items={[
            'Critical chance',
            'Hit radius',
            'Attack or hit speed',
            'Damage',
          ]}
        />
        <p>
          Those four dimensions are directly named in first-party descriptions. Other stats should not be added to a comparison table until they are verified from the game or an authoritative source.
        </p>
      </ArticleSection>

      <ArticleSection id="tier-list" title="Why there is no fabricated S/A/B list here">
        <SourceNote title="Evidence before ranking">
          <p>
            The official sources reviewed for Phase 1 explain the design tradeoffs and provide selected patch notes, but they do not publish a complete, versioned stat table for every hammer. A precise ranking without that data would be guesswork.
          </p>
        </SourceNote>
        <p>
          The <Link href="/tier-lists" className="text-foreground underline underline-offset-4">Tier Lists page</Link> records what can currently be ranked responsibly and what evidence is still missing.
        </p>
      </ArticleSection>
    </GameContentLayout>
  );
}

export const Route = createFileRoute('/wiki/hammers')({
  head: () =>
    buildGamePageHead({
      path: '/wiki/hammers',
      title: 'Bills Must Be Paid Hammers - Stats, Tradeoffs & Changes',
      description:
        'Bills Must Be Paid hammer guide covering official crit, radius, speed and damage tradeoffs plus confirmed Ultracrit-Hammer and Toy-Hammer changes.',
      image: '/images/game/hammer-shop.jpg',
    }),
  component: HammersPage,
});
