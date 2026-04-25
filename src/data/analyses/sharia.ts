// ---------------------------------------------------------------------------
// Full analysis data for the word شَرِيعَة (Shari'a)
// ---------------------------------------------------------------------------

export interface ShariaTranslation {
  translator: string;
  year: number;
  text: string;
  note: string;
}

export interface SemiticCognate {
  language: string;
  word: string;
  meaning: string;
}

export interface QuranicDerivative {
  arabic: string;
  transliteration: string;
  pattern: string;
  meaning: string;
  reference: string;
}

export interface RhetoricalDevice {
  device: string;
  arabic: string;
  explanation: string;
}

export interface TafsirCommentary {
  number: number;
  scholar: string;
  summary: string;
  keyQuote: string;
  highlight: boolean;
  crossReferences?: string[];
}

export interface WaterParallel {
  water: string;
  sharia: string;
}

export interface IntraQuranicOccurrence {
  reference: string;
  arabic: string;
  meaning: string;
}

export interface QuranicAssertion {
  claim: string;
  level: "qati" | "rajih" | "muhtamal";
  explanation: string;
}

export interface ContemporaryGap {
  aspect: string;
  quranic: string;
  contemporary: string;
}

export interface Maqsad {
  arabic: string;
  transliteration: string;
  french: string;
  description: string;
}

export interface TanzilApplication {
  dimension: string;
  icon: string;
  description: string;
}

export interface ShariaAnalysis {
  // Header
  word: string;
  transliteration: string;
  rootLetters: [string, string, string];
  rootTransliteration: string;
  coreMeaning: string;
  primaryVerse: string;
  surah: string;
  surahArabic: string;
  classification: string;

  // Verse
  verseArabic: string;
  translations: ShariaTranslation[];

  // Root & Etymology
  preIslamicMeaning: string;
  preIslamicArabicQuote: string;
  preIslamicSource: string;
  quranicShift: string;
  quranicShiftSource: string;
  semiticCognates: SemiticCognate[];
  derivatives: QuranicDerivative[];

  // Morphology
  morphPattern: string;
  morphPatternArabic: string;
  morphType: string;
  morphForm: string;
  morphGrammaticalCase: string;
  morphDetails: string;
  morphTanwinNote: string;
  morphPatternImplication: string;

  // Rhetoric
  maani: RhetoricalDevice[];
  bayan: RhetoricalDevice[];
  badi: RhetoricalDevice[];

  // Tafsir
  tafsirCommentaries: TafsirCommentary[];

  // Water Metaphor
  waterParallels: WaterParallel[];
  waterDivineNames: string[];

  // Key Verse 5:48
  keyVerseReference: string;
  keyVerseArabic: string;
  keyVerseExplanation: string;

  // Intra-Quranic
  intraQuranicOccurrences: IntraQuranicOccurrence[];

  // Three Assertions
  assertions: QuranicAssertion[];

  // Contemporary Gap
  contemporaryGap: ContemporaryGap[];

  // Maqasid
  maqasid: Maqsad[];
  maqasidQuote: string;
  maqasidQuoteSource: string;

  // Tanzil
  tanzilApplications: TanzilApplication[];

  // Footer
  analysisDate: string;
  methodologyReference: string;
}

export const shariaAnalysis: ShariaAnalysis = {
  // ── HEADER ──────────────────────────────────────────────────────────────
  word: "\u0634\u064E\u0631\u0650\u064A\u0639\u064E\u0629",
  transliteration: "Shari\u2019a",
  rootLetters: ["\u0634", "\u0631", "\u0639"],
  rootTransliteration: "sh-r-\u2018",
  coreMeaning: "Chemin menant \u00e0 l\u2019eau",
  primaryVerse: "45:18",
  surah: "al-Jathiya",
  surahArabic: "\u0627\u0644\u062C\u0627\u062B\u064A\u0629",
  classification: "Mecquoise",

  // ── VERSE ───────────────────────────────────────────────────────────────
  verseArabic:
    "\u062B\u064F\u0645\u064E\u0651 \u062C\u064E\u0639\u064E\u0644\u0652\u0646\u064E\u0627\u0643\u064E \u0639\u064E\u0644\u064E\u0649\u0670 \u0634\u064E\u0631\u0650\u064A\u0639\u064E\u0629\u064D \u0645\u0650\u0651\u0646\u064E \u0627\u0644\u0652\u0623\u064E\u0645\u0652\u0631\u0650 \u0641\u064E\u0627\u062A\u064E\u0651\u0628\u0650\u0639\u0652\u0647\u064E\u0627 \u0648\u064E\u0644\u064E\u0627 \u062A\u064E\u062A\u064E\u0651\u0628\u0650\u0639\u0652 \u0623\u064E\u0647\u0652\u0648\u064E\u0627\u0621\u064E \u0627\u0644\u064E\u0651\u0630\u0650\u064A\u0646\u064E \u0644\u064E\u0627 \u064A\u064E\u0639\u0652\u0644\u064E\u0645\u064F\u0648\u0646\u064E",

  translations: [
    {
      translator: "Muhammad Hamidullah",
      year: 1959,
      text: "Puis Nous t\u2019avons mis sur une voie provenant de l\u2019Ordre. Suis-la donc et ne suis pas les passions de ceux qui ne savent pas.",
      note: "Fid\u00e9lit\u00e9 maximale au texte arabe. \u00ab Voie provenant de l\u2019Ordre \u00bb conserve l\u2019ind\u00e9termination du texte original.",
    },
    {
      translator: "Jacques Berque",
      year: 1990,
      text: "Puis Nous t\u2019avons assign\u00e9 une route trac\u00e9e relevant de l\u2019Ordre. Suis-la, et ne te conforme pas aux passions des ignorants.",
      note: "\u00ab Route trac\u00e9e \u00bb restitue l\u2019image physique du chemin. Berque capte la dimension spatiale de shari\u2019a.",
    },
    {
      translator: "Malek Chebel",
      year: 2009,
      text: "Puis Nous t\u2019avons plac\u00e9 sur une ligne de conduite d\u2019essence divine. Suis-la et ne suis point les d\u00e9sirs de ceux qui ne savent pas.",
      note: "\u00ab Ligne de conduite d\u2019essence divine \u00bb \u2014 interpr\u00e9tatif mais capte la dimension normative.",
    },
    {
      translator: "Muhammad Asad",
      year: 1980,
      text: "And, finally, We have set thee on a way by which the purpose [of faith] may be fulfilled. Follow it, then, and follow not the likes and dislikes of those who do not know [the truth].",
      note: "Asad ajoute \u00ab purpose of faith \u00bb entre crochets \u2014 une interpr\u00e9tation rationaliste qui \u00e9largit le sens.",
    },
  ],

  // ── ROOT & ETYMOLOGY ────────────────────────────────────────────────────
  preIslamicMeaning:
    "Dans l\u2019arabe pr\u00e9-islamique, la racine \u0634\u0631\u0639 d\u00e9signe concr\u00e8tement le chemin que les animaux empruntent pour descendre vers un point d\u2019eau. C\u2019est le mawrid \u2014 le lieu o\u00f9 l\u2019on s\u2019abreuve. Dans le d\u00e9sert d\u2019Arabie, conna\u00eetre la shari\u2019a (le chemin vers l\u2019eau) \u00e9tait litt\u00e9ralement une question de vie ou de mort.",
  preIslamicArabicQuote:
    "\u0627\u0644\u0634\u0631\u064A\u0639\u0629\u064F: \u0645\u064E\u0648\u0631\u0650\u062F\u064F \u0627\u0644\u0625\u0628\u0650\u0644\u0650 \u0625\u0644\u0649 \u0627\u0644\u0645\u0627\u0621\u0650\u060C \u0648\u0647\u064A \u0627\u0644\u0637\u0631\u064A\u0642\u0629\u064F \u0627\u0644\u0645\u064F\u0633\u062A\u0642\u064A\u0645\u0629\u064F",
  preIslamicSource: "Lis\u0101n al-\u2018Arab, Ibn Man\u1e93\u016br",
  quranicShift:
    "Le Coran op\u00e8re un transfert s\u00e9mantique majeur : du chemin physique vers l\u2019eau mat\u00e9rielle au chemin spirituel vers la guidance divine. Comme l\u2019a montr\u00e9 Toshihiko Izutsu dans ses travaux sur la s\u00e9mantique coranique, le Coran ne cr\u00e9e pas de mots nouveaux \u2014 il investit des mots existants d\u2019une profondeur nouvelle. L\u2019eau physique devient la guidance (huda), et le chemin vers elle devient la voie r\u00e9v\u00e9l\u00e9e.",
  quranicShiftSource:
    "Toshihiko Izutsu, God and Man in the Quran: Semantics of the Quranic Weltanschauung, 1964",
  semiticCognates: [
    {
      language: "H\u00e9breu biblique",
      word: "\u05E9\u05B8\u05C1\u05E8\u05B7\u05E2 (shara\u2018)",
      meaning: "Tremper, immerger dans l\u2019eau",
    },
    {
      language: "Aram\u00e9en",
      word: "\u0728\u072A\u0725 (shra\u2018)",
      meaning: "Commencer, initier, ouvrir une voie",
    },
    {
      language: "Syriaque",
      word: "\u0728\u072A\u0725\u072C\u0710 (shr\u2018t\u0101)",
      meaning: "Condition, r\u00e8gle, pacte",
    },
    {
      language: "Akkadien",
      word: "\u0161ur\u0101\u2019u",
      meaning: "Ouvrir, commencer, d\u00e9buter un chemin",
    },
    {
      language: "Ge\u2018ez (\u00c9thiopien)",
      word: "\u1220\u1228\u12D0 (\u0161\u01DDr\u01DD\u2018a)",
      meaning: "L\u00e9gif\u00e9rer, \u00e9tablir une loi",
    },
  ],
  derivatives: [
    {
      arabic: "\u0634\u064E\u0631\u064E\u0639\u064E",
      transliteration: "shara\u2018a",
      pattern: "fa\u2018ala",
      meaning: "Il a l\u00e9gif\u00e9r\u00e9 / prescrit pour vous",
      reference: "42:13",
    },
    {
      arabic: "\u0634\u0650\u0631\u0652\u0639\u064E\u0629",
      transliteration: "shir\u2018a",
      pattern: "fi\u2018la",
      meaning: "Une voie prescrite / une loi (utilis\u00e9 en 5:48)",
      reference: "5:48",
    },
    {
      arabic: "\u0634\u064F\u0631\u064E\u0651\u0639\u064B\u0627",
      transliteration: "shurra\u2018an",
      pattern: "fu\u2018\u2018\u0101l",
      meaning: "Apparaissant \u00e0 la surface (les poissons \u2014 7:163)",
      reference: "7:163",
    },
    {
      arabic: "\u0634\u064E\u0631\u0650\u064A\u0639\u064E\u0629",
      transliteration: "shar\u012b\u2018a",
      pattern: "fa\u2018\u012bla",
      meaning: "Une voie claire menant \u00e0 [la guidance]",
      reference: "45:18",
    },
  ],

  // ── MORPHOLOGY ──────────────────────────────────────────────────────────
  morphPattern: "fa\u2018\u012bla",
  morphPatternArabic: "\u0641\u064E\u0639\u0650\u064A\u0644\u064E\u0629",
  morphType: "Nom / adjectif assimil\u00e9 (sifa mushabbaha)",
  morphForm: "Forme I simple (th\u00e8me de base)",
  morphGrammaticalCase:
    "Majr\u016br (g\u00e9nitif) apr\u00e8s \u0639\u064E\u0644\u064E\u0649\u0670 : \u00ab sur une shar\u012b\u2018a \u00bb",
  morphDetails:
    "Le mot est au singulier f\u00e9minin ind\u00e9fini (tankir) avec tanw\u012bn (kasra). Le ta\u2019 marb\u016b\u1e6da (\u0629) marque le f\u00e9minin, indiquant l\u2019unit\u00e9 discr\u00e8te (une voie sp\u00e9cifique parmi d\u2019autres possibles).",
  morphTanwinNote:
    "L\u2019ind\u00e9termination (tankir) est cruciale : \u0634\u064E\u0631\u0650\u064A\u0639\u064E\u0629\u064D = UNE voie, pas LA voie. Cela implique que d\u2019autres communaut\u00e9s ont re\u00e7u LEUR voie propre (cf. 5:48). Le tanw\u012bn cr\u00e9e une ouverture th\u00e9ologique fondamentale : la pluralit\u00e9 des voies l\u00e9gif\u00e9r\u00e9es dans le plan divin.",
  morphPatternImplication:
    "Le sch\u00e8me fa\u2018\u012bla exprime une qualit\u00e9 stable et inh\u00e9rente. La shar\u012b\u2018a n\u2019est pas un \u00e9v\u00e9nement ponctuel mais une r\u00e9alit\u00e9 permanente \u2014 un chemin toujours ouvert, toujours accessible, dont la nature est d\u2019\u00eatre emprunt\u00e9.",

  // ── RHETORIC (BALAGHA) ──────────────────────────────────────────────────
  maani: [
    {
      device: "Taqdim wa Ta\u2019khir",
      arabic: "\u0627\u0644\u062A\u0642\u062F\u064A\u0645 \u0648\u0627\u0644\u062A\u0623\u062E\u064A\u0631",
      explanation:
        "Le verbe ja\u2018aln\u0101ka (\u00ab Nous t\u2019avons plac\u00e9 \u00bb) pr\u00e9c\u00e8de la mention de la shar\u012b\u2018a : c\u2019est Dieu qui agit en premier, le Proph\u00e8te est r\u00e9cipiendaire. L\u2019ant\u00e9position du verbe divin souligne que la voie est un don, pas une construction humaine.",
    },
    {
      device: "Tank\u012br li\u2019l-ta\u2018\u1e93\u012bm",
      arabic:
        "\u0627\u0644\u062A\u0646\u0643\u064A\u0631 \u0644\u0644\u062A\u0639\u0638\u064A\u0645",
      explanation:
        "L\u2019ind\u00e9termination de \u0634\u064E\u0631\u0650\u064A\u0639\u064E\u0629\u064D n\u2019est pas un manque de pr\u00e9cision mais un proc\u00e9d\u00e9 de grandeur (ta\u2018\u1e93\u012bm) : une voie si immense qu\u2019elle ne peut \u00eatre contenue dans un article d\u00e9fini.",
    },
    {
      device: "Al-Am\u2019r ba\u2018da\u2019l-khabar",
      arabic:
        "\u0627\u0644\u0623\u0645\u0631 \u0628\u0639\u062F \u0627\u0644\u062E\u0628\u0631",
      explanation:
        "Le verset passe de l\u2019\u00e9nonciation (khabar : \u00ab Nous t\u2019avons plac\u00e9 \u00bb) \u00e0 l\u2019injonction (insh\u0101\u2019 : \u00ab suis-la \u00bb). Ce passage du d\u00e9claratif \u00e0 l\u2019imp\u00e9ratif cr\u00e9e une urgence : le don exige une r\u00e9ponse imm\u00e9diate.",
    },
  ],
  bayan: [
    {
      device: "Isti\u2018\u0101ra makniyya",
      arabic:
        "\u0627\u0633\u062A\u0639\u0627\u0631\u0629 \u0645\u0643\u0646\u064A\u0629",
      explanation:
        "La shar\u012b\u2018a est pr\u00e9sent\u00e9e comme un chemin physique sur lequel on est \u00ab plac\u00e9 \u00bb (\u0639\u064E\u0644\u064E\u0649\u0670). La m\u00e9taphore est cach\u00e9e (makniyya) : on ne voit pas la comparaison explicite, mais tout le champ lexical spatial est activ\u00e9 \u2014 la guidance est un territoire \u00e0 parcourir.",
    },
    {
      device: "Kin\u0101ya",
      arabic: "\u0643\u0646\u0627\u064A\u0629",
      explanation:
        "\u00ab Les passions de ceux qui ne savent pas \u00bb est une allusion (kin\u0101ya) aux id\u00e9ologies humaines qui se substituent \u00e0 la guidance divine. Le Coran ne les nomme pas \u2014 l\u2019absence de nom les d\u00e9l\u00e9gitime plus puissamment qu\u2019une r\u00e9futation directe.",
    },
  ],
  badi: [
    {
      device: "\u1e6Cib\u0101q",
      arabic: "\u0637\u0628\u0627\u0642",
      explanation:
        "Opposition entre ittabi\u2018h\u0101 (\u00ab suis-la \u00bb) et l\u0101 tattabi\u2018 (\u00ab ne suis pas \u00bb). La m\u00eame racine \u062A\u0628\u0639 est utilis\u00e9e positivement puis n\u00e9gativement : suivre la shar\u012b\u2018a vs. suivre les passions. Le contraste force un choix binaire.",
    },
    {
      device: "Mur\u0101\u2018\u0101t al-na\u1e93\u012br",
      arabic:
        "\u0645\u0631\u0627\u0639\u0627\u0629 \u0627\u0644\u0646\u0638\u064A\u0631",
      explanation:
        "La correspondance th\u00e9matique : shar\u012b\u2018a (voie divine) s\u2019oppose \u00e0 ahw\u0101\u2019 (passions). La voie est unique, claire, stable ; les passions sont plurielles (ahw\u0101\u2019, pluriel bris\u00e9), dispersantes. Le choix du pluriel pour les passions face au singulier de la voie est d\u00e9lib\u00e9r\u00e9.",
    },
  ],

  // ── TAFSIR COMMENTARIES ─────────────────────────────────────────────────
  tafsirCommentaries: [
    {
      number: 1,
      scholar: "Al-Tabari (839\u2013923)",
      summary:
        "Al-Tabari rapporte que la shar\u012b\u2018a d\u00e9signe ici la voie (tar\u012bqa), la m\u00e9thode (minhaj) et la tradition (sunna) issues de l\u2019Ordre divin. Il compile les paroles d\u2019Ibn \u2018Abbas, Mujahid et Qatada qui convergent toutes vers le sens de \u00ab voie claire et r\u00e9v\u00e9l\u00e9e \u00bb. Pour al-Tabari, le verset \u00e9tablit que le Proph\u00e8te re\u00e7oit une voie sp\u00e9cifique \u00e0 suivre, distincte de celles des communaut\u00e9s ant\u00e9rieures.",
      keyQuote:
        "\u0623\u064E\u064A\u0652 \u0639\u064E\u0644\u064E\u0649 \u0637\u064E\u0631\u0650\u064A\u0642\u064E\u0629\u064D \u0648\u064E\u0645\u0650\u0646\u0652\u0647\u064E\u0627\u062C\u064D \u0648\u064E\u0633\u064F\u0646\u064E\u0651\u0629\u064D \u0645\u0650\u0646\u064E \u0627\u0644\u0623\u064E\u0645\u0652\u0631\u0650",
      highlight: false,
      crossReferences: ["42:13", "5:48"],
    },
    {
      number: 2,
      scholar: "Ibn Kath\u012br (1301\u20131373)",
      summary:
        "Ibn Kath\u012br insiste sur le lien intra-coranique entre 45:18 et 5:48, o\u00f9 la shir\u2018a et le minh\u0101j sont mentionn\u00e9s ensemble. Il souligne que chaque proph\u00e8te a re\u00e7u sa propre shar\u012b\u2018a mais que le tawhid (monoth\u00e9isme) reste la constante universelle. La shar\u012b\u2018a est le versant pratique de la religion, le minh\u0101j en est la m\u00e9thodologie.",
      keyQuote:
        "\u0644\u0650\u0643\u064F\u0644\u064D\u0651 \u062C\u064E\u0639\u064E\u0644\u0652\u0646\u064E\u0627 \u0645\u0650\u0646\u0643\u064F\u0645\u0652 \u0634\u0650\u0631\u0652\u0639\u064E\u0629\u064B \u0648\u064E\u0645\u0650\u0646\u0652\u0647\u064E\u0627\u062C\u064B\u0627 \u2014 \u00e0 chacun de vous Nous avons assign\u00e9 une loi et une voie",
      highlight: true,
      crossReferences: ["5:48", "42:13", "3:19"],
    },
    {
      number: 3,
      scholar: "Al-Qurtubi (1214\u20131273)",
      summary:
        "Al-Qurtubi extrait les implications juridiques du verset : si Dieu place le Proph\u00e8te sur une shar\u012b\u2018a et lui ordonne de la suivre, cela implique l\u2019obligation (wuj\u016bb) de s\u2019y conformer. Il distingue la shar\u012b\u2018a (les r\u00e8gles pratiques qui peuvent varier d\u2019une communaut\u00e9 \u00e0 l\u2019autre) de la \u2018aq\u012bda (le dogme, invariant depuis Adam). Il note que \u00ab min al-amr \u00bb signifie \u00ab relevant de l\u2019Ordre [divin] \u00bb \u2014 la shar\u012b\u2018a n\u2019est pas humaine.",
      keyQuote:
        "\u0627\u0644\u0634\u064E\u0651\u0631\u064A\u0639\u064E\u0629\u064F \u0645\u064E\u0627 \u0634\u064E\u0631\u064E\u0639\u064E \u0627\u0644\u0644\u0647\u064F \u0644\u0650\u0639\u0650\u0628\u064E\u0627\u062F\u0650\u0647\u0650 \u0645\u0650\u0646\u064E \u0627\u0644\u062F\u0651\u064A\u0646\u0650 \u0648\u064E\u0627\u0644\u0623\u064E\u062D\u0652\u0643\u064E\u0627\u0645\u0650",
      highlight: true,
      crossReferences: ["5:48", "42:13"],
    },
    {
      number: 4,
      scholar: "Ibn \u2018Atiyya (1088\u20131147)",
      summary:
        "Ibn \u2018Atiyya analyse avec pr\u00e9cision le choix du mot shar\u012b\u2018a plut\u00f4t que tar\u012bqa ou sab\u012bl. La shar\u012b\u2018a implique un chemin menant \u00e0 une source vitale (l\u2019eau / la guidance). Le mot porte en lui-m\u00eame la promesse du r\u00e9sultat : emprunter la shar\u012b\u2018a, c\u2019est n\u00e9cessairement arriver \u00e0 l\u2019eau. Il note que le schème fa\u2018\u012bla \u00e9voque une qualit\u00e9 permanente, non un passage \u00e9ph\u00e9m\u00e8re.",
      keyQuote:
        "\u0627\u0644\u0634\u064E\u0651\u0631\u064A\u0639\u064E\u0629\u064F \u0641\u064A \u0627\u0644\u0644\u064F\u0651\u063A\u064E\u0629\u0650: \u0627\u0644\u0637\u064E\u0651\u0631\u064A\u0642\u064F \u0625\u0644\u064E\u0649 \u0627\u0644\u0645\u064E\u0627\u0621\u0650",
      highlight: false,
    },
    {
      number: 5,
      scholar: "Ibn al-Qayyim (1292\u20131350)",
      summary:
        "Ibn al-Qayyim d\u00e9veloppe la dimension spirituelle (tazkiya) de la shar\u012b\u2018a. Pour lui, la shar\u012b\u2018a est l\u2019expression de la justice (adl) et de la mis\u00e9ricorde (rahma) divines. Toute loi qui contredit la justice n\u2019est pas de la shar\u012b\u2018a, m\u00eame si elle est pr\u00e9sent\u00e9e comme telle par le biais d\u2019une interpr\u00e9tation (ta\u2019w\u012bl). Il formule le crit\u00e8re d\u00e9cisif des maqasid : la shar\u012b\u2018a est enti\u00e8rement justice, enti\u00e8rement mis\u00e9ricorde, enti\u00e8rement sagesse.",
      keyQuote:
        "\u0627\u0644\u0634\u064E\u0651\u0631\u064A\u0639\u064E\u0629\u064F \u0643\u064F\u0644\u064F\u0651\u0647\u064E\u0627 \u0639\u064E\u062F\u0652\u0644\u064C \u0648\u064E\u0631\u064E\u062D\u0652\u0645\u064E\u0629\u064C \u0648\u064E\u0645\u064E\u0635\u064E\u0627\u0644\u0650\u062D\u064F \u0648\u064E\u062D\u0650\u0643\u0652\u0645\u064E\u0629\u064C",
      highlight: true,
      crossReferences: ["21:107", "10:57"],
    },
    {
      number: 6,
      scholar: "Al-Shawkani (1759\u20131839)",
      summary:
        "Al-Shawkani synth\u00e9tise les positions pr\u00e9c\u00e9dentes et ajoute une analyse linguistique d\u00e9taill\u00e9e. Il confirme que shar\u012b\u2018a, shir\u2018a et minh\u0101j sont trois termes distincts dans le Coran. La shar\u012b\u2018a est la voie g\u00e9n\u00e9rale, la shir\u2018a est la loi sp\u00e9cifique d\u2019une communaut\u00e9, le minh\u0101j est la m\u00e9thode de mise en pratique. Il insiste sur l\u2019imp\u00e9ratif fattabi\u2018h\u0101 (suis-la) comme preuve de l\u2019obligation l\u00e9gale.",
      keyQuote:
        "\u0627\u0644\u0641\u064E\u0627\u0621\u064F \u0641\u064A \u0641\u064E\u0627\u062A\u064E\u0651\u0628\u0650\u0639\u0652\u0647\u064E\u0627 \u0644\u0650\u0644\u062A\u064E\u0651\u0639\u0652\u0642\u064A\u0628\u0650 \u0648\u064E\u0627\u0644\u062A\u064E\u0651\u0631\u0652\u062A\u064A\u0628\u0650: \u0641\u064E\u0628\u0650\u0633\u064E\u0628\u064E\u0628\u0650 \u0647\u064E\u0630\u064E\u0627 \u0627\u0644\u062C\u064E\u0639\u0652\u0644\u0650 \u0627\u062A\u064E\u0651\u0628\u0650\u0639\u0652\u0647\u064E\u0627",
      highlight: false,
    },
    {
      number: 7,
      scholar: "Ibn \u2018Ashur (1879\u20131973)",
      summary:
        "Ibn \u2018Ashur produit l\u2019analyse la plus riche du XXe si\u00e8cle. Il d\u00e9montre que la shar\u012b\u2018a coranique int\u00e8gre trois dimensions : les prescriptions pratiques (\u2018amaliyya), les principes moraux (akhl\u0101qiyya) et les finalit\u00e9s sup\u00e9rieures (maq\u0101sidiyya). Il r\u00e9volutionne l\u2019exeg\u00e8se en int\u00e9grant syst\u00e9matiquement la th\u00e9orie des maqasid : la shar\u012b\u2018a n\u2019est comprise qu\u2019\u00e0 travers ses finalit\u00e9s, jamais par ses r\u00e8gles isol\u00e9es.",
      keyQuote:
        "\u0627\u0644\u0634\u064E\u0651\u0631\u064A\u0639\u064E\u0629\u064F \u0623\u064E\u062D\u0652\u0643\u064E\u0627\u0645\u064C \u062A\u064E\u0634\u0652\u062A\u064E\u0645\u0650\u0644\u064F \u0639\u064E\u0644\u064E\u0649 \u0645\u064E\u0642\u064E\u0627\u0635\u0650\u062F\u064E \u0648\u064E\u0648\u064E\u0633\u064E\u0627\u0626\u0650\u0644\u064E",
      highlight: true,
      crossReferences: ["2:185", "5:48", "22:78"],
    },
    {
      number: 8,
      scholar: "Al-Sabuni (1930\u20132021)",
      summary:
        "Al-Sabuni condense les analyses classiques dans une synth\u00e8se accessible. Il souligne que la shar\u012b\u2018a est \u00ab min al-amr \u00bb (relevant de l\u2019Ordre) \u2014 c\u2019est-\u00e0-dire qu\u2019elle \u00e9mane de l\u2019Ordre divin, pas de l\u2019ordre humain. Il met en garde contre la confusion entre la shar\u012b\u2018a (la voie r\u00e9v\u00e9l\u00e9e) et le fiqh (la compr\u00e9hension humaine de cette voie). La premi\u00e8re est infaillible, le second est humain et faillible.",
      keyQuote:
        "\u062C\u064E\u0639\u064E\u0644\u0652\u0646\u064E\u0627\u0643\u064E \u0639\u064E\u0644\u064E\u0649 \u0645\u0650\u0646\u0652\u0647\u064E\u0627\u062C\u064D \u0648\u064E\u0627\u0636\u0650\u062D\u064D \u0645\u0650\u0646\u064E \u0627\u0644\u062F\u0651\u064A\u0646\u0650",
      highlight: false,
    },
    {
      number: 9,
      scholar: "Al-Shinqiti (1905\u20131973)",
      summary:
        "Al-Shinqiti applique sa m\u00e9thode signature : \u00e9clairer le verset exclusivement par d\u2019autres versets du Coran. Il lie 45:18 \u00e0 42:13 (Dieu a l\u00e9gif\u00e9r\u00e9 pour vous en mati\u00e8re de religion), 5:48 (\u00e0 chacun une shir\u2018a et un minh\u0101j), et 42:21 (ceux qui se sont donn\u00e9 des l\u00e9gislateurs en dehors de Dieu). Il d\u00e9montre que le Coran d\u00e9finit lui-m\u00eame le concept de shar\u012b\u2018a sans recourir \u00e0 aucune source ext\u00e9rieure.",
      keyQuote:
        "\u0628\u064E\u064A\u064E\u0651\u0646\u064E \u0627\u0644\u0644\u0647\u064F \u0641\u064A \u0622\u064A\u064E\u0627\u062A\u064D \u0623\u064F\u062E\u0652\u0631\u064E\u0649 \u0645\u064E\u0639\u0652\u0646\u064E\u0649 \u0647\u064E\u0630\u0650\u0647\u0650 \u0627\u0644\u0634\u064E\u0651\u0631\u064A\u0639\u064E\u0629\u0650 \u0627\u0644\u0645\u064E\u0630\u0652\u0643\u064F\u0648\u0631\u064E\u0629\u0650 \u0647\u064F\u0646\u064E\u0627",
      highlight: true,
      crossReferences: ["42:13", "42:21", "5:48", "7:163"],
    },
  ],

  // ── WATER METAPHOR ──────────────────────────────────────────────────────
  waterParallels: [
    {
      water: "L\u2019eau est la source de toute vie biologique",
      sharia:
        "La Shari\u2019a est la source de toute vie spirituelle",
    },
    {
      water: "Sans eau, le corps meurt de soif",
      sharia:
        "Sans guidance, l\u2019\u00e2me meurt d\u2019\u00e9garement",
    },
    {
      water: "L\u2019eau purifie le corps",
      sharia:
        "La Shari\u2019a purifie le c\u0153ur et les actes",
    },
    {
      water: "L\u2019eau descend du ciel vers la terre",
      sharia:
        "La Shari\u2019a descend de Dieu vers les hommes (tanzil)",
    },
    {
      water:
        "L\u2019eau suit un chemin naturel (le lit de la rivi\u00e8re)",
      sharia:
        "La Shari\u2019a suit la nature originelle de l\u2019homme (fitra)",
    },
    {
      water: "L\u2019eau s\u2019adapte au r\u00e9cipient sans changer de nature",
      sharia:
        "La Shari\u2019a s\u2019adapte aux contextes sans alt\u00e9rer ses principes",
    },
  ],
  waterDivineNames: [
    "Al-Hayy (\u0627\u0644\u062D\u064A\u0651) \u2014 Le Vivant : source de toute vie",
    "Al-Muhyi (\u0627\u0644\u0645\u064F\u062D\u064A\u064A) \u2014 Celui qui donne la vie : l\u2019eau et la guidance vivifient",
    "Al-Qudd\u016bs (\u0627\u0644\u0642\u064F\u062F\u064F\u0651\u0648\u0633) \u2014 Le Tr\u00e8s-Saint : la purification par l\u2019eau et par la loi",
    "Al-H\u0101d\u012b (\u0627\u0644\u0647\u064E\u0627\u062F\u064A) \u2014 Le Guide : Celui qui trace le chemin vers la source",
  ],

  // ── KEY VERSE 5:48 ─────────────────────────────────────────────────────
  keyVerseReference: "5:48",
  keyVerseArabic:
    "\u0644\u0650\u0643\u064F\u0644\u064D\u0651 \u062C\u064E\u0639\u064E\u0644\u0652\u0646\u064E\u0627 \u0645\u0650\u0646\u0643\u064F\u0645\u0652 \u0634\u0650\u0631\u0652\u0639\u064E\u0629\u064B \u0648\u064E\u0645\u0650\u0646\u0652\u0647\u064E\u0627\u062C\u064B\u0627",
  keyVerseExplanation:
    "Ce verset crucial utilise \u0634\u0650\u0631\u0652\u0639\u064E\u0629 (shir\u2018a) et non \u0634\u064E\u0631\u0650\u064A\u0639\u064E\u0629 (shar\u012b\u2018a). Les deux proviennent de la m\u00eame racine \u0634\u0631\u0639 mais avec des nuances diff\u00e9rentes. La shir\u2018a (sch\u00e8me fi\u2018la) d\u00e9signe la loi sp\u00e9cifique d\u2019une communaut\u00e9 donn\u00e9e, tandis que la shar\u012b\u2018a (sch\u00e8me fa\u2018\u012bla) d\u00e9signe la voie g\u00e9n\u00e9rale. Le minh\u0101j, lui, d\u00e9signe la m\u00e9thodologie, la route trac\u00e9e. Dieu affirme ici que chaque communaut\u00e9 proph\u00e9tique a re\u00e7u sa propre l\u00e9gislation (shir\u2018a) et sa propre m\u00e9thode (minh\u0101j), ce qui fonde la pluralit\u00e9 l\u00e9gale dans l\u2019unit\u00e9 th\u00e9ologique.",

  // ── INTRA-QURANIC ──────────────────────────────────────────────────────
  intraQuranicOccurrences: [
    {
      reference: "42:13",
      arabic: "\u0634\u064E\u0631\u064E\u0639\u064E",
      meaning:
        "\u00ab Il a l\u00e9gif\u00e9r\u00e9 pour vous en mati\u00e8re de religion \u00bb \u2014 Verbe, acte divin de l\u00e9gif\u00e9rer",
    },
    {
      reference: "42:21",
      arabic: "\u0634\u064E\u0631\u064E\u0639\u064F\u0648\u0627",
      meaning:
        "\u00ab Ils se sont donn\u00e9 des l\u00e9gislateurs en dehors de Dieu \u00bb \u2014 Usurpation humaine du droit divin",
    },
    {
      reference: "45:18",
      arabic: "\u0634\u064E\u0631\u0650\u064A\u0639\u064E\u0629",
      meaning:
        "\u00ab Sur une voie provenant de l\u2019Ordre \u00bb \u2014 Nom, la voie r\u00e9v\u00e9l\u00e9e",
    },
    {
      reference: "5:48",
      arabic: "\u0634\u0650\u0631\u0652\u0639\u064E\u0629",
      meaning:
        "\u00ab A chacun une loi et une voie \u00bb \u2014 La loi sp\u00e9cifique d\u2019une communaut\u00e9",
    },
    {
      reference: "7:163",
      arabic: "\u0634\u064F\u0631\u064E\u0651\u0639\u064B\u0627",
      meaning:
        "\u00ab Les poissons apparaissant \u00e0 la surface \u00bb \u2014 Sens physique originel : \u00e9merger vers l\u2019eau",
    },
  ],

  // ── THREE ASSERTIONS ────────────────────────────────────────────────────
  assertions: [
    {
      claim:
        "La Shari\u2019a est d\u2019origine divine, non humaine",
      level: "qati",
      explanation:
        "Le verset est explicite : \u00ab Nous t\u2019avons plac\u00e9 sur une shar\u012b\u2018a provenant de l\u2019Ordre (min al-amr) \u00bb. Le sujet est \u00ab Nous \u00bb (Dieu), la shar\u012b\u2018a provient de \u00ab al-amr \u00bb (l\u2019Ordre divin). Consensus absolu des 9 tafsirs.",
    },
    {
      claim:
        "La pluralit\u00e9 des voies l\u00e9gif\u00e9r\u00e9es fait partie du plan divin",
      level: "rajih",
      explanation:
        "5:48 affirme \u00ab \u00e0 chacun de vous Nous avons assign\u00e9 une loi et une voie \u00bb. La majorit\u00e9 des exeg\u00e8tes comprennent que les lois pratiques varient d\u2019un proph\u00e8te \u00e0 l\u2019autre, tandis que le tawhid reste constant. Opinion pr\u00e9pond\u00e9rante fond\u00e9e sur le croisement de 45:18, 5:48 et 42:13.",
    },
    {
      claim:
        "Le fiqh (jurisprudence humaine) n\u2019est pas la Shari\u2019a elle-m\u00eame",
      level: "rajih",
      explanation:
        "Distinction fond\u00e9e sur l\u2019analyse d\u2019Ibn \u2018Ashur et Ibn al-Qayyim : la Shari\u2019a est la voie r\u00e9v\u00e9l\u00e9e (infaillible), le fiqh est la compr\u00e9hension humaine de cette voie (faillible). La majorit\u00e9 des savants de usul al-fiqh maintient cette distinction. Les deux ne doivent pas \u00eatre confondus.",
    },
  ],

  // ── CONTEMPORARY GAP ────────────────────────────────────────────────────
  contemporaryGap: [
    {
      aspect: "Nature",
      quranic: "Chemin vers la source de vie (eau/guidance)",
      contemporary:
        "Syst\u00e8me juridique p\u00e9nal",
    },
    {
      aspect: "Scope",
      quranic:
        "Voie englobante : spiritualit\u00e9, \u00e9thique, loi, relation \u00e0 Dieu",
      contemporary:
        "R\u00e9duit aux hud\u016bd (peines l\u00e9gales) dans le d\u00e9bat public",
    },
    {
      aspect: "Finalit\u00e9",
      quranic:
        "Justice (\u2018adl), mis\u00e9ricorde (rahma), sagesse (hikma)",
      contemporary:
        "Contr\u00f4le social / autorit\u00e9 politique",
    },
    {
      aspect: "Source",
      quranic:
        "\u00ab Min al-amr \u00bb \u2014 provenant de l\u2019Ordre divin",
      contemporary:
        "Souvent confondue avec le fiqh (interpr\u00e9tation humaine)",
    },
    {
      aspect: "\u00c9volution",
      quranic:
        "Principes constants, applications contextuelles (maq\u0101sid)",
      contemporary:
        "Soit fig\u00e9e (litt\u00e9ralisme) soit rejet\u00e9e (s\u00e9cularisme)",
    },
    {
      aspect: "Image",
      quranic:
        "Chemin ouvert, vivifiant, naturel (comme l\u2019eau)",
      contemporary:
        "Ensemble de contraintes et d\u2019interdits",
    },
  ],

  // ── MAQASID ─────────────────────────────────────────────────────────────
  maqasid: [
    {
      arabic: "\u062D\u0650\u0641\u0652\u0638\u064F \u0627\u0644\u062F\u0651\u064A\u0646\u0650",
      transliteration: "Hifz al-D\u012bn",
      french: "Pr\u00e9servation de la Religion",
      description:
        "Prot\u00e9ger le droit fondamental de croire, de pratiquer et de transmettre la foi. La libert\u00e9 de conscience est la premi\u00e8re finalit\u00e9.",
    },
    {
      arabic: "\u062D\u0650\u0641\u0652\u0638\u064F \u0627\u0644\u0646\u064E\u0651\u0641\u0652\u0633\u0650",
      transliteration: "Hifz al-Nafs",
      french: "Pr\u00e9servation de la Vie",
      description:
        "Sacraliser la vie humaine. Toute l\u00e9gislation qui met en danger la vie sans juste cause contredit la shar\u012b\u2019a.",
    },
    {
      arabic: "\u062D\u0650\u0641\u0652\u0638\u064F \u0627\u0644\u0639\u064E\u0642\u0652\u0644\u0650",
      transliteration: "Hifz al-\u2018Aql",
      french: "Pr\u00e9servation de la Raison",
      description:
        "Prot\u00e9ger la facult\u00e9 rationnelle. Le Coran invite constamment \u00e0 r\u00e9fl\u00e9chir (\u00ab afa-l\u0101 ta\u2018qil\u016bn \u00bb \u2014 ne raisonnez-vous pas ?).",
    },
    {
      arabic: "\u062D\u0650\u0641\u0652\u0638\u064F \u0627\u0644\u0646\u064E\u0651\u0633\u0652\u0644\u0650",
      transliteration: "Hifz al-Nasl",
      french: "Pr\u00e9servation de la Descendance",
      description:
        "Prot\u00e9ger la famille, la filiation et les g\u00e9n\u00e9rations futures. La continuit\u00e9 humaine est une finalit\u00e9 sacr\u00e9e.",
    },
    {
      arabic: "\u062D\u0650\u0641\u0652\u0638\u064F \u0627\u0644\u0645\u064E\u0627\u0644\u0650",
      transliteration: "Hifz al-M\u0101l",
      french: "Pr\u00e9servation des Biens",
      description:
        "Prot\u00e9ger la propri\u00e9t\u00e9 l\u00e9gitime et l\u2019\u00e9quit\u00e9 \u00e9conomique. L\u2019usure (rib\u0101), l\u2019accaparement et l\u2019injustice financi\u00e8re sont combattus.",
    },
  ],
  maqasidQuote:
    "\u0627\u0644\u0634\u064E\u0651\u0631\u064A\u0639\u064E\u0629\u064F \u0643\u064F\u0644\u064F\u0651\u0647\u064E\u0627 \u0639\u064E\u062F\u0652\u0644\u064C \u0648\u064E\u0631\u064E\u062D\u0652\u0645\u064E\u0629\u064C \u0648\u064E\u0645\u064E\u0635\u064E\u0627\u0644\u0650\u062D\u064F \u0648\u064E\u062D\u0650\u0643\u0652\u0645\u064E\u0629\u064C\u060C \u0641\u064E\u0643\u064F\u0644\u064F\u0651 \u0645\u064E\u0633\u0652\u0623\u064E\u0644\u064E\u0629\u064D \u062E\u064E\u0631\u064E\u062C\u064E\u062A\u0652 \u0645\u0650\u0646\u064E \u0627\u0644\u0639\u064E\u062F\u0652\u0644\u0650 \u0625\u0644\u064E\u0649 \u0627\u0644\u062C\u064E\u0648\u0652\u0631\u0650\u060C \u0648\u064E\u0645\u0650\u0646\u064E \u0627\u0644\u0631\u064E\u062D\u0652\u0645\u064E\u0629\u0650 \u0625\u0644\u064E\u0649 \u0636\u0650\u062F\u0651\u0650\u0647\u064E\u0627\u060C \u0641\u064E\u0644\u064E\u064A\u0652\u0633\u064E\u062A\u0652 \u0645\u0650\u0646\u064E \u0627\u0644\u0634\u064E\u0651\u0631\u064A\u0639\u064E\u0629\u0650",
  maqasidQuoteSource:
    "Ibn al-Qayyim, I\u2018l\u0101m al-Muwaqqi\u2018\u012bn \u2018an Rabb al-\u2018\u0100lam\u012bn",

  // ── TANZIL ──────────────────────────────────────────────────────────────
  tanzilApplications: [
    {
      dimension: "Individuelle",
      icon: "\u2764\uFE0F",
      description:
        "La shar\u012b\u2019a commence par le c\u0153ur : purifier l\u2019intention (niyya), aligner l\u2019action sur la guidance, chercher l\u2019eau de la guidance quotidiennement par la pri\u00e8re, la lecture du Coran et l\u2019invocation. Le premier chemin \u00e0 emprunter est int\u00e9rieur.",
    },
    {
      dimension: "Intellectuelle",
      icon: "\uD83D\uDCA1",
      description:
        "Distinguer la shar\u012b\u2019a (la voie r\u00e9v\u00e9l\u00e9e) du fiqh (l\u2019effort humain de compr\u00e9hension). Refuser toute fermeture de l\u2019ijtihad. Revenir aux maqasid (finalit\u00e9s) pour \u00e9valuer les interpr\u00e9tations : si une lecture contredit la justice et la mis\u00e9ricorde, elle contredit la shar\u012b\u2019a elle-m\u00eame.",
    },
    {
      dimension: "Communautaire",
      icon: "\uD83C\uDF0D",
      description:
        "Construire des institutions fond\u00e9es sur les maqasid : protection de la vie, de la raison, de la dignit\u00e9, de la propri\u00e9t\u00e9 et de la libert\u00e9 de conscience. La shar\u012b\u2019a n\u2019est pas l\u2019imposition d\u2019un code p\u00e9nal mais la construction d\u2019une soci\u00e9t\u00e9 juste.",
    },
    {
      dimension: "Critique",
      icon: "\u26A0\uFE0F",
      description:
        "R\u00e9sister \u00e0 deux d\u00e9viations sym\u00e9triques : (1) r\u00e9duire la shar\u012b\u2019a \u00e0 un code p\u00e9nal fig\u00e9 (litt\u00e9ralisme) et (2) la rejeter enti\u00e8rement comme incompatible avec la modernit\u00e9 (s\u00e9cularisme). Le Coran trace une troisi\u00e8me voie : la shar\u012b\u2019a est un chemin vivant vers la source.",
    },
  ],

  // ── FOOTER ──────────────────────────────────────────────────────────────
  analysisDate: "25 avril 2026",
  methodologyReference:
    "M\u00e9thodologie Mawrid \u2014 9 sources de tafsir crois\u00e9es, 5 niveaux hi\u00e9rarchiques d\u2019exeg\u00e8se",
};
