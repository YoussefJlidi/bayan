import Sidebar from "@/components/Sidebar";

const hierarchyLevels = [
  {
    number: 1,
    title: "Tafsir al-Quran bi'l-Quran",
    arabic: "تفسير القرآن بالقرآن",
    subtitle: "Le Coran explique le Coran",
    description:
      "Le Coran est son propre meilleur interprete. Un verset mujmal (general) a un endroit peut etre mufassar (detaille) a un autre.",
  },
  {
    number: 2,
    title: "Tafsir bi'l-Hadith",
    arabic: "تفسير بالحديث",
    subtitle: "Explication prophetique",
    description:
      "Le Prophete est l'interprete autorise du Coran (16:44). Inclut ses explications explicites, ses actes et ses approbations tacites.",
  },
  {
    number: 3,
    title: "Tafsir bi'l-Athar",
    arabic: "تفسير بالأثر",
    subtitle: "Compagnons & Successeurs",
    description:
      "Ibn 'Abbas, Ibn Mas'ud, 'Ali, Ubayy ibn Ka'b, Mujahid, Sa'id ibn Jubayr, Qatada, al-Hasan al-Basri.",
  },
  {
    number: 4,
    title: "Tafsir bi'l-Lugha",
    arabic: "تفسير باللغة",
    subtitle: "Analyse linguistique",
    description:
      "Le Coran a ete revele en arabe clair (12:2, 43:3). Sarf, nahw, balagha, gharib al-Quran.",
  },
  {
    number: 5,
    title: "Tafsir bi'l-Ra'y",
    arabic: "تفسير بالرأي",
    subtitle: "Interpretation raisonnee",
    description:
      "Mahmud (louable, fonde sur la maitrise) vs Madhmum (blamable, sans base savante).",
  },
] as const;

const sources = [
  { number: 1, name: "al-Tabari", dates: "839-923", work: "Jami' al-Bayan", approach: "Ma'thur exhaustif", madhhab: "Mujtahid", category: "mathur" },
  { number: 2, name: "Ibn Kathir", dates: "1301-1373", work: "Tafsir al-Quran al-'Azim", approach: "Quran par Quran + hadith", madhhab: "Shafi'i", category: "mathur" },
  { number: 3, name: "al-Qurtubi", dates: "1214-1273", work: "al-Jami' li-Ahkam", approach: "Juridique (40 avis/verset)", madhhab: "Maliki", category: "juridique" },
  { number: 4, name: "Ibn 'Atiyya", dates: "1088-1147", work: "al-Muharrar al-Wajiz", approach: "Linguistique + avis", madhhab: "Maliki andalou", category: "linguistique" },
  { number: 5, name: "Ibn al-Qayyim", dates: "1292-1350", work: "al-Tafsir al-Qayyim", approach: "Dogme + tazkiya", madhhab: "Hanbali", category: "dogmatique" },
  { number: 6, name: "al-Shawkani", dates: "1759-1839", work: "Fath al-Qadir", approach: "Resume juridique", madhhab: "Shafi'i", category: "juridique" },
  { number: 7, name: "Ibn 'Ashur", dates: "1879-1973", work: "al-Tahrir wa'l-Tanwir", approach: "Linguistique + maqasid", madhhab: "Maliki Zaytuna", category: "linguistique" },
  { number: 8, name: "al-Sabuni", dates: "1930-2021", work: "Safwat al-Tafasir", approach: "Synthese des avis", madhhab: "Hanafi", category: "synthese" },
  { number: 9, name: "al-Shinqiti", dates: "1905-1973", work: "Adwa' al-Bayan", approach: "Quran par Quran + usul", madhhab: "Maliki", category: "quran-par-quran" },
] as const;

const pipelineSteps = [
  { id: "root", label: "Racine", arabic: "جذر", description: "Trilatere" },
  { id: "morph", label: "Morphologie", arabic: "صرف", description: "Sarf" },
  { id: "syntax", label: "Syntaxe", arabic: "نحو", description: "Nahw" },
  { id: "etym", label: "Etymologie", arabic: "اشتقاق", description: "Semitique" },
  { id: "deriv", label: "Derives", arabic: "مشتقات", description: "Coraniques" },
  { id: "rhet", label: "Rhetorique", arabic: "بلاغة", description: "3 sciences" },
  { id: "tafsir", label: "9 Tafsirs", arabic: "تفسير", description: "Croises" },
  { id: "tanzil", label: "Tanzil", arabic: "تنزيل", description: "Application" },
] as const;

const certaintyScale = [
  { level: "Qat'i", arabic: "قطعي", meaning: "Definitif", color: "bg-emerald-500", width: "w-full" },
  { level: "Rajih", arabic: "راجح", meaning: "Preponderant", color: "bg-emerald-600", width: "w-4/5" },
  { level: "Muhtamal", arabic: "محتمل", meaning: "Possible", color: "bg-amber-500", width: "w-3/5" },
  { level: "Da'if", arabic: "ضعيف", meaning: "Faible", color: "bg-orange-500", width: "w-2/5" },
  { level: "Zanni", arabic: "ظني", meaning: "Speculatif", color: "bg-red-500", width: "w-1/5" },
] as const;

const categoryColors: Record<string, string> = {
  mathur: "bg-emerald-900/50 text-emerald-300 border-emerald-700/50",
  juridique: "bg-blue-900/50 text-blue-300 border-blue-700/50",
  linguistique: "bg-violet-900/50 text-violet-300 border-violet-700/50",
  dogmatique: "bg-amber-900/50 text-amber-300 border-amber-700/50",
  synthese: "bg-rose-900/50 text-rose-300 border-rose-700/50",
  "quran-par-quran": "bg-cyan-900/50 text-cyan-300 border-cyan-700/50",
};

const balaghaSciences = [
  {
    name: "'Ilm al-Ma'ani",
    arabic: "علم المعاني",
    subject: "Semantique syntaxique",
    color: "border-emerald-600",
    tools: ["Khabar/Insha'", "Taqdim/Ta'khir", "Qasr", "Fasl/Wasl", "Ijaz/Itnab", "Ta'rif/Tankir"],
  },
  {
    name: "'Ilm al-Bayan",
    arabic: "علم البيان",
    subject: "Expression figurative",
    color: "border-violet-600",
    tools: ["Tashbih", "Isti'ara", "Majaz", "Kinaya"],
  },
  {
    name: "'Ilm al-Badi'",
    arabic: "علم البديع",
    subject: "Ornementation",
    color: "border-amber-600",
    tools: ["Tibaq", "Jinas", "Saj'", "Iltifat", "Tawriya"],
  },
] as const;

export default function HomePage() {
  return (
    <main className="min-h-screen scroll-smooth">
      <Sidebar />

      {/* HERO */}
      <section id="hero" className="relative pattern-islamic py-24 md:py-36 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="arabic text-7xl md:text-9xl font-bold gradient-gold mb-6">
            بَيَان
          </h1>
          <p className="font-heading text-2xl md:text-3xl text-ink-200 mb-4">
            Moteur d&apos;Exegese Coranique
          </p>
          <p className="text-ink-400 text-lg max-w-2xl mx-auto mb-10">
            9 sources de tafsir croisees. Analyse linguistique complete.
            Morphologie, rhetorique arabe, etymologie semitique.
            Du sens originel au tanzil.
          </p>
          <div className="h-px w-48 mx-auto gradient-border border-t" />
        </div>
      </section>

      {/* HIERARCHY */}
      <section id="hierarchie" className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-heading text-3xl md:text-4xl text-ink-50 mb-3">
            Hierarchie des sources
          </h2>
          <p className="text-ink-400 mb-14 max-w-2xl">
            Tout tafsir respecte cette hierarchie stricte.
            Un niveau inferieur ne peut jamais contredire un niveau superieur.
          </p>

          <div className="relative">
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px hierarchy-line" />

            <div className="space-y-8">
              {hierarchyLevels.map((level) => (
                <div key={level.number} className="relative pl-16 md:pl-20">
                  <div className="absolute left-2 md:left-4 top-1 w-8 h-8 rounded-full bg-ink-900 border border-gold-700 flex items-center justify-center text-gold-400 font-bold text-sm">
                    {level.number}
                  </div>

                  <div className="bg-ink-900/50 border border-ink-800 rounded-xl p-6 card-glow transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                      <h3 className="text-gold-400 font-semibold text-lg">
                        {level.title}
                      </h3>
                      <span className="arabic text-gold-600 text-xl">
                        {level.arabic}
                      </span>
                    </div>
                    <p className="text-ink-200 font-medium mb-1">
                      {level.subtitle}
                    </p>
                    <p className="text-ink-400 text-sm">{level.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9 SOURCES */}
      <section id="sources" className="py-20 md:py-28 bg-ink-900/30">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-heading text-3xl md:text-4xl text-ink-50 mb-3">
            Les 9 sources
          </h2>
          <p className="text-ink-400 mb-14 max-w-2xl">
            Chaque analyse croise systematiquement ces 9 mufassirun,
            regroupes par approche methodologique.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {sources.map((source) => (
              <div
                key={source.number}
                className="bg-ink-950 border border-ink-800 rounded-xl p-6 card-glow transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className="text-ink-500 text-sm font-mono">
                      #{source.number}
                    </span>
                    <h3 className="text-gold-400 font-bold text-lg">
                      {source.name}
                    </h3>
                  </div>
                  <span className="text-ink-500 text-xs">{source.dates}</span>
                </div>
                <p className="text-ink-300 italic text-sm mb-3">
                  {source.work}
                </p>
                <p className="text-ink-400 text-sm mb-4">{source.approach}</p>
                <div className="flex items-center gap-2">
                  <span
                    className={`text-xs px-2.5 py-1 rounded-full border ${categoryColors[source.category]}`}
                  >
                    {source.category}
                  </span>
                  <span className="text-ink-500 text-xs">
                    {source.madhhab}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IBN 'ASHUR — DEEP DIVE */}
      <section id="ibn-ashur" className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end gap-4 mb-4">
            <h2 className="font-heading text-3xl md:text-4xl text-ink-50">
              Ibn &apos;Ashur
            </h2>
            <p className="arabic text-3xl text-gold-600">
              محمّد الطاهر بن عاشور
            </p>
          </div>
          <p className="text-ink-400 mb-14 max-w-3xl">
            1879–1973 &middot; Tunis &middot; Universite al-Zaytuna &middot;
            L&apos;exegete le plus important du 20e siecle. Son tafsir
            al-Tahrir wa&apos;l-Tanwir est considere comme le dernier grand
            tafsir classique et le premier tafsir moderne.
          </p>

          {/* Bio card */}
          <div className="bg-ink-900/50 border border-ink-800 rounded-xl p-8 mb-10 card-glow">
            <h3 className="text-gold-400 font-semibold text-lg mb-4">
              Lignee savante
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div>
                <p className="text-ink-200 mb-2">
                  Issu d&apos;une famille de savants andalous emigree en Tunisie
                  au 17e siecle. Son grand-pere et son pere etaient deja des
                  &apos;ulama de la Zaytuna.
                </p>
                <p className="text-ink-200 mb-2">
                  Nomme <span className="text-gold-400">Cheikh al-Islam</span>{" "}
                  de Tunisie (plus haute autorite religieuse) — poste qu&apos;il
                  occupe de 1932 a sa mort en 1973.
                </p>
                <p className="text-ink-200">
                  Recteur de l&apos;Universite al-Zaytuna, l&apos;une des plus
                  anciennes universites du monde islamique (fondee en 737).
                </p>
              </div>
              <div>
                <p className="text-ink-300 font-medium mb-2">Oeuvres majeures :</p>
                <ul className="space-y-1.5 text-ink-400">
                  <li className="flex gap-2">
                    <span className="text-gold-600 shrink-0">&bull;</span>
                    <span>
                      <span className="text-ink-200 italic">al-Tahrir wa&apos;l-Tanwir</span>{" "}
                      — 30 tomes, 39 ans de redaction (1956–1970)
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-gold-600 shrink-0">&bull;</span>
                    <span>
                      <span className="text-ink-200 italic">Maqasid al-Shari&apos;a al-Islamiyya</span>{" "}
                      — refondation de la theorie des finalites
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-gold-600 shrink-0">&bull;</span>
                    <span>
                      <span className="text-ink-200 italic">Usul al-Nizam al-Ijtima&apos;i fi&apos;l-Islam</span>{" "}
                      — fondements du systeme social
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-gold-600 shrink-0">&bull;</span>
                    <span>
                      <span className="text-ink-200 italic">Alaisa al-Subh bi-Qarib</span>{" "}
                      — reforme de l&apos;enseignement islamique
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* al-Tahrir wa'l-Tanwir */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1 bg-ink-800" />
              <h3 className="arabic text-2xl text-gold-500 shrink-0">
                التحرير والتنوير
              </h3>
              <div className="h-px flex-1 bg-ink-800" />
            </div>
            <p className="text-ink-200 text-center text-lg font-heading mb-8">
              al-Tahrir wa&apos;l-Tanwir — Liberation de l&apos;esprit et Illumination du sens
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {[
                { value: "30", label: "tomes", arabic: "جزء" },
                { value: "39", label: "ans de redaction", arabic: "سنة" },
                { value: "10", label: "introductions", arabic: "مقدّمة" },
                { value: "114", label: "sourates couvertes", arabic: "سورة" },
              ].map((stat) => (
                <div key={stat.label} className="bg-ink-900/50 border border-ink-800 rounded-xl p-5 text-center">
                  <p className="text-gold-400 text-3xl font-bold mb-1">{stat.value}</p>
                  <p className="text-ink-300 text-sm">{stat.label}</p>
                  <p className="arabic text-ink-600 text-xs">{stat.arabic}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Les 10 introductions */}
          <div className="mb-10">
            <h3 className="text-gold-400 font-semibold text-lg mb-2">
              Les 10 introductions methodologiques
            </h3>
            <p className="text-ink-400 text-sm mb-6 max-w-3xl">
              Avant d&apos;entrer dans le tafsir verset par verset, Ibn &apos;Ashur
              redige 10 introductions qui constituent a elles seules un traite
              de methodologie exegetique sans precedent.
            </p>

            <div className="space-y-3">
              {[
                {
                  num: 1,
                  title: "Le tafsir et les conditions du mufassir",
                  detail: "Qui a le droit d'interpreter le Coran ? Quelles sciences faut-il maitriser ? Il exige la connaissance de l'arabe, du hadith, des usul, de la balagha, ET une independance intellectuelle (ijtihad).",
                },
                {
                  num: 2,
                  title: "La validite du tafsir bi'l-ra'y",
                  detail: "Defense argumentee de l'interpretation raisonnee, contre ceux qui voudraient la limiter au seul ma'thur. L'intelligence humaine est un outil que Dieu a donne pour comprendre Sa Parole.",
                },
                {
                  num: 3,
                  title: "L'authenticite du Coran et l'histoire du mushaf",
                  detail: "Comment le texte a ete preserve : memorisation, ecriture, compilation d'Abu Bakr, edition de 'Uthman. Les qira'at (lectures) et leur rapport au sens.",
                },
                {
                  num: 4,
                  title: "La langue arabe et le i'jaz (inimitabilite)",
                  detail: "Pourquoi le Coran est inimitable : ni prose ni poesie, un genre unique. Analyse des tentatives de mu'arada (imitation) et leur echec. L'i'jaz est a la fois linguistique, legislatif et informatif.",
                },
                {
                  num: 5,
                  title: "Les asbab al-nuzul (contextes de revelation)",
                  detail: "Methodologie critique : comment distinguer les vrais asbab des recits faibles. Regle cle : al-'ibra bi-'umum al-lafz la bi-khusus al-sabab — la lecon vient de la generalite du texte, pas de la specificite de l'occasion.",
                },
                {
                  num: 6,
                  title: "Les qira'at (variantes de lecture)",
                  detail: "Classification des lectures canoniques et leur impact sur le sens. Comment les divergences de qira'at enrichissent le tafsir au lieu de le compliquer.",
                },
                {
                  num: 7,
                  title: "Le recit coranique (al-qasas)",
                  detail: "Finalite des recits : ni historiques ni divertissants — pedagogiques. Le Coran selectionne, condense, repete avec variation. Chaque repetition ajoute un angle nouveau.",
                },
                {
                  num: 8,
                  title: "Les noms des sourates et leur ordre",
                  detail: "Analyse de la logique de l'agencement du mushaf. Les liens entre sourates voisines (munasabat). Pourquoi cet ordre n'est pas arbitraire.",
                },
                {
                  num: 9,
                  title: "Les sens du Coran : explicites et implicites",
                  detail: "Niveaux de sens : zahir (apparent), batin (interieur), hadd (limite), matla' (point d'elevation). Le Coran parle a toutes les epoques precisement parce qu'il a des couches de sens.",
                },
                {
                  num: 10,
                  title: "Les maqasid du Coran",
                  detail: "Innovation majeure : identifier les FINALITES globales du Coran (au-dela des maqasid de la shari'a). Il en liste 8 : reforme des croyances, purification de l'ethique, legislation, politique de la communaute, recits, enseignement, exhortation, i'jaz.",
                },
              ].map((intro) => (
                <div
                  key={intro.num}
                  className="bg-ink-900/50 border border-ink-800 rounded-xl p-5 card-glow transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-gold-600 font-mono text-sm mt-1 shrink-0">
                      {String(intro.num).padStart(2, "0")}
                    </span>
                    <div>
                      <h4 className="text-ink-100 font-semibold mb-1">
                        {intro.title}
                      </h4>
                      <p className="text-ink-400 text-sm">{intro.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Methode linguistique */}
          <div className="mb-10">
            <h3 className="text-gold-400 font-semibold text-lg mb-6">
              Methode linguistique unique
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="bg-ink-950 border-l-4 border-violet-600 rounded-xl p-6">
                <h4 className="text-ink-100 font-semibold mb-2">
                  Balagha systematique
                </h4>
                <p className="text-ink-400 text-sm">
                  Chaque verset est analyse pour ses figures rhetoriques.
                  Ibn &apos;Ashur ne se contente pas de nommer le procede —
                  il explique <span className="text-violet-400">pourquoi</span>{" "}
                  cette figure a ete choisie ici et pas une autre, et quel
                  effet de sens elle produit que rien d&apos;autre ne pourrait
                  produire.
                </p>
              </div>
              <div className="bg-ink-950 border-l-4 border-emerald-600 rounded-xl p-6">
                <h4 className="text-ink-100 font-semibold mb-2">
                  Nahw fonctionnel
                </h4>
                <p className="text-ink-400 text-sm">
                  La syntaxe n&apos;est pas decorative. Chaque choix
                  grammatical — un <span className="text-emerald-400">taqdim</span>{" "}
                  (anteposition), un <span className="text-emerald-400">hadhf</span>{" "}
                  (ellipse), un <span className="text-emerald-400">iltifat</span>{" "}
                  (changement de personne) — porte un sens que la traduction
                  ne peut rendre. Ibn &apos;Ashur le debusque methodiquement.
                </p>
              </div>
              <div className="bg-ink-950 border-l-4 border-amber-600 rounded-xl p-6">
                <h4 className="text-ink-100 font-semibold mb-2">
                  Vocabulaire compare
                </h4>
                <p className="text-ink-400 text-sm">
                  Quand le Coran utilise un mot plutot qu&apos;un synonyme,
                  Ibn &apos;Ashur explique la <span className="text-amber-400">nuance exacte</span>.
                  Pourquoi <span className="italic">khashya</span> ici et pas{" "}
                  <span className="italic">khawf</span> ? Pourquoi{" "}
                  <span className="italic">qalb</span> et pas{" "}
                  <span className="italic">fu&apos;ad</span> ? Chaque
                  choix lexical est motive.
                </p>
              </div>
              <div className="bg-ink-950 border-l-4 border-cyan-600 rounded-xl p-6">
                <h4 className="text-ink-100 font-semibold mb-2">
                  Nazm (coherence textuelle)
                </h4>
                <p className="text-ink-400 text-sm">
                  Chaque sourate est traitee comme un tout coherent.
                  Ibn &apos;Ashur identifie le <span className="text-cyan-400">gharad</span>{" "}
                  (propos central) de chaque sourate des son introduction,
                  puis montre comment chaque verset s&apos;y rattache. Pas de
                  verset isole — tout fait systeme.
                </p>
              </div>
            </div>
          </div>

          {/* Maqasid approach */}
          <div className="mb-10">
            <h3 className="text-gold-400 font-semibold text-lg mb-6">
              L&apos;approche maqasidienne
            </h3>
            <div className="bg-ink-900/50 border border-gold-800/30 rounded-xl p-8">
              <p className="text-ink-200 mb-4">
                Ibn &apos;Ashur est le premier exegete a integrer systematiquement
                la theorie des <span className="text-gold-400">maqasid</span>{" "}
                (finalites) dans le tafsir. Avant lui, les maqasid etaient un
                outil de fiqh (droit). Il en fait un outil d&apos;exegese.
              </p>
              <p className="text-ink-200 mb-6">
                Sa question permanente : <span className="text-gold-400 italic">
                &quot;Quelle est la finalite de ce verset pour la communaute
                humaine dans sa globalite ?&quot;</span> — pas juste &quot;que dit ce
                verset ?&quot; mais &quot;pourquoi Dieu l&apos;a-t-Il dit ?&quot;
              </p>

              <div className="border-t border-ink-800 pt-6">
                <p className="text-ink-300 font-medium mb-3">
                  Les 8 maqasid du Coran selon Ibn &apos;Ashur :
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {[
                    { num: 1, text: "Islah al-i'tiqad — Reformer les croyances (tawhid)", color: "text-emerald-400" },
                    { num: 2, text: "Tahdhib al-akhlaq — Purifier l'ethique", color: "text-violet-400" },
                    { num: 3, text: "al-Tashri' — Legiferer pour l'interet general", color: "text-blue-400" },
                    { num: 4, text: "Siyasat al-umma — Gouvernance de la communaute", color: "text-cyan-400" },
                    { num: 5, text: "al-Qasas — Recits des nations passees (lecons)", color: "text-amber-400" },
                    { num: 6, text: "al-Ta'lim — Enseigner ce que l'homme ignore", color: "text-rose-400" },
                    { num: 7, text: "al-Maw'iza — Exhorter, avertir, rappeler", color: "text-orange-400" },
                    { num: 8, text: "al-I'jaz — Prouver l'origine divine du texte", color: "text-gold-400" },
                  ].map((m) => (
                    <div key={m.num} className="flex gap-2 items-start">
                      <span className={`font-mono text-xs mt-0.5 shrink-0 ${m.color}`}>
                        {m.num}
                      </span>
                      <p className="text-ink-300 text-sm">{m.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Independence */}
          <div className="mb-10">
            <h3 className="text-gold-400 font-semibold text-lg mb-6">
              Independence intellectuelle
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="bg-ink-900/50 border border-ink-800 rounded-xl p-6">
                <p className="text-gold-500 text-2xl mb-2">Anti-taqlid</p>
                <p className="text-ink-400 text-sm">
                  Maliki de formation, il refuse de suivre un madhhab
                  aveuglement. Quand la preuve linguistique ou logique
                  contredit l&apos;avis de son ecole, il le dit explicitement
                  et suit la preuve.
                </p>
              </div>
              <div className="bg-ink-900/50 border border-ink-800 rounded-xl p-6">
                <p className="text-gold-500 text-2xl mb-2">Critique</p>
                <p className="text-ink-400 text-sm">
                  Il corrige al-Zamakhshari (mu&apos;tazilite) sur le dogme,
                  al-Razi sur la philosophie, al-Qurtubi sur certains avis
                  juridiques. Respectueux mais ferme. Jamais d&apos;autorite
                  sans argument.
                </p>
              </div>
              <div className="bg-ink-900/50 border border-ink-800 rounded-xl p-6">
                <p className="text-gold-500 text-2xl mb-2">Moderne</p>
                <p className="text-ink-400 text-sm">
                  Il aborde des questions que les anciens n&apos;ont pas traitees :
                  droits de la femme, libertes civiles, rapport science/foi,
                  reforme de l&apos;enseignement. Le tout ancre dans le texte
                  coranique, jamais en rupture.
                </p>
              </div>
            </div>
          </div>

          {/* Citations */}
          <div>
            <h3 className="text-gold-400 font-semibold text-lg mb-6">
              Citations fondatrices
            </h3>
            <div className="space-y-4">
              {[
                {
                  quote: "Le tafsir le plus noble est celui qui s'attache aux significations linguistiques et rhetoriques, car c'est par elles que le Coran a defie les Arabes, et c'est par elles qu'il continue de defier l'humanite.",
                  source: "Muqaddima 1",
                },
                {
                  quote: "Le mufassir doit avoir l'audace de dire ce que le verset lui revele, meme si aucun predecesseur ne l'a dit avant lui, a condition que sa lecture soit fondee sur les regles de la langue et les principes de l'exegese.",
                  source: "Muqaddima 2",
                },
                {
                  quote: "Les finalites du Coran ne se limitent pas aux cinq necessites (din, nafs, 'aql, nasl, mal). Le Coran vise la reforme de l'humanite entiere, dans toutes les dimensions de son existence.",
                  source: "Muqaddima 10",
                },
                {
                  quote: "Chaque sourate a un propos central (gharad) autour duquel tournent tous ses versets, comme les planetes tournent autour du soleil. Le mufassir qui ne l'identifie pas perd le fil du texte.",
                  source: "Methode du nazm",
                },
              ].map((citation, i) => (
                <blockquote
                  key={i}
                  className="bg-ink-950 border-l-4 border-gold-700 rounded-r-xl p-6"
                >
                  <p className="text-ink-200 italic text-sm mb-2">
                    &quot;{citation.quote}&quot;
                  </p>
                  <footer className="text-gold-600 text-xs">
                    — Ibn &apos;Ashur, {citation.source}
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PIPELINE */}
      <section id="pipeline" className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-heading text-3xl md:text-4xl text-ink-50 mb-3">
            Pipeline d&apos;analyse
          </h2>
          <p className="text-ink-400 mb-14 max-w-2xl">
            Chaque mot ou verset passe par ces 8 etapes, de la racine
            trilatere jusqu&apos;a l&apos;application dans le quotidien.
          </p>

          <div className="flex flex-wrap justify-center gap-3 md:gap-1">
            {pipelineSteps.map((step, i) => (
              <div key={step.id} className="flex items-center gap-1 md:gap-2">
                <div className="bg-ink-900 border border-ink-700 rounded-xl px-5 py-4 text-center min-w-[100px] card-glow transition-all duration-300 hover:border-gold-700/50">
                  <p className="arabic text-gold-500 text-lg mb-1">
                    {step.arabic}
                  </p>
                  <p className="text-ink-100 font-semibold text-sm">
                    {step.label}
                  </p>
                  <p className="text-ink-500 text-xs">{step.description}</p>
                </div>
                {i < pipelineSteps.length - 1 && (
                  <span className="text-gold-700 text-xl hidden md:block">
                    &rarr;
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BALAGHA */}
      <section id="balagha" className="py-20 md:py-28 bg-ink-900/30">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-heading text-3xl md:text-4xl text-ink-50 mb-3">
            Les 3 sciences de la rhetorique
          </h2>
          <p className="text-ink-400 mb-14 max-w-2xl">
            La balagha arabe — systeme rhetorique sans equivalent occidental —
            decortiquee a chaque analyse.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {balaghaSciences.map((science) => (
              <div
                key={science.name}
                className={`bg-ink-950 border-l-4 ${science.color} rounded-xl p-6`}
              >
                <p className="arabic text-2xl text-ink-200 mb-1">
                  {science.arabic}
                </p>
                <h3 className="text-ink-50 font-bold mb-1">{science.name}</h3>
                <p className="text-ink-400 text-sm mb-4">{science.subject}</p>
                <div className="flex flex-wrap gap-1.5">
                  {science.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-xs bg-ink-800 text-ink-300 px-2 py-1 rounded"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTAINTY */}
      <section id="certitude" className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-heading text-3xl md:text-4xl text-ink-50 mb-3">
            Echelle de certitude
          </h2>
          <p className="text-ink-400 mb-14 max-w-2xl">
            Chaque affirmation est classee. Toute affirmation sans
            classification est consideree incomplete.
          </p>

          <div className="space-y-4">
            {certaintyScale.map((level) => (
              <div key={level.level} className="flex items-center gap-4">
                <div className="w-24 text-right shrink-0">
                  <span className="text-ink-50 font-semibold text-sm">
                    {level.level}
                  </span>
                </div>
                <div className="arabic text-gold-600 w-12 text-center shrink-0">
                  {level.arabic}
                </div>
                <div className="flex-1">
                  <div className={`h-3 rounded-full ${level.color} ${level.width}`} />
                </div>
                <div className="w-28 text-ink-400 text-sm shrink-0">
                  {level.meaning}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="processus" className="py-20 md:py-28 bg-ink-900/30">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-heading text-3xl md:text-4xl text-ink-50 mb-12">
            Processus de consultation
          </h2>

          <div className="bg-ink-950 border border-ink-800 rounded-xl p-8 font-mono text-sm space-y-2">
            <p className="text-gold-400">
              9 tafsirs{" "}
              <span className="text-ink-500">(lecture mot a mot)</span>
            </p>
            <p className="text-emerald-400 pl-4">
              &rarr; regles linguistiques{" "}
              <span className="text-ink-500">(nahw, sarf, balagha)</span>
            </p>
            <p className="text-violet-400 pl-8">
              &rarr; regles d&apos;exegese{" "}
              <span className="text-ink-500">(usul al-tafsir)</span>
            </p>
            <p className="text-blue-400 pl-12">
              &rarr; fondements juridiques{" "}
              <span className="text-ink-500">(usul al-fiqh)</span>
            </p>
            <p className="text-amber-400 pl-16">
              &rarr; jurisprudence{" "}
              <span className="text-ink-500">(fiqh)</span>
            </p>
            <p className="text-rose-400 pl-20">
              &rarr; tanzil{" "}
              <span className="text-ink-500">
                (التنزيل — lier le sens au quotidien)
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section id="principes" className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-heading text-3xl md:text-4xl text-ink-50 mb-12">
            7 principes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Toujours citer les sources — jamais d'affirmation sans attribution",
              "Distinguer consensus et divergence — quand les savants divergent, le mentionner",
              "Respecter la hierarchie — ne jamais contredire un niveau superieur par un inferieur",
              "Prudence sur l'i'jaz 'ilmi — ne pas lier le Coran a des theories changeantes",
              "Multiplier les traductions — une seule est toujours reductrice",
              "Contextualiser — mecquois et medinois different en style, themes et destinataires",
              "L'arabe prime — toute analyse part du texte arabe, jamais d'une traduction",
            ].map((principle, i) => (
              <div
                key={i}
                className="flex gap-3 bg-ink-900/50 border border-ink-800 rounded-lg p-4"
              >
                <span className="text-gold-600 font-mono text-sm mt-0.5 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-ink-300 text-sm">{principle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 border-t border-ink-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="arabic text-3xl text-gold-700 mb-3">بَيَان</p>
          <p className="text-ink-400 text-sm mb-2">
            9 sources &middot; 5 niveaux &middot; 3 sciences rhetoriques &middot; 8 etapes
          </p>
          <p className="text-ink-600 text-xs">
            Methodologie basee sur l&apos;enseignement du tafsir contemporain
          </p>
        </div>
      </footer>
    </main>
  );
}
