import { Link } from '@/core/i18n/navigation';
import { featureSectionImages } from '@/config/game-seo-images';
import { m } from '@/paraglide/messages.js';
import { getLocale } from '@/paraglide/runtime.js';
import { GameSeoFigure } from '@/components/game-seo-figure';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ_KEYS = [
  'free',
  'browser',
  'steam',
  'developer',
  'controls',
  'idle',
] as const;

const FEATURE_KEYS = [
  'smash',
  'bills',
  'skill_tree',
  'piggies',
  'hammers',
  'coins',
] as const;

const ENGLISH_COPY = {
  intro:
    'Bills Must Be Paid is a short active incremental game about smashing piggy banks, collecting money, paying bills, and upgrading before stamina runs out. The player above uses the browser build distributed through CrazyGames. Rike Games also publishes a free HTML5 demo on itch.io and a free Steam demo, while the complete Steam version launched on July 29, 2026.',
  whatIs:
    'Bills Must Be Paid is an active incremental game by Rike Games, the two-person Frankfurt studio run by Roxy and Mike. It is not a passive idle game: a run is hands-on, smashing consumes stamina, broken piggies drop random loot, bills arrive with deadlines, and paid bills unlock perk choices. Coins can also go into the skill tree and new hammers. The full Steam release expands the loop with more piggy types, more perks and hammers, prestige progression, rings and bracelets, desk gadgets, risk mechanics, an ending, Steam achievements, and Steam Cloud.',
  howToPlayIntro:
    'The basic loop is earn, pay, then upgrade. Rike Games describes it in four steps:',
  howToPlaySteps: [
    'Move the hammer with the left mouse button and smash piggy banks. Smashing consumes stamina, and the run ends when your hand gets tired.',
    'Collect loot from broken piggies. Loot is random, and different piggy types can behave differently or provide different rewards. The Tourist, for example, restores stamina when smashed.',
    'Watch the bill deadline. Paying a bill lets you choose a perk. If you ignore a bill, the collector starts taking a cut of your earnings.',
    'Use money left after bills on the skill tree or hammers. In the full game, paying bills contributes to long-term legacy or prestige progression that can be spent on rings and bracelets after bankruptcy.',
  ],
  controls:
    'On desktop, use the left mouse button to move the hammer over piggy banks. Rike Games describes the interaction as hovering over a piggy while the hammer swings, so this is not rapid button-mashing. CrazyGames lists the browser version as desktop-only and identifies Unity 6 as the engine. The itch.io version is listed as HTML5 with mouse input.',
  features: {
    smash:
      'Hover a piggy and the hammer swings. Stamina drains while you play, so a run cannot continue forever. Loot is random, and some piggy types pay more than others. Rike Games specifically describes Piñata as a gamble that can produce very little or a much larger stack.',
    bills:
      'Bills create the pressure behind the game. They appear with deadlines, and paying one unlocks a perk choice. If a bill is ignored, the collector takes a cut of earnings. Rike Games later announced that the full Steam game also connects failed bills with bankruptcy. Official sources do not support a fixed 20–50% penalty, so this page does not state one.',
    skill_tree:
      'Invest coins in grip strength, caffeine addiction, gym training, wrist enhancement, luck, and stranger branches deeper in, including rock rain and hammer electrification. Official descriptions connect these branches with damage, stamina, recovery, swing speed, luck, and special abilities. For a source-backed breakdown, see the Bills Must Be Paid skill tree wiki.',
    piggies:
      'Rike Games lists Normalito, The Tourist, Woody, Piñata, El Loco, and rarer piggies. Normalito is slow and predictable. The Tourist is large and mostly stationary and restores stamina when smashed. Woody barely moves. Piñata rewards are random. El Loco can wander, zigzag, freeze, and charge. See the piggy bank wiki for confirmed behaviors without guessed hidden stats.',
    hammers:
      'Each hammer has its own damage, swing speed, crit chance, and hit radius. The official description contrasts higher-crit, smaller-radius hammers with faster, wider hammers that do less damage. Our hammer wiki keeps confirmed information separate from rankings that require version-specific testing.',
    coins:
      'Some piggies drop rare coins instead of regular money. Rike Games describes these as a collection that carries across runs. The Steam release also supports achievements, so collection and completion sit alongside the core goal of paying bills and improving your build.',
  },
  platformsBody:
    'You can play the free browser build on this page. Other official or developer-authorized options include Steam, CrazyGames, and itch.io.',
  platforms: {
    browser: 'Free browser build (this page) — no install required',
    steam:
      'Steam (Windows & macOS) — full game, free demo, achievements, and Steam Cloud',
    crazygames: 'CrazyGames — desktop browser version by Rike Games',
    itch: 'itch.io — HTML5 demo by RikeGames',
  },
  mobile:
    'Rike Games also says iOS and Android versions are planned, but its official page does not currently list a mobile release date.',
  faq: {
    free:
      'Yes. Bills Must Be Paid can be played in a browser for free, and Rike Games also offers free demos on Steam and itch.io. The complete Steam release is paid.',
    browser:
      'Yes. The player at the top of this page runs in the browser, so no local game installation is required. Rike Games also links to its own free browser build, and itch.io hosts an HTML5 demo.',
    steam:
      'The free browser and demo versions cover the core loop. The full Steam game adds documented systems including bankruptcy and prestige progression, rings and bracelets, more piggies, hammers and perks, desk gadgets, risk mechanics, an ending, achievements, and Steam Cloud support.',
    developer:
      'Rike Games — Roxy and Mike, a two-person indie studio based in Frankfurt, Germany. Its official press kit says the studio has shipped mobile and web games since 2019, reaching more than 500,000 mobile downloads and over 20 million web plays across its catalog.',
    controls:
      'Use the left mouse button on desktop to move the hammer over piggy banks. The hammer swings while you hover over targets, and smashing consumes stamina.',
    idle:
      'No. Rike Games describes Bills Must Be Paid as an active incremental game. Runs involve smashing targets, watching stamina, paying bills, choosing perks, and deciding how to spend money on upgrades.',
  },
} as const;

export function GameSeo() {
  const isEnglish = getLocale() === 'en';

  return (
    <section className="border-border border-t">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <header id="about" className="scroll-mt-20">
          <h1 className="font-serif text-3xl leading-tight tracking-tight italic sm:text-4xl">
            {m['landing.seo.h1']()}
          </h1>
          <p className="text-muted-foreground mt-4 text-base leading-7">
            {isEnglish ? ENGLISH_COPY.intro : m['landing.seo.intro']()}
          </p>
          <GameSeoFigure imageKey="header" className="mt-6" priority />
        </header>

        <article className="prose-game mt-10 space-y-10">
          <section>
            <h2 className="text-foreground text-xl font-semibold tracking-tight sm:text-2xl">
              {m['landing.seo.what_is.title']()}
            </h2>
            <p className="text-muted-foreground mt-3 text-[15px] leading-7">
              {isEnglish ? ENGLISH_COPY.whatIs : m['landing.seo.what_is.body']()}
            </p>
          </section>

          <section>
            <h2 className="text-foreground text-xl font-semibold tracking-tight sm:text-2xl">
              {m['landing.seo.how_to_play.title']()}
            </h2>
            <p className="text-muted-foreground mt-3 text-[15px] leading-7">
              {isEnglish
                ? ENGLISH_COPY.howToPlayIntro
                : m['landing.seo.how_to_play.intro']()}
            </p>
            <ol className="text-muted-foreground mt-4 list-decimal space-y-2 pl-5 text-[15px] leading-7">
              <li>
                {isEnglish
                  ? ENGLISH_COPY.howToPlaySteps[0]
                  : m['landing.seo.how_to_play.step1']()}
              </li>
              <li>
                {isEnglish
                  ? ENGLISH_COPY.howToPlaySteps[1]
                  : m['landing.seo.how_to_play.step2']()}
              </li>
              <li>
                {isEnglish
                  ? ENGLISH_COPY.howToPlaySteps[2]
                  : m['landing.seo.how_to_play.step3']()}
              </li>
              <li>
                {isEnglish
                  ? ENGLISH_COPY.howToPlaySteps[3]
                  : m['landing.seo.how_to_play.step4']()}
              </li>
            </ol>
            <GameSeoFigure imageKey="bills" className="mt-6" />
            <h3 className="text-foreground mt-6 text-lg font-medium">
              {m['landing.seo.controls.title']()}
            </h3>
            <p className="text-muted-foreground mt-2 text-[15px] leading-7">
              {isEnglish ? ENGLISH_COPY.controls : m['landing.seo.controls.body']()}
            </p>
          </section>

          <section>
            <h2 className="text-foreground text-xl font-semibold tracking-tight sm:text-2xl">
              {m['landing.seo.features.title']()}
            </h2>
            <div className="mt-4 space-y-8">
              {FEATURE_KEYS.map((key) => (
                <div key={key}>
                  <h3 className="text-foreground text-lg font-medium">
                    {m[`landing.seo.features.${key}.title` as keyof typeof m]()}
                  </h3>
                  <p className="text-muted-foreground mt-2 text-[15px] leading-7">
                    {isEnglish
                      ? ENGLISH_COPY.features[key]
                      : m[`landing.seo.features.${key}.body` as keyof typeof m]()}
                  </p>
                  {isEnglish && key === 'skill_tree' ? (
                    <p className="mt-3 text-sm">
                      <Link
                        href="/wiki/skill-tree"
                        className="text-foreground font-medium underline underline-offset-4"
                      >
                        Open the skill tree wiki →
                      </Link>
                    </p>
                  ) : null}
                  {isEnglish && key === 'piggies' ? (
                    <p className="mt-3 text-sm">
                      <Link
                        href="/wiki/piggy-banks"
                        className="text-foreground font-medium underline underline-offset-4"
                      >
                        Browse confirmed piggy types →
                      </Link>
                    </p>
                  ) : null}
                  {isEnglish && key === 'hammers' ? (
                    <p className="mt-3 text-sm">
                      <Link
                        href="/wiki/hammers"
                        className="text-foreground font-medium underline underline-offset-4"
                      >
                        Read the hammer wiki →
                      </Link>
                    </p>
                  ) : null}
                  <GameSeoFigure
                    imageKey={featureSectionImages[key]}
                    className="mt-4"
                  />
                </div>
              ))}
            </div>
          </section>

          {isEnglish ? (
            <section>
              <h2 className="text-foreground text-xl font-semibold tracking-tight sm:text-2xl">
                Browser Demo vs. Full Steam Game
              </h2>
              <p className="text-muted-foreground mt-3 text-[15px] leading-7">
                The free browser version of Bills Must Be Paid should not be
                treated as a complete copy of the Steam release. Before launch,
                Rike Games said the full game would add a prestige system, rings
                and bracelets, desk gadgets, more piggy types, more perks, more
                hammers, gambling or risk mechanics, and an actual ending. Steam
                also lists achievements, Cloud saves, single-player support, and
                Family Sharing. The full game launched on July 29, 2026.
              </p>
              <p className="mt-3 text-sm">
                <Link
                  href="/demo-vs-full-game"
                  className="text-foreground font-medium underline underline-offset-4"
                >
                  Compare the demo and full game →
                </Link>
              </p>
            </section>
          ) : null}

          {isEnglish ? (
            <section>
              <h2 className="text-foreground text-xl font-semibold tracking-tight sm:text-2xl">
                Bankruptcy, Prestige, Rings and Bracelets
              </h2>
              <p className="text-muted-foreground mt-3 text-[15px] leading-7">
                Bankruptcy is one of the biggest progression differences between
                the early demo and the full Bills Must Be Paid release. In the
                developer&apos;s release announcement, Rike Games said that
                failing to pay a bill causes bankruptcy. Prestige points are
                based on progress made paying bills, and those points can be
                spent on rings and bracelets that provide upgrades and unique
                perks. The current Steam description uses the term legacy points
                for this long-term progression; our guide keeps the official
                terminology clear instead of inventing a separate currency.
              </p>
              <p className="mt-3 text-sm">
                <Link
                  href="/guides/prestige-bankruptcy"
                  className="text-foreground font-medium underline underline-offset-4"
                >
                  Read the prestige and bankruptcy guide →
                </Link>
              </p>
            </section>
          ) : null}

          <section>
            <h2 className="text-foreground text-xl font-semibold tracking-tight sm:text-2xl">
              {m['landing.seo.platforms.title']()}
            </h2>
            <p className="text-muted-foreground mt-3 text-[15px] leading-7">
              {isEnglish
                ? ENGLISH_COPY.platformsBody
                : m['landing.seo.platforms.body']()}
            </p>
            <ul className="text-muted-foreground mt-4 space-y-2 text-[15px] leading-7">
              <li>
                <a
                  href="/#play"
                  title="Play Bills Must Be Paid in browser"
                  className="text-foreground underline-offset-4 hover:underline"
                >
                  {isEnglish
                    ? ENGLISH_COPY.platforms.browser
                    : m['landing.seo.platforms.browser']()}
                </a>
              </li>
              <li>
                <a
                  href="https://store.steampowered.com/app/4421010/Bills_Must_Be_Paid/"
                  title="Bills Must Be Paid on Steam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground underline-offset-4 hover:underline"
                >
                  {isEnglish
                    ? ENGLISH_COPY.platforms.steam
                    : m['landing.seo.platforms.steam']()}
                </a>
              </li>
              <li>
                <a
                  href="https://www.crazygames.com/game/bills-must-be-paid"
                  title="Bills Must Be Paid on CrazyGames"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground underline-offset-4 hover:underline"
                >
                  {isEnglish
                    ? ENGLISH_COPY.platforms.crazygames
                    : m['landing.seo.platforms.crazygames']()}
                </a>
              </li>
              <li>
                <a
                  href="https://rikegames.itch.io/bills-must-be-paid"
                  title="Bills Must Be Paid on itch.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground underline-offset-4 hover:underline"
                >
                  {isEnglish
                    ? ENGLISH_COPY.platforms.itch
                    : m['landing.seo.platforms.itch']()}
                </a>
              </li>
            </ul>
            {isEnglish ? (
              <p className="text-muted-foreground mt-4 text-[15px] leading-7">
                {ENGLISH_COPY.mobile}
              </p>
            ) : null}
          </section>

          <section id="faq" className="scroll-mt-20">
            <h2 className="text-foreground text-xl font-semibold tracking-tight sm:text-2xl">
              {m['landing.seo.faq.title']()}
            </h2>
            <p className="text-muted-foreground mt-2 text-[15px] leading-7">
              {m['landing.seo.faq.description']()}
            </p>
            <Accordion type="single" collapsible className="mt-4">
              {FAQ_KEYS.map((key) => (
                <AccordionItem key={key} value={key}>
                  <AccordionTrigger className="text-left text-[15px]">
                    {m[`landing.seo.faq.${key}.question` as keyof typeof m]()}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-[15px] leading-7">
                    {isEnglish
                      ? ENGLISH_COPY.faq[key]
                      : m[`landing.seo.faq.${key}.answer` as keyof typeof m]()}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          {isEnglish ? (
            <section className="border-border rounded-lg border p-5">
              <h2 className="text-foreground text-lg font-semibold">
                Game facts & original sources
              </h2>
              <p className="text-muted-foreground mt-2 text-[15px] leading-7">
                Game facts on this page are checked against first-party Rike
                Games material and the platform pages that host the game. Dynamic
                ratings and unsupported fixed penalty percentages are
                intentionally not used.
              </p>
              <ul className="text-muted-foreground mt-4 list-disc space-y-2 pl-5 text-sm leading-6">
                <li>
                  <a
                    href="https://rikegames.com/bills-must-be-paid"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground underline underline-offset-4"
                  >
                    Rike Games — official Bills Must Be Paid page
                  </a>
                </li>
                <li>
                  <a
                    href="https://rikegames.com/press/bills-must-be-paid/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground underline underline-offset-4"
                  >
                    Rike Games — official press kit
                  </a>
                </li>
                <li>
                  <a
                    href="https://store.steampowered.com/app/4421010/Bills_Must_Be_Paid/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground underline underline-offset-4"
                  >
                    Steam store page
                  </a>
                </li>
                <li>
                  <a
                    href="https://steamcommunity.com/app/4421010"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground underline underline-offset-4"
                  >
                    Steam developer announcements
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.crazygames.com/game/bills-must-be-paid"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground underline underline-offset-4"
                  >
                    CrazyGames release page
                  </a>
                </li>
                <li>
                  <a
                    href="https://rikegames.itch.io/bills-must-be-paid"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground underline underline-offset-4"
                  >
                    Rike Games on itch.io
                  </a>
                </li>
              </ul>
            </section>
          ) : null}

          <section className="border-border bg-muted/30 rounded-lg border p-5">
            <h2 className="text-foreground text-lg font-semibold">
              {m['landing.seo.contact.title']()}
            </h2>
            <p className="text-muted-foreground mt-2 text-[15px] leading-7">
              {m['landing.seo.contact.body']()}{' '}
              <a
                href="mailto:support@billsmustbepaid.net"
                title="Email support@billsmustbepaid.net"
                className="text-foreground underline-offset-4 hover:underline"
              >
                support@billsmustbepaid.net
              </a>
              .{' '}
              <Link
                href="/privacy-policy"
                title="Privacy Policy"
                className="text-foreground underline-offset-4 hover:underline"
              >
                {m['landing.footer.privacy']()}
              </Link>
              {' · '}
              <Link
                href="/terms-of-service"
                title="Terms of Service"
                className="text-foreground underline-offset-4 hover:underline"
              >
                {m['landing.footer.terms']()}
              </Link>
            </p>
          </section>
        </article>
      </div>
    </section>
  );
}
