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
    <main className="min-h-screen">
      {/* HERO */}
      <section className="relative pattern-islamic py-24 md:py-36 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="arabic text-7xl md:text-9xl font-bold gradient-gold mb-6">
            المَوْرِد
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
      <section className="py-20 md:py-28">
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
      <section className="py-20 md:py-28 bg-ink-900/30">
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

      {/* PIPELINE */}
      <section className="py-20 md:py-28">
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
      <section className="py-20 md:py-28 bg-ink-900/30">
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
      <section className="py-20 md:py-28">
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
      <section className="py-20 md:py-28 bg-ink-900/30">
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
      <section className="py-20 md:py-28">
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
          <p className="arabic text-3xl text-gold-700 mb-3">المَوْرِد</p>
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
