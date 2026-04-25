export interface Root {
  letters: [string, string, string];
  transliteration: string;
  coreMeaning: string;
  semanticField: string;
  preIslamicMeaning: string;
  quranicShift: string;
  semiticCognates: SemiticCognate[];
  derivatives: QuranicDerivative[];
  frequency: number;
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

export interface Morphology {
  type: string;
  form: string;
  pattern: string;
  patternArabic: string;
  patternName: string;
  grammaticalCase: string;
  details: string;
}

export interface Rhetoric {
  maani: RhetoricalPoint[];
  bayan: RhetoricalPoint[];
  badi: RhetoricalPoint[];
}

export interface RhetoricalPoint {
  device: string;
  arabic: string;
  explanation: string;
}

export interface TafsirSource {
  id: string;
  scholar: string;
  dates: string;
  work: string;
  approach: string;
  madhhab: string;
  category: "mathur" | "juridique" | "linguistique" | "dogmatique" | "synthese" | "quran-par-quran";
  commentary: string;
}

export interface Translation {
  translator: string;
  year: number;
  language: string;
  text: string;
  note: string;
}

export interface CertaintyLevel {
  level: "qati" | "rajih" | "muhtamal" | "daif" | "zanni";
  arabic: string;
  meaning: string;
}

export interface IntraQuranicLink {
  reference: string;
  arabic: string;
  relevance: string;
}

export interface WordAnalysis {
  slug: string;
  arabic: string;
  transliteration: string;
  literal: string;
  primaryVerse: string;
  surah: string;
  surahArabic: string;
  classification: string;
  period: string;
  verseArabic: string;
  root: Root;
  morphology: Morphology;
  translations: Translation[];
  rhetoric: Rhetoric;
  tafsirSources: TafsirSource[];
  spiritualMeaning: string;
  modernMeaning: string;
  connections: IntraQuranicLink[];
  tanzil: TanzilPoint[];
  certainty: CertaintyAssessment[];
}

export interface TanzilPoint {
  dimension: string;
  application: string;
}

export interface CertaintyAssessment {
  claim: string;
  level: CertaintyLevel["level"];
}

export interface MethodologyLevel {
  number: number;
  title: string;
  titleArabic: string;
  description: string;
  action: string;
}
