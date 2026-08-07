import { Link } from '@/core/i18n/navigation';
import { featureSectionImages } from '@/config/game-seo-images';
import { m } from '@/paraglide/messages.js';
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

export function GameSeo() {
  return (
    <section className="border-border border-t">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <header id="about" className="scroll-mt-20">
          <h1 className="font-serif text-3xl leading-tight tracking-tight italic sm:text-4xl">
            {m['landing.seo.h1']()}
          </h1>
          <p className="text-muted-foreground mt-4 text-base leading-7">
            {m['landing.seo.intro']()}
          </p>
          <GameSeoFigure imageKey="header" className="mt-6" priority />
        </header>

        <article className="prose-game mt-10 space-y-10">
          <section>
            <h2 className="text-foreground text-xl font-semibold tracking-tight sm:text-2xl">
              {m['landing.seo.what_is.title']()}
            </h2>
            <p className="text-muted-foreground mt-3 text-[15px] leading-7">
              {m['landing.seo.what_is.body']()}
            </p>
          </section>

          <section>
            <h2 className="text-foreground text-xl font-semibold tracking-tight sm:text-2xl">
              {m['landing.seo.how_to_play.title']()}
            </h2>
            <p className="text-muted-foreground mt-3 text-[15px] leading-7">
              {m['landing.seo.how_to_play.intro']()}
            </p>
            <ol className="text-muted-foreground mt-4 list-decimal space-y-2 pl-5 text-[15px] leading-7">
              <li>{m['landing.seo.how_to_play.step1']()}</li>
              <li>{m['landing.seo.how_to_play.step2']()}</li>
              <li>{m['landing.seo.how_to_play.step3']()}</li>
              <li>{m['landing.seo.how_to_play.step4']()}</li>
            </ol>
            <GameSeoFigure imageKey="bills" className="mt-6" />
            <h3 className="text-foreground mt-6 text-lg font-medium">
              {m['landing.seo.controls.title']()}
            </h3>
            <p className="text-muted-foreground mt-2 text-[15px] leading-7">
              {m['landing.seo.controls.body']()}
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
                    {m[`landing.seo.features.${key}.body` as keyof typeof m]()}
                  </p>
                  <GameSeoFigure
                    imageKey={featureSectionImages[key]}
                    className="mt-4"
                  />
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-foreground text-xl font-semibold tracking-tight sm:text-2xl">
              {m['landing.seo.platforms.title']()}
            </h2>
            <p className="text-muted-foreground mt-3 text-[15px] leading-7">
              {m['landing.seo.platforms.body']()}
            </p>
            <ul className="text-muted-foreground mt-4 space-y-2 text-[15px] leading-7">
              <li>
                <a
                  href="/#play"
                  title="Play Bills Must Be Paid in browser"
                  className="text-foreground underline-offset-4 hover:underline"
                >
                  {m['landing.seo.platforms.browser']()}
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
                  {m['landing.seo.platforms.steam']()}
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
                  {m['landing.seo.platforms.crazygames']()}
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
                  {m['landing.seo.platforms.itch']()}
                </a>
              </li>
            </ul>
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
                    {m[`landing.seo.faq.${key}.answer` as keyof typeof m]()}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

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
