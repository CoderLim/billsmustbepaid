import type { GamePageLocaleBundle } from './types';

export const zhGamePages = {
  common: {
    play: '开始游戏',
    playNow: '立即游玩',
    guides: '攻略',
    beginnerGuide: '新手攻略',
    prestigeBankruptcy: '转生与破产',
    piggyShuffle: 'Piggy Shuffle',
    demoVsFullGame: 'Demo 与完整版',
    wiki: 'Wiki',
    piggyBanks: '存钱罐',
    hammers: '锤子',
    skillTree: '技能树',
    achievements: '成就',
    tierLists: 'Tier List',
    sourceChecked: '已核对来源',
    updated: '更新于 2026 年 8 月 8 日',
    screenshotCaption: 'Bills Must Be Paid 官方截图，来源为 Rike Games / Steam。',
    onThisPage: '本页内容',
    relatedPages: '相关页面',
    originalSources: '原始资料来源',
    sourcesIntro:
      '本页事实优先依据 Rike Games、Steam 商店、开发者公告和官方成就等一手资料；玩家社区技巧会明确标注，不会被写成官方机制。',
  },
  pages: {
    guides: {
      metaTitle: 'Bills Must Be Paid 攻略 - 新手、转生与挑战',
      metaDescription:
        'Bills Must Be Paid 攻略中心：新手玩法、转生破产、Piggy Shuffle、技能树、锤子与成就，内容均标注可靠来源。',
      eyebrow: '攻略',
      title: 'Bills Must Be Paid 攻略大全',
      description:
        '从核心玩法到转生、破产和具体挑战，这里把 Bills Must Be Paid 的攻略按真实玩家问题组织，并区分官方事实与社区经验。',
      imageAlt: 'Bills Must Be Paid 游戏中等待被敲碎的存钱罐',
      breadcrumbs: ['攻略'],
      toc: [
        '从这里开始',
        '进度与成长攻略',
        '挑战攻略',
        '我们如何核实攻略',
        '如何使用这些攻略',
        '版本差异为什么重要',
        '攻略证据标准',
      ],
      related: [
        {
          title: 'Bills Must Be Paid Wiki',
          description: '查看存钱罐、锤子、技能树等系统的资料型页面。',
        },
        {
          title: '成就',
          description: '查看 Steam 上 27 个官方成就及目标。',
        },
        {
          title: 'Demo 与完整版',
          description: '确认免费 Demo 与 7 月 29 日完整版之间的变化。',
        },
      ],
      sources: [
        {
          label: 'Rike Games — Bills Must Be Paid 官方 Press Kit',
          note: '用于核对核心循环、技能树、存钱罐、锤子和稀有硬币等基础信息。',
        },
        {
          label: 'Steam — Bills Must Be Paid',
          note: '用于核对完整版功能、发布日期和当前商店描述。',
        },
        {
          label: 'Steam Community — Bills Must Be Paid',
          note: '用于核对开发者发布的上线、破产/转生和 Demo 到完整版变化说明。',
        },
      ],
      sections: [
        {
          id: 'start-here',
          title: 'Bills Must Be Paid 新手应该从哪里开始',
          paragraphs: [
            '第一次玩 Bills Must Be Paid，最重要的不是先找“最强锤子”，而是理解游戏的资源循环：主动挥动锤子敲碎存钱罐，消耗体力，获得金钱和随机掉落，然后在账单与升级之间分配资源。只要这个循环没有理解清楚，后面的技能树、装备或转生建议都容易脱离实际。',
            '因此攻略中心把新手攻略放在第一入口。先理解体力为什么限制一轮游戏、账单为什么构成压力、支付后如何推进进度，再去研究锤子、技能树和完整版的破产系统。Bills Must Be Paid 的很多系统互相影响，按这个顺序阅读会比单独记住某个技巧更有效。',
          ],
          bullets: [
            '先读新手攻略，掌握敲存钱罐、体力、账单与升级的关系。',
            '准备从 Demo 转向完整版时，再看 Demo 与完整版差异。',
            '遇到具体系统问题，再进入对应 Wiki 页面。',
          ],
        },
        {
          id: 'progression',
          title: 'Bills Must Be Paid 的进度与成长攻略',
          paragraphs: [
            'Bills Must Be Paid 的成长并不只有“本轮赚更多钱”。完整版把账单、破产、新周期以及戒指和手镯等持续成长系统连接起来。开发者在上线前后的说明中使用过 Prestige Points 和 legacy points 两种说法，因此本站保留版本语境，不把不同时间的一手资料强行改写成同一个术语。',
            '如果你卡在“破产后发生什么”“为什么要重新开始”“永久成长从哪里来”，应该直接阅读转生与破产攻略。若问题是某次升级应该如何理解，则技能树和锤子 Wiki 更合适。Bills Must Be Paid 攻略的目标是让每个页面回答一个明确问题，而不是把同样的介绍复制到所有内页。',
          ],
        },
        {
          id: 'challenges',
          title: 'Bills Must Be Paid 的挑战与完成度攻略',
          paragraphs: [
            'Bills Must Be Paid 的 Steam 成就不仅记录长期进度，也包含准确率、多目标击碎、Piggy Shuffle、赌博、贷款、收藏和全技能树等具体目标。面对这类挑战时，最可靠的起点是官方成就描述，因为它直接说明 Steam 在追踪什么，而不是依赖玩家对隐藏规则的猜测。',
            'Piggy Shuffle 是一个典型例子。官方成就只确认需要在 Piggy Shuffle 中选对存钱罐，而更具体的慢动作录像方法来自 Steam Community 玩家指南。本站会把这种方法写成“社区技巧”，不会包装成 Rike Games 官方机制。这样既保留实用性，也避免把未经证实的方法永久写进 Bills Must Be Paid 规则。',
          ],
        },
        {
          id: 'verification',
          title: '我们如何核实 Bills Must Be Paid 攻略',
          paragraphs: [
            'Bills Must Be Paid 的事实优先从 Rike Games 官方 Press Kit、Steam 商店页、开发者公告和官方 Steam 成就中核对。不同来源负责不同信息：Press Kit 更适合确认设计意图和基础系统，Steam 商店页适合确认当前完整版功能，开发者公告适合确认版本变化和补丁，成就页适合确认正式完成目标。',
            '当一手资料没有给出完整锤子数值、隐藏掉率或全部技能节点时，攻略不会为了“看起来完整”而补出数字。社区测试可以提供方向，但需要被标记为测试或玩家经验。对于 Bills Must Be Paid 这种刚上线且仍可能调整平衡的游戏，留下“暂未公开”比制造一个看似精确的表格更可靠。',
          ],
          bullets: [
            '机制与版本事实优先使用一手资料。',
            '开发者公告用于记录 Demo 与完整版之间的变化。',
            '社区技巧会明确标注来源和证据等级。',
            '没有完整数据时，不虚构 S/A/B 排名或隐藏概率。',
          ],
        },
        {
          id: 'guide-roadmap',
          title: '如何使用 Bills Must Be Paid 攻略矩阵',
          paragraphs: [
            '这套 Bills Must Be Paid 攻略按“玩家接下来要做什么”组织。新手攻略解释整体循环；转生与破产攻略解决周期重置和长期成长；Piggy Shuffle 页面只处理该挑战；Wiki 则保存锤子、存钱罐和技能树的资料。这样可以减少多个页面对同一段基础介绍的重复，也更利于搜索用户直接进入答案。',
            '如果你的问题是“这个系统是什么”，优先进入 Wiki；如果问题是“我下一步应该怎么做”，优先进入攻略。比如想知道锤子有哪些可靠比较维度，应看锤子 Wiki；想知道在完整游戏循环里何时考虑锤子升级，应先看新手攻略。Bills Must Be Paid 的内容因此形成互相链接但职责明确的主题集群。',
          ],
        },
        {
          id: 'guide-version-context',
          title: '为什么 Bills Must Be Paid 攻略必须标记版本',
          paragraphs: [
            'Bills Must Be Paid 同时存在浏览器版本、itch.io HTML5 Demo、Steam Demo 和 Steam 完整版。Steam Demo 于 2026 年 4 月 21 日发布，完整版于 2026 年 7 月 29 日发布。Rike Games 明确表示 Demo 存档不会转移，并指出完整版调整了转生、破产、部分技能节点、平衡和底层系统。',
            '这意味着一篇 Demo 时期的攻略可能仍然准确描述核心敲击玩法，却不适合直接解释完整版的长期成长。锤子平衡也可能随着补丁改变。本站在 Bills Must Be Paid 攻略里保留发布日期和来源语境，就是为了避免把“当时正确”的内容无条件当成“现在仍正确”。',
          ],
        },
        {
          id: 'guide-evidence',
          title: 'Bills Must Be Paid 攻略的证据标准',
          paragraphs: [
            '一个有价值的 Bills Must Be Paid 攻略应该回答真实问题，同时让读者知道答案来自哪里。官方资料是基础层；开发者公告用来补充版本变化；Steam Community 可以提供玩家实践，但需要明确说明它不是官方设计文档。对于数值型结论，还应当标注游戏版本、测试方法和检查日期。',
            '这种做法也能降低内容过时后的维护成本。某个锤子被调整时，只需要更新相关比较，而不必让整站的无来源排名一起失效。Bills Must Be Paid 页面会尽量保留可复查的事实，并把分析、社区技巧和官方规则分开，这比堆砌大量未经验证的数据更适合长期 SEO。',
          ],
        },
      ],
    },
    'beginner-guide': {
      metaTitle: 'Bills Must Be Paid 新手攻略 - 玩法与升级指南',
      metaDescription:
        'Bills Must Be Paid 新手攻略：敲存钱罐、体力、账单、Perk、锤子、技能树、破产与收藏，一次看懂完整循环。',
      eyebrow: '新手攻略',
      title: 'Bills Must Be Paid 新手攻略',
      description:
        '从第一轮开始理解 Bills Must Be Paid：如何敲存钱罐、管理体力、处理账单、选择升级，并逐步进入完整版的破产与长期成长。',
      imageAlt: 'Bills Must Be Paid 官方画面中的锤子与存钱罐',
      breadcrumbs: ['攻略', '新手攻略'],
      toc: [
        '先理解核心循环',
        '账单与 Perk',
        '技能树',
        '锤子',
        '破产成长',
        '收藏目标',
        '新手优先级',
        '如何理解各系统',
        '下一步学什么',
      ],
      related: [
        { title: '转生与破产', description: '理解周期重置和戒指、手镯等持续成长。' },
        { title: '锤子', description: '查看官方确认的锤子取舍和已公布平衡变化。' },
        { title: '技能树', description: '查看 Rike Games 已公开的升级方向与示例。' },
      ],
      sources: [
        { label: 'Rike Games — Bills Must Be Paid 官方 Press Kit' },
        { label: 'Steam — Bills Must Be Paid' },
        { label: 'Steam Community — Bills Must Be Paid 开发者公告' },
      ],
      sections: [
        {
          id: 'core-loop',
          title: '1. 先理解 Bills Must Be Paid 的核心循环',
          paragraphs: [
            'Rike Games 将 Bills Must Be Paid 描述为主动式 incremental game。你需要移动锤子并主动敲碎存钱罐，每次攻击都会消耗体力；存钱罐被击碎后会提供金钱和随机掉落。体力耗尽意味着这一轮自然结束，所以玩家不是被动等待数值增长，而是在有限时间里决定攻击哪些目标。',
            '新手最容易犯的错误，是把所有注意力放在单次伤害，而忽略资源流向。Bills Must Be Paid 的一轮游戏实际上是“敲击—消耗体力—获得资源—支付账单—购买升级—进入下一轮”。理解这个顺序之后，你才知道为什么有时应保留资金，有时应升级锤子或技能，而不是看到钱就立刻花掉。',
          ],
          bullets: [
            '敲碎存钱罐是获得金钱和掉落的主要主动行为。',
            '每次攻击消耗体力，因此每轮都有自然上限。',
            '本轮收入同时要面对账单和升级两类用途。',
          ],
        },
        {
          id: 'bills',
          title: '2. Bills Must Be Paid 的账单不是普通得分目标',
          paragraphs: [
            '账单是 Bills Must Be Paid 把短局与长期进度连接起来的压力系统。官方描述持续强调按时支付账单的重要性，支付后可以推进进度并触发 Perk 选择；在完整版中，忽略或无法支付账单还会进入破产相关流程。因此“先升级还是先留钱付账单”本身就是核心决策。',
            '如果你正在玩浏览器版或 Steam Demo，不应默认完整版所有破产和转生规则都完全相同。Rike Games 在上线时明确说过，完整版改变了转生、破产、部分技能树节点和平衡，并且 Demo 存档不转移。新手在参考攻略时，先确认版本可以避免把正确的 Demo 建议错误套到完整版。',
          ],
        },
        {
          id: 'skill-tree',
          title: '3. Bills Must Be Paid 技能树改变后续每一轮',
          paragraphs: [
            'Bills Must Be Paid 技能树并不是只有“加伤害”。Rike Games 公开提到握力、咖啡因、健身、手腕、幸运等方向，也展示了落石、电击锤等更特殊的效果。这说明技能树既能改变基础能力，也可能加入新的行为机制，所以新手应先理解节点作用类别，再考虑路线。',
            '公开资料并没有提供所有当前节点的完整数值表，而且开发者确认完整版改动过部分节点。因此本站不会给新手一个看似绝对的“固定最优路线”。更稳妥的做法是观察你当前最缺的是伤害、体力、恢复、覆盖或其他能力，再结合当前版本选择升级。具体资料可继续查看技能树 Wiki。',
          ],
        },
        {
          id: 'hammers',
          title: '4. Bills Must Be Paid 的锤子是取舍，不是线性升级',
          paragraphs: [
            '官方描述明确把锤子放在暴击率、攻击范围、速度和伤害几个维度上比较。某把锤子可以拥有更高暴击率但较小范围，另一把则可能速度更快、覆盖更大但单次伤害更低。因此 Bills Must Be Paid 的“最好锤子”必须先说明场景和比较标准，而不是只看一个数字。',
            '开发者补丁还证明锤子平衡会变化：Demo Bug Fix v0.2.7 曾明确调整 Ultracrit-Hammer 的范围和 Toy-Hammer 的攻击速度。新手应该把任何 Tier List 当成带版本的分析，而不是永久真理。当前最可靠的是先理解官方确认的比较维度，再根据实际版本和自己的玩法进行选择。',
          ],
        },
        {
          id: 'bankruptcy',
          title: '5. Bills Must Be Paid 完整版会通过破产进入新周期',
          paragraphs: [
            '完整版的 Bills Must Be Paid 把破产纳入长期进度。开发者上线前说明称，未能处理账单会导致破产并开启新的周期，而破产前你在账单上支付的金额会与后续成长点数有关。当前 Steam 描述使用 legacy points，一份较早的公告则使用 Prestige Points，两个术语都应放在具体版本语境中理解。',
            '这些点数与戒指、手镯等持续成长系统连接。官方成就 Fresh Start 要求“宣告破产并开始新周期”，Prestige Jewelry 则要求解锁全部戒指和手镯，进一步确认破产并不是单纯失败画面。对新手而言，重点不是第一次破产时追求完美，而是先明白它属于完整版循环的一部分。',
          ],
        },
        {
          id: 'collections',
          title: '6. 存钱罐和稀有硬币也是 Bills Must Be Paid 的完成目标',
          paragraphs: [
            'Rike Games 说明不同存钱罐会拥有不同移动方式、价值或特殊效果，游戏也包含稀有硬币收集。Steam 成就进一步确认 Piggy Bank Collector 要求解锁全部存钱罐，Coin Collector 要求完成完整硬币收藏。这些目标让“发现更多类型”成为正式进度，而不仅是视觉变化。',
            '因此新手不必在第一轮就记住所有存钱罐，但应知道目标价值会随着类型发生变化。某些存钱罐更活跃，某些更被动，部分可能提供更高收益或恢复体力。Bills Must Be Paid 的目标选择会影响体力利用效率，等你熟悉基础循环后，再进入存钱罐 Wiki 查看已经有来源支持的行为说明。',
          ],
        },
        {
          id: 'beginner-priorities',
          title: 'Bills Must Be Paid 新手的三个优先级',
          paragraphs: [
            '第一优先级是稳定完成主动循环：能持续命中目标并理解体力消耗。第二优先级是让账单意识进入每次消费决策，不要把全部收入都当成可自由升级的钱。第三优先级才是比较技能和锤子，因为这些系统只有放回完整循环里，才能判断一次升级是否真的改善下一轮。',
            'Bills Must Be Paid 的设计让短期收益与长期成长不断竞争。你可能为了立即提高敲击效率而买升级，也可能为了确保账单而保留现金；完整版还要考虑破产后的持续成长。新手阶段无需一次性优化全部系统，只要能清楚解释“我为什么花这笔钱”，就已经比盲目追求单一 Tier List 更接近正确方向。',
          ],
        },
        {
          id: 'beginner-read-systems',
          title: '新手应该如何阅读 Bills Must Be Paid 的系统信息',
          paragraphs: [
            '看到技能树、锤子或存钱罐数据时，先区分“官方确认的事实”和“玩家分析”。例如暴击率、范围、速度和伤害是官方明确用于比较锤子的维度；某个具体锤子在所有场景都属于 S 级，则需要完整当前数值和测试方法才能成立。Bills Must Be Paid 的版本变化让这种区分尤其重要。',
            '同样，社区技巧也可以很有用，但应保留标签。Piggy Shuffle 的慢动作录像法就是玩家提出的实用方法，而不是开发者正式公布的隐藏机制。本站把这些信息放在对应指南中，并说明证据来源。这样新手既能获得可操作建议，又不会把社区经验误记成 Bills Must Be Paid 的固定规则。',
          ],
        },
        {
          id: 'beginner-next-steps',
          title: '读完 Bills Must Be Paid 新手攻略后该看什么',
          paragraphs: [
            '如果你已经掌握核心循环，下一页应由当前阻塞决定：不理解破产与重置，去看转生与破产；不确定装备差异，去看锤子 Wiki；想研究升级方向，去看技能树；目标是 100% 完成，则用成就页作为总清单。这样每个 Bills Must Be Paid 内页都解决一个更具体的问题。',
            '如果你来自浏览器版或 Steam Demo，建议在深入完整版攻略前先读 Demo 与完整版对比。它会明确 2026 年 4 月 21 日 Demo 和 7 月 29 日完整版的时间边界、存档不互通，以及开发者确认发生变化的系统。版本判断做对之后，其余 Bills Must Be Paid 攻略才更容易保持准确。',
          ],
        },
      ],
    },
    'prestige-bankruptcy': {
      metaTitle: 'Bills Must Be Paid 转生与破产攻略',
      metaDescription:
        'Bills Must Be Paid 转生与破产攻略：新周期、Prestige/legacy points、戒指、手镯以及 Demo 存档不转移的原因。',
      eyebrow: '进度攻略',
      title: 'Bills Must Be Paid 转生与破产攻略',
      description:
        '依据一手资料解释 Bills Must Be Paid 中未付账单、破产、新周期、长期成长点数以及戒指和手镯之间的关系。',
      imageAlt: 'Bills Must Be Paid 账单支付界面',
      breadcrumbs: ['攻略', '转生与破产'],
      toc: [
        '什么会触发破产',
        '新周期意味着什么',
        'Prestige Points 与 legacy points',
        '戒指与手镯',
        'Demo 存档提醒',
        '完整转生循环',
        '点数与首饰成长',
        '版本说明',
      ],
      related: [
        { title: '新手攻略', description: '先理解破产在整个游戏循环里的位置。' },
        { title: 'Demo 与完整版', description: '完整版改动较大，因此 Demo 存档不会转移。' },
        { title: '成就', description: '查看 Fresh Start、Prestige Jewelry 等官方目标。' },
      ],
      sources: [
        {
          label: 'Steam — Bills Must Be Paid',
          note: '当前完整版描述使用 legacy points，并说明破产后的戒指/手镯成长。',
        },
        {
          label: 'Steam Community — Bills Must Be Paid 开发者公告',
          note: '6 月公告说明破产、新周期和 Prestige Points；上线公告解释 Demo 存档不转移。',
        },
        {
          label: 'Steam Community — 官方成就',
          note: 'Fresh Start 明确要求宣告破产并开始新的周期。',
        },
      ],
      sections: [
        {
          id: 'trigger',
          title: '什么会触发 Bills Must Be Paid 的破产',
          paragraphs: [
            '在 Bills Must Be Paid 完整版中，官方 Steam 文案把未能处理账单与破产直接联系起来。破产不是孤立的“游戏结束”标签，而是后续成长循环的入口。开发者在上线前说明中进一步解释，失败的账单会让玩家进入新的周期，因此账单本身就是连接短局和长期进度的关键系统。',
            '这也意味着玩家不应该只把当前现金看成升级预算。越接近账单期限，保留资金的价值越高；如果账单最终失败，破产会改变接下来的进度状态。Bills Must Be Paid 的风险来自这种资源竞争，而不是简单地让玩家无限敲存钱罐直到数值变大。',
          ],
        },
        {
          id: 'cycle',
          title: 'Bills Must Be Paid 的破产会开启新周期',
          paragraphs: [
            'Steam 官方成就 Fresh Start 提供了非常直接的证据：目标是“Declare bankruptcy and start a new cycle”。这句话确认破产与新周期之间的关系，不需要根据玩家行为进行推测。对完整版本而言，失败因此可以成为进入下一阶段成长的结构性事件，而不仅是重新加载。',
            '新周期并不表示前面的所有努力都没有意义。开发者资料把破产前的账单支付与后续成长点数连接起来，并让这些点数进入持续成长系统。Bills Must Be Paid 因此同时保留短期压力和长期积累：这一轮能支付多少、何时进入下一周期，都会影响玩家如何看待“失败”。',
          ],
        },
        {
          id: 'points',
          title: 'Prestige Points 与 legacy points 为什么同时出现',
          paragraphs: [
            'Rike Games 在 6 月的上线前公告中使用 Prestige Points，说明破产前向账单支付得越多，就会获得更多相关成长点数。当前 Steam 商店文案则使用 legacy points 描述破产后的长期成长资源。两个名称来自不同时间的一手资料，因此本站不会把其中一个静默替换成另一个。',
            '从公开信息可以可靠确认的是结构关系：支付账单、破产、新周期和持续成长资源彼此连接。至于最终版本内部是否把两个术语完全视为同一个正式名称，应以当前游戏 UI 为准。Bills Must Be Paid 攻略保留术语差异，可以帮助读者理解为什么旧公告和新商店页会出现不同说法。',
          ],
        },
        {
          id: 'jewelry',
          title: 'Bills Must Be Paid 的点数会用于戒指和手镯',
          paragraphs: [
            '官方资料把破产后的持续成长与戒指、手镯联系起来，并说明这些首饰可以升级手部能力并提供独特 Perk。Steam 成就 Prestige Jewelry 还要求玩家解锁所有戒指和手镯，因此首饰既是长期成长的一部分，也是 100% 完成度的一部分。',
            '公开资料目前不足以支持一个完整、带版本的首饰购买顺序。要声称“永远先买某个戒指”，至少需要当前所有首饰、效果、成本和机会成本。Bills Must Be Paid 本页因此只给出已经确认的结构信息，不用猜测数值填补缺口。等可靠数据更完整时，再讨论购买优先级会更有意义。',
          ],
        },
        {
          id: 'demo-save',
          title: 'Bills Must Be Paid Demo 存档不会转移到完整版',
          paragraphs: [
            'Rike Games 在 2026 年 7 月 29 日上线当天明确表示，Demo 存档无法带入完整版。开发者给出的原因包括转生与破产机制变化、部分技能树节点变化、平衡调整和底层系统改动。这不是普通的跨平台存档限制，而是版本结构已经发生明显变化。',
            '如果你在浏览器 Demo 或 Steam Demo 中投入了较长时间，应把完整版视为新的进度起点。Demo 仍然很适合学习 Bills Must Be Paid 的核心敲击、体力、账单和升级循环，但涉及破产后成长时，应优先使用完整版资料。旧攻略并非一定错误，只是必须先判断它描述的是哪个版本。',
          ],
        },
        {
          id: 'prestige-loop',
          title: 'Bills Must Be Paid 转生循环如何嵌入账单系统',
          paragraphs: [
            'Bills Must Be Paid 的转生不能脱离账单单独理解。你先通过主动敲击获得资源，再把资源投入账单与升级；当账单失败导致破产时，游戏进入新周期，同时把此前的部分进度连接到长期成长。正因为如此，破产前完成多少账单支付，会成为玩家规划这一周期的重要变量。',
            'Fresh Start 成就确认新周期，Prestige Jewelry 确认首饰完成目标，两者一起说明破产和转生并非隐藏边缘机制。Bills Must Be Paid 的长期设计是让玩家在短期“付得起账单”和长期“让下一周期更强”之间不断做选择。理解这层关系后，破产就不再只是负面事件，而是整个完整版本的一部分。',
          ],
        },
        {
          id: 'prestige-jewelry',
          title: 'Bills Must Be Paid 的长期点数、戒指与手镯',
          paragraphs: [
            '戒指和手镯是目前一手资料中最明确的持续成长目的地。它们在破产后继续影响后续周期，并可提供独特能力。对想完成所有成就的玩家，首饰还承担收藏目标，因为 Prestige Jewelry 要求全部解锁。Bills Must Be Paid 因此把数值成长与完成度目标放在同一个系统中。',
            '本站不会在缺乏完整首饰表的情况下制造“最佳戒指 Tier List”。如果未来能获得当前版本的全部效果、价格和更新记录，就可以建立带版本的比较。现阶段最可靠的结论仍然是：账单支付影响破产前进度，破产开启新周期，长期点数用于首饰，而首饰会持续影响后续 Bills Must Be Paid 玩法。',
          ],
        },
        {
          id: 'prestige-version',
          title: '为什么 Bills Must Be Paid 转生攻略必须带版本说明',
          paragraphs: [
            '转生是 Demo 与完整版差异最明显的系统之一。开发者明确说完整版改变了转生和破产，因此任何早于 2026 年 7 月 29 日的 Bills Must Be Paid 转生说明，都应该先确认它对应 Demo 还是最终版本。即便旧指南在发布时完全正确，也可能无法覆盖上线后的完整循环。',
            '后续如果 Rike Games 再发布平衡或成长调整，本页也应按照版本继续更新，而不是把旧结论悄悄改成新结论。保留时间、术语和来源可以让玩家知道某条建议为什么发生变化。对于 Bills Must Be Paid 这类刚进入完整版阶段的游戏，版本化比一个永远不变的“最终答案”更可信。',
          ],
        },
      ],
    },
    'piggy-shuffle': {
      metaTitle: 'Bills Must Be Paid Piggy Shuffle 攻略',
      metaDescription:
        'Bills Must Be Paid Piggy Shuffle 攻略：Eyes on the Piggy 官方目标，以及明确标注为社区方法的慢动作录像技巧。',
      eyebrow: '挑战攻略',
      title: 'Bills Must Be Paid Piggy Shuffle 攻略',
      description:
        '先确认 Steam 官方 Eyes on the Piggy 目标，再说明社区玩家提出的慢动作录像方法，以及哪些说法目前没有官方证据。',
      imageAlt: 'Bills Must Be Paid 存钱罐收藏界面',
      breadcrumbs: ['攻略', 'Piggy Shuffle'],
      toc: [
        '挑战要求是什么',
        '社区慢动作方法',
        '哪些说法未被证实',
        '挑战背景',
        '慢动作方法详解',
        '失败排查与证据边界',
      ],
      related: [
        { title: '存钱罐', description: '查看官方资料中的存钱罐类型、行为与收藏目标。' },
        { title: '成就', description: '在全部官方成就中查看 Eyes on the Piggy。' },
        { title: '新手攻略', description: '回到核心玩法、体力和长期成长循环。' },
      ],
      sources: [
        {
          label: 'Steam Community — 官方成就',
          note: '确认 Eyes on the Piggy：在 Piggy Shuffle 中选择正确的存钱罐。',
        },
        {
          label: 'Steam Community Guide — Luca 的 Piggy Shuffle 玩家指南',
          note: '使用手机录像和慢动作回放追踪目标，属于社区技巧而非开发者机制说明。',
        },
      ],
      sections: [
        {
          id: 'objective',
          title: 'Piggy Shuffle 官方真正要求你做什么',
          paragraphs: [
            'Bills Must Be Paid 的官方 Steam 成就列表包含 Eyes on the Piggy，目标文字是“Pick the correct piggy in Piggy Shuffle”。这是目前最可靠的一手描述：游戏要求你在洗牌结束后选中正确目标。官方目标并没有说明固定位置、隐藏概率或必胜视觉提示，因此攻略不应把这些推测写成规则。',
            '把目标定义清楚很重要，因为 Piggy Shuffle 这种短挑战很容易产生大量“我发现规律”的玩家说法。个人观察可能有用，但只有在可重复测试或开发者资料支持后，才适合被提升为 Bills Must Be Paid 的机制结论。本页把官方目标与社区解决方法分开呈现。',
          ],
        },
        {
          id: 'community-method',
          title: '社区方法：录下 Piggy Shuffle 再慢动作播放',
          paragraphs: [
            'Steam Community 玩家 Luca 提出一种直接的方法：在 Piggy Shuffle 开始前用手机录下画面，随后慢动作回放，持续追踪最初被标记的存钱罐在交换过程中的位置，再回到游戏做选择。这个方法改变的是观察速度，而不是修改 Bills Must Be Paid 游戏本身。',
            '它的优点在于容易理解，也不依赖假设某个最终位置更常出现。不过它仍然是玩家方法，不是 Rike Games 官方设计文档。社区指南标题声称可以 100% 成功，本站不会把这个百分比当成官方保证。慢动作确实可能帮助追踪快速移动，但实际效果仍受录像质量和玩家跟踪能力影响。',
          ],
          bullets: [
            '在快速交换前就开始录像，确保目标起点清楚。',
            '慢速逐段观察交换，不要只看最终一帧。',
            '确认目标后回到游戏再选择。',
          ],
        },
        {
          id: 'not-verified',
          title: 'Piggy Shuffle 哪些说法目前不能当成已证实规则',
          paragraphs: [
            '玩家评论可能会提到某些移动模式、固定槽位或视觉提示，但只要这些说法没有开发者说明、可重复数据或更强证据，本页就不会把它们作为 Bills Must Be Paid 的主攻略步骤。一个技巧在几次尝试中有效，并不代表它是游戏内部稳定机制。',
            '同样，攻略不会声称慢动作录像是开发者“预期解法”。我们能确认的是 Steam 成就目标和一份社区指南的做法。证据边界越清楚，未来一旦 Rike Games 正式解释 Piggy Shuffle 的随机方式或目标选择逻辑，就越容易用新的一手资料更新页面，而不用先纠正大量猜测。',
          ],
        },
        {
          id: 'shuffle-context',
          title: 'Bills Must Be Paid Piggy Shuffle 与成就系统的关系',
          paragraphs: [
            'Piggy Shuffle 不是普通的存钱罐收藏目标，而是一个独立挑战。Piggy Bank Collector 要求解锁所有存钱罐，Eyes on the Piggy 则要求在 Piggy Shuffle 里识别正确目标。两个成就都围绕存钱罐，但验证能力完全不同，因此应该分别用 Wiki 和挑战攻略处理。',
            '这也是 Bills Must Be Paid 内容结构中把 Piggy Shuffle 单独做成攻略的原因。存钱罐 Wiki 负责整理不同类型的行为、掉落和收藏；本页只回答“怎样理解这个挑战、有哪些有来源的解决思路”。这样不会为了关键词而复制整套存钱罐资料，也让读者更快找到实际需要的信息。',
          ],
        },
        {
          id: 'shuffle-method',
          title: '如何更稳定地执行 Piggy Shuffle 慢动作方法',
          paragraphs: [
            '如果决定使用录像方法，关键是让整个交换区域持续出现在画面里。录制时尽量保持设备稳定，不要在洗牌过程中移动镜头；回放时从目标最初位置开始，一次只确认一段交换，再继续到下一段。Bills Must Be Paid 的目标是追踪同一个存钱罐，因此中途丢失一次就可能让后面的判断失效。',
            '不要直接拖到最终画面寻找“看起来最像”的目标，因为慢动作方法的价值就在于保留连续运动信息。若你本身能够在正常速度下稳定追踪，自然不需要录像；录像只是一个外部观察辅助工具。它不会降低游戏速度，也不会改变内部随机，只是让玩家有机会重新观看已经发生的移动。',
          ],
        },
        {
          id: 'shuffle-troubleshooting',
          title: 'Piggy Shuffle 失败时如何排查',
          paragraphs: [
            '如果慢动作仍然选错，先检查录像本身：目标起点是否清楚、运动中是否被遮挡、画面是否裁掉一部分交换区域、运动模糊是否严重。这些都是外部记录问题，不代表 Bills Must Be Paid 存在某个尚未发现的固定位置规则。重新获得更清晰的连续画面，通常比继续猜位置更有价值。',
            'Eyes on the Piggy 只是 Bills Must Be Paid 的 27 个 Steam 成就之一。完成后，可以回到成就页继续处理准确率、连续完美回合、存钱罐收藏、稀有硬币、破产周期和完整技能树等目标。让 Piggy Shuffle 页面保持专注，也能避免一个挑战攻略变成与整站其他内容重复的大杂烩。',
          ],
        },
      ],
    },
    wiki: {
      metaTitle: 'Bills Must Be Paid Wiki - 存钱罐、锤子与技能树',
      metaDescription:
        'Bills Must Be Paid Wiki：存钱罐、锤子、技能树、破产、成就与版本差异，所有核心资料按来源和版本整理。',
      eyebrow: 'Wiki',
      title: 'Bills Must Be Paid Wiki',
      description:
        '按系统整理 Bills Must Be Paid 的存钱罐、锤子、技能树、成就、版本与长期成长资料，并清楚区分事实、社区发现和分析。',
      imageAlt: 'Bills Must Be Paid 官方存钱罐收藏截图',
      breadcrumbs: ['Wiki'],
      toc: [
        '玩法系统',
        '装备与升级',
        '收藏与完成度',
        '证据政策',
        'Wiki 收录范围',
        '版本管理',
        '资料如何加入 Wiki',
      ],
      related: [
        { title: '攻略', description: '面向新手、进度和挑战的解决问题型页面。' },
        { title: 'Tier List', description: '说明当前哪些内容可以排名、哪些证据仍不足。' },
        { title: 'Demo 与完整版', description: '区分 Demo 机制和 7 月 29 日完整版。' },
      ],
      sources: [
        { label: 'Rike Games — Bills Must Be Paid 官方 Press Kit' },
        { label: 'Steam — Bills Must Be Paid' },
        { label: 'Steam Community — Bills Must Be Paid' },
        { label: 'Steam Community — 官方成就' },
      ],
      sections: [
        {
          id: 'gameplay',
          title: 'Bills Must Be Paid 的玩法系统',
          paragraphs: [
            'Bills Must Be Paid Wiki 的基础是游戏的主动循环：玩家移动锤子、敲碎存钱罐、消耗体力、获得金钱和随机掉落，再用资源处理账单与升级。这个核心循环来自 Rike Games 的一手描述，因此其他 Wiki 页面都会围绕它解释某个系统如何影响一轮游戏或长期进度。',
            'Wiki 不会把所有搜索词都拆成独立薄页。新手需要整体循环时进入新手攻略；需要查某类存钱罐行为时进入存钱罐页面；需要理解破产和新周期时进入转生攻略。Bills Must Be Paid 的内容按“资料型问题”和“行动型问题”拆分，可以减少重复并让内部链接更自然。',
          ],
        },
        {
          id: 'equipment',
          title: 'Bills Must Be Paid 的装备与升级资料',
          paragraphs: [
            '锤子和技能树是两个主要升级层。Rike Games 明确说明锤子可通过暴击率、攻击范围、速度和伤害比较，并且已经在补丁中调整过具名锤子；技能树则包含握力、咖啡因、健身、手腕、幸运以及落石、电击等不同方向。Wiki 会优先保存这些可验证事实。',
            '当公开资料没有完整当前数值时，Bills Must Be Paid Wiki 不会直接推导出精确 Tier List。一个真实排名需要全部物品或节点、版本、数值或可复现测试和明确标准。资料页负责回答“已知什么”，Tier List 页面则负责说明“目前能否负责任地比较”，两者分工可以避免分析结论污染基础资料。',
          ],
        },
        {
          id: 'completion',
          title: 'Bills Must Be Paid 的收藏与完成度',
          paragraphs: [
            'Steam 的 27 个官方成就提供了很有价值的完成度地图。它们确认了解锁全部存钱罐、完成硬币收藏、买完商店物品、解锁所有戒指和手镯、买下全部技能树升级等正式目标。即使商店页没有列出每个细节，成就仍能确认这些系统确实属于完整体验。',
            'Wiki 通过成就把资料页连接起来：Piggy Bank Collector 对应存钱罐，Maxed Out 对应技能树，Fresh Start 与 Prestige Jewelry 对应破产和长期成长，Eyes on the Piggy 则连接到 Piggy Shuffle 挑战攻略。这样 Bills Must Be Paid 的完成度信息不会孤立成一张清单，而会指向具体系统背景。',
          ],
        },
        {
          id: 'evidence',
          title: 'Bills Must Be Paid Wiki 的证据政策',
          paragraphs: [
            '一手来源按用途分层：Rike Games Press Kit 用来确认设计和基础示例；Steam 商店页用来确认当前完整版功能；开发者公告用于记录上线变化和补丁；官方成就用于确认完成目标。社区材料只有在补充一手资料没有覆盖的实用方法时才进入页面，并且会明确标记为玩家内容。',
            '当两个官方来源术语不同，Wiki 会同时保留，而不是悄悄选择一个。例如破产后的成长资源在不同资料中出现 Prestige Points 和 legacy points。Bills Must Be Paid Wiki 认为版本差异本身就是信息。保留来源时间和上下文，可以让读者理解变化，而不是制造一个表面统一但失真的答案。',
          ],
          bullets: [
            '官方来源优先于未经验证的玩家说法。',
            '截图只用于支持可见事实，不从模糊 UI 猜数值。',
            '社区技巧明确标注，不写成官方机制。',
            '不同版本的术语与平衡改动保留时间上下文。',
          ],
        },
        {
          id: 'wiki-scope',
          title: 'Bills Must Be Paid Wiki 收录什么，不收录什么',
          paragraphs: [
            'Wiki 收录反复需要查询的系统和对象，例如存钱罐类型、锤子比较维度、技能树方向、成就、版本差异和长期成长。一个页面只有在能形成独立搜索意图并提供足够资料时才值得存在。这样 Bills Must Be Paid Wiki 不会为了数量把每个名词都做成内容稀薄的页面。',
            '如果问题需要步骤或策略，则由攻略页面处理。例如锤子 Wiki 说明官方确认的属性和补丁变化，而未来的锤子排名需要更多测试；存钱罐 Wiki 解释行为和收藏，Piggy Shuffle 攻略则集中解决特定挑战。明确边界让每个 Bills Must Be Paid 页面都拥有自己的信息职责。',
          ],
        },
        {
          id: 'wiki-versioning',
          title: 'Bills Must Be Paid Wiki 如何处理版本差异',
          paragraphs: [
            'Steam Demo 于 2026 年 4 月 21 日发布，完整版于 7 月 29 日发布。开发者明确表示完整版调整了转生、破产、部分技能节点、平衡和底层系统，因此 Demo 时代的截图或攻略不能自动成为最终版本证据。Wiki 会把发布日期当成判断旧资料的基本边界。',
            '同样的原则也用于补丁。Rike Games 已经公开调整过 Ultracrit-Hammer 和 Toy-Hammer，证明装备表现会随版本变化。Bills Must Be Paid Wiki 在添加精确数值或排名时，应同时记录版本和检查日期。未来再发生平衡调整时，可以说明结论为什么变化，而不是让旧页面悄悄失真。',
          ],
        },
        {
          id: 'wiki-research',
          title: '新的 Bills Must Be Paid 资料如何加入 Wiki',
          paragraphs: [
            '新增内容首先检查是否有一手来源，再判断社区信息是否具备可重复性和实用价值。若官方只确认系统存在，却没有公开具体数字，Wiki 会保留这个空白。精确掉率、完整锤子数值或全技能节点只有在能被可靠获取并注明版本后，才适合进入 Bills Must Be Paid 的结构化表格。',
            '这种做法让页面可以持续扩展而不牺牲可信度。搜索需求增长时，可以从现有资料中发现值得独立成页的主题；新补丁发布时，可以更新受影响部分；玩家方法被验证或被推翻时，也能调整证据等级。Bills Must Be Paid Wiki 的目标不是一次性“写满”，而是让每一条新增信息都能追溯。',
          ],
        },
      ],
    },
    hammers: {
      metaTitle: 'Bills Must Be Paid 锤子 - 属性与平衡改动',
      metaDescription:
        'Bills Must Be Paid 锤子指南：暴击、范围、速度、伤害取舍，以及 Ultracrit-Hammer、Toy-Hammer 已确认改动。',
      eyebrow: 'Wiki',
      title: 'Bills Must Be Paid 锤子 Wiki',
      description:
        '基于 Rike Games 一手资料整理 Bills Must Be Paid 锤子的比较维度、设计取舍和已经公开的具名平衡调整。',
      imageAlt: 'Bills Must Be Paid 锤子商店截图',
      breadcrumbs: ['Wiki', '锤子'],
      toc: [
        '锤子如何不同',
        '已确认的具名改动',
        '如何比较锤子',
        'Tier List 当前状态',
        '锤子设计逻辑',
        '补丁为什么重要',
        '锤子与整体 Build',
      ],
      related: [
        { title: 'Tier List', description: '解释为什么没有完整数据时不制造 S/A/B 锤子排名。' },
        { title: '技能树', description: '查看会改变锤子 Build 环境的其他升级方向。' },
        { title: '新手攻略', description: '理解锤子选择在完整资源循环里的位置。' },
      ],
      sources: [
        {
          label: 'Rike Games — Bills Must Be Paid 官方 Press Kit',
          note: '确认锤子的暴击率、攻击范围、速度和伤害取舍。',
        },
        { label: 'Steam — Bills Must Be Paid', note: '当前商店描述再次确认锤子的取舍设计。' },
        {
          label: 'Steam Community — 开发者公告',
          note: 'Demo Bug Fix v0.2.7 记录 Ultracrit-Hammer 范围增大和 Toy-Hammer 攻击变快。',
        },
      ],
      sections: [
        {
          id: 'tradeoffs',
          title: 'Bills Must Be Paid 锤子围绕属性取舍设计',
          paragraphs: [
            'Rike Games 对 Bills Must Be Paid 锤子的官方描述不是“后面的锤子永远更强”，而是明确强调取舍。开发者举例说明，一把锤子可能拥有更高暴击率但较小攻击范围，另一把可能速度更快、覆盖更大，却付出较低单次伤害。由此可见，比较锤子必须先明确你想优化什么。',
            '对单个高价值目标，伤害或暴击可能更重要；面对多个目标时，攻击范围和速度可能改变实际效率。公开资料没有给出所有当前锤子的完整数值，所以本站不会把这些原则直接转换成一个虚构的永久排名。Bills Must Be Paid 锤子 Wiki 先保存官方确认的比较维度，再等待足够数据做更精确分析。',
          ],
        },
        {
          id: 'patches',
          title: '已经被开发者确认的 Bills Must Be Paid 锤子改动',
          paragraphs: [
            'Demo Bug Fix v0.2.7 明确点名两个锤子：Ultracrit-Hammer 的攻击范围被调大一些，Toy-Hammer 则被调整为攻击更快。这些补丁信息虽然不足以生成完整 Tier List，却证明 Bills Must Be Paid 的装备平衡会变化，旧版本的比较结论不能被视为永久有效。',
            '补丁还说明为什么任何精确排名都需要版本号。范围变化可能影响同时覆盖多个存钱罐的能力，速度变化可能影响体力受限的一轮里能完成多少次攻击。如果没有全部当前数据，仅凭两条补丁就计算新排名同样是不可靠的，因此本页只把它们作为时间敏感性的证据。',
          ],
        },
        {
          id: 'compare',
          title: 'Bills Must Be Paid 锤子的四个可靠比较维度',
          paragraphs: [
            '目前一手资料明确提到暴击率、攻击范围、攻击或命中速度、伤害四个维度。这四项足以解释为什么不同锤子会适合不同场景，却不足以在缺失完整数值时推出统一答案。一个负责任的 Bills Must Be Paid 比较应该同时说明测试版本、目标类型和评价标准。',
            '如果未来可以获得完整当前数据，表格可以分别比较单目标伤害、覆盖能力、速度或其他可测指标，而不是把所有属性强行压成一个分数。对玩家而言，透明的比较方法比一个没有来源的 S 级标签更有用；对 SEO 而言，也能避免随着补丁更新而整页失去可信度。',
          ],
          bullets: ['暴击率', '攻击范围', '攻击/命中速度', '伤害'],
        },
        {
          id: 'tier-list',
          title: '为什么现在不发布虚构的 Bills Must Be Paid 锤子 Tier List',
          paragraphs: [
            '现有官方资料解释了设计维度，也给出过具名平衡调整，但没有公开当前所有锤子的完整、带版本数值。缺少这组基础数据时，给每把锤子分配 S/A/B 等级本质上是猜测。本站宁愿清楚说明证据缺口，也不会为了满足搜索词而制造看似精确的排行。',
            '真正可发布的 Bills Must Be Paid 锤子 Tier List 至少需要：当前游戏版本、完整锤子列表、可验证属性或可复现测试、明确排名目标，以及平衡补丁后的更新说明。满足这些条件后，排名才可以从“个人感觉”升级为读者能够复查的方法论。',
          ],
        },
        {
          id: 'hammer-design',
          title: '如何理解 Bills Must Be Paid 锤子的设计逻辑',
          paragraphs: [
            '锤子属于装备和购买系统，但它们的价值不能脱离存钱罐行为和技能树。某种高伤害小范围锤子面对移动快或分散的目标时，实际体验可能与静态伤害比较不同；而更快或更大的覆盖也可能在体力限制下产生不同收益。Bills Must Be Paid 的装备因此天然适合按场景分析。',
            '官方商店截图可以确认锤子确实存在购买、拥有、装备和解锁状态，但截图不应该被用来猜无法清晰读取的数值。Wiki 把可见 UI 当成辅助证据，把明确文字说明当成属性来源。未来如果游戏界面提供稳定可读的完整数据，就能在不改变这套证据原则的情况下扩展表格。',
          ],
        },
        {
          id: 'hammer-patches',
          title: '为什么 Bills Must Be Paid 锤子补丁必须进入 Wiki',
          paragraphs: [
            '任何装备排名都可能被补丁改变，所以版本记录不是附加信息，而是核心信息。Ultracrit-Hammer 和 Toy-Hammer 的调整已经展示了这一点。Bills Must Be Paid 页面如果未来加入精确性能比较，应把版本、检查日期和补丁来源放在表格附近，让读者知道数据描述的是哪个时间点。',
            '这种记录方式还能解释排名为什么移动。假如某把锤子范围增加，它在多目标场景的评价可能提高；如果速度改变，单位时间输出或手感也可能变化。本站不会在没有完整数据时先计算这些结果，但会保留开发者补丁，以便未来的 Bills Must Be Paid 分析能够建立在可追溯变化上。',
          ],
        },
        {
          id: 'hammer-build-context',
          title: 'Bills Must Be Paid 锤子在整体 Build 中的位置',
          paragraphs: [
            '锤子并不独立决定一轮表现。技能树能够改变手部能力并加入特殊效果，存钱罐的移动方式又会改变命中难度，而体力决定你能持续攻击多久。因此 Bills Must Be Paid 的装备价值与当前 Build、目标和进度阶段相关，不能只靠一个静态伤害数字解释。',
            '新手应先理解整体循环，再研究锤子 Wiki；准备优化时，再结合技能树和当前版本数据。未来如果形成真正的锤子 Tier List，它也应该链接回这些基础资料，并公开自己的测试标准。这样 Bills Must Be Paid 的排名页负责比较，而 Wiki 继续作为可验证事实层。',
          ],
        },
      ],
    },
    'piggy-banks': {
      metaTitle: 'Bills Must Be Paid 存钱罐 - 类型、掉落与收集',
      metaDescription:
        'Bills Must Be Paid 存钱罐 Wiki：不同类型、移动与奖励、随机掉落、收藏目标，以及 Piggy Shuffle 与成就关系。',
      eyebrow: 'Wiki',
      title: 'Bills Must Be Paid 存钱罐 Wiki',
      description:
        '整理官方资料已确认的存钱罐类型、行为、奖励、随机掉落和收藏目标，并避免虚构 HP、生成率或隐藏掉率。',
      imageAlt: 'Bills Must Be Paid 存钱罐类型和收藏界面',
      breadcrumbs: ['Wiki', '存钱罐'],
      toc: [
        '不同存钱罐类型',
        '掉落与行为',
        '收藏目标',
        'Piggy Shuffle',
        '存钱罐如何影响一轮游戏',
        '已知行为',
        '完成度关系',
      ],
      related: [
        { title: 'Piggy Shuffle 攻略', description: '用官方目标和明确标注的社区方法解决 Eyes on the Piggy。' },
        { title: '成就', description: '查看 Piggy Bank Collector 和其余官方完成目标。' },
        { title: '新手攻略', description: '理解存钱罐如何影响金钱、体力和成长。' },
      ],
      sources: [
        { label: 'Rike Games — Bills Must Be Paid 官方 Press Kit' },
        { label: 'Steam — Bills Must Be Paid' },
        { label: 'Steam Community — 官方成就' },
      ],
      sections: [
        {
          id: 'types',
          title: 'Bills Must Be Paid 有多种不同存钱罐',
          paragraphs: [
            'Rike Games 明确说明 Bills Must Be Paid 会随着进度出现新的存钱罐类型，而且差异不只是外观。有的类型会移动或逃跑，有的相对懒散，有的携带更多金钱，部分类型还会提供特殊效果。对玩家而言，目标行为会直接改变追踪和攻击方式，因此存钱罐是玩法变量而不是纯皮肤。',
            '收藏界面和 Steam 成就进一步确认存钱罐可以被发现、解锁并形成完整收集目标。本站会优先记录开发者明确描述过的行为，不会在缺乏来源时补出每种存钱罐的 HP、出现概率或掉落率。Bills Must Be Paid Wiki 的重点是可核对事实，而不是把未知数字填满表格。',
          ],
        },
        {
          id: 'loot',
          title: 'Bills Must Be Paid 存钱罐的掉落和行为会不同',
          paragraphs: [
            '官方 Press Kit 说明敲碎存钱罐可以获得随机掉落，并且不同类型在移动和价值上存在差异。随机性意味着两次相似攻击不一定得到相同结果，但“存在随机掉落”并不能自动推导具体概率。没有版本化测试或官方数据时，本页不会发布精确掉率。',
            '体力让这种差异更重要。每次敲击都有成本，如果目标更难追踪、移动路径不同或价值更高，玩家对“这一锤是否值得”的判断也会改变。Bills Must Be Paid 的目标选择因此与收益、命中难度和体力消耗共同相关，而不是只看存钱罐外观。',
          ],
        },
        {
          id: 'collection',
          title: '解锁全部存钱罐是 Bills Must Be Paid 的官方完成目标',
          paragraphs: [
            'Steam 成就 Piggy Bank Collector 的目标是“Unlock every piggy bank”。这条官方目标直接确认收集全部存钱罐属于正式完成度，而不是玩家自发的收藏玩法。对准备 100% 完成 Bills Must Be Paid 的玩家，存钱罐 Wiki 可以提供行为背景，成就页则负责作为总清单。',
            '因为公开来源没有完整列出所有最终类型和每个隐藏数值，本页不会声称已经拥有绝对完整的百科。更合理的做法是随着可验证资料增加逐步补齐条目，并保留版本和来源。这样即使 Rike Games 后续添加或调整存钱罐，页面仍能清楚说明变化发生在哪里。',
          ],
        },
        {
          id: 'shuffle',
          title: 'Piggy Shuffle 是独立于收藏的 Bills Must Be Paid 挑战',
          paragraphs: [
            'Eyes on the Piggy 成就要求玩家在 Piggy Shuffle 中选中正确目标，这与 Piggy Bank Collector 的“解锁全部类型”是两件不同的事。前者测试识别和追踪，后者测试长期收集。为了避免把社区解法混入资料页，Piggy Shuffle 的慢动作录像方法被放在独立挑战攻略中。',
            '这种拆分也让证据等级更清楚：Steam 官方成就确认挑战目标，社区玩家指南提供可操作方法，但 Rike Games 并未把该录像方法描述为正式机制。Bills Must Be Paid 存钱罐 Wiki 只负责与类型、行为、奖励和收藏相关的事实。',
          ],
        },
        {
          id: 'piggy-role',
          title: '存钱罐如何塑造 Bills Must Be Paid 的一轮游戏',
          paragraphs: [
            '存钱罐是主动循环里的核心目标。锤子攻击消耗体力，存钱罐提供金钱和随机掉落，不同类型又会改变移动和奖励。因为一轮长度受体力限制，玩家实际在不断选择“追哪个目标、投入多少攻击、预期获得什么”。这让 Bills Must Be Paid 的存钱罐设计直接影响资源效率。',
            '即使缺少隐藏 HP 或出现率，我们仍然可以从官方行为描述理解设计意义。移动快的目标可能更难稳定命中，相对静止的目标更容易持续攻击，携带更多钱或恢复体力的类型则会改变收益判断。Wiki 应先记录这些能够被来源支持的差异，再把数值分析留给可验证数据。',
          ],
        },
        {
          id: 'piggy-known-behavior',
          title: '目前已确认的 Bills Must Be Paid 存钱罐行为',
          paragraphs: [
            '一手资料曾点名 Normalito、The Tourist、Woody、Piñata 和 El Loco 等类型，并用行为进行描述：Normalito 较慢且可预测；The Tourist 体型大、移动少，并在被敲碎时恢复体力；Woody 几乎不动；Piñata 与随机奖励相关；El Loco 的移动则更不规则。',
            '这些描述足以证明存钱罐类型会改变玩法，但仍不等于完整数值数据库。Rike Games 也表示更稀有的类型会随进度出现，因此 Bills Must Be Paid Wiki 会把已知行为视为持续扩展的数据集。没有可靠来源的概率和数值保持空白，比虚构精确百分比更有价值。',
          ],
          bullets: [
            '不同存钱罐在移动方式和行为上存在差异。',
            '随机掉落由 Rike Games 官方资料确认。',
            '部分类型被描述为更有价值。',
            'The Tourist 被描述为敲碎后恢复体力。',
            '解锁所有存钱罐是官方 Steam 成就目标。',
          ],
        },
        {
          id: 'piggy-completion',
          title: 'Bills Must Be Paid 存钱罐、Piggy Shuffle 与 100% 完成',
          paragraphs: [
            '想做 100% 完成时，至少要区分“收集全部存钱罐”和“完成 Piggy Shuffle”两个方向。成就页是总入口，存钱罐 Wiki 提供类型与行为背景，Piggy Shuffle 攻略处理具体挑战。这样的分工可以让玩家从一个目标快速跳到真正需要的资料，而不是在一篇超长页面里寻找相关段落。',
            '未来如果官方资料或可复现测试提供更多类型、奖励、出现条件或数值，Bills Must Be Paid 存钱罐 Wiki 可以继续扩展。新增内容应同时注明版本和证据来源，以免 Demo、完整版和后续补丁数据混在一起。完成度页面追踪目标，Wiki 追踪事实，两者通过内部链接互相支持。',
          ],
        },
      ],
    },
    'skill-tree': {
      metaTitle: 'Bills Must Be Paid 技能树 - 升级与节点指南',
      metaDescription:
        'Bills Must Be Paid 技能树指南：握力、咖啡因、健身、幸运、特殊效果、完整版节点变化与 Tier List 证据边界。',
      eyebrow: 'Wiki',
      title: 'Bills Must Be Paid 技能树 Wiki',
      description:
        '整理 Rike Games 已确认的 Bills Must Be Paid 技能树方向、示例、版本变化与完成度目标，不虚构未公开节点数值。',
      imageAlt: 'Bills Must Be Paid 技能树界面',
      breadcrumbs: ['Wiki', '技能树'],
      toc: [
        '技能树做什么',
        '已确认升级示例',
        '完整版变化',
        'Tier List 限制',
        '技能树与长期进度',
        'Demo 与完整版差异',
        '如何阅读 Build 建议',
      ],
      related: [
        { title: '新手攻略', description: '理解技能树消费与账单、体力和锤子的关系。' },
        { title: '锤子', description: '比较 Rike Games 已确认的装备属性取舍。' },
        { title: 'Tier List', description: '查看当前升级排名所需的证据标准。' },
      ],
      sources: [
        { label: 'Rike Games — Bills Must Be Paid 官方 Press Kit', note: '列出多个技能树主题和升级示例。' },
        { label: 'Steam — Bills Must Be Paid', note: '确认当前完整版包含技能树系统。' },
        { label: 'Steam Community — 开发者公告', note: '上线公告说明部分技能节点从 Demo 到完整版发生变化。' },
      ],
      sections: [
        {
          id: 'purpose',
          title: 'Bills Must Be Paid 技能树的作用是什么',
          paragraphs: [
            '技能树是把本轮获得的金钱转化为后续表现的重要系统。Rike Games 的描述既包括直接身体能力，也包括更特殊的效果，因此 Bills Must Be Paid 技能树不能简单理解成一条“伤害越来越高”的直线。不同方向可能影响力量、体力、恢复、幸运或攻击方式。',
            '对玩家而言，技能树的价值在于改变下一轮决策环境。某个升级可能让你更容易持续攻击，某个节点可能改变锤子效果，另一些升级则服务于长期 Build。当前公开资料没有完整节点数值，因此 Wiki 重点记录已确认方向和版本变化，而不是假装拥有最终最优路线。',
          ],
        },
        {
          id: 'examples',
          title: 'Rike Games 已确认的 Bills Must Be Paid 升级示例',
          paragraphs: [
            '一手资料明确提到握力、咖啡因、健身、手腕和幸运相关升级，也展示过落石以及锤子电击等更特殊效果。这些例子说明 Bills Must Be Paid 技能树同时包含基础强化和机制型节点，后期 Build 不一定只是提高一个伤害数值。',
            '这些名称只是开发者公开示例，不代表本站已经掌握所有当前节点。任何完整节点表都需要当前游戏版本、清晰效果和可靠来源。尤其开发者已经确认完整版改变过部分技能树节点，所以从 Demo 截图或旧指南直接补全当前技能树，容易把过时信息写成事实。',
          ],
          bullets: ['握力相关提升', '咖啡因相关升级', '健身相关升级', '手腕与幸运方向', '落石和电击锤等特殊效果'],
        },
        {
          id: 'changes',
          title: 'Bills Must Be Paid 完整版改变了部分 Demo 技能节点',
          paragraphs: [
            'Rike Games 在上线公告中明确表示，完整版调整了部分技能树节点，同时还改变了转生、破产、平衡和底层系统。这也是 Demo 存档无法转移到完整版的原因之一。因此任何 2026 年 7 月 29 日之前的技能树推荐，都应先确认版本。',
            '这并不意味着所有 Demo 信息都失效。核心设计方向可能仍然有参考价值，但具体节点、效果或路线需要当前版本验证。Bills Must Be Paid Wiki 通过 Demo 与完整版对比页保存这条边界，让玩家知道何时可以复用旧资料，何时必须重新检查。',
          ],
        },
        {
          id: 'ranking',
          title: '为什么目前不把所有 Bills Must Be Paid 技能节点排 Tier',
          paragraphs: [
            '真正的技能 Tier List 需要完整当前节点、精确效果、机会成本和清晰评价目标。公开一手资料并没有提供这套完整数据，所以直接把每个升级排成 S 到 F 会比证据更加自信。本站宁愿先明确“我们知道哪些方向”，也不发布一个无法复查的列表。',
            '未来如果获得可验证数据，可以按早期进度、伤害、恢复、稳定性、特殊效果等不同目标做情境排名，而不是强行给所有节点一个唯一等级。Bills Must Be Paid 的技能价值可能与锤子、体力和当前阶段互相作用，透明的方法比单一字母等级更有解释力。',
          ],
        },
        {
          id: 'skill-purpose-expanded',
          title: 'Bills Must Be Paid 技能树如何影响长期成长',
          paragraphs: [
            '每次主动敲击获得的钱最终要在账单和升级之间分配，技能树就是最主要的升级出口之一。投入技能可以改变后续每轮效率，而账单又限制你能投入多少资源，因此 Bills Must Be Paid 的技能选择与现金管理天然关联。玩家不是独立选择一个节点，而是在整个经济循环里决定投资方向。',
            'Steam 成就 Maxed Out 要求购买全部技能树升级，说明技能树还承担正式完成度目标。对追求 100% 的玩家，最终会需要整个树；对普通推进玩家，前期则更关注哪些升级改善当前瓶颈。Wiki 同时提供进度背景和资料基础，但不会把完成目标误写成唯一推荐购买顺序。',
          ],
        },
        {
          id: 'skill-versioning-expanded',
          title: 'Bills Must Be Paid 技能树为什么需要版本化',
          paragraphs: [
            '技能节点已经被开发者明确确认发生过版本变化，因此版本标签不是可选项。Demo 中看到的名称、效果或路线可能无法一一对应完整版。遇到旧截图、旧视频或社区 Build 时，应先判断它来自 4 月 21 日后的 Demo 阶段，还是 7 月 29 日完整版之后。',
            '版本化也直接影响 Tier List。即使某个玩家在 Demo 中做了非常严谨的测试，只要节点和数值后来变化，结论就不应自动继承。Bills Must Be Paid 的未来排名页应该记录游戏 Build、更新日期和测试条件，并在补丁后重新验证受影响节点。',
          ],
          bullets: ['升级建议必须标明版本', 'Demo 节点不能默认等同于完整版', '补丁后需要重新测试受影响结论', '官方事实、实测结果和偏好应分开'],
        },
        {
          id: 'skill-build-reading',
          title: '如何阅读 Bills Must Be Paid 的技能 Build 建议',
          paragraphs: [
            '先区分事实层和分析层。事实层可以说 Rike Games 明确提到哪些升级方向、哪些节点发生版本变化、Maxed Out 要求什么；分析层才讨论玩家为何偏好伤害、体力、恢复、幸运或特殊效果。Bills Must Be Paid 的 Build 建议如果没有这层区分，很容易把个人偏好写成官方最优解。',
            '技能树还会与锤子环境互相影响。锤子有暴击、范围、速度和伤害取舍，某些技能又可能改变手部能力或增加特殊效果，因此组合价值需要当前数据支持。随着信息完善，Wiki 可以加入 Build 示例和真实 Tier List；在那之前，最可靠的用途是理解升级方向、版本差异和完成目标。',
          ],
        },
      ],
    },
    achievements: {
      metaTitle: 'Bills Must Be Paid 成就 - 27 个 Steam 目标',
      metaDescription:
        'Bills Must Be Paid 27 个 Steam 成就：账单、敲击、准确率、金钱、赌博、贷款、收藏、破产与技能树完成目标。',
      eyebrow: '完成度',
      title: 'Bills Must Be Paid 全部 27 个成就',
      description:
        '按进度、敲击与准确率、金钱与风险、收藏与完整完成四类整理 Bills Must Be Paid 官方 Steam 成就，并提供对应攻略入口。',
      imageAlt: 'Bills Must Be Paid 稀有硬币收藏界面',
      breadcrumbs: ['成就'],
      toc: [
        '账单与进度',
        '敲击与准确率',
        '金钱、赌博与贷款',
        '收藏与 100% 完成',
        '对应攻略入口',
        '成就结构',
        '完成路线',
        '如何核实成就',
      ],
      related: [
        { title: 'Piggy Shuffle 攻略', description: '解决 Eyes on the Piggy，并区分官方目标与社区方法。' },
        { title: '转生与破产', description: '理解 Fresh Start 和 Prestige Jewelry 背后的系统。' },
        { title: '存钱罐', description: '查看 Piggy Bank Collector 所对应的存钱罐资料。' },
      ],
      sources: [
        {
          label: 'Steam Community — Bills Must Be Paid 官方成就',
          note: '27 个成就名称和目标的主要来源；全球完成率会变化，因此不固定复制。',
        },
        { label: 'Steam — Bills Must Be Paid', note: '确认完整版支持 Steam Achievements。' },
      ],
      sections: [
        {
          id: 'progression',
          title: 'Bills Must Be Paid 的账单与进度成就',
          paragraphs: [
            '第一组成就直接围绕游戏主题推进：Bills Must Be Paid 要求支付第一张账单，One Step at a Time 要求支付 5 张，Making Progress 要求 10 张，Keeping Up 要求 20 张。Freedom 则把目标推进到支付全部账单，Fresh Start 进一步把账单系统与破产后的新周期连接起来。',
            '这些目标说明账单不是临时任务，而是 Bills Must Be Paid 的正式进度轴。玩家如果只优化单轮赚钱却忽略账单，就会错过游戏设计的中心压力。Fresh Start 的存在还证明破产不是简单失败，而是长期成长结构的一部分，因此完成度路线必须同时理解支付与重置。',
          ],
          bullets: [
            'Bills Must Be Paid — 支付第一张账单',
            'One Step at a Time — 支付 5 张账单',
            'Making Progress — 支付 10 张账单',
            'Keeping Up — 支付 20 张账单',
            'Fresh Start — 宣告破产并开始新周期',
            'Freedom — 支付所有账单',
          ],
        },
        {
          id: 'smashing',
          title: 'Bills Must Be Paid 的敲击、准确率与 Piggy Shuffle 成就',
          paragraphs: [
            '第二组强调主动操作：Rookie Smasher 要敲碎 10 个存钱罐，Serial Smasher 要 100 个；Not a Single Miss 要求一轮达到 100% 准确率，Twice as Precise 则要求连续两轮保持 100%。Strong Start 和 Multismasher 关注一次攻击同时击碎多个目标。',
            'Eyes on the Piggy 要求在 Piggy Shuffle 中选中正确存钱罐。它与普通累计目标不同，属于具体挑战，因此本站另外提供 Piggy Shuffle 攻略。Steam 只负责确认目标，社区慢动作方法则被放在独立页面并明确标注来源。这样 Bills Must Be Paid 成就页保持官方清单角色。',
          ],
          bullets: [
            'Rookie Smasher — 敲碎 10 个存钱罐',
            'Serial Smasher — 敲碎 100 个存钱罐',
            'Not a Single Miss — 一轮达到 100% 准确率',
            'Twice as Precise — 连续两轮保持 100% 准确率',
            'Strong Start — 一轮第一次攻击击碎 2 个存钱罐',
            'Multismasher — 一次击碎 3 个存钱罐',
            'Eyes on the Piggy — 在 Piggy Shuffle 中选对目标',
          ],
        },
        {
          id: 'money-risk',
          title: 'Bills Must Be Paid 的金钱、赌博和贷款成就',
          paragraphs: [
            '金钱目标从单轮 $100、$1000、$10000 一直延伸到同时拥有 $1,000,000。它们分别对应 Better than Nothing、High Roller、Five Figures 和 The Richest Broke Person，显示 Bills Must Be Paid 的经济系统既关注短局收益，也关注更高的长期积累。',
            '风险类成就还明确提到 coinflip、all in、Super Jackpot 和 Big Toni 贷款。这些目标说明赌博和贷款属于完整版可见系统，而不是社区猜测。成就页不需要为每个系统虚构最佳策略，但可以用官方目标确认它们确实存在，并把玩家引导到未来更具体的攻略。',
          ],
          bullets: [
            'Better than Nothing — 单轮赚到 $100',
            'High Roller — 单轮赚到 $1000',
            'Five Figures — 单轮赚到 $10000',
            'The Richest Broke Person — 同时拥有 $1000000',
            '50/50 — 赢一次 coinflip',
            'All or Nothing — 赌博时 all in',
            'Super Jackpot — 中一次 Super Jackpot',
            'Take a Loan — 找 Big Toni 贷款',
            'Pay Back a Loan — 还清 Big Toni 的钱',
          ],
        },
        {
          id: 'completion',
          title: 'Bills Must Be Paid 的收藏与 100% 完成成就',
          paragraphs: [
            '最后一组非常适合作为完整路线图。Piggy Bank Collector 要求解锁全部存钱罐，Coin Collector 要完成硬币收藏，Bought It All 要买下商店所有物品，Prestige Jewelry 要解锁所有戒指和手镯，Maxed Out 则要求购买全部技能树升级。',
            '这些成就确认多个系统都是正式完成目标，即使 Steam 商店描述没有逐项列出所有内容。对追求 100% 的玩家，Bills Must Be Paid 成就页可以作为总清单，再分别跳到存钱罐、技能树、转生和其他攻略。这样比在一个页面里重复所有系统细节更容易维护。',
          ],
          bullets: [
            'Piggy Bank Collector — 解锁所有存钱罐',
            'Coin Collector — 完成完整硬币收藏',
            'Bought It All — 买下商店所有物品',
            'Prestige Jewelry — 解锁所有戒指和手镯',
            'Maxed Out — 购买全部技能树升级',
          ],
        },
        {
          id: 'guides',
          title: '如何从 Bills Must Be Paid 成就进入具体攻略',
          paragraphs: [
            '成就名称本身经常就是最佳导航线索。Eyes on the Piggy 对应 Piggy Shuffle 攻略；Fresh Start 和 Prestige Jewelry 对应转生与破产；Piggy Bank Collector 对应存钱罐 Wiki；Maxed Out 对应技能树 Wiki。用户可以从目标直接进入所需背景，而无需从首页重新寻找。',
            '这种内部链接也避免成就页过度扩张。Bills Must Be Paid 的 27 个目标应该保持稳定、可扫描，而具体系统解释放在专门页面。未来若某个成就出现高搜索需求并且有足够独立资料，再单独创建攻略会比现在把所有内容塞进成就清单更合理。',
          ],
        },
        {
          id: 'achievement-overview',
          title: 'Bills Must Be Paid 成就如何反映游戏结构',
          paragraphs: [
            '27 个目标横跨账单、主动敲击、准确率、经济、赌博、贷款、收藏、转生和完整升级，说明 Bills Must Be Paid 的完成度并不只奖励“玩得久”。其中一部分要求长期积累，另一部分要求单轮执行和特定挑战，这与主动式 incremental game 的定位一致。',
            '把成就按系统分类比按 Steam 原始顺序阅读更有用。玩家可以清楚看到哪些目标共享同一种准备方式：账单组需要长期推进，准确率组需要操作稳定性，收藏组需要系统性补全，破产组则需要理解完整版本循环。分类不会改变官方目标，只是帮助 Bills Must Be Paid 玩家规划。',
          ],
        },
        {
          id: 'achievement-completion',
          title: '如何规划 Bills Must Be Paid 的 100% 完成路线',
          paragraphs: [
            '最稳妥的路线是先自然推进账单和基础敲击目标，同时记录收藏进度；熟悉游戏后再集中处理准确率、多目标击碎和 Piggy Shuffle 等操作型成就。破产与首饰目标应结合长期成长一起完成，而商店、硬币和全技能树通常更适合放在后期补齐。',
            '这不是官方规定的唯一顺序，而是根据目标类型做的规划建议。Bills Must Be Paid 成就页保留官方名称和条件，攻略层才负责提供方法。这样即使未来平衡变化，稳定的目标清单仍然有效，而具体策略只需要在相关指南中更新。',
          ],
        },
        {
          id: 'achievement-verification',
          title: '为什么 Bills Must Be Paid 成就页优先保留官方名称',
          paragraphs: [
            '成就名称是游戏内标识，因此英文官方名称应保留；中文页面翻译的是目标含义和解释，而不是把成就 ID 改成新的中文名字。这样玩家在 Steam 或游戏里看到名称时能够直接对应，也避免不同翻译版本造成搜索困难。',
            'Steam 全球完成率会随着玩家数量变化，所以本站刻意不把当前百分比固定写入正文。稳定信息是成就名称和目标条件。Bills Must Be Paid 页面把会变化的数据留在来源页，把不易变化的目标作为长期参考，这样更新成本更低，也减少过时数字影响 SEO 可信度。',
          ],
        },
      ],
    },
    'tier-lists': {
      metaTitle: 'Bills Must Be Paid Tier List - 锤子与技能',
      metaDescription:
        'Bills Must Be Paid Tier List：锤子与技能的可验证比较标准、版本要求和当前证据缺口，不虚构 S/A/B 排名。',
      eyebrow: 'Tier List',
      title: 'Bills Must Be Paid Tier List',
      description:
        '先定义证据和比较标准，再讨论 Bills Must Be Paid 的锤子与技能排名；当前数据不足的地方会明确说明，而不是制造完整榜单。',
      imageAlt: 'Bills Must Be Paid 锤子选择界面',
      breadcrumbs: ['Tier List'],
      toc: [
        '当前状态',
        '锤子排名证据',
        '技能排名证据',
        '发布 Tier List 需要什么',
        '可靠排名方法',
        '锤子与技能比较标准',
        '为什么不虚构排名',
      ],
      related: [
        { title: '锤子', description: '查看官方确认的装备属性取舍和具名补丁。' },
        { title: '技能树', description: '查看已确认升级示例和完整版变化。' },
        { title: '新手攻略', description: '先理解系统，再决定如何优化。' },
      ],
      sources: [
        { label: 'Rike Games — Bills Must Be Paid 官方 Press Kit' },
        { label: 'Steam — Bills Must Be Paid' },
        { label: 'Steam Community — 开发者公告', note: '证明锤子等平衡会随着版本变化。' },
      ],
      sections: [
        {
          id: 'status',
          title: '当前 Bills Must Be Paid Tier List 为什么没有硬编 S/A/B',
          paragraphs: [
            '用户搜索 Tier List 并不意味着本站应该立即制造一个完整榜单。当前一手资料能够确认锤子的比较维度、部分技能方向和若干补丁变化，但没有公开所有当前锤子和技能节点的完整版本化数值。缺少基础数据时，给出精确 S/A/B 等级无法被复查。',
            '因此 Bills Must Be Paid Tier List 目前承担的是透明的“排名准备页”：说明可以比较什么、还缺什么，以及未来真正排名时应该采用什么方法。对玩家来说，一个明确承认数据边界的页面，比看起来完整却没有来源的榜单更安全；对后续更新也更容易维护。',
          ],
        },
        {
          id: 'hammers',
          title: 'Bills Must Be Paid 锤子 Tier List 目前有哪些证据',
          paragraphs: [
            'Rike Games 明确给出暴击率、攻击范围、速度和伤害四个锤子比较维度，并在 Demo Bug Fix v0.2.7 中调整过 Ultracrit-Hammer 和 Toy-Hammer。这些信息足以说明锤子不是线性升级，也足以设计未来测试指标，但不足以覆盖所有当前锤子的真实数值。',
            '真正排名需要回答“什么叫更好”。如果目标是单目标伤害，评价可能不同于多目标覆盖；如果强调体力效率或速度，结论也可能改变。Bills Must Be Paid 锤子页保存事实，Tier List 则应在未来公开场景、版本和计算方式，而不是把个人偏好包装成统一答案。',
          ],
        },
        {
          id: 'skills',
          title: 'Bills Must Be Paid 技能 Tier List 目前有哪些证据',
          paragraphs: [
            '技能树已确认包含握力、咖啡因、健身、手腕、幸运以及特殊效果等方向，但开发者同时明确说明完整版改变了部分 Demo 节点。这让技能排名比锤子更依赖版本：一个在 Demo 中测试严谨的 Build，也可能因为节点变化无法直接适用于 7 月 29 日完整版。',
            '当前最可靠的做法是先在技能树 Wiki 记录已确认方向和版本差异，等获得完整当前节点与效果后再做比较。Bills Must Be Paid 技能 Tier List 未来可以按早期推进、伤害、恢复、稳定性或特殊效果等不同目标分类，而不是强行把所有节点排成单一序列。',
          ],
        },
        {
          id: 'requirements',
          title: '一个可发布的 Bills Must Be Paid Tier List 需要什么',
          paragraphs: [
            '至少需要五项：明确游戏版本、完整当前物品或节点列表、可验证数值或可复现测试、公开排名标准，以及补丁后更新记录。只有这样，读者才能知道一个等级描述的具体环境，也能在未来版本变化时理解为什么某个位置上升或下降。',
            '如果缺少其中任何核心部分，榜单仍然可以作为个人偏好分享，但不应被写成“权威 Bills Must Be Paid Tier List”。本站希望排名页和 Wiki 的事实层互相支持：事实页提供来源，排名页提供分析方法，两者都保留版本信息。',
          ],
          bullets: ['明确游戏版本', '完整物品或节点列表', '可验证效果或测试', '清晰排名标准', '补丁后的变更记录'],
        },
        {
          id: 'tier-method',
          title: 'Bills Must Be Paid Tier List 的可靠方法',
          paragraphs: [
            '排名应该从问题开始，而不是从字母等级开始。先定义玩家要优化的目标，再决定指标。例如锤子可以测试伤害、范围、速度和暴击；技能可能需要区分早期成长、稳定性、恢复或特殊效果。然后在同一 Bills Must Be Paid 版本中收集完整候选项并统一测试。',
            '每个结论还应区分“官方事实”“本站实测”和“社区偏好”。官方事实可以确认某个属性存在，实测可以比较当前表现，偏好则解释玩法感受。把三者混在一起，Tier List 会看起来确定但无法复查。分层后，即使补丁只改一个锤子，也只需要重新测试受影响部分。',
          ],
        },
        {
          id: 'tier-criteria',
          title: 'Bills Must Be Paid 锤子与技能应该按什么标准比较',
          paragraphs: [
            '锤子的可靠起点是伤害、速度、暴击率和攻击范围。未来可以根据不同场景生成多个排名，而不是唯一总榜：例如单目标、覆盖、速度或体力效率。每个排名都应说明为何这些指标与目标相关，并公开数据来源。这样 Bills Must Be Paid Tier List 才有可解释性。',
            '技能树的标准更复杂，因为升级不仅影响基础属性，还可能带来幸运、恢复或特殊行为。一个节点在早期非常强，不代表后期仍然同样重要；某种特殊效果也可能依赖锤子或其他 Build。没有完整当前节点与机会成本时，统一 S/F 排名会掩盖这种上下文。',
          ],
        },
        {
          id: 'tier-search-intent',
          title: '为什么搜索需求不能替 Bills Must Be Paid Tier List 提供证据',
          paragraphs: [
            'Tier List 是明确的搜索需求，但需求只说明玩家想要答案，并不证明某个答案正确。为了快速覆盖关键词而虚构完整榜单，会产生一个很容易获得点击、却可能误导玩家的页面。Bills Must Be Paid 当前更适合先记录可靠维度和证据缺口，再在数据成熟后拆出真正的锤子与技能排名。',
            '这种方式也减少内容互相蚕食。锤子 Wiki 保存锤子事实，技能树 Wiki 保存节点事实，Tier List 专注比较与方法。未来数据足够时，可以再建立专门的 hammer tier list 和 skill tier list，并标注版本、更新时间和变化原因。这样搜索矩阵扩展来自新增价值，而不是重复定义。',
          ],
        },
      ],
    },
    'demo-vs-full-game': {
      metaTitle: 'Bills Must Be Paid Demo vs Full Game - 版本区别',
      metaDescription:
        'Bills Must Be Paid Demo vs Full Game：发布日期、存档兼容、转生破产、首饰、商店、存钱罐、锤子与完整版新增内容。',
      eyebrow: '版本',
      title: 'Bills Must Be Paid Demo vs Full Game',
      description:
        '依据开发者与 Steam 一手资料比较 Bills Must Be Paid 免费 Demo、浏览器体验与 Steam 完整版的日期、存档和系统差异。',
      imageAlt: 'Bills Must Be Paid 官方游戏头图',
      breadcrumbs: ['Demo 与完整版'],
      toc: [
        '发布日期',
        '存档兼容性',
        '完整版新增内容',
        '浏览器版与 Steam Demo',
        '共同的核心循环',
        '完整版新增内容的意义',
        '存档与版本语境',
      ],
      related: [
        { title: '新手攻略', description: '先学习 Demo 与完整版共享的核心循环。' },
        { title: '转生与破产', description: '了解完整版重点增加和调整的长期成长系统。' },
        { title: '技能树', description: '部分升级节点在 Demo 与完整版之间发生变化。' },
      ],
      sources: [
        { label: 'Steam — Bills Must Be Paid Demo', note: '官方 Steam Demo 页面；发布日期为 2026 年 4 月 21 日。' },
        { label: 'Steam — Bills Must Be Paid', note: '完整版页面；发布日期为 2026 年 7 月 29 日。' },
        { label: 'Steam Community — Bills Must Be Paid 开发者公告', note: '说明完整版新增系统并明确 Demo 存档不转移。' },
        { label: 'Rike Games — Bills Must Be Paid 官方 Press Kit', note: '链接官方浏览器/itch.io Demo 与 Steam 版本。' },
        { label: 'Rike Games on itch.io — Bills Must Be Paid', note: '开发者发布的浏览器 HTML5 Demo。' },
      ],
      sections: [
        {
          id: 'dates',
          title: 'Bills Must Be Paid Demo 和完整版什么时候发布',
          paragraphs: [
            'Steam Demo 的官方发布日期是 2026 年 4 月 21 日，Bills Must Be Paid 完整版则于 2026 年 7 月 29 日上线。这个时间边界对阅读旧攻略非常重要：4 月到 7 月之间发布的内容很可能基于 Demo，而上线后的完整版本已经包含更多系统和若干结构变化。',
            'Rike Games 还通过自己的渠道和 itch.io 提供浏览器可玩的 HTML5 Demo。它们属于开发者关联的 Bills Must Be Paid 体验，但公开资料不足以证明所有浏览器打包版本与 Steam Demo 在每个字节或每个内部配置上完全相同。因此本页只比较开发者明确确认的共同点和差异。',
          ],
          bullets: ['Steam Demo：2026 年 4 月 21 日', 'Steam 完整版：2026 年 7 月 29 日'],
        },
        {
          id: 'saves',
          title: 'Bills Must Be Paid Demo 存档不会转移到完整版',
          paragraphs: [
            'Rike Games 在上线当天明确说明 Demo 存档不能带到完整版。开发者给出的原因包括转生与破产变化、部分技能树节点变化、平衡调整以及底层系统变化。因此这不是单纯“没有做存档导入”，而是两个阶段的进度结构已经不完全相同。',
            '如果你在浏览器或 Steam Demo 中拥有大量进度，应把完整版本当成新的开始。Demo 经验仍然能帮助你掌握敲存钱罐、体力、金钱、账单和升级，但长期成长需要重新按完整版理解。Bills Must Be Paid 的版本对比页把这条提醒放在显眼位置，避免玩家误以为旧存档会自动继承。',
          ],
        },
        {
          id: 'additions',
          title: 'Rike Games 为 Bills Must Be Paid 完整版公布了什么新增内容',
          paragraphs: [
            '上线前公告重点提到转生/破产成长、戒指和手镯、新商店中的桌面小工具、更多存钱罐类型、更多 Perk、更多锤子、更多赌博或风险机制，以及一个正式结局。Steam 完整版页面还列出成就和 Steam Cloud。',
            '这些内容说明完整版并不是简单把 Demo 时间拉长。长期周期、持续首饰成长和更多装备会改变资源决策，风险机制和结局又扩大目标范围。不过开发者把它们作为上线亮点，而不是数学意义上的完整差异清单，因此本站称为“已确认新增内容”，不会声称所有版本差异都已经列完。',
          ],
          bullets: ['转生与破产成长', '戒指和手镯', '桌面小工具商店', '更多存钱罐、Perk 和锤子', '更多风险/赌博机制', '正式结局', 'Steam 成就与 Steam Cloud'],
        },
        {
          id: 'browser',
          title: 'Bills Must Be Paid 浏览器 Demo 与 Steam Demo 有什么关系',
          paragraphs: [
            'Rike Games Press Kit 把 itch.io 指向免费 Demo/浏览器玩法，同时把 Steam 指向 PC 版本。Steam Demo 是独立 Steam App，itch.io 则直接运行 HTML5 版本。两者都可以让玩家接触 Bills Must Be Paid 的核心循环，但分发渠道和构建形式不同。',
            '因此如果你的问题是“怎样玩核心循环”，新手攻略可以同时提供高层说明；如果问题是“完整版破产后如何成长”，则应使用完整版本资料。本站不会为了简化而声称每个 Demo 机制完全一致，也不会把浏览器体验误写成完整版。版本标签是所有后续攻略的过滤器。',
          ],
        },
        {
          id: 'demo-shared-loop',
          title: 'Bills Must Be Paid Demo 与完整版共享哪些核心玩法',
          paragraphs: [
            '两者共享的核心身份是主动敲击：控制锤子、敲碎存钱罐、消耗体力、获得金钱和随机掉落、处理账单并购买升级。正因为这些基础系统在 Demo 中已经可体验，玩家可以在购买完整版前理解 Bills Must Be Paid 为什么不是纯被动 idle game。',
            '但“共享核心循环”不等于“所有系统完全相同”。Rike Games 明确说上线时部分长期系统和技能节点发生变化，所以 Demo 指南适合解释基础操作，却不能自动作为完整版转生或精确 Build 的最终答案。把共享部分与变化部分分开，是本页最重要的目的。',
          ],
        },
        {
          id: 'demo-full-additions',
          title: 'Bills Must Be Paid 完整版新增内容为什么会改变玩法',
          paragraphs: [
            '转生与破产把单轮失败连接到长期周期，戒指和手镯提供持续成长，更多存钱罐和锤子增加目标与装备选择，而桌面小工具和风险机制扩展资源决策。换句话说，完整版新增的不只是“更多关卡”，而是让 Bills Must Be Paid 的长期结构更完整。',
            '这也是为什么 Demo 存档不能简单迁移：如果成长节点、平衡和底层逻辑已经变化，旧进度不一定能无损映射。玩家可以把 Demo 当成核心玩法预览，把完整版当成包含更多长期系统的正式进度环境。未来若开发者公布更详细补丁，本页可以继续扩展已确认差异。',
          ],
        },
        {
          id: 'demo-save-context',
          title: '如何用版本语境阅读 Bills Must Be Paid 旧攻略',
          paragraphs: [
            '看到 2026 年 7 月 29 日之前的攻略时，先检查它讨论的是核心循环还是开发者后来明确改变的系统。如果内容只说明如何敲存钱罐、体力如何限制一轮，可能仍有参考价值；如果它给出转生、破产或技能树的精确路线，则需要当前完整版验证。',
            '同样，补丁后的锤子和平衡结论也应该带时间。Bills Must Be Paid 的可靠内容不是把所有历史资料删除，而是让每条信息保留来源和版本。这样玩家能理解一个建议为何曾经正确、何时可能过时，也让站内其他攻略在引用版本相关结论时有统一入口。',
          ],
        },
      ],
    },
  },
} satisfies GamePageLocaleBundle;
