import type { GamePageLocaleBundle } from './types';

export const esGamePages = {
  common: {
    play: 'Jugar',
    playNow: 'Jugar ahora',
    guides: 'Guías',
    beginnerGuide: 'Guía para principiantes',
    prestigeBankruptcy: 'Prestigio y bancarrota',
    piggyShuffle: 'Piggy Shuffle',
    demoVsFullGame: 'Demo vs juego completo',
    wiki: 'Wiki',
    piggyBanks: 'Huchas',
    hammers: 'Martillos',
    skillTree: 'Árbol de habilidades',
    achievements: 'Logros',
    tierLists: 'Tier Lists',
    sourceChecked: 'Fuentes verificadas',
    updated: 'Actualizado el 8 de agosto de 2026',
    screenshotCaption: 'Captura oficial de Bills Must Be Paid de Rike Games / Steam.',
    onThisPage: 'En esta página',
    relatedPages: 'Páginas relacionadas',
    originalSources: 'Fuentes originales',
    sourcesIntro:
      'Los datos de esta página se contrastan con Rike Games, Steam, anuncios del desarrollador y logros oficiales. Los consejos de la comunidad se identifican como tales y no se presentan como mecánicas oficiales.',
  },
  pages: {
    guides: {
      metaTitle: 'Bills Must Be Paid Guías - Inicio, Prestigio y Retos',
      metaDescription:
        'Bills Must Be Paid guías: principiantes, prestigio, bancarrota, Piggy Shuffle, martillos, habilidades y logros con fuentes verificadas.',
      eyebrow: 'Guías',
      title: 'Bills Must Be Paid Guías',
      description:
        'Guías de Bills Must Be Paid organizadas por problemas reales: aprender el bucle principal, entender la progresión y resolver retos sin inventar reglas ocultas.',
      imageAlt: 'Partida de Bills Must Be Paid con huchas listas para romper',
      breadcrumbs: ['Guías'],
      toc: [
        'Empieza aquí',
        'Guías de progresión',
        'Guías de retos',
        'Cómo verificamos las guías',
        'Cómo usar estas guías',
        'Por qué importa la versión',
        'Qué consideramos evidencia',
      ],
      related: [
        { title: 'Bills Must Be Paid Wiki', description: 'Referencias de huchas, martillos y árbol de habilidades.' },
        { title: 'Logros', description: 'Los 27 logros oficiales de Steam y sus objetivos.' },
        { title: 'Demo vs juego completo', description: 'Qué cambió entre la demo gratuita y el lanzamiento del 29 de julio.' },
      ],
      sources: [
        {
          label: 'Rike Games — press kit oficial de Bills Must Be Paid',
          note: 'Fuente principal para el bucle básico, árbol de habilidades, huchas, martillos y monedas raras.',
        },
        {
          label: 'Steam — Bills Must Be Paid',
          note: 'Descripción actual del juego completo, fecha de lanzamiento y funciones publicadas.',
        },
        {
          label: 'Steam Community — Bills Must Be Paid',
          note: 'Anuncios del desarrollador sobre lanzamiento, bancarrota/prestigio y diferencias entre demo y versión completa.',
        },
      ],
      sections: [
        {
          id: 'start-here',
          title: 'Dónde empezar con Bills Must Be Paid',
          paragraphs: [
            'Si acabas de llegar a Bills Must Be Paid, empieza por el bucle principal antes de buscar el mejor martillo o una lista de niveles. El juego gira alrededor de una secuencia muy concreta: controlas el martillo, rompes huchas, gastas resistencia, recoges dinero y botín aleatorio, y después decides cuánto reservar para facturas y cuánto invertir en mejoras. Entender esa economía básica hace que el resto de sistemas tenga sentido.',
            'La guía para principiantes es la entrada recomendada porque conecta resistencia, facturas, ventajas, martillos, árbol de habilidades y progresión posterior. Cuando ese mapa ya está claro, puedes pasar a temas más específicos. Bills Must Be Paid recompensa decisiones entre obligaciones inmediatas y crecimiento, por lo que saltar directamente a una recomendación aislada puede ser menos útil que comprender primero de dónde sale y a dónde va cada recurso.',
          ],
          bullets: [
            'Usa la Guía para principiantes para aprender el bucle completo.',
            'Lee Demo vs juego completo antes de aplicar consejos antiguos a la versión final.',
            'Consulta la Wiki cuando necesites datos de un sistema concreto.',
          ],
        },
        {
          id: 'progression',
          title: 'Guías de progresión de Bills Must Be Paid',
          paragraphs: [
            'La progresión de Bills Must Be Paid no termina cuando una partida corta acaba. En la versión completa, las facturas, la bancarrota, un nuevo ciclo y la progresión persistente con anillos y pulseras forman una estructura más amplia. Los materiales oficiales han usado tanto “Prestige Points” como “legacy points” en momentos distintos, así que las guías conservan ese contexto en vez de fingir que la terminología nunca cambió.',
            'Si tu duda es qué ocurre al quebrar, cómo empieza un nuevo ciclo o para qué sirve la progresión posterior a la bancarrota, entra en la guía de Prestigio y Bancarrota. Si la pregunta se centra en una mejora concreta, las páginas de martillos o del árbol de habilidades son mejores referencias. La matriz de Bills Must Be Paid separa estrategia de consulta para que cada URL responda una intención clara y no repita el mismo texto.',
          ],
        },
        {
          id: 'challenges',
          title: 'Retos y objetivos de Bills Must Be Paid',
          paragraphs: [
            'Los logros de Steam muestran que Bills Must Be Paid combina progresión a largo plazo con retos de ejecución. Hay objetivos de precisión, golpes múltiples, Piggy Shuffle, dinero, apuestas, préstamos, colecciones, bancarrota y compra total del árbol de habilidades. Cuando un reto tiene un texto oficial, ese objetivo es el punto de partida más estable porque indica exactamente qué está registrando Steam.',
            'Piggy Shuffle muestra por qué es importante separar evidencia. El logro Eyes on the Piggy confirma que hay que escoger la hucha correcta, pero el método de grabar el movimiento y verlo a cámara lenta procede de una guía de Steam Community. Es una ayuda práctica, no una mecánica documentada por Rike Games. Las guías de Bills Must Be Paid mantienen esa etiqueta para ser útiles sin convertir una experiencia de un jugador en una regla oficial.',
          ],
        },
        {
          id: 'verification',
          title: 'Cómo verificamos las guías de Bills Must Be Paid',
          paragraphs: [
            'La primera capa de evidencia son las fuentes de Rike Games, la tienda de Steam, los anuncios del desarrollador y la lista oficial de logros. Cada fuente resuelve preguntas diferentes: el press kit explica el diseño y ofrece ejemplos, Steam refleja el producto completo actual, los anuncios documentan cambios entre versiones y los logros confirman metas formales que quizá no aparecen detalladas en la descripción comercial.',
            'Cuando las fuentes públicas no ofrecen una tabla completa de estadísticas, probabilidades ocultas o todos los nodos del árbol, no rellenamos el hueco con cifras inventadas. Un dato de la comunidad puede incorporarse si tiene utilidad y se puede contextualizar, pero debe aparecer como prueba, observación o consejo comunitario. Para Bills Must Be Paid, que acaba de pasar de demo a versión completa, conservar versión y fecha es especialmente importante.',
          ],
          bullets: [
            'Priorizamos material de primera parte para mecánicas y fechas.',
            'Los anuncios del desarrollador documentan cambios entre builds.',
            'Los consejos de jugadores se etiquetan como contenido comunitario.',
            'No publicamos rankings exactos cuando faltan datos suficientes.',
          ],
        },
        {
          id: 'guide-roadmap',
          title: 'Cómo usar la estructura de guías de Bills Must Be Paid',
          paragraphs: [
            'Las guías están organizadas por la decisión que un jugador necesita tomar. La guía para principiantes explica el mapa general; Prestigio y Bancarrota trata los ciclos y la progresión persistente; Piggy Shuffle se centra en un único reto; la Wiki guarda información de referencia sobre huchas, martillos y habilidades. Esta separación evita convertir cada palabra clave en un artículo fino y repetitivo.',
            'Una regla sencilla es preguntar si quieres saber “qué es esto” o “qué hago ahora”. Para lo primero, empieza en la Wiki; para lo segundo, busca una guía. Por ejemplo, las dimensiones oficiales para comparar martillos pertenecen a la referencia de martillos, mientras que su papel dentro del presupuesto de una partida se entiende mejor en la guía inicial. Así, Bills Must Be Paid mantiene un clúster enlazado sin duplicar definiciones completas en cada página.',
          ],
        },
        {
          id: 'guide-version-context',
          title: 'Por qué la versión importa en las guías de Bills Must Be Paid',
          paragraphs: [
            'Bills Must Be Paid existe como experiencia jugable en navegador, demo HTML5 de itch.io, demo de Steam y juego completo de Steam. La demo de Steam salió el 21 de abril de 2026 y la versión completa el 29 de julio de 2026. Rike Games explicó que las partidas guardadas de la demo no se transfieren porque cambiaron prestigio, bancarrota, algunos nodos, balance y sistemas internos.',
            'Por eso una guía antigua puede seguir explicando correctamente cómo romper huchas y administrar resistencia, pero ser insuficiente para describir la progresión final. Lo mismo ocurre con el balance de martillos: Rike Games ya ha publicado cambios concretos. Las páginas de Bills Must Be Paid prefieren evidencia fechada y verificable para evitar presentar una recomendación correcta en abril como una verdad automática en agosto.',
          ],
        },
        {
          id: 'guide-evidence',
          title: 'Qué cuenta como evidencia en una guía de Bills Must Be Paid',
          paragraphs: [
            'Una guía útil debe responder una pregunta real y dejar claro de dónde sale la respuesta. El material oficial sostiene las afirmaciones de mecánicas; los anuncios del desarrollador explican cambios; las pruebas o consejos de la comunidad pueden aportar soluciones prácticas, pero se mantienen separados de las reglas oficiales. Las afirmaciones numéricas necesitan además versión, método y una forma razonable de reproducirse.',
            'Este enfoque facilita las actualizaciones. Si un parche modifica un martillo, solo hay que revisar las comparaciones que dependen de ese cambio. Si un método comunitario deja de funcionar, se puede actualizar sin reescribir una mecánica oficial inexistente. El objetivo de las guías de Bills Must Be Paid no es parecer completas a cualquier precio, sino construir respuestas que puedan revisarse cuando aparezcan mejores fuentes.',
          ],
        },
      ],
    },
    'beginner-guide': {
      metaTitle: 'Bills Must Be Paid Guía para Principiantes',
      metaDescription:
        'Bills Must Be Paid guía para principiantes: huchas, resistencia, facturas, perks, martillos, habilidades, bancarrota y colecciones.',
      eyebrow: 'Guía para principiantes',
      title: 'Bills Must Be Paid Guía para Principiantes',
      description:
        'Aprende Bills Must Be Paid desde la primera partida: romper huchas, controlar resistencia, pagar facturas, elegir mejoras y entender la progresión del juego completo.',
      imageAlt: 'Captura oficial de Bills Must Be Paid con martillo y huchas',
      breadcrumbs: ['Guías', 'Guía para principiantes'],
      toc: [
        'Aprende primero el bucle',
        'Facturas y perks',
        'Árbol de habilidades',
        'Martillos',
        'Progresión por bancarrota',
        'Colecciones',
        'Prioridades de principiante',
        'Cómo leer los sistemas',
        'Qué aprender después',
      ],
      related: [
        { title: 'Prestigio y bancarrota', description: 'Entiende el reinicio de ciclo y la progresión persistente con joyería.' },
        { title: 'Martillos', description: 'Consulta los compromisos oficiales y cambios de balance confirmados.' },
        { title: 'Árbol de habilidades', description: 'Consulta las rutas y ejemplos documentados por Rike Games.' },
      ],
      sources: [
        { label: 'Rike Games — press kit oficial de Bills Must Be Paid' },
        { label: 'Steam — Bills Must Be Paid' },
        { label: 'Steam Community — anuncios del desarrollador de Bills Must Be Paid' },
      ],
      sections: [
        {
          id: 'core-loop',
          title: '1. Aprende primero el bucle de Bills Must Be Paid',
          paragraphs: [
            'Rike Games define Bills Must Be Paid como un juego incremental activo. Mueves el martillo, rompes huchas y cada golpe consume resistencia. Al destruir objetivos recibes dinero y botín aleatorio, pero la partida termina cuando la mano ya no puede continuar. Esto diferencia el juego de un idle puro: tu selección de objetivos, precisión y uso del tiempo determinan qué recursos consigues antes de que se agote la resistencia.',
            'Para un principiante, lo esencial es visualizar el circuito completo: golpear, gastar resistencia, obtener recursos, pagar facturas y decidir mejoras para la siguiente partida. El dinero no es un premio que siempre deba gastarse al instante; también es la forma de cumplir obligaciones. Cuando entiendes esa tensión, las decisiones de Bills Must Be Paid dejan de parecer una colección de menús separados y empiezan a formar una economía coherente.',
          ],
          bullets: [
            'Romper huchas convierte juego activo en dinero y botín.',
            'La resistencia limita cuánto puede durar cada sesión activa.',
            'Facturas y mejoras compiten por el mismo dinero.',
          ],
        },
        {
          id: 'bills',
          title: '2. Las facturas son progresión en Bills Must Be Paid',
          paragraphs: [
            'Las facturas son el sistema de presión central. Las descripciones oficiales las conectan con el avance y con la elección de ventajas después de pagarlas; en el juego completo, ignorarlas también se relaciona con la bancarrota. Por eso reservar efectivo para una factura puede ser más importante que comprar una mejora inmediata. El juego te obliga a comparar seguridad a corto plazo con crecimiento para rondas futuras.',
            'Si juegas la versión de navegador o la demo de Steam, no supongas que todas las reglas de bancarrota y prestigio son idénticas a la versión final. Rike Games explicó el 29 de julio que el lanzamiento completo cambió esas áreas, junto con ciertos nodos y el balance. Antes de seguir una estrategia de progresión avanzada de Bills Must Be Paid, confirma siempre la versión para la que fue escrita.',
          ],
        },
        {
          id: 'skill-tree',
          title: '3. El árbol de habilidades cambia futuras partidas',
          paragraphs: [
            'El árbol de habilidades de Bills Must Be Paid no se limita a aumentar daño. Rike Games menciona fuerza de agarre, cafeína, gimnasio, muñeca y suerte, además de efectos más extraños como rocas que caen del cielo o un martillo electrificado. Esto sugiere rutas que afectan capacidad física, recuperación, consistencia o comportamiento especial, en lugar de una única progresión lineal.',
            'Las fuentes públicas no publican una tabla completa y actual de todos los nodos, y el desarrollador confirmó que algunos cambiaron para el juego completo. Por eso esta guía no entrega una ruta “óptima para siempre”. Un principiante debería identificar primero su cuello de botella actual y leer el árbol como un conjunto de direcciones. La Wiki de habilidades mantiene separados los ejemplos confirmados de cualquier ranking que aún requiera datos adicionales.',
          ],
        },
        {
          id: 'hammers',
          title: '4. Los martillos de Bills Must Be Paid funcionan por compromisos',
          paragraphs: [
            'La descripción oficial compara martillos por probabilidad de crítico, radio de golpe, velocidad y daño. Un modelo puede favorecer críticos a cambio de menor radio, mientras otro puede golpear más rápido y cubrir más área con menos daño. Esa estructura significa que “mejor martillo” necesita una condición: lo que gana en un objetivo concreto puede no ser lo que gana frente a varias huchas móviles.',
            'El balance también cambia. Rike Games documentó que Demo Bug Fix v0.2.7 aumentó algo el radio de Ultracrit-Hammer y aceleró los golpes de Toy-Hammer. Una tier list antigua puede quedar desactualizada aunque fuera razonable en su momento. Como principiante en Bills Must Be Paid, aprende primero qué estadísticas importan y luego usa datos de tu versión antes de tratar una clasificación como definitiva.',
          ],
        },
        {
          id: 'bankruptcy',
          title: '5. El juego completo continúa mediante ciclos de bancarrota',
          paragraphs: [
            'En la versión completa, la bancarrota forma parte de la progresión. Un anuncio previo al lanzamiento conecta una factura fallida con un nuevo ciclo y vincula la cantidad pagada hacia facturas con puntos de progresión posteriores. El texto actual de Steam usa “legacy points”, mientras el anuncio anterior hablaba de “Prestige Points”. Ambas expresiones deben leerse en su contexto temporal.',
            'Esos puntos se relacionan con anillos y pulseras que mejoran la mano y pueden dar ventajas únicas. Los logros Fresh Start y Prestige Jewelry confirman que empezar un nuevo ciclo y desbloquear toda la joyería son metas formales. Para un principiante, la idea importante es que quebrar en Bills Must Be Paid no equivale simplemente a perder todo: forma parte de la estructura persistente del lanzamiento completo.',
          ],
        },
        {
          id: 'collections',
          title: '6. Huchas y monedas raras también forman parte del progreso',
          paragraphs: [
            'Rike Games explica que aparecen distintos tipos de hucha y que pueden variar en comportamiento o valor. También existe una colección de monedas raras. Los logros oficiales refuerzan esta capa: Piggy Bank Collector exige desbloquear todas las huchas y Coin Collector completar la colección de monedas. Esto convierte la exploración del contenido en una meta formal de Bills Must Be Paid.',
            'No necesitas memorizar todas las variantes al comenzar, pero sí entender que el objetivo cambia el valor de cada golpe. Una hucha más difícil de seguir, una que lleva más dinero o una que recupera resistencia puede alterar tu decisión durante una ronda limitada. Cuando el bucle básico ya resulte natural, la Wiki de huchas ofrece los comportamientos que pueden respaldarse con fuentes sin inventar probabilidades ocultas.',
          ],
        },
        {
          id: 'beginner-priorities',
          title: 'Prioridades para empezar bien en Bills Must Be Paid',
          paragraphs: [
            'Primero, aprende a golpear con consistencia y a reconocer cuánto dura tu resistencia. Segundo, incorpora la próxima factura a cada decisión de gasto. Tercero, compara mejoras solo después de entender qué problema intentas solucionar. Estas prioridades evitan que un principiante gaste todos los recursos en una mejora vistosa y luego descubra que no puede cumplir la obligación que realmente mueve el ciclo.',
            'Bills Must Be Paid crea tensión porque el mismo dinero puede servir para seguridad inmediata o crecimiento futuro. En el juego completo también existe la capa persistente posterior a la bancarrota. No necesitas optimizar todo a la vez: basta con poder explicar por qué guardas o gastas una cantidad. Esa disciplina es más útil al principio que copiar una ruta de habilidades o una tier list sin conocer su versión y criterio.',
          ],
        },
        {
          id: 'beginner-read-systems',
          title: 'Cómo leer información sobre los sistemas de Bills Must Be Paid',
          paragraphs: [
            'Separa hechos oficiales de análisis. Que crítico, radio, velocidad y daño sean dimensiones de martillos es un hecho documentado; que un martillo concreto sea S en todas las situaciones requiere datos completos y una metodología. Lo mismo ocurre con habilidades y huchas. La versión completa cambió partes del juego, así que una afirmación precisa sin fecha o build merece más cautela.',
            'Los consejos comunitarios también pueden ser valiosos sin convertirse en reglas oficiales. El método de cámara lenta para Piggy Shuffle es un buen ejemplo: ayuda a algunos jugadores a seguir el objetivo, pero proviene de Steam Community. Las páginas de Bills Must Be Paid indican ese origen para que un principiante pueda usar una idea práctica y, al mismo tiempo, saber qué parte está confirmada por el desarrollador.',
          ],
        },
        {
          id: 'beginner-next-steps',
          title: 'Qué aprender después de la guía para principiantes',
          paragraphs: [
            'Cuando el bucle ya esté claro, deja que tu problema actual elija la siguiente página. Si la bancarrota y los ciclos te confunden, ve a Prestigio y Bancarrota. Si dudas entre equipo, abre Martillos. Para decisiones de mejora, consulta el Árbol de habilidades. Si tu objetivo es el 100 %, usa los 27 logros como lista maestra y salta desde cada objetivo hacia su sistema relacionado.',
            'Los jugadores que vienen de la demo deberían leer también Demo vs juego completo. Allí se fijan las fechas del 21 de abril y 29 de julio, la incompatibilidad de partidas guardadas y las áreas que Rike Games dijo haber cambiado. Con esa frontera clara, las demás guías de Bills Must Be Paid se vuelven más fáciles de interpretar y es menos probable aplicar una recomendación de demo a una mecánica final distinta.',
          ],
        },
      ],
    },
    'prestige-bankruptcy': {
      metaTitle: 'Bills Must Be Paid Prestigio y Bancarrota',
      metaDescription:
        'Bills Must Be Paid prestigio y bancarrota: nuevos ciclos, Prestige/legacy points, anillos, pulseras y diferencias de guardado con la demo.',
      eyebrow: 'Guía de progresión',
      title: 'Bills Must Be Paid Prestigio y Bancarrota',
      description:
        'Qué confirman las fuentes oficiales sobre facturas fallidas, bancarrota, nuevos ciclos, puntos persistentes, anillos y pulseras.',
      imageAlt: 'Pantalla de factura de Bills Must Be Paid',
      breadcrumbs: ['Guías', 'Prestigio y bancarrota'],
      toc: [
        'Qué provoca la bancarrota',
        'Qué significa un nuevo ciclo',
        'Prestige Points vs legacy points',
        'Anillos y pulseras',
        'Aviso sobre la demo',
        'El bucle de prestigio',
        'Puntos y joyería',
        'Notas de versión',
      ],
      related: [
        { title: 'Guía para principiantes', description: 'Sitúa la bancarrota dentro del bucle completo del juego.' },
        { title: 'Demo vs juego completo', description: 'El lanzamiento cambió suficiente progresión como para no transferir guardados.' },
        { title: 'Logros', description: 'Fresh Start y otros objetivos relacionados con la progresión.' },
      ],
      sources: [
        { label: 'Steam — Bills Must Be Paid', note: 'La descripción actual usa “legacy points” y conecta la bancarrota con anillos y pulseras.' },
        { label: 'Steam Community — anuncios del desarrollador', note: 'El anuncio de junio describe bancarrota, nuevos ciclos y “Prestige Points”; el lanzamiento explica la incompatibilidad de guardados.' },
        { label: 'Steam Community — logros oficiales', note: 'Fresh Start exige declarar bancarrota y comenzar un nuevo ciclo.' },
      ],
      sections: [
        {
          id: 'trigger',
          title: 'Qué provoca la bancarrota en Bills Must Be Paid',
          paragraphs: [
            'En el juego completo, la información oficial conecta una factura fallida o ignorada con la bancarrota. No se trata únicamente de una pantalla de derrota: el anuncio previo al lanzamiento vincula ese momento con el inicio del siguiente ciclo de progresión. Las facturas son, por tanto, el puente entre la sesión activa de romper huchas y la estructura persistente de Bills Must Be Paid.',
            'Esta relación cambia la forma de valorar el dinero. Gastar una gran parte en mejoras puede acelerar la ronda actual, pero también dejar menos margen para cumplir una obligación. Si finalmente fallas, el juego utiliza la bancarrota como transición. Entender esa presión evita interpretar el sistema como un simple castigo y ayuda a planificar cuándo asumir riesgo y cuándo proteger la próxima factura.',
          ],
        },
        {
          id: 'cycle',
          title: 'La bancarrota inicia un nuevo ciclo',
          paragraphs: [
            'El logro oficial Fresh Start proporciona la confirmación más clara: “Declare bankruptcy and start a new cycle”. La relación entre quiebra y ciclo no depende de una inferencia comunitaria; está escrita en el propio objetivo de Steam. Para Bills Must Be Paid, esto significa que el fracaso de una obligación puede convertirse en un paso formal dentro de la progresión a largo plazo.',
            'Un nuevo ciclo tampoco significa que todo lo anterior carezca de valor. Los materiales del desarrollador conectan lo pagado hacia facturas antes de quebrar con la progresión posterior. La estructura combina presión inmediata y recompensa persistente: cuanto mejor entiendas qué parte de tus recursos debe ir a obligaciones y qué parte puede invertirse, más sentido tendrá cuándo continuar una carrera y cuándo aceptar que el siguiente ciclo forma parte del proceso.',
          ],
        },
        {
          id: 'points',
          title: 'Prestige Points y legacy points en Bills Must Be Paid',
          paragraphs: [
            'Un anuncio de Rike Games de junio usó el nombre Prestige Points y explicó que una mayor cantidad pagada hacia las facturas antes de la bancarrota produce más puntos. La descripción actual de Steam utiliza “legacy points” para la moneda persistente posterior. Como ambas expresiones proceden de fuentes oficiales de fechas distintas, esta guía conserva las dos en lugar de borrar la evolución de la terminología.',
            'Lo que sí se mantiene consistente es la estructura: pagos, bancarrota, nuevo ciclo y progresión persistente están conectados. Si la interfaz final utiliza un término específico, esa es la referencia para jugar hoy; el nombre anterior sigue siendo relevante para interpretar anuncios y guías pre-lanzamiento. En Bills Must Be Paid, registrar este contexto evita que una diferencia de vocabulario parezca una contradicción mecánica inexistente.',
          ],
        },
        {
          id: 'jewelry',
          title: 'Para qué sirven los puntos: anillos y pulseras',
          paragraphs: [
            'Las fuentes oficiales relacionan la progresión posterior a la bancarrota con anillos y pulseras. Rike Games indica que estas piezas mejoran la mano y pueden otorgar ventajas únicas. El logro Prestige Jewelry exige desbloquear todos los anillos y pulseras, así que la joyería no solo sirve para optimizar: también forma parte del camino de finalización de Bills Must Be Paid.',
            'Las fuentes públicas usadas aquí no ofrecen un catálogo completo y versionado de todos los efectos, costes y oportunidades. Por eso no afirmamos que un anillo concreto deba comprarse siempre primero. Una recomendación universal necesitaría esos datos. La conclusión fiable es estructural: pagar facturas influye en la progresión antes de quebrar, la bancarrota abre un nuevo ciclo y la joyería transporta mejoras a ciclos posteriores.',
          ],
        },
        {
          id: 'demo-save',
          title: 'Los guardados de la demo no pasan al juego completo',
          paragraphs: [
            'Rike Games lo indicó directamente el día del lanzamiento, el 29 de julio de 2026. La explicación fue que el juego completo cambió prestigio y bancarrota, algunos nodos del árbol de habilidades, el balance y sistemas internos. Por tanto, la incompatibilidad no es solo una limitación técnica: la estructura de progresión ya no coincide de forma suficiente con la demo.',
            'Si has avanzado mucho en navegador o en Steam Demo, considera la versión completa un comienzo nuevo. Lo aprendido sobre control del martillo, resistencia, dinero y facturas sigue siendo útil, pero cualquier estrategia específica de prestigio necesita volver a validarse. La página Demo vs juego completo de Bills Must Be Paid ofrece el filtro de versión antes de aplicar una guía antigua al lanzamiento final.',
          ],
        },
        {
          id: 'prestige-loop',
          title: 'Cómo encaja el prestigio en el bucle de facturas',
          paragraphs: [
            'El prestigio de Bills Must Be Paid solo se entiende bien junto a las facturas. Primero generas recursos mediante juego activo, después equilibras obligaciones y mejoras; si una factura termina en bancarrota, comienza otro ciclo y parte del progreso se relaciona con una capa persistente. Por eso cuánto hayas conseguido pagar antes de quebrar importa para la lectura estratégica de una carrera.',
            'Los logros refuerzan el diseño: Fresh Start documenta el nuevo ciclo y Prestige Jewelry confirma que la joyería es una meta completa. La progresión persistente no es un detalle escondido, sino una parte formal del lanzamiento. En lugar de ver bancarrota como una interrupción aislada, el jugador puede verla como una transición prevista que convierte lo conseguido en contexto para las siguientes rondas.',
          ],
        },
        {
          id: 'prestige-jewelry',
          title: 'Puntos persistentes, anillos y pulseras',
          paragraphs: [
            'La joyería es el destino persistente más claramente documentado en las fuentes actuales. Los anillos y pulseras mejoran la mano y pueden introducir ventajas únicas; además, coleccionarlos todos es un objetivo oficial. Esto hace que Bills Must Be Paid una el crecimiento mecánico con la finalización: repetir ciclos no solo puede fortalecer al jugador, también acerca un logro específico.',
            'Todavía no existe en las fuentes públicas una base suficiente para construir una tier list responsable de todas las piezas. Cuando haya una lista completa de efectos, precios y versión, será posible comparar prioridades de compra. Hasta entonces, esta guía se limita a la relación confirmada entre pagos, bancarrota, puntos persistentes y joyería, evitando convertir huecos de información en estadísticas inventadas.',
          ],
        },
        {
          id: 'prestige-version',
          title: 'Por qué una guía de prestigio necesita versión',
          paragraphs: [
            'Prestigio y bancarrota están entre los sistemas que Rike Games dijo haber cambiado para el juego completo. Una explicación escrita durante la demo puede seguir siendo útil para comprender conceptos generales y, aun así, no describir exactamente el modelo posterior al 29 de julio. Cualquier consejo de Bills Must Be Paid sobre ciclos debería indicar si se comprobó en la demo o en el lanzamiento final.',
            'El mismo principio sirve para futuras actualizaciones. Si Rike Games publica cambios de progresión, la guía debería registrar qué cambió y cuándo, no sustituir silenciosamente el pasado. Mantener términos, fuentes y fecha permite entender por qué una recomendación se mueve. En un juego recién lanzado, esa trazabilidad es más fiable que presentar una estrategia de prestigio como una respuesta eterna.',
          ],
        },
      ],
    },
    'piggy-shuffle': {
      metaTitle: 'Bills Must Be Paid Piggy Shuffle - Guía',
      metaDescription:
        'Bills Must Be Paid Piggy Shuffle: objetivo oficial Eyes on the Piggy y método comunitario de grabación a cámara lenta claramente etiquetado.',
      eyebrow: 'Guía de reto',
      title: 'Bills Must Be Paid Piggy Shuffle - Guía',
      description:
        'Qué exige realmente Eyes on the Piggy, cómo funciona el método comunitario de cámara lenta y qué afirmaciones no están verificadas.',
      imageAlt: 'Pantalla de colección de huchas de Bills Must Be Paid',
      breadcrumbs: ['Guías', 'Piggy Shuffle'],
      toc: [
        'Qué exige el reto',
        'Método comunitario a cámara lenta',
        'Qué no está verificado',
        'Contexto del reto',
        'Cómo aplicar el método',
        'Solución de problemas',
      ],
      related: [
        { title: 'Huchas', description: 'Qué dicen las fuentes oficiales sobre tipos, comportamiento y colección.' },
        { title: 'Logros', description: 'Consulta Eyes on the Piggy dentro de la lista oficial completa.' },
        { title: 'Guía para principiantes', description: 'Vuelve al bucle principal y a la progresión general.' },
      ],
      sources: [
        { label: 'Steam Community — logros oficiales', note: 'Confirma Eyes on the Piggy: escoger la hucha correcta en Piggy Shuffle.' },
        { label: 'Steam Community Guide — guía de Luca para Piggy Shuffle', note: 'Método creado por un jugador usando grabación de móvil y reproducción lenta; no es documentación del desarrollador.' },
      ],
      sections: [
        {
          id: 'objective',
          title: 'Qué pide oficialmente Piggy Shuffle',
          paragraphs: [
            'La lista oficial de Steam para Bills Must Be Paid incluye Eyes on the Piggy, cuyo objetivo es “Pick the correct piggy in Piggy Shuffle”. Esa frase es la descripción de primera parte que podemos verificar. No promete una posición fija, una pista visual garantizada ni una probabilidad especial. Por eso una guía responsable debe empezar por el objetivo y no por teorías sobre reglas ocultas.',
            'Los retos cortos generan observaciones muy seguras por parte de jugadores: un patrón puede parecer repetirse varias veces y aun así no ser una mecánica estable. Esta página separa las dos capas. El objetivo oficial define qué debes conseguir; los métodos comunitarios describen cómo algunas personas intentan hacerlo. Mantener esa frontera ayuda a que Bills Must Be Paid pueda actualizarse si Rike Games explica el minijuego en el futuro.',
          ],
        },
        {
          id: 'community-method',
          title: 'Método comunitario: grabar y reproducir a cámara lenta',
          paragraphs: [
            'Una guía de Steam Community de Luca propone grabar Piggy Shuffle con un teléfono, reproducir el movimiento lentamente, seguir la hucha marcada durante cada intercambio y después volver al juego para escogerla. El método no modifica Bills Must Be Paid ni altera la velocidad interna; simplemente permite volver a observar una secuencia rápida con más tiempo para seguir el objetivo.',
            'La idea es práctica, pero sigue siendo consejo de un jugador. Rike Games no documenta la grabación como solución oficial y esta página no convierte la promesa de “100 %” del título comunitario en una garantía. La reproducción lenta puede reducir la dificultad de observación, aunque su utilidad depende de que la grabación conserve el objetivo y de que el jugador pueda seguir los intercambios sin perderlo.',
          ],
          bullets: [
            'Empieza a grabar antes de que el movimiento sea difícil de seguir.',
            'Reproduce lentamente cada intercambio desde la posición inicial.',
            'Vuelve al juego y selecciona la hucha que hayas seguido.',
          ],
        },
        {
          id: 'not-verified',
          title: 'Qué afirmaciones no tratamos como verificadas',
          paragraphs: [
            'Comentarios de jugadores pueden hablar de posiciones preferidas, movimientos repetidos o señales visuales. Sin documentación del desarrollador, datos repetibles o una fuente más fuerte, esas observaciones no forman parte de las instrucciones principales. Que una regla informal funcione durante unas partidas no demuestra que Bills Must Be Paid la utilice de manera estable para elegir el objetivo.',
            'Tampoco afirmamos que la grabación sea la solución “prevista” por el diseño. Solo podemos verificar el objetivo de Steam y la existencia de una guía comunitaria que propone esa ayuda externa. Si Rike Games publica una explicación del algoritmo, de las posiciones o del movimiento, esa información tendrá prioridad y podrá sustituir la incertidumbre actual sin necesidad de defender conjeturas antiguas.',
          ],
        },
        {
          id: 'shuffle-context',
          title: 'Piggy Shuffle dentro de los logros de Bills Must Be Paid',
          paragraphs: [
            'Piggy Shuffle debe separarse de la colección general de huchas. Piggy Bank Collector pide desbloquear todas las huchas; Eyes on the Piggy pide identificar un objetivo concreto durante un reto. Ambos usan huchas, pero miden cosas distintas. La Wiki de huchas se ocupa del catálogo y del comportamiento; esta guía se ocupa de una prueba específica de seguimiento.',
            'Esa separación también mejora la evidencia. La página de referencia puede mantenerse centrada en datos oficiales sobre tipos, botín y colecciones, mientras Piggy Shuffle puede explicar un método comunitario con el contexto adecuado. Bills Must Be Paid evita así duplicar una enciclopedia completa en cada reto y permite que cada URL conserve una intención de búsqueda clara.',
          ],
        },
        {
          id: 'shuffle-method',
          title: 'Cómo aplicar mejor el método de cámara lenta',
          paragraphs: [
            'Si decides grabar, mantén toda el área de intercambio visible y evita mover la cámara durante la secuencia. En la reproducción, empieza por la hucha marcada y confirma cada cambio antes de avanzar al siguiente. Saltar directamente al último fotograma elimina la información de movimiento que hace útil el método. En Bills Must Be Paid, perder el objetivo una vez puede hacer imposible reconstruir correctamente el resto.',
            'Una persona capaz de seguir la hucha a velocidad normal no necesita grabación; el teléfono es solo una ayuda externa. Tampoco pausa ni ralentiza el juego real. Esta distinción importa porque evita describir la técnica como un exploit o una función oculta. Es una forma de revisar algo que ya ocurrió, comparable a repetir un vídeo para analizar movimiento rápido.',
          ],
        },
        {
          id: 'shuffle-troubleshooting',
          title: 'Qué revisar cuando Piggy Shuffle sigue fallando',
          paragraphs: [
            'Si la selección es incorrecta incluso con reproducción lenta, revisa primero la calidad de la captura. Comprueba que la hucha inicial se ve, que ningún borde de la pantalla corta el movimiento y que el desenfoque no hace indistinguibles los cruces. Esos son límites de la grabación, no pruebas de una regla secreta de Bills Must Be Paid. Una captura más limpia suele ser más útil que adivinar una posición final.',
            'Eyes on the Piggy es solo uno de 27 logros. Cuando lo completes, la página de logros puede llevarte a objetivos de precisión, golpes múltiples, colección, monedas raras, bancarrota o árbol de habilidades. Mantener esta guía enfocada en Piggy Shuffle hace que las soluciones sean fáciles de encontrar y evita convertir una página de reto en un duplicado de toda la Wiki.',
          ],
        },
      ],
    },
    wiki: {
      metaTitle: 'Bills Must Be Paid Wiki - Huchas, Martillos y Habilidades',
      metaDescription:
        'Bills Must Be Paid Wiki: huchas, martillos, árbol de habilidades, bancarrota, logros y versiones con datos organizados por fuente.',
      eyebrow: 'Wiki',
      title: 'Bills Must Be Paid Wiki',
      description:
        'Referencia de Bills Must Be Paid para huchas, martillos, habilidades, logros, versiones y progresión, separando hechos, comunidad y análisis.',
      imageAlt: 'Captura oficial de la colección de huchas de Bills Must Be Paid',
      breadcrumbs: ['Wiki'],
      toc: [
        'Sistemas de juego',
        'Equipo y mejoras',
        'Colecciones y finalización',
        'Política de evidencia',
        'Qué cubre la Wiki',
        'Control de versiones',
        'Cómo añadimos información',
      ],
      related: [
        { title: 'Guías', description: 'Páginas de resolución para principiantes, progresión y retos.' },
        { title: 'Tier Lists', description: 'Qué se puede clasificar hoy y qué evidencia falta.' },
        { title: 'Demo vs juego completo', description: 'Separa mecánicas de demo del lanzamiento del 29 de julio.' },
      ],
      sources: [
        { label: 'Rike Games — press kit oficial de Bills Must Be Paid' },
        { label: 'Steam — Bills Must Be Paid' },
        { label: 'Steam Community — Bills Must Be Paid' },
        { label: 'Steam Community — logros oficiales' },
      ],
      sections: [
        {
          id: 'gameplay',
          title: 'Sistemas de juego de Bills Must Be Paid',
          paragraphs: [
            'La base de la Wiki es el bucle incremental activo: controlas un martillo, rompes huchas, gastas resistencia, recoges dinero y botín aleatorio, pagas facturas y compras mejoras. Esa descripción de Rike Games sirve de marco para el resto de páginas. Cada sistema de Bills Must Be Paid se explica por cómo modifica una ronda, la economía o la progresión que continúa después.',
            'No convertimos cada término de búsqueda en una página aislada. La guía para principiantes cubre la relación general; la Wiki de huchas se centra en comportamiento y colección; Martillos reúne dimensiones de equipo; Prestigio y Bancarrota explica ciclos. La estructura distingue entre “qué es” y “qué hago”, reduciendo contenido duplicado y permitiendo que los enlaces internos lleven al nivel de detalle adecuado.',
          ],
        },
        {
          id: 'equipment',
          title: 'Equipo y mejoras en Bills Must Be Paid',
          paragraphs: [
            'Los martillos y el árbol de habilidades son dos capas principales. Rike Games compara martillos por crítico, radio, velocidad y daño, y ya ha publicado cambios de balance para modelos concretos. El árbol incluye agarre, cafeína, gimnasio, muñeca, suerte y efectos especiales. La Wiki registra primero estos hechos documentados antes de convertirlos en conclusiones de optimización.',
            'Cuando no hay una tabla completa de valores actuales, no se deriva una tier list exacta. Una clasificación necesita versión, todos los candidatos, efectos verificables y criterios. En Bills Must Be Paid, la página de referencia responde qué sabemos; una tier list futura deberá explicar cómo compara ese conocimiento. Separar ambas funciones evita que una preferencia subjetiva se convierta accidentalmente en dato base.',
          ],
        },
        {
          id: 'completion',
          title: 'Colecciones y finalización de Bills Must Be Paid',
          paragraphs: [
            'Los 27 logros oficiales ayudan a mapear sistemas que forman parte de la experiencia completa. Confirman metas como desbloquear todas las huchas, completar monedas, comprar todo en la tienda, conseguir todos los anillos y pulseras y adquirir todas las mejoras del árbol. Incluso cuando la descripción comercial no enumera cada objeto, los logros establecen que esas colecciones cuentan para la finalización.',
            'La Wiki utiliza esas metas para conectar referencias: Piggy Bank Collector apunta a Huchas, Maxed Out al Árbol de habilidades, Fresh Start y Prestige Jewelry a la progresión por bancarrota y Eyes on the Piggy a Piggy Shuffle. De este modo, los logros de Bills Must Be Paid no quedan como una lista desconectada, sino como un índice práctico hacia los sistemas que el jugador necesita entender.',
          ],
        },
        {
          id: 'evidence',
          title: 'Política de evidencia de la Wiki',
          paragraphs: [
            'Cada fuente tiene una función. El press kit de Rike Games explica intención y ejemplos; Steam describe el lanzamiento actual; los anuncios del desarrollador documentan cambios; los logros confirman objetivos formales. Una captura puede demostrar que una interfaz o colección existe, pero no se utiliza para inventar números ilegibles. La comunidad entra cuando ofrece valor práctico que las fuentes oficiales no cubren.',
            'Si dos fuentes oficiales usan términos diferentes, conservamos ambos con fecha y contexto. Prestige Points y legacy points son un ejemplo. La Wiki de Bills Must Be Paid considera que la evolución del vocabulario también es información. Mostrarla ayuda a leer material antiguo y evita fabricar una falsa uniformidad que podría ocultar cambios reales entre demo, lanzamiento y parches posteriores.',
          ],
          bullets: [
            'Primero, fuentes oficiales para mecánicas y hechos de versión.',
            'Las capturas apoyan hechos visibles, no números inferidos.',
            'Los consejos comunitarios siempre se etiquetan.',
            'Los cambios de terminología se conservan con contexto.',
          ],
        },
        {
          id: 'wiki-scope',
          title: 'Qué cubre la Bills Must Be Paid Wiki',
          paragraphs: [
            'La Wiki cubre sistemas y objetos que un jugador necesita consultar repetidamente: tipos de hucha, dimensiones de martillos, direcciones del árbol, logros, versiones y progresión persistente. Un tema merece una página independiente cuando tiene una intención clara y suficiente información. Esto evita que Bills Must Be Paid cree docenas de URLs delgadas que solo repiten una definición.',
            'Las preguntas de estrategia se trasladan a guías. Martillos puede explicar qué estadísticas documenta Rike Games; una clasificación requiere pruebas. Huchas puede explicar comportamiento y colección; Piggy Shuffle necesita una página de reto porque mezcla un objetivo oficial con un método comunitario. La separación mantiene cada pieza enfocada y reduce canibalización entre búsquedas relacionadas.',
          ],
        },
        {
          id: 'wiki-versioning',
          title: 'Control de versiones dentro de Bills Must Be Paid',
          paragraphs: [
            'La demo de Steam salió el 21 de abril de 2026 y el juego completo el 29 de julio. Rike Games declaró que cambiaron prestigio, bancarrota, algunos nodos, balance y sistemas internos. Por eso una captura o guía de la etapa demo puede seguir describiendo el bucle compartido, pero no debe usarse automáticamente como evidencia de la progresión final.',
            'Los parches crean la misma necesidad a menor escala. Ultracrit-Hammer y Toy-Hammer ya recibieron cambios documentados. Cuando la Wiki de Bills Must Be Paid añada valores exactos o comparaciones, debe registrar build y fecha. Si un parche modifica algo, podremos explicar qué dato quedó obsoleto en vez de reemplazarlo silenciosamente y dejar al lector sin contexto.',
          ],
        },
        {
          id: 'wiki-research',
          title: 'Cómo añadimos nueva información a la Wiki',
          paragraphs: [
            'Primero buscamos una fuente de primera parte y después evaluamos si una observación comunitaria aporta valor verificable. Si nadie publica tasas exactas, todas las estadísticas de martillos o un árbol completo, la ausencia se conserva. Una tabla de Bills Must Be Paid solo debe llenarse cuando el dato se puede relacionar con una versión y un método razonable de comprobación.',
            'Ese enfoque permite crecer sin degradar la calidad. Una nueva actualización puede ampliar una página existente; una búsqueda con intención propia puede justificar una URL nueva; una técnica comunitaria puede subir o bajar de nivel de confianza según aparezca evidencia. La Wiki no intenta “estar terminada” una vez, sino mantener una base en la que cada afirmación tenga un lugar y una procedencia.',
          ],
        },
      ],
    },
    hammers: {
      metaTitle: 'Bills Must Be Paid Martillos - Stats y Cambios',
      metaDescription:
        'Bills Must Be Paid martillos: crítico, radio, velocidad y daño, más cambios confirmados de Ultracrit-Hammer y Toy-Hammer.',
      eyebrow: 'Wiki',
      title: 'Bills Must Be Paid Martillos',
      description:
        'Referencia de martillos basada en Rike Games: compromisos de estadísticas, cambios de balance y límites para construir rankings fiables.',
      imageAlt: 'Tienda de martillos de Bills Must Be Paid',
      breadcrumbs: ['Wiki', 'Martillos'],
      toc: [
        'Cómo se diferencian los martillos',
        'Cambios confirmados',
        'Cómo comparar martillos',
        'Estado de la tier list',
        'Diseño de martillos',
        'Por qué importan los parches',
        'Martillos dentro de una build',
      ],
      related: [
        { title: 'Tier Lists', description: 'Por qué no fabricamos una clasificación sin una tabla completa de datos.' },
        { title: 'Árbol de habilidades', description: 'Otras mejoras que pueden cambiar el contexto de un martillo.' },
        { title: 'Guía para principiantes', description: 'Dónde encaja la elección de equipo en el bucle completo.' },
      ],
      sources: [
        { label: 'Rike Games — press kit oficial de Bills Must Be Paid', note: 'Explica los compromisos entre crítico, radio, velocidad y daño.' },
        { label: 'Steam — Bills Must Be Paid', note: 'La descripción actual repite el diseño de compromisos de martillos.' },
        { label: 'Steam Community — anuncios del desarrollador', note: 'Demo Bug Fix v0.2.7 registra mayor radio para Ultracrit-Hammer y golpes más rápidos para Toy-Hammer.' },
      ],
      sections: [
        {
          id: 'tradeoffs',
          title: 'Los martillos de Bills Must Be Paid se basan en compromisos',
          paragraphs: [
            'Rike Games no presenta los martillos como una escalera donde cada compra posterior supera a la anterior en todo. La descripción oficial compara probabilidad de crítico, radio de golpe, velocidad y daño. Un martillo puede ganar crítico y perder alcance, mientras otro cubre más área y golpea más rápido a costa de daño. Esa estructura obliga a definir el escenario antes de llamar a uno “mejor”.',
            'Contra un objetivo individual puede importar más el daño o el crítico; frente a varias huchas, el radio y la velocidad pueden cambiar la eficiencia real. Las fuentes públicas no incluyen una tabla completa y actual de todos los modelos. La Wiki de Bills Must Be Paid registra primero las dimensiones oficiales y evita transformar un ejemplo de diseño en un ranking numérico que los datos disponibles no sostienen.',
          ],
        },
        {
          id: 'patches',
          title: 'Cambios de martillos confirmados por Rike Games',
          paragraphs: [
            'Demo Bug Fix v0.2.7 nombra dos ajustes concretos. Ultracrit-Hammer recibió un radio algo mayor y Toy-Hammer pasó a golpear algo más rápido. Estas notas no son suficientes para clasificar todo el arsenal, pero demuestran que el rendimiento de los martillos de Bills Must Be Paid puede cambiar con una actualización.',
            'Eso hace que cualquier ranking preciso necesite versión. Un incremento de radio puede alterar utilidad contra grupos, y una mejora de velocidad puede cambiar cuántos golpes caben en una ronda limitada por resistencia. Sin la tabla completa de valores actuales no calculamos una posición nueva a partir de dos cambios aislados; los usamos como evidencia de que el balance es temporal y debe revisarse.',
          ],
        },
        {
          id: 'compare',
          title: 'Cuatro dimensiones verificadas para comparar martillos',
          paragraphs: [
            'Crítico, radio, velocidad y daño son las cuatro dimensiones nombradas directamente por fuentes de primera parte. Sirven para explicar por qué dos martillos pueden ser buenos en situaciones distintas, pero no producen automáticamente un ganador. Una comparación responsable de Bills Must Be Paid debe incluir además la versión, el objetivo de la prueba y el tipo de situación que se intenta optimizar.',
            'Con datos completos, una tabla futura podría separar daño a un objetivo, cobertura, velocidad o eficiencia bajo resistencia. Hacer visible el criterio es mejor que comprimir todas las cualidades en una letra. Para jugadores y buscadores, una metodología clara sigue siendo útil después de un parche porque se puede repetir; una etiqueta S sin datos solo parece precisa mientras nadie pregunta cómo se obtuvo.',
          ],
          bullets: ['Probabilidad de crítico', 'Radio de golpe', 'Velocidad de ataque o impacto', 'Daño'],
        },
        {
          id: 'tier-list',
          title: 'Por qué no hay una tier list fabricada de martillos',
          paragraphs: [
            'Las fuentes oficiales actuales explican la filosofía de atributos y algunos cambios, pero no publican todos los valores vigentes. Asignar S, A o B a cada martillo sin esa base sería una conjetura. Bills Must Be Paid puede tener demanda de búsquedas para una tier list, pero la demanda no sustituye una lista completa, mediciones y criterios reproducibles.',
            'Para publicar una clasificación real necesitamos identificar el build, reunir todos los martillos, verificar estadísticas o realizar pruebas repetibles y definir qué se está optimizando. Después, cada parche relevante debe producir una nota de cambio. Hasta que exista esa evidencia, esta página mantiene una referencia verificable en lugar de una tabla llena de certeza falsa.',
          ],
        },
        {
          id: 'hammer-design',
          title: 'Cómo leer el diseño de martillos de Bills Must Be Paid',
          paragraphs: [
            'El valor de un martillo no existe aislado. El árbol puede modificar la mano o añadir efectos especiales, y las huchas cambian en movimiento y recompensa. Una opción con mucho daño y poco radio puede sentirse distinta ante objetivos móviles o dispersos. Por eso Bills Must Be Paid se presta a comparaciones por escenario más que a una única jerarquía absoluta.',
            'La captura oficial de tienda confirma que hay compra, propiedad, equipamiento y desbloqueo, pero una imagen no debe usarse para adivinar números ilegibles. La Wiki combina interfaz visible con texto de primera parte. Cuando la UI o un parche proporcione valores fiables, se pueden ampliar las tablas sin cambiar la regla: cada número debe tener versión y una forma clara de saber de dónde salió.',
          ],
        },
        {
          id: 'hammer-patches',
          title: 'Por qué los parches de martillos deben quedar registrados',
          paragraphs: [
            'Un ranking puede quedar desactualizado con un solo ajuste, así que la fecha no es un detalle menor. Ultracrit-Hammer y Toy-Hammer ya prueban que Rike Games modifica dimensiones relevantes. Si Bills Must Be Paid añade comparaciones exactas, el build y la fecha deberían aparecer junto a los datos para que un lector entienda qué versión describe la tabla.',
            'Este historial también explica por qué cambia una posición. Más radio podría mejorar el valor en grupos; más velocidad podría alterar el rendimiento por tiempo. No afirmamos esos resultados exactos sin datos completos, pero conservar la nota oficial permite que una prueba futura tenga un antes y un después verificable. Eso es más útil que borrar silenciosamente la clasificación anterior.',
          ],
        },
        {
          id: 'hammer-build-context',
          title: 'Martillos dentro de una build completa',
          paragraphs: [
            'El árbol de habilidades, la resistencia y el comportamiento de las huchas condicionan el equipo. Una habilidad puede cambiar la mano, un tipo de hucha puede exigir más seguimiento y una ronda corta puede valorar la velocidad de forma diferente. Por eso Bills Must Be Paid no debería reducir toda elección de martillo a “el número de daño más alto”.',
            'La guía para principiantes explica dónde se gasta el dinero entre facturas y mejoras; la Wiki de habilidades cubre la otra gran capa de construcción. Una tier list futura puede enlazar ambas referencias y centrarse exclusivamente en comparación. Mantener esa arquitectura evita duplicar el mismo contenido y permite que la página de martillos siga siendo una fuente estable de hechos aunque cambien las recomendaciones.',
          ],
        },
      ],
    },
    'piggy-banks': {
      metaTitle: 'Bills Must Be Paid Huchas - Tipos, Botín y Colección',
      metaDescription:
        'Bills Must Be Paid huchas: tipos, comportamiento, botín aleatorio, colección, Piggy Bank Collector y relación con Piggy Shuffle.',
      eyebrow: 'Wiki',
      title: 'Bills Must Be Paid Huchas',
      description:
        'Qué confirman las fuentes oficiales sobre variedad, movimiento, recompensas, botín, desbloqueos y objetivos de colección de las huchas.',
      imageAlt: 'Tipos y colección de huchas de Bills Must Be Paid',
      breadcrumbs: ['Wiki', 'Huchas'],
      toc: [
        'Tipos de hucha',
        'Botín y comportamiento',
        'Objetivos de colección',
        'Piggy Shuffle',
        'Papel de las huchas en una ronda',
        'Comportamientos conocidos',
        'Contexto de finalización',
      ],
      related: [
        { title: 'Guía de Piggy Shuffle', description: 'Resuelve Eyes on the Piggy con fuentes oficiales y comunidad claramente separadas.' },
        { title: 'Logros', description: 'Piggy Bank Collector y el resto de objetivos oficiales.' },
        { title: 'Guía para principiantes', description: 'Cómo encajan las huchas en dinero, resistencia y progresión.' },
      ],
      sources: [
        { label: 'Rike Games — press kit oficial de Bills Must Be Paid' },
        { label: 'Steam — Bills Must Be Paid' },
        { label: 'Steam Community — logros oficiales' },
      ],
      sections: [
        {
          id: 'types',
          title: 'Bills Must Be Paid tiene diferentes tipos de hucha',
          paragraphs: [
            'Rike Games afirma que aparecen nuevos tipos de hucha a medida que progresas y que sus diferencias no son solo visuales. Algunas se mueven o huyen, otras son relativamente perezosas y algunas llevan más dinero o proporcionan un efecto particular. El comportamiento modifica cómo las persigues y cuánto valor puede tener un golpe, por lo que las huchas son una parte activa del diseño.',
            'La interfaz de colección y los logros confirman que descubrirlas y desbloquearlas forma un sistema rastreable. La Wiki de Bills Must Be Paid documenta comportamientos que tienen respaldo, pero no rellena HP, tasas de aparición o probabilidades de botín cuando no se han publicado. Una cifra desconocida indicada como tal es más útil que un porcentaje inventado que más tarde se repita como hecho.',
          ],
        },
        {
          id: 'loot',
          title: 'Botín y comportamiento pueden variar entre huchas',
          paragraphs: [
            'El press kit confirma botín aleatorio al romper huchas y describe diferencias de movimiento y valor. Que exista aleatoriedad no significa que conozcamos sus porcentajes exactos. Para publicar probabilidades de Bills Must Be Paid haría falta información oficial o una prueba suficientemente amplia, versionada y reproducible. Esta página se limita a afirmar lo que las fuentes realmente soportan.',
            'La resistencia hace que el comportamiento tenga consecuencias. Cada golpe cuesta un recurso limitado; seguir una hucha móvil puede exigir más atención que golpear una casi estática, mientras una recompensa mayor puede justificar ese esfuerzo. La elección de objetivo mezcla valor, dificultad y coste de tiempo. Incluso sin estadísticas ocultas, esas diferencias documentadas explican por qué el catálogo afecta una ronda.',
          ],
        },
        {
          id: 'collection',
          title: 'Desbloquear todas las huchas es un objetivo oficial',
          paragraphs: [
            'Piggy Bank Collector, un logro oficial de Steam, exige “Unlock every piggy bank”. Eso convierte la variedad de huchas en una meta formal de finalización de Bills Must Be Paid, no en un detalle cosmético. Los jugadores que buscan 100 % pueden usar esta Wiki como contexto y la página de logros como lista maestra de objetivos.',
            'Las fuentes públicas no enumeran necesariamente todos los tipos finales con estadísticas completas, por lo que la página puede crecer según aparezca evidencia. Registrar cada incorporación con fuente y versión evita mezclar una observación de demo con una variante del lanzamiento completo. El objetivo es construir un catálogo verificable, no afirmar que el conjunto actual es absolutamente exhaustivo cuando los datos no lo permiten.',
          ],
        },
        {
          id: 'shuffle',
          title: 'Piggy Shuffle es un reto separado de la colección',
          paragraphs: [
            'Eyes on the Piggy pide escoger la hucha correcta en Piggy Shuffle. Esto no es lo mismo que Piggy Bank Collector. Uno mide seguimiento de un objetivo durante un reto y el otro desbloqueo de tipos a largo plazo. Por eso Bills Must Be Paid mantiene una guía específica para Piggy Shuffle en lugar de mezclar una solución comunitaria dentro de la referencia general de huchas.',
            'La separación también deja clara la evidencia: Steam confirma la meta; una guía comunitaria propone grabar y reproducir lentamente. La Wiki permanece centrada en tipos, comportamiento, botín y colección. Si el desarrollador publica reglas internas de Piggy Shuffle, la guía puede actualizarse sin cambiar la base de datos de huchas que responde a otra pregunta.',
          ],
        },
        {
          id: 'piggy-role',
          title: 'Cómo las huchas moldean una ronda de Bills Must Be Paid',
          paragraphs: [
            'Las huchas son el objetivo principal que transforma golpes en dinero y botín. Como cada ataque consume resistencia, su movimiento y recompensa influyen en qué merece la pena perseguir. Una hucha que se comporta de forma distinta cambia la ejecución incluso si no conocemos su HP exacto. Bills Must Be Paid crea así variedad en la decisión del jugador sin depender solo de estadísticas visibles.',
            'La página puede explicar de forma segura que algunos objetivos se mueven más, otros permanecen quietos, algunos se describen como valiosos y uno puede restaurar resistencia. No necesita inventar tasas de spawn para mostrar por qué esas diferencias importan. Primero se documenta el papel de cada comportamiento; cualquier análisis cuantitativo posterior debe construirse sobre datos que puedan verificarse en una versión concreta.',
          ],
        },
        {
          id: 'piggy-known-behavior',
          title: 'Comportamientos de huchas confirmados',
          paragraphs: [
            'Los materiales de primera parte nombran varias huchas. Normalito aparece como lento y predecible. The Tourist es grande, casi estacionario y restaura resistencia al romperse. Woody apenas se mueve. Piñata se asocia con recompensas aleatorias. El Loco puede deambular, zigzaguear, detenerse y cargar. Estas descripciones muestran diversidad sin exigir números especulativos.',
            'Rike Games también indica que aparecen huchas más raras con la progresión. Por eso la lista de Bills Must Be Paid debe verse como un conjunto ampliable y no como una enciclopedia cerrada. Cuando un nuevo tipo pueda identificarse con suficiente evidencia, se añade; cuando una probabilidad siga sin publicarse, permanece desconocida. La disciplina evita que rumores terminen convertidos en estadísticas de referencia.',
          ],
          bullets: [
            'Las huchas pueden diferir en movimiento y comportamiento.',
            'Rike Games confirma botín aleatorio al romper objetivos.',
            'Algunas se describen como más valiosas que otras.',
            'The Tourist restaura resistencia al romperse.',
            'Desbloquear todas las huchas es un objetivo oficial.',
          ],
        },
        {
          id: 'piggy-completion',
          title: 'Huchas, Piggy Shuffle y 100 % de finalización',
          paragraphs: [
            'Un plan de finalización debe distinguir colección de reto. Piggy Bank Collector lleva al catálogo; Eyes on the Piggy lleva a la guía de Piggy Shuffle. La página de logros sirve como índice central y estas referencias aportan contexto. Esa estructura permite que un jugador de Bills Must Be Paid pase del objetivo a la información que necesita sin recorrer una página gigantesca y repetitiva.',
            'Si aparecen datos autoritativos sobre nuevos tipos, recompensas o condiciones, la Wiki puede crecer manteniendo versión y procedencia. La página de logros seguirá rastreando qué se exige y la Wiki qué sabemos sobre el sistema. Separar metas y hechos hace más fácil actualizar Bills Must Be Paid cuando un parche cambia contenido o cuando una fuente nueva resuelve un dato que antes estaba ausente.',
          ],
        },
      ],
    },
    'skill-tree': {
      metaTitle: 'Bills Must Be Paid Árbol de Habilidades - Guía',
      metaDescription:
        'Bills Must Be Paid árbol de habilidades: agarre, cafeína, gimnasio, suerte, efectos especiales, cambios de versión y límites de tier lists.',
      eyebrow: 'Wiki',
      title: 'Bills Must Be Paid Árbol de Habilidades',
      description:
        'Direcciones y ejemplos verificados del árbol de habilidades, cambios entre demo y juego completo y límites de los rankings sin datos completos.',
      imageAlt: 'Interfaz del árbol de habilidades de Bills Must Be Paid',
      breadcrumbs: ['Wiki', 'Árbol de habilidades'],
      toc: [
        'Qué hace el árbol',
        'Ejemplos confirmados',
        'Cambios del juego completo',
        'Límites del ranking',
        'Papel en la progresión',
        'Diferencias de versión',
        'Cómo leer consejos de build',
      ],
      related: [
        { title: 'Guía para principiantes', description: 'Cómo encaja el gasto de habilidades con facturas, resistencia y martillos.' },
        { title: 'Martillos', description: 'Compara los compromisos de equipo documentados por Rike Games.' },
        { title: 'Tier Lists', description: 'Criterio actual para publicar rankings de mejoras.' },
      ],
      sources: [
        { label: 'Rike Games — press kit oficial de Bills Must Be Paid', note: 'Nombra varias direcciones y ejemplos del árbol.' },
        { label: 'Steam — Bills Must Be Paid', note: 'Confirma el árbol de habilidades en el juego completo.' },
        { label: 'Steam Community — anuncios del desarrollador', note: 'El anuncio de lanzamiento confirma que algunos nodos cambiaron respecto a la demo.' },
      ],
      sections: [
        {
          id: 'purpose',
          title: 'Qué hace el árbol de habilidades de Bills Must Be Paid',
          paragraphs: [
            'El árbol convierte dinero ganado en partidas activas en cambios para futuras rondas. Rike Games describe mejoras físicas y efectos más extraños, así que no es una única escalera de daño. Agarre, cafeína, gimnasio, muñeca y suerte muestran distintas direcciones, mientras rocas o electrificación del martillo demuestran que algunas ramas pueden introducir comportamiento especial.',
            'El valor de un nodo depende del problema que quieras resolver y de la versión. Las fuentes públicas no ofrecen todos los valores actuales, y el desarrollador confirmó cambios al lanzamiento. Por eso la Wiki de Bills Must Be Paid trata el árbol como un sistema de direcciones documentadas. Las rutas óptimas y tier lists necesitan una capa adicional de datos y pruebas antes de presentarse como conclusión.',
          ],
        },
        {
          id: 'examples',
          title: 'Ejemplos de mejoras confirmados por Rike Games',
          paragraphs: [
            'Los materiales oficiales mencionan fuerza de agarre, mejoras relacionadas con cafeína, gimnasio, muñeca y suerte. También describen efectos menos convencionales, como rocas que caen del cielo y un martillo electrificado. Estos ejemplos son importantes porque muestran que Bills Must Be Paid combina aumentos básicos con mecánicas que pueden cambiar la forma de jugar.',
            'No deben confundirse con una lista exhaustiva de nodos. El hecho de que una fuente nombre varios ejemplos no permite rellenar todos los huecos del árbol ni inventar valores. Además, algunos nodos de la demo cambiaron para el juego completo. La referencia conserva aquello que está documentado y deja visibles los datos ausentes hasta poder verificarlos en una build actual.',
          ],
          bullets: ['Fuerza de agarre', 'Cafeína', 'Mejoras de gimnasio', 'Muñeca y suerte', 'Rocas y electrificación del martillo'],
        },
        {
          id: 'changes',
          title: 'El juego completo cambió algunos nodos de la demo',
          paragraphs: [
            'Rike Games dijo explícitamente que el lanzamiento final cambió ciertos nodos del árbol, junto con prestigio, bancarrota, balance y sistemas internos. Esta es una de las razones por las que el guardado de la demo no se transfiere. Para cualquier consejo de Bills Must Be Paid publicado antes del 29 de julio, la versión debe comprobarse antes de asumir que el nodo o efecto sigue igual.',
            'No todo el conocimiento de la demo queda inutilizado: las direcciones generales pueden seguir ayudando a entender el diseño. Lo que requiere cautela son rutas exactas, nombres, costes o efectos. La página Demo vs juego completo funciona como filtro antes de reutilizar información antigua y permite que la Wiki explique tanto continuidad como cambio sin borrar la historia del proyecto.',
          ],
        },
        {
          id: 'ranking',
          title: 'Por qué todavía no clasificamos todos los nodos',
          paragraphs: [
            'Una tier list útil necesita el conjunto completo actual, efectos exactos, coste de oportunidad y un objetivo de comparación. Las fuentes de primera parte disponibles no proporcionan ese dataset, así que ordenar cada nodo de S a F sería más preciso que la evidencia. Bills Must Be Paid gana más con una referencia honesta que con una tabla que nadie puede reproducir.',
            'Con datos suficientes, podrían existir rankings por objetivo: progresión temprana, daño, recuperación, consistencia, suerte o builds de efectos especiales. Eso sería más informativo que un único orden universal. Hasta entonces, esta página explica qué áreas están confirmadas y qué cambió entre versiones, dejando el análisis competitivo para cuando pueda incluir metodología y fecha.',
          ],
        },
        {
          id: 'skill-purpose-expanded',
          title: 'Cómo el árbol alimenta la progresión de Bills Must Be Paid',
          paragraphs: [
            'El dinero de una ronda debe repartirse entre facturas y mejoras, y el árbol es uno de los principales destinos de inversión. Comprar un nodo puede mejorar partidas futuras, pero gastar demasiado puede reducir el margen para la próxima obligación. Así, el árbol no es un menú aislado: forma parte de la economía central que obliga a Bills Must Be Paid a equilibrar supervivencia y crecimiento.',
            'El logro Maxed Out exige comprar todas las mejoras, lo que añade un objetivo de finalización. Un jugador que busca 100 % acabará recorriendo todo el árbol; alguien que solo quiere progresar puede priorizar su cuello de botella actual. La Wiki documenta ambos contextos sin convertir el objetivo de completar todo en una recomendación de compra inmediata para cada etapa.',
          ],
        },
        {
          id: 'skill-versioning-expanded',
          title: 'Por qué el árbol de habilidades necesita versión',
          paragraphs: [
            'El desarrollador ha confirmado que los nodos cambiaron entre builds, por lo que una etiqueta de versión es obligatoria para recomendaciones precisas. Una captura de demo puede mostrar una ruta que ya no coincide con el lanzamiento. Al leer vídeos o guías antiguas de Bills Must Be Paid, comprueba si pertenecen al periodo posterior al 21 de abril o a la versión completa del 29 de julio en adelante.',
            'La misma frontera afecta las tier lists. Una prueba rigurosa realizada en la demo puede volverse obsoleta sin que el autor haya cometido un error. Un ranking actual debe incluir build, fecha y condiciones; tras un parche, solo los nodos afectados necesitan volver a medirse. Esa disciplina permite que el análisis evolucione sin presentar resultados históricos como verdades permanentes.',
          ],
          bullets: ['Indica la versión de cada recomendación', 'No supongas que los nodos de demo son idénticos', 'Repite pruebas tras cambios de balance', 'Separa hechos, pruebas y preferencias'],
        },
        {
          id: 'skill-build-reading',
          title: 'Cómo leer consejos de build de Bills Must Be Paid',
          paragraphs: [
            'Distingue primero hechos de análisis. Que Rike Games nombre una dirección es un hecho; decidir que esa dirección es “la mejor” requiere un criterio. Un jugador puede valorar daño, resistencia, recuperación, suerte o un efecto especial según su situación. Las guías deben indicar qué parte proviene del desarrollador y qué parte es una interpretación de cómo usar el sistema.',
            'El árbol también interactúa con martillos. El equipo tiene compromisos de crítico, radio, velocidad y daño, y una habilidad puede cambiar el contexto donde esos atributos importan. Sin datos no afirmamos multiplicadores ocultos. A medida que Bills Must Be Paid publique o permita verificar más información, la Wiki podrá añadir builds y rankings reales manteniendo la capa factual separada.',
          ],
        },
      ],
    },
    achievements: {
      metaTitle: 'Bills Must Be Paid Logros - Los 27 Objetivos',
      metaDescription:
        'Bills Must Be Paid: los 27 logros de Steam sobre facturas, precisión, dinero, apuestas, préstamos, colecciones, bancarrota y habilidades.',
      eyebrow: 'Finalización',
      title: 'Bills Must Be Paid - Los 27 Logros',
      description:
        'Lista organizada de los 27 objetivos oficiales de Steam, con contexto para progresión, precisión, dinero, riesgo, colecciones y 100 %.',
      imageAlt: 'Colección de monedas raras de Bills Must Be Paid',
      breadcrumbs: ['Logros'],
      toc: [
        'Progresión y facturas',
        'Golpes y precisión',
        'Dinero, apuestas y préstamos',
        'Colección y 100 %',
        'Enlaces a guías',
        'Estructura de logros',
        'Ruta de finalización',
        'Verificación',
      ],
      related: [
        { title: 'Guía de Piggy Shuffle', description: 'Ayuda para Eyes on the Piggy con un método comunitario etiquetado.' },
        { title: 'Prestigio y bancarrota', description: 'Contexto para Fresh Start y Prestige Jewelry.' },
        { title: 'Huchas', description: 'Contexto para Piggy Bank Collector.' },
      ],
      sources: [
        { label: 'Steam Community — logros globales oficiales de Bills Must Be Paid', note: 'Fuente principal para los 27 nombres y objetivos. No fijamos porcentajes globales porque cambian.' },
        { label: 'Steam — Bills Must Be Paid', note: 'Confirma soporte para Steam Achievements.' },
      ],
      sections: [
        {
          id: 'progression',
          title: 'Logros de facturas y progresión',
          paragraphs: [
            'El primer grupo sigue el tema central del juego. Bills Must Be Paid exige pagar la primera factura; One Step at a Time, Making Progress y Keeping Up elevan el contador a 5, 10 y 20. Freedom pide pagar todas las facturas. Fresh Start conecta esa progresión con la bancarrota al exigir que declares quiebra y comiences un nuevo ciclo.',
            'La secuencia confirma que las facturas son un eje formal, no un objetivo decorativo. Optimizar una ronda sin atender obligaciones puede producir dinero y, aun así, no avanzar por la ruta central. Fresh Start también muestra que la bancarrota forma parte del diseño de progresión del juego completo, por lo que una ruta de logros de Bills Must Be Paid necesita comprender tanto el pago como el reinicio.',
          ],
          bullets: [
            'Bills Must Be Paid — paga tu primera factura',
            'One Step at a Time — paga 5 facturas',
            'Making Progress — paga 10 facturas',
            'Keeping Up — paga 20 facturas',
            'Fresh Start — declara bancarrota y empieza un nuevo ciclo',
            'Freedom — paga todas tus facturas',
          ],
        },
        {
          id: 'smashing',
          title: 'Logros de golpes, precisión y Piggy Shuffle',
          paragraphs: [
            'Rookie Smasher y Serial Smasher cuentan 10 y 100 huchas rotas. Not a Single Miss exige terminar una ronda con 100 % de precisión y Twice as Precise mantenerlo durante dos rondas consecutivas. Strong Start y Multismasher premian destruir varios objetivos con un solo golpe. Estos retos reflejan el lado activo de Bills Must Be Paid y no solo acumulación de recursos.',
            'Eyes on the Piggy pide escoger la hucha correcta en Piggy Shuffle. Como el objetivo oficial es breve y el método detallado disponible procede de la comunidad, existe una guía separada. La página de logros conserva la condición de Steam y la guía explica la grabación a cámara lenta con su nivel de evidencia. De esta forma, el checklist no convierte una estrategia externa en texto oficial.',
          ],
          bullets: [
            'Rookie Smasher — rompe 10 huchas',
            'Serial Smasher — rompe 100 huchas',
            'Not a Single Miss — termina una ronda con 100 % de precisión',
            'Twice as Precise — mantén 100 % durante 2 rondas',
            'Strong Start — destruye 2 huchas con el primer golpe de una ronda',
            'Multismasher — destruye 3 huchas a la vez',
            'Eyes on the Piggy — escoge la hucha correcta en Piggy Shuffle',
          ],
        },
        {
          id: 'money-risk',
          title: 'Logros de dinero, apuestas y préstamos',
          paragraphs: [
            'Better than Nothing, High Roller y Five Figures marcan ganancias de $100, $1000 y $10000 en una sola ronda. The Richest Broke Person pide poseer $1000000 a la vez. Juntos muestran que Bills Must Be Paid recompensa tanto picos de ingresos por sesión como acumulación mucho mayor, añadiendo objetivos económicos más allá de pagar la siguiente factura.',
            'Otros logros confirman sistemas de riesgo: 50/50 se relaciona con ganar un coinflip, All or Nothing con apostar todo, Super Jackpot con alcanzar ese premio, y Take a Loan / Pay Back a Loan con Big Toni. Estas metas oficiales demuestran que apuestas y préstamos son parte del juego completo. La lista puede confirmar su existencia sin inventar todavía una estrategia óptima para cada sistema.',
          ],
          bullets: [
            'Better than Nothing — gana $100 en una ronda',
            'High Roller — gana $1000 en una ronda',
            'Five Figures — gana $10000 en una ronda',
            'The Richest Broke Person — posee $1000000 a la vez',
            '50/50 — gana un coinflip',
            'All or Nothing — apuesta todo',
            'Super Jackpot — consigue un Super Jackpot',
            'Take a Loan — pide un préstamo a Big Toni',
            'Pay Back a Loan — devuelve el dinero a Big Toni',
          ],
        },
        {
          id: 'completion',
          title: 'Logros de colección y 100 %',
          paragraphs: [
            'Piggy Bank Collector exige desbloquear todas las huchas; Coin Collector, completar la colección de monedas; Bought It All, comprar todos los objetos de la tienda; Prestige Jewelry, desbloquear todos los anillos y pulseras; y Maxed Out, comprar todas las mejoras del árbol. Este grupo funciona como una hoja de ruta de sistemas que el jugador debe completar.',
            'Los logros confirman estos objetivos incluso si la página comercial no enumera cada elemento individual. Para una ruta de 100 %, el checklist de Bills Must Be Paid puede servir de índice y las páginas de Huchas, Habilidades y Prestigio aportar contexto. Esa arquitectura permite actualizar estrategias sin cambiar la lista estable de objetivos oficiales.',
          ],
          bullets: [
            'Piggy Bank Collector — desbloquea todas las huchas',
            'Coin Collector — completa la colección de monedas',
            'Bought It All — compra todo en la tienda',
            'Prestige Jewelry — desbloquea todos los anillos y pulseras',
            'Maxed Out — compra todas las mejoras del árbol',
          ],
        },
        {
          id: 'guides',
          title: 'Usa los logros como puntos de entrada a las guías',
          paragraphs: [
            'Los nombres oficiales indican rápidamente qué sistema necesitas investigar. Eyes on the Piggy lleva a Piggy Shuffle; Fresh Start y Prestige Jewelry a Prestigio y Bancarrota; Piggy Bank Collector a Huchas; Maxed Out al Árbol de habilidades. En Bills Must Be Paid, este patrón convierte la página de logros en un índice práctico y reduce la necesidad de duplicar explicaciones largas.',
            'Si un objetivo desarrolla suficiente búsqueda y evidencia para justificar una guía propia, puede separarse en el futuro. Mientras tanto, conservar los 27 objetivos en una página fácil de escanear es más útil que crear una URL fina para cada logro. Las guías especializadas solo aparecen cuando pueden aportar método, contexto o fuentes adicionales.',
          ],
        },
        {
          id: 'achievement-overview',
          title: 'Qué revela la estructura de logros sobre Bills Must Be Paid',
          paragraphs: [
            'Los 27 objetivos abarcan facturas, ejecución activa, precisión, dinero, apuestas, préstamos, colección, prestigio y compra total de sistemas. Esto refleja un juego que combina acumulación con retos de una sola ronda. Los logros no premian únicamente “jugar muchas horas”; también piden rendimiento específico, decisiones de riesgo y completar distintas capas de progresión.',
            'Agruparlos por sistema ayuda a planificar mejor que leerlos como tareas inconexas. Las facturas comparten progresión, la precisión comparte habilidad de ejecución, la colección pide completar catálogos y la bancarrota exige comprender el ciclo persistente. Esta organización no cambia los nombres de Steam; solo convierte la lista de Bills Must Be Paid en una herramienta más fácil de usar.',
          ],
        },
        {
          id: 'achievement-completion',
          title: 'Cómo planificar el 100 % de Bills Must Be Paid',
          paragraphs: [
            'Una estrategia razonable es dejar que los objetivos de facturas y destrucción acumulativa progresen mientras aprendes el juego. Después puedes dedicar intentos específicos a precisión, golpes múltiples y Piggy Shuffle. Las colecciones, la joyería y el árbol completo suelen ser más naturales como objetivos a largo plazo porque dependen de sistemas que se amplían con la progresión.',
            'Este orden es análisis, no una secuencia oficial. La página conserva las condiciones originales y las guías proporcionan sugerencias. Esa separación hace que Bills Must Be Paid pueda actualizar estrategias tras un parche sin tocar datos estables. También evita que una recomendación personal se confunda con un requisito real de Steam.',
          ],
        },
        {
          id: 'achievement-verification',
          title: 'Por qué conservamos los nombres oficiales de los logros',
          paragraphs: [
            'Los nombres son identificadores que el jugador ve en Steam y dentro del juego, así que se mantienen en inglés. La página española traduce el objetivo y el contexto, no renombra los IDs. Esto facilita encontrar un logro exacto, buscarlo en otras fuentes y comparar la página con la interfaz real de Bills Must Be Paid sin crear una segunda nomenclatura.',
            'Tampoco copiamos porcentajes globales como si fueran datos permanentes. La tasa de desbloqueo cambia con nuevos jugadores, mientras nombre y objetivo permanecen estables. Priorizar lo estable reduce información obsoleta y mantiene el valor SEO de la referencia. Si un logro necesita ayuda adicional, enlazamos una guía con su propia evidencia en lugar de inventar una solución dentro del checklist.',
          ],
        },
      ],
    },
    'tier-lists': {
      metaTitle: 'Bills Must Be Paid Tier List - Martillos y Habilidades',
      metaDescription:
        'Bills Must Be Paid Tier List: criterios verificables para martillos y habilidades, requisitos de versión y sin rankings S/A/B inventados.',
      eyebrow: 'Tier Lists',
      title: 'Bills Must Be Paid Tier Lists',
      description:
        'Un hub de rankings basado primero en evidencia: define criterios, versión y datos antes de colocar martillos o habilidades en S/A/B.',
      imageAlt: 'Pantalla de selección de martillos de Bills Must Be Paid',
      breadcrumbs: ['Tier Lists'],
      toc: [
        'Estado actual',
        'Evidencia para martillos',
        'Evidencia para habilidades',
        'Qué necesita una tier list',
        'Método de ranking',
        'Criterios de comparación',
        'Por qué no inventamos rankings',
      ],
      related: [
        { title: 'Martillos', description: 'Compromisos de equipo y cambios de balance documentados.' },
        { title: 'Árbol de habilidades', description: 'Ejemplos verificados y notas de cambios del juego completo.' },
        { title: 'Guía para principiantes', description: 'Entiende los sistemas antes de optimizarlos.' },
      ],
      sources: [
        { label: 'Rike Games — press kit oficial de Bills Must Be Paid' },
        { label: 'Steam — Bills Must Be Paid' },
        { label: 'Steam Community — anuncios del desarrollador', note: 'Demuestra que los cambios de balance pueden alterar el rendimiento.' },
      ],
      sections: [
        {
          id: 'status',
          title: 'Estado actual: no hay S/A/B sin evidencia suficiente',
          paragraphs: [
            'Que los jugadores busquen una tier list no significa que exista una base sólida para rellenarla. Las fuentes actuales explican dimensiones importantes y algunos cambios de balance, pero no publican todos los valores vigentes de cada martillo ni todos los nodos. Un ranking completo de Bills Must Be Paid sin esa base parecería útil, pero no podría verificarse ni reproducirse.',
            'Por eso esta página funciona como un hub transparente: documenta qué puede compararse ahora, qué datos faltan y qué método debe aplicarse cuando exista un conjunto completo. Admitir una limitación es mejor que producir certeza falsa. Además, cuando llegue un parche, una metodología clara permite actualizar solo las partes afectadas en vez de rehacer una lista basada en impresiones.',
          ],
        },
        {
          id: 'hammers',
          title: 'Qué evidencia existe para una tier list de martillos',
          paragraphs: [
            'Rike Games nombra crítico, radio, velocidad y daño como dimensiones de martillos y ya ha cambiado Ultracrit-Hammer y Toy-Hammer en notas oficiales. Estos hechos son suficientes para diseñar pruebas, pero no para ordenar todo el arsenal. Falta la tabla completa actual y falta definir qué resultado de Bills Must Be Paid se quiere optimizar.',
            'Una clasificación para daño a un objetivo puede diferir de una clasificación para cobertura de varias huchas o velocidad. Un ranking responsable debe publicar ese objetivo. La Wiki de martillos conserva los hechos; una futura tier list añadirá comparación. Esta separación evita que una conclusión dependiente de escenario se convierta en una característica permanente del objeto.',
          ],
        },
        {
          id: 'skills',
          title: 'Qué evidencia existe para una tier list de habilidades',
          paragraphs: [
            'Las fuentes nombran agarre, cafeína, gimnasio, muñeca, suerte y efectos especiales, pero el anuncio de lanzamiento también confirma cambios de nodos. Una tier list de la demo puede quedar obsoleta aunque haya sido probada correctamente. Bills Must Be Paid necesita por tanto una lista actual de nodos y efectos antes de comparar de forma seria.',
            'Con esa información, podría tener sentido separar objetivos: progresión temprana, daño, recuperación, consistencia o builds especiales. Forzar todo a un único orden S-F ocultaría contexto. Por ahora, el Árbol de habilidades documenta hechos y diferencias de versión, mientras esta página explica qué información hace falta para convertir esas referencias en un ranking reproducible.',
          ],
        },
        {
          id: 'requirements',
          title: 'Qué necesita una tier list publicable de Bills Must Be Paid',
          paragraphs: [
            'Como mínimo: versión identificada, lista completa de candidatos, efectos verificables o pruebas repetibles, criterio explícito y registro de cambios. Sin esos elementos, una tabla puede ser una opinión válida de un jugador, pero no debería presentarse como clasificación de referencia. El lector debe poder saber qué significa un nivel y en qué entorno se obtuvo.',
            'El historial de parches forma parte del método porque Bills Must Be Paid ya ha cambiado equipo y nodos. Si una actualización invalida un resultado, la página debe explicar por qué una posición se mueve. Esa transparencia convierte el ranking en una herramienta que puede mantenerse con el tiempo, en lugar de una captura de opinión sin fecha.',
          ],
          bullets: ['Versión del juego', 'Lista completa de objetos o nodos', 'Efectos o pruebas verificables', 'Criterio de ranking explícito', 'Registro tras cambios de balance'],
        },
        {
          id: 'tier-method',
          title: 'Método para construir una tier list fiable',
          paragraphs: [
            'Empieza con la pregunta, no con las letras. Define qué quieres optimizar y selecciona métricas relevantes. Para martillos pueden ser daño, radio, velocidad y crítico. Para habilidades pueden ser progresión, recuperación, consistencia o efecto especial. Después reúne todos los candidatos de la misma versión de Bills Must Be Paid y aplica el mismo procedimiento.',
            'Cada resultado debe distinguir hechos oficiales, pruebas propias y preferencias comunitarias. La fuente oficial puede confirmar que una estadística existe; un test puede medir rendimiento; una preferencia explica sensaciones. Si se mezclan, una tier list parece objetiva sin serlo. Mantener las capas separadas permite revisar una sola comparación cuando cambia un dato.',
          ],
        },
        {
          id: 'tier-criteria',
          title: 'Criterios para martillos y habilidades',
          paragraphs: [
            'Para martillos, el punto de partida verificable son daño, velocidad, crítico y radio. Es posible crear rankings por escenario: objetivo único, cobertura, rapidez o eficiencia. Cada uno debe explicar qué mide. Bills Must Be Paid no necesita que un martillo gane todas las categorías; un compromiso de diseño puede ser precisamente que destaque en una y ceda en otra.',
            'Para habilidades, el contexto es todavía más amplio. Los nodos pueden afectar la mano, resistencia, suerte o efectos especiales y su valor puede cambiar con la etapa o el martillo equipado. Sin costes y efectos actuales, una letra universal oculta demasiado. Un futuro ranking debería publicar categorías que reflejen objetivos reales y dejar claro dónde entra el análisis del autor.',
          ],
        },
        {
          id: 'tier-search-intent',
          title: 'Por qué la demanda de búsqueda no sustituye evidencia',
          paragraphs: [
            '“Bills Must Be Paid tier list” es una intención real, pero una búsqueda solo demuestra que el usuario quiere una respuesta. No demuestra qué martillo o nodo debe ocupar S. Publicar una lista inventada podría atraer clics a corto plazo y al mismo tiempo crear información difícil de corregir cuando aparezcan datos reales. Este hub prefiere preparar una clasificación sólida antes de llenarla.',
            'También evita canibalización. Martillos posee los hechos de equipo; Árbol de habilidades posee los hechos de nodos; Tier Lists debe poseer la comparación. Cuando exista evidencia suficiente, se pueden separar páginas específicas de hammer tier list y skill tier list con metodología, versión, fecha y changelog. Así, la expansión SEO de Bills Must Be Paid añade valor en vez de repetir definiciones.',
          ],
        },
      ],
    },
    'demo-vs-full-game': {
      metaTitle: 'Bills Must Be Paid Demo vs Full Game - Diferencias',
      metaDescription:
        'Bills Must Be Paid Demo vs Full Game: fechas, guardados, prestigio, bancarrota, joyería, tienda, huchas, martillos y novedades.',
      eyebrow: 'Versiones',
      title: 'Bills Must Be Paid Demo vs Full Game',
      description:
        'Diferencias verificadas entre la demo gratuita/navegador y el lanzamiento completo de Steam, con fechas, guardados y sistemas añadidos o modificados.',
      imageAlt: 'Arte oficial de Bills Must Be Paid',
      breadcrumbs: ['Demo vs juego completo'],
      toc: [
        'Fechas de lanzamiento',
        'Compatibilidad de guardados',
        'Novedades del juego completo',
        'Navegador y Steam Demo',
        'Bucle compartido',
        'Qué cambian las novedades',
        'Contexto de guardado y versión',
      ],
      related: [
        { title: 'Guía para principiantes', description: 'Aprende el bucle principal que comparten las versiones.' },
        { title: 'Prestigio y bancarrota', description: 'La gran capa de progresión del lanzamiento completo.' },
        { title: 'Árbol de habilidades', description: 'Algunos nodos cambiaron entre demo y versión final.' },
      ],
      sources: [
        { label: 'Steam — Bills Must Be Paid Demo', note: 'Página oficial de la demo; lanzamiento el 21 de abril de 2026.' },
        { label: 'Steam — Bills Must Be Paid', note: 'Página del juego completo; lanzamiento el 29 de julio de 2026.' },
        { label: 'Steam Community — anuncios del desarrollador', note: 'Los posts de junio y lanzamiento describen novedades y confirman que los guardados no se transfieren.' },
        { label: 'Rike Games — press kit oficial de Bills Must Be Paid', note: 'Enlaza la demo de navegador/itch.io y la versión de Steam.' },
        { label: 'Rike Games en itch.io — Bills Must Be Paid', note: 'Demo HTML5 de primera parte para navegador.' },
      ],
      sections: [
        {
          id: 'dates',
          title: 'Fechas de la demo y del juego completo',
          paragraphs: [
            'La demo de Steam de Bills Must Be Paid se lanzó el 21 de abril de 2026 y el juego completo el 29 de julio de 2026. Esta frontera es útil al evaluar guías antiguas: un contenido publicado durante el periodo de demo puede explicar bien el bucle compartido, pero no necesariamente los sistemas de progresión que Rike Games cambió o amplió para el lanzamiento final.',
            'Rike Games también ofrece una experiencia de navegador mediante sus propios canales y una demo HTML5 en itch.io. Son formas oficiales o enlazadas por el desarrollador de probar Bills Must Be Paid, pero las fuentes públicas no justifican afirmar que cada paquete de navegador es idéntico byte por byte a la demo de Steam. Esta comparación se limita a diferencias que sí pueden verificarse.',
          ],
          bullets: ['Steam Demo: 21 de abril de 2026', 'Juego completo: 29 de julio de 2026'],
        },
        {
          id: 'saves',
          title: 'Los guardados de la demo no se transfieren',
          paragraphs: [
            'Rike Games lo dijo de forma explícita el día del lanzamiento. La razón no fue presentada como una simple restricción técnica: el juego completo cambió prestigio y bancarrota, algunos nodos del árbol, balance y sistemas internos. La progresión de la demo no puede tratarse como una base de datos perfectamente compatible con el lanzamiento.',
            'Si acumulaste muchas horas en la demo de navegador o Steam, planifica un comienzo nuevo. La experiencia sigue siendo útil para aprender control, resistencia, dinero, facturas y mejoras, pero no se convierte en ventaja guardada. Bills Must Be Paid usa esta diferencia para recordar que aprender una mecánica y transferir un archivo de progreso son cuestiones distintas.',
          ],
        },
        {
          id: 'additions',
          title: 'Qué anunció Rike Games para el juego completo',
          paragraphs: [
            'Antes del lanzamiento, el desarrollador destacó progresión de prestigio/bancarrota, anillos y pulseras, una nueva tienda con gadgets de escritorio, más tipos de hucha, más perks, más martillos, más mecánicas de apuestas o riesgo y un final. Steam también lista logros y Steam Cloud para la versión completa de Bills Must Be Paid.',
            'La lista representa novedades documentadas, no un changelog matemáticamente exhaustivo. Sirve para demostrar que el juego completo amplía estructura y contenido, pero no para afirmar que cada detalle de cada build está incluido aquí. Si futuras notas oficiales describen más diferencias, la página puede crecer manteniendo la misma regla: añadir lo que tenga una fuente y marcar claramente el contexto de versión.',
          ],
          bullets: ['Prestigio y bancarrota', 'Anillos y pulseras', 'Gadgets de escritorio', 'Más huchas, perks y martillos', 'Más riesgo/apuestas', 'Un final', 'Logros y Steam Cloud'],
        },
        {
          id: 'browser',
          title: 'Demo de navegador vs Steam Demo',
          paragraphs: [
            'El press kit de Rike Games dirige a itch.io como opción gratuita/demo de navegador y a Steam para la versión de PC. La demo de Steam es una aplicación de Steam independiente; itch.io ejecuta una versión HTML5. Ambas permiten experimentar el núcleo de Bills Must Be Paid, aunque su forma de distribución y build no sea la misma.',
            'Para mecánicas compartidas a alto nivel, la guía para principiantes es la mejor referencia. Para progresión específica del lanzamiento, usa Prestigio y Bancarrota. Esta división evita afirmar que todos los sistemas de demo y versión completa coinciden exactamente. La etiqueta de versión debe preceder cualquier consejo preciso de build o progreso.',
          ],
        },
        {
          id: 'demo-shared-loop',
          title: 'Qué comparten la demo y el juego completo',
          paragraphs: [
            'La identidad central se mantiene: control activo del martillo, huchas, resistencia, dinero, botín aleatorio, facturas y mejoras. La demo permite entender por qué Bills Must Be Paid no es un idle pasivo. El jugador selecciona objetivos y consume un recurso limitado durante cada ronda, y luego utiliza los resultados para afrontar obligaciones y mejorar.',
            'Compartir ese núcleo no significa ser copias completas. Rike Games añadió sistemas y declaró cambios de otros. Una guía de demo puede seguir siendo válida para explicar cómo se siente una ronda y, a la vez, ser insuficiente para describir prestigio final o nodos actuales. Esta página separa explícitamente continuidad y cambio para que la experiencia de prueba no se confunda con el contenido total.',
          ],
        },
        {
          id: 'demo-full-additions',
          title: 'Por qué las novedades cambian la estructura de Bills Must Be Paid',
          paragraphs: [
            'Prestigio y bancarrota conectan una ronda con ciclos posteriores; la joyería añade progresión persistente; más huchas y martillos amplían decisiones; gadgets y riesgo crean usos adicionales del dinero. Por tanto, “demo vs juego completo” no es solo comparar cantidad de contenido. La versión final cambia el horizonte de progresión y la variedad de elecciones que el jugador debe administrar.',
            'Esto ayuda a entender la incompatibilidad de guardados. Si algunos nodos, balance y sistemas internos han cambiado, mover un estado antiguo no es trivial ni necesariamente coherente. La demo sirve como vista previa del núcleo y el juego completo como entorno de progreso oficial. Future notas de Rike Games pueden añadir detalles a esta comparación sin alterar esa diferencia fundamental.',
          ],
        },
        {
          id: 'demo-save-context',
          title: 'Cómo leer guías antiguas de Bills Must Be Paid',
          paragraphs: [
            'Cuando una guía sea anterior al 29 de julio, pregunta si trata una mecánica compartida o un sistema que el desarrollador dijo haber cambiado. Consejos sobre golpear huchas y resistencia pueden seguir siendo útiles; rutas exactas de prestigio o habilidades necesitan comprobación actual. La fecha del contenido se convierte así en parte de la evidencia, no en un simple dato editorial.',
            'Los parches de balance requieren la misma disciplina. Un martillo puede haber cambiado sin que el resto del artículo lo haga. Bills Must Be Paid conserva fuentes y versiones para permitir que una recomendación histórica siga siendo comprensible: el lector puede ver por qué funcionó, qué cambió y si todavía aplica. Este filtro de versión sostiene el resto de guías del sitio.',
          ],
        },
      ],
    },
  },
} satisfies GamePageLocaleBundle;
