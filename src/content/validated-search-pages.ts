export type ValidatedSearchPageKey = 'double-or-nothing' | 'coins';

export type ValidatedSearchSection = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type ValidatedSearchPage = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  description: string;
  imageAlt: string;
  breadcrumbs: Array<{ label: string; href?: string }>;
  toc: Array<{ label: string; href: string }>;
  sections: ValidatedSearchSection[];
  related: Array<{ title: string; description: string; href: string }>;
  sources: Array<{ label: string; url: string; note?: string }>;
};

type Locale = 'en' | 'zh' | 'es';

type LocalizedPages = Record<ValidatedSearchPageKey, Record<Locale, ValidatedSearchPage>>;

const pages: LocalizedPages = {
  'double-or-nothing': {
    en: {
      metaTitle: 'Bills Must Be Paid Double or Nothing - Coin Flip Guide',
      metaDescription:
        'Bills Must Be Paid Double or Nothing: Steam confirms the coin flip and 2 achievements. See what is known about odds, aim and Lucky Loss.',
      eyebrow: 'Challenge Guide',
      title: 'Bills Must Be Paid Double or Nothing: Coin Flip, 50/50 & All or Nothing',
      description:
        'A source-checked answer to the Double or Nothing questions players are actually asking: whether the coin flip is a skill check, what the two Steam achievements require, and which claims about odds or aim are still unverified.',
      imageAlt: 'Bills Must Be Paid gameplay with coins and piggy banks',
      breadcrumbs: [
        { label: 'Guides', href: '/guides' },
        { label: 'Double or Nothing' },
      ],
      toc: [
        { label: 'Quick answer', href: '#quick-answer' },
        { label: 'What Steam confirms', href: '#confirmed' },
        { label: 'Is it really 50/50?', href: '#odds' },
        { label: 'Does hitting the center matter?', href: '#aim' },
        { label: 'Lucky Loss', href: '#lucky-loss' },
        { label: 'Achievements', href: '#achievements' },
        { label: 'How to use the gamble', href: '#strategy' },
        { label: 'What is still unverified', href: '#unverified' },
      ],
      sections: [
        {
          id: 'quick-answer',
          title: 'Bills Must Be Paid Double or Nothing: the quick answer',
          paragraphs: [
            'Bills Must Be Paid Double or Nothing is the game’s coin-flip gamble. Steam’s official achievement list proves two things that matter immediately: the 50/50 achievement asks you to “Win a coinflip,” and All or Nothing asks you to “Go all in on a gamble.” Those objectives confirm the coin flip and the all-in action, but they do not publish a probability table or say that hammer placement changes the result.',
            'That distinction matters because current Steam discussions show players asking whether Bills Must Be Paid Double or Nothing is a skill check or a random outcome. One player specifically reports aiming at the center and still losing repeated flips. That is useful evidence about the question players have, but it is not developer documentation. Until Rike Games publishes the underlying rule or a repeatable test establishes it, this guide does not claim that center hits improve the odds or that the displayed “50/50” name guarantees a mathematically exact 50 percent rate in every build.',
          ],
          bullets: [
            'Confirmed: there is a coin flip and Steam has a 50/50 achievement for winning one.',
            'Confirmed: All or Nothing requires going all in on a gamble.',
            'Not confirmed by first-party documentation: a hidden aim-based skill check.',
            'Not confirmed by first-party documentation: an exact published probability formula for every version.',
          ],
        },
        {
          id: 'confirmed',
          title: 'What official sources confirm about Double or Nothing',
          paragraphs: [
            'The strongest stable evidence for Bills Must Be Paid Double or Nothing comes from the official Steam achievements. “50/50” has the objective “Win a coinflip.” “All or Nothing” has the objective “Go all in on a gamble.” Those lines are valuable because they describe what Steam tracks without requiring us to reverse-engineer the game. They also explain why players may search for both “coin flip” and “double or nothing” even though the achievement names are different.',
            'The Steam store describes Bills Must Be Paid as an active incremental game built around earning money, paying bills and buying upgrades. That broader economy is important context for Double or Nothing. The gamble is not isolated from progression: the money you risk is also money that could otherwise help cover bills or fund upgrades. The exact risk-reward behavior belongs to the current game build, so this page keeps version-sensitive claims separate from the achievement text that Steam exposes publicly.',
          ],
        },
        {
          id: 'odds',
          title: 'Is Bills Must Be Paid Double or Nothing really 50/50?',
          paragraphs: [
            'The safest answer is: the achievement is named 50/50, but the public sources checked for this page do not publish the coin-flip RNG formula. A name is not enough evidence to manufacture an exact probability claim. Steam discussion posts contain players who feel their observed results are worse than even odds, while other players naturally unlock the 50/50 achievement. Those anecdotes can motivate testing, but short personal streaks cannot prove the true probability on their own.',
            'If you are testing Bills Must Be Paid Double or Nothing yourself, record a large number of attempts, note the game version, and separate ordinary flips from any perk-modified flips. A run of five, eight or even more losses feels extreme when money is on the line, but it still does not reveal the implementation. This page will only publish a numerical odds claim if it can be tied to developer documentation, readable in-game text, or a sufficiently transparent repeatable test.',
          ],
        },
        {
          id: 'aim',
          title: 'Does hitting the center of the coin change the result?',
          paragraphs: [
            'There is currently no first-party source in our evidence set saying that hammer accuracy controls the Double or Nothing result. The question is understandable because Bills Must Be Paid normally rewards active mouse control, and a Steam player explicitly asked whether striking the center was supposed to be the skill check. Their report says center hits still produced losses. That weakens the idea that a center hit is an obvious guaranteed solution, but one player report cannot prove that aim has zero influence either.',
            'For now, treat “hit the center to win” as unverified community theory rather than a rule. This is the same evidence standard used on the Piggy Shuffle page: an achievement can confirm the objective while a player-created method must remain clearly labeled as community advice. If Rike Games documents an aim mechanic later, Bills Must Be Paid Double or Nothing can be updated without pretending today’s uncertainty never existed.',
          ],
        },
        {
          id: 'lucky-loss',
          title: 'What about the Lucky Loss perk?',
          paragraphs: [
            'Steam discussions also contain complaints about a perk players call Lucky Loss in connection with Double or Nothing. One discussion says the player expected the perk to affect a later flip but still experienced a losing streak. That is a current community report, not a verified specification of the perk. We therefore do not quote a permanent percentage, guarantee or trigger rule unless it can be confirmed from the current in-game description or a first-party source.',
            'The practical lesson is to distinguish three layers: the official coin-flip achievement, the current in-game perk text you can see in your own build, and player observations about whether the perk behaves as expected. If those layers disagree, trust the versioned in-game text over an old guide and treat an apparent mismatch as a possible balance change, misunderstanding or bug rather than immediately converting it into a universal rule.',
          ],
        },
        {
          id: 'achievements',
          title: '50/50 and All or Nothing achievement requirements',
          paragraphs: [
            'For achievement hunters, Bills Must Be Paid Double or Nothing has two clean checkpoints. To satisfy 50/50, Steam says you need to win a coinflip. To satisfy All or Nothing, Steam says you need to go all in on a gamble. The official list does not add extra requirements such as hitting a particular part of the coin, reaching a named cycle, or winning a specified number of consecutive flips.',
            'If one of those achievements does not unlock after you believe you met the objective, first make sure you are playing the full Steam version with achievements active. The browser build and demos do not necessarily mirror every full-release system. Also avoid assuming a community screenshot from a different build proves the current trigger. The achievement text is stable evidence; troubleshooting beyond that should be version-aware.',
          ],
          bullets: [
            '50/50 — official objective: win a coinflip.',
            'All or Nothing — official objective: go all in on a gamble.',
            'Do not add hidden requirements unless they can be reproduced or sourced.',
          ],
        },
        {
          id: 'strategy',
          title: 'How to think about Double or Nothing during progression',
          paragraphs: [
            'Bills Must Be Paid Double or Nothing sits inside an economy where the same money can support bills, upgrades and continued progression. That means the most important strategic question is not “can I double this?” but “what happens to my run if I lose this amount?” If the money is needed for a near-term bill, risking it has a different consequence from risking surplus money after your immediate obligation is covered.',
            'This guide intentionally avoids inventing an optimal betting formula because the public first-party pages do not expose all of the variables needed to prove one. Your current perks, progression state and available money can change the decision. A sensible evidence-based approach is to preserve required bill money first, understand the exact text of any gamble-related perk in your current version, and only then decide how much variance you are willing to accept.',
          ],
        },
        {
          id: 'unverified',
          title: 'What this Double or Nothing guide will not pretend to know',
          paragraphs: [
            'A useful Bills Must Be Paid Double or Nothing page should answer the search without turning uncertainty into fake precision. We can verify the coin flip, the two achievement objectives, the existence of active player questions about odds and aim, and the game’s wider money-management context. We cannot currently verify a public RNG formula, a guaranteed center-hit technique, or a permanent Lucky Loss formula from first-party documentation.',
            'If future patch notes, developer replies or in-game text make those mechanics explicit, this page can be tightened around that new evidence. Until then, the answer is deliberately narrower: win a coinflip for 50/50, go all in for All or Nothing, and do not assume that a losing streak or a center hit proves how the random system is coded. That is less dramatic than an invented “100% method,” but it is much more useful when the game is still being patched and discussed.',
          ],
        },
      ],
      related: [
        {
          title: 'Piggy Shuffle',
          description: 'Another named challenge with a verified objective and clearly labeled community method.',
          href: '/guides/piggy-shuffle',
        },
        {
          title: 'Achievements',
          description: 'See all 27 official Steam achievement names and objectives.',
          href: '/achievements',
        },
        {
          title: 'Bills Must Be Paid Coins',
          description: 'Rare coins, Coin Collector and what public sources do or do not say about Coin Rain.',
          href: '/wiki/coins',
        },
      ],
      sources: [
        {
          label: 'Steam Community — Bills Must Be Paid global achievements',
          url: 'https://steamcommunity.com/stats/4421010/achievements/',
          note: 'Primary source for the 50/50 and All or Nothing achievement objectives.',
        },
        {
          label: 'Steam Community — Bills Must Be Paid discussions',
          url: 'https://steamcommunity.com/app/4421010/discussions/0/',
          note: 'Current player discussions include Double or nothing, Coin Flip and Lucky Loss questions; these are community reports, not developer specifications.',
        },
        {
          label: 'Steam — Bills Must Be Paid',
          url: 'https://store.steampowered.com/app/4421010/Bills_Must_Be_Paid/',
          note: 'Current full-game description and supported Steam achievement feature.',
        },
      ],
    },
    zh: {
      metaTitle: 'Bills Must Be Paid Double or Nothing - 投硬币攻略',
      metaDescription:
        'Bills Must Be Paid Double or Nothing：Steam 已确认投硬币及 2 个成就；这里区分真实规则、50/50 概率猜测、瞄准和 Lucky Loss 传言。',
      eyebrow: '挑战攻略',
      title: 'Bills Must Be Paid Double or Nothing：投硬币、50/50 与 All or Nothing',
      description:
        '围绕玩家真正会搜的问题整理：Double or Nothing 到底是不是技巧判定、两个 Steam 成就分别要求什么，以及概率、锤子落点和 Lucky Loss 哪些说法目前还不能当成官方规则。',
      imageAlt: 'Bills Must Be Paid 中存钱罐和飞出的硬币',
      breadcrumbs: [
        { label: '攻略', href: '/guides' },
        { label: 'Double or Nothing' },
      ],
      toc: [
        { label: '直接答案', href: '#quick-answer' },
        { label: 'Steam 已确认的信息', href: '#confirmed' },
        { label: '真的是 50/50 吗', href: '#odds' },
        { label: '砸中心有用吗', href: '#aim' },
        { label: 'Lucky Loss', href: '#lucky-loss' },
        { label: '相关成就', href: '#achievements' },
        { label: '如何看待这次赌博', href: '#strategy' },
        { label: '仍未验证的说法', href: '#unverified' },
      ],
      sections: [
        {
          id: 'quick-answer',
          title: 'Bills Must Be Paid Double or Nothing：先给答案',
          paragraphs: [
            'Bills Must Be Paid Double or Nothing 是游戏里的投硬币赌博机制。Steam 官方成就列表可以确认两件事：成就 50/50 的目标是“赢一次 coinflip”，All or Nothing 的目标是“在一次赌博中 all in”。这足以证明投硬币和梭哈行为确实存在，但官方公开页面没有给出完整概率表，也没有说锤子砸在硬币哪个位置会改变结果。',
            'Steam 讨论区已经有人直接问 Bills Must Be Paid Double or Nothing 究竟是技巧判定还是随机结果，也有人表示自己每次都瞄准硬币中心却连续失败。这个反馈能证明玩家确实存在这个困惑，但不能代替开发者文档。因此本页不会把“砸中心必胜”或“每个版本严格 50%”写成确定规则。',
          ],
          bullets: [
            '已确认：Steam 有要求赢一次 coinflip 的 50/50 成就。',
            '已确认：All or Nothing 要求在赌博中 all in。',
            '未被一方资料确认：存在隐藏的瞄准技巧判定。',
            '未被一方资料确认：所有版本都使用公开且固定的 50% 概率公式。',
          ],
        },
        {
          id: 'confirmed',
          title: 'Double or Nothing 有哪些信息是官方能确认的',
          paragraphs: [
            'Bills Must Be Paid Double or Nothing 最稳定的依据来自 Steam 官方成就文本。50/50 明确写着 Win a coinflip；All or Nothing 明确写着 Go all in on a gamble。它们告诉我们 Steam 实际追踪的目标是什么，也解释了为什么玩家既会搜索 coin flip，也会搜索 double or nothing。',
            'Steam 商店把 Bills Must Be Paid 定义为围绕赚钱、付账单和升级展开的主动增量游戏，所以这次赌博并不是脱离经济系统的小游戏。你拿去下注的钱，同时也可能本来用于账单或升级。至于当前版本具体如何结算风险与奖励，应以游戏内现行文本为准。',
          ],
        },
        {
          id: 'odds',
          title: 'Bills Must Be Paid Double or Nothing 真的是 50/50 吗？',
          paragraphs: [
            '最严谨的答案是：成就名字叫 50/50，但我们查到的公开一方资料没有公布投硬币 RNG 公式。不能因为成就名称就反推所有版本必然是数学意义上精确的 50%。讨论区里确实有玩家觉得自己的胜率明显偏低，但短期连败只能说明体验，不能单独证明真实概率。',
            '如果你自己想测试，最好记录足够多次尝试，同时记下游戏版本，并把普通投硬币和受到 perk 影响的尝试分开。五连败、八连败在真钱式风险体验里很刺眼，但样本仍然不足以说明代码怎么写。本站只有在拿到开发者说明、明确的游戏内文本或透明可复现测试后，才会给出具体概率。',
          ],
        },
        {
          id: 'aim',
          title: '砸硬币中心会提高 Double or Nothing 胜率吗？',
          paragraphs: [
            '目前没有一方资料说锤子的落点控制 Double or Nothing 的结果。这个猜想很自然，因为 Bills Must Be Paid 的主要玩法本来就需要鼠标控制，而 Steam 玩家也明确问过“砸中心是不是 skill check”。他报告自己一直砸中心依然连续输，这至少说明“中心命中=必胜”没有社区一致证据。',
            '所以现阶段应该把“砸中心能赢”视为未经验证的社区猜测，而不是规则。未来如果 Rike Games 在补丁说明、开发者回复或游戏内文本里明确了瞄准机制，再更新结论会更可靠。',
          ],
        },
        {
          id: 'lucky-loss',
          title: 'Lucky Loss 和 Double or Nothing 是什么关系？',
          paragraphs: [
            'Steam 讨论里还有玩家把 Lucky Loss 与 Double or Nothing 连在一起讨论，并反馈自己理解的 perk 效果与实际连败不一致。这里同样要区分“玩家报告”和“机制规格”：讨论能提示我们哪里容易困惑，但不能自动变成一个永久有效的概率或触发公式。',
            '实际游玩时，应优先阅读你当前版本里 Lucky Loss 的原始描述。如果旧攻略、社区帖子和当前游戏内文本发生冲突，以当前版本为准，并把差异理解为版本变化、误读或潜在 bug，而不是直接宣布某个固定规则。',
          ],
        },
        {
          id: 'achievements',
          title: '50/50 与 All or Nothing 成就怎么解',
          paragraphs: [
            '如果你的目标是成就，要求其实很干净：50/50 只需要赢一次 coinflip；All or Nothing 要求在一次 gamble 中 all in。Steam 官方目标里没有写“必须砸中心”“必须到某一周目”或“必须连赢多少次”之类额外条件。',
            '如果你认为条件已经满足却没有跳成就，先确认自己运行的是支持 Steam Achievements 的完整 Steam 版本。浏览器版、Demo 与正式版并不是所有系统都完全相同，排查时不要把别的 build 的截图当成当前触发条件。',
          ],
          bullets: [
            '50/50：赢一次 coinflip。',
            'All or Nothing：在一次赌博中 all in。',
            '没有来源的隐藏条件不要自行补进攻略。',
          ],
        },
        {
          id: 'strategy',
          title: '什么时候值得使用 Double or Nothing？',
          paragraphs: [
            'Bills Must Be Paid Double or Nothing 最大的策略意义来自机会成本。你拿去赌的钱，同时也可能用于即将到期的账单或关键升级。因此比“能不能翻倍”更重要的问题是：“如果这笔钱输掉，我下一张账单还能不能处理？”',
            '公开一方资料没有提供足够变量让我们证明一个所谓最优下注公式，所以这里不编造收益表。更稳妥的思路是先保留必须支付的账单资金，再看当前版本的相关 perk 文本，最后才决定自己愿意承受多少波动。',
          ],
        },
        {
          id: 'unverified',
          title: '这篇 Double or Nothing 攻略不会假装知道什么',
          paragraphs: [
            '我们可以验证 coin flip、两个成就的官方目标，以及社区当前确实在讨论概率、瞄准和 Lucky Loss。我们目前不能从公开一方资料验证隐藏 RNG 公式、中心命中必胜技巧，也不能验证一个跨版本永久不变的 Lucky Loss 数值。',
            '未来如果补丁说明、开发者回复或当前游戏内文本提供更多信息，本页会按来源更新。在此之前，最可靠的结论就是：想拿 50/50 就赢一次投硬币；想拿 All or Nothing 就在赌博中 all in；不要用一次连败或一次中心命中去反推整个随机系统。',
          ],
        },
      ],
      related: [
        { title: 'Piggy Shuffle', description: '另一个有明确成就目标、同时存在社区解法的挑战。', href: '/guides/piggy-shuffle' },
        { title: '成就', description: '查看全部 27 个 Steam 官方成就与目标。', href: '/achievements' },
        { title: 'Bills Must Be Paid Coins', description: '稀有硬币、Coin Collector，以及 Coin Rain 目前能确认到什么。', href: '/wiki/coins' },
      ],
      sources: [
        { label: 'Steam Community — Bills Must Be Paid 全球成就', url: 'https://steamcommunity.com/stats/4421010/achievements/', note: '50/50 与 All or Nothing 目标的一方来源。' },
        { label: 'Steam Community — Bills Must Be Paid 讨论区', url: 'https://steamcommunity.com/app/4421010/discussions/0/', note: '包含 Double or nothing、Coin Flip、Lucky Loss 等玩家讨论；这些属于社区反馈。' },
        { label: 'Steam — Bills Must Be Paid', url: 'https://store.steampowered.com/app/4421010/Bills_Must_Be_Paid/', note: '当前正式版说明与 Steam Achievements 支持信息。' },
      ],
    },
    es: {
      metaTitle: 'Bills Must Be Paid Double or Nothing - Guía Coin Flip',
      metaDescription:
        'Bills Must Be Paid Double or Nothing: Steam confirma el coin flip y 2 logros. Qué sabemos sobre probabilidades, puntería y Lucky Loss.',
      eyebrow: 'Guía de reto',
      title: 'Bills Must Be Paid Double or Nothing: Coin Flip, 50/50 y All or Nothing',
      description:
        'Una respuesta basada en fuentes a las dudas reales sobre Double or Nothing: si el lanzamiento de moneda es habilidad o azar, qué exigen los logros y qué afirmaciones siguen sin verificar.',
      imageAlt: 'Partida de Bills Must Be Paid con monedas y huchas',
      breadcrumbs: [
        { label: 'Guías', href: '/guides' },
        { label: 'Double or Nothing' },
      ],
      toc: [
        { label: 'Respuesta rápida', href: '#quick-answer' },
        { label: 'Qué confirma Steam', href: '#confirmed' },
        { label: '¿Es realmente 50/50?', href: '#odds' },
        { label: '¿Importa golpear el centro?', href: '#aim' },
        { label: 'Lucky Loss', href: '#lucky-loss' },
        { label: 'Logros', href: '#achievements' },
        { label: 'Cómo usar la apuesta', href: '#strategy' },
        { label: 'Lo que no está verificado', href: '#unverified' },
      ],
      sections: [
        {
          id: 'quick-answer',
          title: 'Bills Must Be Paid Double or Nothing: respuesta rápida',
          paragraphs: [
            'Bills Must Be Paid Double or Nothing es la apuesta de lanzamiento de moneda del juego. La lista oficial de logros de Steam confirma dos objetivos: 50/50 pide “Win a coinflip” y All or Nothing pide “Go all in on a gamble”. Eso confirma el coin flip y la acción de apostar todo, pero no publica una tabla de probabilidades ni afirma que el punto donde golpeas la moneda cambie el resultado.',
            'En los debates actuales de Steam hay jugadores que preguntan si Bills Must Be Paid Double or Nothing es una prueba de habilidad o un resultado aleatorio. Un jugador incluso cuenta que golpeó repetidamente el centro y siguió perdiendo. Es una señal clara de la duda de la comunidad, pero no documentación del desarrollador. Por eso esta guía no presenta “golpear el centro” como método garantizado ni convierte el nombre 50/50 en una fórmula matemática no publicada.',
          ],
          bullets: [
            'Confirmado: Steam tiene un logro 50/50 por ganar un coinflip.',
            'Confirmado: All or Nothing exige apostar todo en una apuesta.',
            'No confirmado por una fuente oficial: una prueba de puntería oculta.',
            'No confirmado por una fuente oficial: una fórmula pública exacta de probabilidad para todas las versiones.',
          ],
        },
        {
          id: 'confirmed',
          title: 'Qué confirman las fuentes oficiales sobre Double or Nothing',
          paragraphs: [
            'La evidencia más estable para Bills Must Be Paid Double or Nothing son los logros oficiales. 50/50 dice que debes ganar un coinflip; All or Nothing dice que debes ir all in en una apuesta. Esos textos describen lo que Steam registra sin necesidad de adivinar el código y explican por qué los jugadores buscan tanto “coin flip” como “double or nothing”.',
            'La tienda de Steam describe Bills Must Be Paid como un juego incremental activo de ganar dinero, pagar facturas y mejorar. Por eso la apuesta tiene un coste de oportunidad real dentro de la partida: el dinero arriesgado también podría servir para una factura o una mejora. Los detalles sensibles a versión deben comprobarse en el build actual.',
          ],
        },
        {
          id: 'odds',
          title: '¿Bills Must Be Paid Double or Nothing es realmente 50/50?',
          paragraphs: [
            'La respuesta prudente es que el logro se llama 50/50, pero las fuentes públicas revisadas no exponen la fórmula RNG. El nombre por sí solo no basta para prometer un 50 por ciento matemáticamente exacto en cada build. Algunos jugadores describen rachas que sienten mucho peores, pero una racha corta tampoco demuestra la probabilidad real.',
            'Si quieres probarlo, registra muchas tiradas, anota la versión y separa intentos normales de los modificados por perks. Cinco u ocho derrotas seguidas pueden ser frustrantes cuando hay dinero de la partida en riesgo, pero no revelan por sí solas la implementación. Publicaremos una cifra solo cuando haya texto oficial, texto verificable dentro del juego o una prueba transparente y reproducible.',
          ],
        },
        {
          id: 'aim',
          title: '¿Golpear el centro de la moneda cambia el resultado?',
          paragraphs: [
            'No hemos encontrado una fuente oficial que diga que la precisión del martillo controle Double or Nothing. La pregunta tiene sentido porque el juego normalmente requiere control activo, y un jugador de Steam preguntó expresamente si acertar el centro era la prueba de habilidad. Su experiencia indica que acertar el centro no garantizó ganar.',
            'Eso no demuestra que la puntería tenga influencia cero, pero sí impide vender “centro = victoria” como una solución verificada. Hasta que Rike Games documente lo contrario, debe tratarse como teoría comunitaria.',
          ],
        },
        {
          id: 'lucky-loss',
          title: 'Lucky Loss y Double or Nothing',
          paragraphs: [
            'También hay discusiones de Steam sobre un perk llamado Lucky Loss y su comportamiento durante Double or Nothing. Son informes de jugadores, no una especificación estable del sistema. Por eso no fijamos aquí porcentajes, garantías ni activadores que no podamos contrastar con el texto actual del juego.',
            'La forma más segura de leer esta mecánica es separar el objetivo oficial del logro, la descripción del perk en tu versión y las observaciones de la comunidad. Si no coinciden, el texto de la versión actual debe pesar más que una guía antigua.',
          ],
        },
        {
          id: 'achievements',
          title: 'Cómo conseguir 50/50 y All or Nothing',
          paragraphs: [
            'Para 50/50, Steam solo exige ganar un coinflip. Para All or Nothing, Steam exige ir all in en una apuesta. La lista oficial no añade requisitos sobre el punto de impacto, un ciclo concreto ni una cantidad de victorias consecutivas.',
            'Si el logro no salta, confirma primero que juegas la versión completa de Steam con logros activos. La versión de navegador y las demos no tienen por qué reproducir cada sistema del lanzamiento final.',
          ],
          bullets: [
            '50/50 — gana un coinflip.',
            'All or Nothing — ve all in en una apuesta.',
            'No inventes requisitos ocultos sin una fuente reproducible.',
          ],
        },
        {
          id: 'strategy',
          title: 'Cómo pensar la apuesta dentro de la progresión',
          paragraphs: [
            'Bills Must Be Paid Double or Nothing forma parte de una economía donde el mismo dinero paga facturas y mejoras. La pregunta útil no es solo si puedes duplicar una cantidad, sino qué pasa con tu siguiente factura si pierdes esa cantidad.',
            'No publicamos una fórmula de apuesta óptima porque las páginas oficiales no exponen suficientes variables para demostrarla. Una regla prudente es proteger primero el dinero necesario para obligaciones inmediatas, leer los perks del build actual y después decidir cuánto riesgo aceptar.',
          ],
        },
        {
          id: 'unverified',
          title: 'Lo que esta guía no va a inventar',
          paragraphs: [
            'Podemos verificar el coin flip, los objetivos de los dos logros y que los jugadores están preguntando por probabilidades, puntería y Lucky Loss. No podemos verificar con documentación pública una fórmula RNG oculta, una técnica garantizada de golpear el centro ni una fórmula permanente de Lucky Loss.',
            'Si Rike Games publica notas o texto más explícito, la página se actualizará. Mientras tanto, la respuesta fiable es simple: gana un coinflip para 50/50, apuesta todo para All or Nothing y no uses una racha personal como prueba de cómo está programado todo el sistema.',
          ],
        },
      ],
      related: [
        { title: 'Piggy Shuffle', description: 'Otro reto con objetivo oficial y método comunitario claramente etiquetado.', href: '/guides/piggy-shuffle' },
        { title: 'Logros', description: 'Los 27 nombres y objetivos oficiales de Steam.', href: '/achievements' },
        { title: 'Bills Must Be Paid Coins', description: 'Monedas raras, Coin Collector y qué sabemos sobre Coin Rain.', href: '/wiki/coins' },
      ],
      sources: [
        { label: 'Steam Community — logros globales de Bills Must Be Paid', url: 'https://steamcommunity.com/stats/4421010/achievements/', note: 'Fuente principal de los objetivos 50/50 y All or Nothing.' },
        { label: 'Steam Community — debates de Bills Must Be Paid', url: 'https://steamcommunity.com/app/4421010/discussions/0/', note: 'Incluye preguntas actuales sobre Double or nothing, Coin Flip y Lucky Loss; son informes comunitarios.' },
        { label: 'Steam — Bills Must Be Paid', url: 'https://store.steampowered.com/app/4421010/Bills_Must_Be_Paid/', note: 'Descripción del juego completo y soporte de logros de Steam.' },
      ],
    },
  },
  coins: {
    en: {
      metaTitle: 'Bills Must Be Paid Coins - Rare Coins & Coin Collector',
      metaDescription:
        'Bills Must Be Paid Coins: what rare coins and Coin Collector are, where the collection fits, and why public sources do not yet confirm a Coin Rain mechanic.',
      eyebrow: 'Wiki',
      title: 'Bills Must Be Paid Coins: Rare Coins, Coin Collector & Coin Rain',
      description:
        'A source-checked reference for the coin-related terms players search: what Rike Games confirms about rare coins, what Steam requires for Coin Collector, and what we can responsibly say about “Coin Rain.”',
      imageAlt: 'Bills Must Be Paid rare coin collection screen',
      breadcrumbs: [
        { label: 'Wiki', href: '/wiki' },
        { label: 'Coins' },
      ],
      toc: [
        { label: 'Quick answer', href: '#quick-answer' },
        { label: 'Regular money vs rare coins', href: '#money-vs-rare' },
        { label: 'Coin Collector', href: '#coin-collector' },
        { label: 'Coin Rain', href: '#coin-rain' },
        { label: 'What official sources show', href: '#official' },
        { label: 'How to track the collection', href: '#tracking' },
        { label: 'Drop rates and farming', href: '#drop-rates' },
        { label: 'Version notes', href: '#version' },
      ],
      sections: [
        {
          id: 'quick-answer',
          title: 'Bills Must Be Paid Coins: the quick answer',
          paragraphs: [
            'Bills Must Be Paid Coins covers two coin ideas that should not be mixed together. Ordinary money is part of the run economy: piggies drop random loot, you use money for bills and upgrades, and different choices affect progression. Rare coins are a separate collection system that Rike Games explicitly advertises. Steam reinforces that system with the Coin Collector achievement, whose objective is to complete the full coin collection.',
            'There is also search interest around the phrase “Bills Must Be Paid Coin Rain.” The public first-party pages checked for this guide do not currently name a mechanic or skill called Coin Rain. Rike Games does explicitly name “rock rain” as an unusual skill-tree ability and separately shows coins flying and rare coins to collect. Because those are different things, this page will not silently rename Rock Rain to Coin Rain or invent a Coin Rain effect that the cited sources do not document.',
          ],
          bullets: [
            'Confirmed: piggies drop random loot and money drives bills and upgrades.',
            'Confirmed: Rike Games advertises rare coins as a collection feature.',
            'Confirmed: Coin Collector requires the full coin collection.',
            'Not confirmed in the public first-party pages reviewed here: a named mechanic called Coin Rain.',
          ],
        },
        {
          id: 'money-vs-rare',
          title: 'Bills Must Be Paid Coins: money and rare coins are different jobs',
          paragraphs: [
            'The normal money loop is central to Bills Must Be Paid. The official description says piggies spawn random loot, bills arrive, and money can be used on progression such as the skill tree and hammers. This currency is part of moment-to-moment decision making: spending on an upgrade can compete with the need to cover a bill, while random piggy loot means each run can produce a different amount.',
            'Rare coins serve a different purpose. Rike Games gives “Collect rare coins” its own feature heading and its official site shows a collection display among the game screenshots. That framing is closer to long-term collection than ordinary spendable cash. The public page does not give us a complete rare-coin table, fixed drop odds or a list of exactly which piggy produces each coin, so this reference keeps those details out until they can be verified.',
          ],
        },
        {
          id: 'coin-collector',
          title: 'How the Coin Collector achievement relates to Bills Must Be Paid Coins',
          paragraphs: [
            'Steam’s official achievement list contains Coin Collector with a direct objective: “Complete the full coin collection.” That is the cleanest public confirmation that rare coins are not just visual flavor. They form a defined completion set that Steam can recognize as finished.',
            'The objective does not publish a required number of coins, a guaranteed farming route, or a specific drop rate. If a guide claims an exact count or a best farm, it should show the current-version evidence behind that number. For this Bills Must Be Paid Coins page, the stable answer is the part Steam actually confirms: completing the collection is a formal 100-percent-completion goal.',
          ],
        },
        {
          id: 'coin-rain',
          title: 'What does “Bills Must Be Paid Coin Rain” refer to?',
          paragraphs: [
            'At the moment, the safest answer is that the public first-party documentation we reviewed does not define a named Coin Rain mechanic. The official Rike Games descriptions do define Rock Rain as an example of a stranger ability deeper in the skill tree. They also show coins flying during normal smashing and highlight rare coins as collectibles. Those visuals and names make “coin rain” understandable wording, but they are not enough to prove a separately named feature.',
            'If your current game build literally shows a node, perk or event called Coin Rain, treat the in-game text as version-specific evidence and check whether a patch introduced it after the public press material. Until we can verify that exact label from a first-party current source, this Bills Must Be Paid Coins guide keeps Coin Rain as an unresolved search term rather than fabricating damage, cooldown, unlock cost or drop behavior.',
          ],
        },
        {
          id: 'official',
          title: 'What official Bills Must Be Paid sources actually show about coins',
          paragraphs: [
            'Rike Games’ official game page labels one screenshot “Smashing piggy banks for coins,” another area “Rare coins to collect,” and the feature list includes “Collect rare coins.” The same page explains that every piggy can drop something different and uses Piñata as an example of unpredictable payout. These statements establish the connection between smashing, random loot and coin collection without revealing hidden loot tables.',
            'The Steam store repeats the random-loot loop and the rare-coin feature, while Steam achievements add Coin Collector. Taken together, those sources are enough to support a useful Bills Must Be Paid Coins reference page. They are not enough to support claims such as “rare coin X has a Y% chance from piggy Z,” so this page deliberately stops before those unsupported numbers.',
          ],
        },
        {
          id: 'tracking',
          title: 'How to track your rare coin collection',
          paragraphs: [
            'The official Rike Games site shows a dedicated collection view among its game screenshots, and the Steam achievement proves there is a completion state for the full set. The practical approach is therefore to use the current in-game Collection screen as your source of truth for which rare coins you already have and which slots remain incomplete.',
            'This matters when comparing old screenshots or demo guides. The full game launched after the browser and Steam demos, and Rike Games has documented that several progression systems changed between builds. A current Collection screen is more reliable than copying an old list whose slot count or unlock context may have changed.',
          ],
        },
        {
          id: 'drop-rates',
          title: 'Rare coin drop rates and farming: what is not verified',
          paragraphs: [
            'The public first-party pages used here say loot is random and rare coins are collectible, but they do not publish a complete rare-coin drop-rate table. That means we should not manufacture a “best piggy,” a guaranteed route or exact percentage just to make the Bills Must Be Paid Coins page look more complete. Any future farming table needs a source, a game version and enough attempts to make the method auditable.',
            'If community testing produces useful data, it can still be included—just like the slow-motion method on the Piggy Shuffle page—provided it is labeled as community evidence. The key is to keep observed farming results separate from Rike Games’ official mechanics so a patch does not turn an undocumented guess into stale misinformation.',
          ],
        },
        {
          id: 'version',
          title: 'Version notes for Bills Must Be Paid Coins',
          paragraphs: [
            'Bills Must Be Paid has existed as a browser build, demos and a full Steam release. The full game includes Steam achievements and deeper progression, so coin-collection advice should identify which build it describes. Coin Collector is specifically a Steam achievement, while the general rare-coin feature appears in Rike Games’ broader game materials.',
            'For now, this page focuses on claims that survive that version boundary: smashing produces random loot, rare coins are a documented collection feature, Steam tracks completion through Coin Collector, and no public first-party page in our current source set defines “Coin Rain” as a separate named mechanic. That gives searchers a direct answer without filling the gaps with invented stats.',
          ],
        },
      ],
      related: [
        { title: 'Skill Tree', description: 'The official upgrade examples include Rock Rain and an electrified hammer.', href: '/wiki/skill-tree' },
        { title: 'Achievements', description: 'Coin Collector appears in the complete official achievement list.', href: '/achievements' },
        { title: 'Double or Nothing', description: 'The source-checked coin-flip gamble and its 50/50 achievement.', href: '/guides/double-or-nothing' },
      ],
      sources: [
        { label: 'Rike Games — Bills Must Be Paid official game page', url: 'https://rikegames.com/bills-must-be-paid', note: 'Shows coins, rare coins, random loot and the collection as first-party game features.' },
        { label: 'Rike Games — Bills Must Be Paid press kit', url: 'https://rikegames.com/press/', note: 'First-party feature list including random loot, skill-tree examples and “Collect rare coins.”' },
        { label: 'Steam — Bills Must Be Paid', url: 'https://store.steampowered.com/app/4421010/Bills_Must_Be_Paid/', note: 'Current full-game description repeats the random-loot and rare-coin features.' },
        { label: 'Steam Community — Bills Must Be Paid global achievements', url: 'https://steamcommunity.com/stats/4421010/achievements/', note: 'Primary source for Coin Collector: complete the full coin collection.' },
      ],
    },
    zh: {
      metaTitle: 'Bills Must Be Paid Coins - 稀有硬币与 Coin Collector',
      metaDescription:
        'Bills Must Be Paid Coins：稀有硬币、Coin Collector、收藏系统分别是什么，以及为什么公开一方资料目前不能确认 Coin Rain 是独立机制。',
      eyebrow: '游戏百科',
      title: 'Bills Must Be Paid Coins：稀有硬币、Coin Collector 与 Coin Rain',
      description:
        '把玩家会搜的几个硬币概念分清：Rike Games 对 rare coins 的官方说明、Steam 的 Coin Collector 成就，以及 Coin Rain 这个搜索词目前到底能确认到什么。',
      imageAlt: 'Bills Must Be Paid 稀有硬币收藏界面',
      breadcrumbs: [
        { label: '游戏百科', href: '/wiki' },
        { label: '硬币' },
      ],
      toc: [
        { label: '直接答案', href: '#quick-answer' },
        { label: '普通钱与稀有硬币', href: '#money-vs-rare' },
        { label: 'Coin Collector', href: '#coin-collector' },
        { label: 'Coin Rain', href: '#coin-rain' },
        { label: '官方资料确认了什么', href: '#official' },
        { label: '如何查看收藏进度', href: '#tracking' },
        { label: '掉率与刷取', href: '#drop-rates' },
        { label: '版本说明', href: '#version' },
      ],
      sections: [
        {
          id: 'quick-answer',
          title: 'Bills Must Be Paid Coins：先把三个概念分开',
          paragraphs: [
            'Bills Must Be Paid Coins 至少包含两类不能混为一谈的硬币概念。普通金钱属于每局经济：存钱罐掉落随机 loot，钱用来付账单、买升级并推动流程。Rare coins 则是独立收藏系统，Rike Games 官方页面直接把 “Collect rare coins” 列为功能，Steam 还用 Coin Collector 成就确认“完成全部硬币收藏”是一项正式完成目标。',
            '另外，Google 用户还会搜索 Bills Must Be Paid Coin Rain。我们目前检查到的公开一方资料并没有把 Coin Rain 写成一个独立技能或机制。Rike Games 明确写过的是技能树中的 rock rain，同时另有飞出的普通硬币和 rare coins 收藏。本站不会把 Rock Rain 偷换成 Coin Rain，也不会为了补关键词虚构一个不存在于来源里的效果。',
          ],
          bullets: [
            '已确认：存钱罐有随机 loot，普通金钱用于账单与升级。',
            '已确认：Rike Games 明确存在 rare coins 收藏。',
            '已确认：Coin Collector 要求完成全部硬币收藏。',
            '目前未被公开一方资料确认：一个正式命名为 Coin Rain 的独立机制。',
          ],
        },
        {
          id: 'money-vs-rare',
          title: 'Bills Must Be Paid Coins：普通金钱和 rare coins 用途不同',
          paragraphs: [
            '普通金钱是 Bills Must Be Paid 主循环的一部分。官方描述明确说存钱罐生成随机掉落，账单会持续出现，钱还可以投入技能树和锤子。也就是说普通钱会在“先付账单还是先变强”之间产生机会成本，每一局因为随机掉落而可能有不同收入。',
            'Rare coins 更接近长期收藏。Rike Games 给它单独的功能标题，并在官网展示 Collection 画面。公开页面没有提供完整 rare coin 表、固定掉率或每枚硬币对应哪个存钱罐，因此本页不会自己补这些数字。',
          ],
        },
        {
          id: 'coin-collector',
          title: 'Coin Collector 与 Bills Must Be Paid Coins 的关系',
          paragraphs: [
            'Steam 官方成就 Coin Collector 的目标非常直接：Complete the full coin collection。这是目前最稳定的公开证据，说明 rare coins 不只是视觉装饰，而是一套有明确完成状态的收藏内容。',
            '这个成就文本没有公开需要多少枚、哪条路线最快、每枚硬币掉率多少。因此如果未来要做精确刷取表，就必须同时给出当前游戏版本和可复现来源，而不是从成就名称反推不存在的数据。',
          ],
        },
        {
          id: 'coin-rain',
          title: 'Bills Must Be Paid Coin Rain 到底是什么？',
          paragraphs: [
            '当前最负责任的回答是：我们查到的公开一方文档没有定义名为 Coin Rain 的机制。官方资料明确举例的是技能树深处的 Rock Rain，也明确展示砸存钱罐时硬币飞出以及 rare coins 收藏。玩家把画面或某个效果称为 coin rain 很容易理解，但这些信息不足以证明它是正式名称。',
            '如果你当前版本游戏内真的出现了 Coin Rain 节点、perk 或事件，应以游戏内原文作为版本证据，并继续核对是否为后续补丁新增。在确认前，本页不会编造它的伤害、冷却、解锁价格或掉落规则。',
          ],
        },
        {
          id: 'official',
          title: '官方资料对 Bills Must Be Paid Coins 到底写了什么',
          paragraphs: [
            'Rike Games 官网直接展示 “Smashing piggy banks for coins”“Rare coins to collect”，功能区也单列 Collect rare coins，同时说明每只存钱罐的随机掉落可能不同。Piñata 还是官方举出的随机收益例子。这些信息足够建立“砸罐—随机 loot—普通金钱—稀有硬币收藏”的关系。',
            'Steam 商店重复了 random loot 和 rare coins，Steam 成就则补上 Coin Collector。它们仍不足以支持“某硬币从某猪以固定百分比掉落”之类精确结论，所以这里明确停在来源能够证明的位置。',
          ],
        },
        {
          id: 'tracking',
          title: '怎样查看 rare coins 收藏进度',
          paragraphs: [
            'Rike Games 官方页面展示了 Collection 界面，而 Coin Collector 又说明收藏存在完整状态，所以最可靠的进度来源就是你当前版本里的 Collection 页面：已经点亮什么、还缺什么，以游戏内当前状态为准。',
            '这比复制旧 Demo 截图更稳妥。Bills Must Be Paid 从浏览器版本、Demo 到正式版有过系统变化，旧列表不一定能完整代表当前 Steam build。',
          ],
        },
        {
          id: 'drop-rates',
          title: 'Rare coin 掉率和刷取：现在不能乱填数字',
          paragraphs: [
            '公开一方页面确认 loot 随机、rare coins 可收藏，但没有公布完整掉率表。因此 Bills Must Be Paid Coins 页面不会为了看起来“详细”就写一个最佳存钱罐、固定掉率或保证路线。未来如果加入社区实测，也必须说明版本、样本和方法。',
            '社区数据不是不能用，Piggy Shuffle 的慢放方法就是例子；关键是必须明确标成社区证据，而不是伪装成 Rike Games 官方机制。这样补丁更新后也更容易判断哪些数字需要重测。',
          ],
        },
        {
          id: 'version',
          title: 'Bills Must Be Paid Coins 的版本边界',
          paragraphs: [
            'Bills Must Be Paid 先后存在浏览器 build、Demo 和正式 Steam 游戏。Coin Collector 明确属于 Steam Achievements，而 rare coins 作为整体功能在 Rike Games 更广泛的官方材料中就已经出现。因此阅读攻略时要区分“收藏机制存在”和“当前正式版具体掉率”这两类信息。',
            '目前最稳定的结论是：砸罐会产生随机 loot，rare coins 是官方收藏功能，Steam 用 Coin Collector 追踪完整收藏，而我们当前的一方来源没有定义独立的 Coin Rain 机制。这个答案可能比编一个掉率表短，但更经得住版本变化。',
          ],
        },
      ],
      related: [
        { title: '技能树', description: '官方升级示例中明确存在 Rock Rain 和电锤效果。', href: '/wiki/skill-tree' },
        { title: '成就', description: 'Coin Collector 位于完整的 Steam 官方成就列表。', href: '/achievements' },
        { title: 'Double or Nothing', description: '投硬币赌博、50/50 与 All or Nothing 的来源核查。', href: '/guides/double-or-nothing' },
      ],
      sources: [
        { label: 'Rike Games — Bills Must Be Paid 官方游戏页', url: 'https://rikegames.com/bills-must-be-paid', note: '展示普通硬币、rare coins、随机 loot 与 Collection。' },
        { label: 'Rike Games — Bills Must Be Paid Press Kit', url: 'https://rikegames.com/press/', note: '一方功能列表，包含 random loot、技能树示例和 Collect rare coins。' },
        { label: 'Steam — Bills Must Be Paid', url: 'https://store.steampowered.com/app/4421010/Bills_Must_Be_Paid/', note: '当前正式版对 random loot 与 rare coins 的说明。' },
        { label: 'Steam Community — Bills Must Be Paid 全球成就', url: 'https://steamcommunity.com/stats/4421010/achievements/', note: 'Coin Collector 目标的一方来源。' },
      ],
    },
    es: {
      metaTitle: 'Bills Must Be Paid Coins - Monedas Raras y Coin Collector',
      metaDescription:
        'Bills Must Be Paid Coins: monedas raras, Coin Collector, la colección y por qué las fuentes oficiales aún no confirman una mecánica llamada Coin Rain.',
      eyebrow: 'Wiki',
      title: 'Bills Must Be Paid Coins: Rare Coins, Coin Collector y Coin Rain',
      description:
        'Referencia basada en fuentes para separar el dinero normal, las monedas raras, el logro Coin Collector y lo que realmente puede afirmarse sobre la búsqueda “Coin Rain”.',
      imageAlt: 'Pantalla de colección de monedas raras de Bills Must Be Paid',
      breadcrumbs: [
        { label: 'Wiki', href: '/wiki' },
        { label: 'Monedas' },
      ],
      toc: [
        { label: 'Respuesta rápida', href: '#quick-answer' },
        { label: 'Dinero vs monedas raras', href: '#money-vs-rare' },
        { label: 'Coin Collector', href: '#coin-collector' },
        { label: 'Coin Rain', href: '#coin-rain' },
        { label: 'Qué muestran las fuentes', href: '#official' },
        { label: 'Cómo seguir la colección', href: '#tracking' },
        { label: 'Probabilidades y farmeo', href: '#drop-rates' },
        { label: 'Versiones', href: '#version' },
      ],
      sections: [
        {
          id: 'quick-answer',
          title: 'Bills Must Be Paid Coins: respuesta rápida',
          paragraphs: [
            'Bills Must Be Paid Coins abarca al menos dos conceptos distintos. El dinero normal forma parte de la economía de cada partida: las huchas dejan botín aleatorio y el dinero se usa para facturas y mejoras. Las rare coins son una colección separada que Rike Games anuncia de forma explícita. Steam refuerza esa función con el logro Coin Collector, cuyo objetivo es completar toda la colección de monedas.',
            'También existe interés de búsqueda por “Bills Must Be Paid Coin Rain”. Las páginas públicas de primera parte revisadas para esta guía no nombran actualmente una mecánica llamada Coin Rain. Rike Games sí nombra Rock Rain como ejemplo de habilidad del árbol y, por separado, muestra monedas volando y monedas raras coleccionables. Esta página no cambia Rock Rain por Coin Rain ni inventa un efecto que las fuentes no documentan.',
          ],
          bullets: [
            'Confirmado: las huchas dejan botín aleatorio y el dinero alimenta facturas y mejoras.',
            'Confirmado: Rike Games presenta las rare coins como función de colección.',
            'Confirmado: Coin Collector exige completar toda la colección.',
            'No confirmado en las páginas oficiales revisadas: una mecánica con el nombre Coin Rain.',
          ],
        },
        {
          id: 'money-vs-rare',
          title: 'Bills Must Be Paid Coins: dinero normal y rare coins tienen funciones distintas',
          paragraphs: [
            'El dinero normal es central en Bills Must Be Paid. La descripción oficial dice que las huchas generan botín aleatorio, que las facturas llegan y que el dinero puede invertirse en el árbol de habilidades y martillos. Cada gasto compite con otras necesidades de progresión y la aleatoriedad del botín cambia lo que produce una partida.',
            'Las rare coins se presentan como colección a largo plazo. Rike Games les da un apartado propio y muestra una pantalla Collection. La documentación pública no ofrece una tabla completa de monedas, porcentajes fijos ni una lista de qué hucha entrega cada una, así que no rellenamos esos huecos con cifras inventadas.',
          ],
        },
        {
          id: 'coin-collector',
          title: 'Coin Collector y Bills Must Be Paid Coins',
          paragraphs: [
            'La lista oficial de logros de Steam incluye Coin Collector con un objetivo directo: “Complete the full coin collection”. Es la confirmación pública más clara de que las rare coins forman un conjunto con estado de finalización y no son solo decoración.',
            'El logro no publica el número necesario, una ruta garantizada ni probabilidades de caída. Cualquier tabla futura debe mostrar versión y evidencia reproducible. Lo estable es lo que Steam confirma: completar la colección es un objetivo formal de finalización.',
          ],
        },
        {
          id: 'coin-rain',
          title: '¿Qué significa “Bills Must Be Paid Coin Rain”?',
          paragraphs: [
            'Por ahora, la respuesta responsable es que la documentación pública de primera parte revisada no define Coin Rain como nombre de una mecánica. Rike Games sí menciona Rock Rain como habilidad extraña más profunda en el árbol, además de mostrar monedas que vuelan al romper huchas y una colección de rare coins.',
            'Si tu versión actual muestra literalmente un nodo, perk o evento llamado Coin Rain, el texto del juego sería evidencia específica de versión y convendría comprobar si llegó con un parche posterior. Hasta verificar esa etiqueta, esta página no inventa daño, enfriamiento, coste de desbloqueo ni comportamiento de drops.',
          ],
        },
        {
          id: 'official',
          title: 'Qué muestran realmente las fuentes oficiales sobre las monedas',
          paragraphs: [
            'La página oficial de Rike Games etiqueta imágenes como “Smashing piggy banks for coins” y “Rare coins to collect”, y el listado de funciones incluye Collect rare coins. También explica que cada hucha puede dejar botín diferente y usa Piñata como ejemplo de recompensa impredecible. Eso conecta golpeo, botín aleatorio y colección sin revelar tablas ocultas.',
            'Steam repite el bucle de random loot y rare coins, mientras que los logros añaden Coin Collector. Es suficiente para una referencia útil de Bills Must Be Paid Coins, pero no para afirmar porcentajes exactos de una moneda concreta.',
          ],
        },
        {
          id: 'tracking',
          title: 'Cómo seguir la colección de monedas raras',
          paragraphs: [
            'Rike Games muestra una vista Collection y Coin Collector demuestra que existe un estado de colección completa. Por eso la pantalla Collection del build actual es la mejor fuente para saber qué rare coins tienes y qué huecos faltan.',
            'Esto es más fiable que copiar capturas antiguas de una demo. Bills Must Be Paid cambió sistemas entre navegador, demo y lanzamiento completo, así que una lista vieja puede no representar exactamente el Steam actual.',
          ],
        },
        {
          id: 'drop-rates',
          title: 'Drop rates y farmeo: lo que aún no está verificado',
          paragraphs: [
            'Las fuentes oficiales dicen que el botín es aleatorio y que las rare coins se coleccionan, pero no publican una tabla completa de probabilidades. Esta página de Bills Must Be Paid Coins no va a fabricar una “mejor hucha”, una ruta garantizada o porcentajes para parecer más completa.',
            'Los datos comunitarios pueden añadirse cuando sean útiles, siempre con versión, muestra y etiqueta clara. Así se mantiene separada la observación de jugadores de una mecánica oficial y se puede volver a probar después de un parche.',
          ],
        },
        {
          id: 'version',
          title: 'Notas de versión para Bills Must Be Paid Coins',
          paragraphs: [
            'Bills Must Be Paid ha tenido versión de navegador, demos y lanzamiento completo en Steam. Coin Collector pertenece a los Steam Achievements, mientras que las rare coins aparecen como función en materiales más amplios de Rike Games. Una guía debe distinguir la existencia del sistema de colección de las probabilidades concretas de un build.',
            'La conclusión estable hoy es: las huchas generan botín aleatorio, las rare coins son una colección oficial, Steam registra su finalización con Coin Collector y las fuentes públicas revisadas no definen Coin Rain como mecánica separada. Ese límite evita convertir una búsqueda popular en estadísticas inventadas.',
          ],
        },
      ],
      related: [
        { title: 'Árbol de habilidades', description: 'Los ejemplos oficiales incluyen Rock Rain y martillo electrificado.', href: '/wiki/skill-tree' },
        { title: 'Logros', description: 'Coin Collector aparece en la lista completa de logros oficiales.', href: '/achievements' },
        { title: 'Double or Nothing', description: 'La apuesta de coin flip y los logros 50/50 y All or Nothing.', href: '/guides/double-or-nothing' },
      ],
      sources: [
        { label: 'Rike Games — página oficial de Bills Must Be Paid', url: 'https://rikegames.com/bills-must-be-paid', note: 'Muestra monedas, rare coins, random loot y Collection.' },
        { label: 'Rike Games — press kit de Bills Must Be Paid', url: 'https://rikegames.com/press/', note: 'Lista de funciones de primera parte con random loot, ejemplos del árbol y Collect rare coins.' },
        { label: 'Steam — Bills Must Be Paid', url: 'https://store.steampowered.com/app/4421010/Bills_Must_Be_Paid/', note: 'Descripción actual del juego completo con random loot y rare coins.' },
        { label: 'Steam Community — logros globales de Bills Must Be Paid', url: 'https://steamcommunity.com/stats/4421010/achievements/', note: 'Fuente principal del objetivo Coin Collector.' },
      ],
    },
  },
};

export function getValidatedSearchPage(
  key: ValidatedSearchPageKey,
  locale: string
): ValidatedSearchPage {
  const normalized: Locale = locale === 'zh' || locale === 'es' ? locale : 'en';
  return pages[key][normalized];
}
