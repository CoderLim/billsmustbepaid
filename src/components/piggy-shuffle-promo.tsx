import { Link } from '@/core/i18n/navigation';
import { getLocale } from '@/paraglide/runtime.js';

const COPY = {
  en: {
    eyebrow: 'Popular challenge',
    title: 'Bills Must Be Paid Piggy Shuffle Guide',
    body:
      'Trying to unlock Eyes on the Piggy? Steam confirms the objective is to pick the correct piggy in Piggy Shuffle. Our focused guide separates that official objective from the community slow-motion recording method, so you can follow a practical solution without treating it as a developer-confirmed mechanic.',
    guide: 'Open the Piggy Shuffle guide →',
    achievements: 'See all 27 Steam achievements →',
  },
  zh: {
    eyebrow: '热门挑战',
    title: 'Bills Must Be Paid Piggy Shuffle 攻略',
    body:
      '正在解锁 Eyes on the Piggy？Steam 官方成就确认目标是在 Piggy Shuffle 中选中正确的存钱罐。专项攻略会把官方目标与社区慢动作录像方法分开说明，既给出可操作方案，也不会把玩家技巧写成开发者确认的机制。',
    guide: '查看 Piggy Shuffle 攻略 →',
    achievements: '查看全部 27 个 Steam 成就 →',
  },
  es: {
    eyebrow: 'Reto popular',
    title: 'Bills Must Be Paid Piggy Shuffle - Guía',
    body:
      '¿Intentas desbloquear Eyes on the Piggy? El logro oficial de Steam confirma que debes elegir la hucha correcta en Piggy Shuffle. La guía separa ese objetivo verificado del método comunitario de grabación a cámara lenta para ofrecer una solución práctica sin presentarla como una mecánica oficial.',
    guide: 'Abrir la guía de Piggy Shuffle →',
    achievements: 'Ver los 27 logros de Steam →',
  },
} as const;

export function PiggyShufflePromo() {
  const locale = getLocale();
  const copy = COPY[locale as keyof typeof COPY] ?? COPY.en;

  return (
    <section className="border-border border-t">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
        <div className="border-border bg-muted/20 rounded-2xl border p-6 sm:p-8">
          <div className="text-primary text-sm font-semibold tracking-wide uppercase">
            {copy.eyebrow}
          </div>
          <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
            {copy.title}
          </h2>
          <p className="text-muted-foreground mt-3 max-w-3xl text-[15px] leading-7">
            {copy.body}
          </p>
          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-sm">
            <Link
              href="/guides/piggy-shuffle"
              className="text-foreground font-semibold underline underline-offset-4"
            >
              {copy.guide}
            </Link>
            <Link
              href="/achievements"
              className="text-muted-foreground hover:text-foreground font-medium underline underline-offset-4"
            >
              {copy.achievements}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
