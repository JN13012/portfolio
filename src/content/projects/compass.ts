import type { Project } from '../types'
import compassImg from '../../assets/Projets/Compass.webp'
import compassSolutionsImg from '../../assets/Projets/Compass_Solutions.webp'
import compassPocImg from '../../assets/Projets/Compass_POC.webp'
import compassCyberImg from '../../assets/Projets/Compass_Cyber.webp'

// Figures from the Compass README and docs/RESULTATS.md (commit e0a7df5), read on 2026-11-09.
export const compass: Project = {
  slug: 'compass',
  tier: 'card',
  status: 'development',
  stage: 'MVP',
  tracks: ['ia', 'blockchain', 'cyber'],
  title: 'Compass',
  period: { start: '2026-11' },
  team: { size: 1 },
  context: 'personal',
  tagline: {
    fr: 'Un assistant IA qui mène une mission de conseil, du premier entretien au livrable.',
  },
  summary: {
    fr: 'Compass assiste le consultant en IA, blockchain et cybersécurité sur une mission en 7 étapes : entretiens, diagnostic, solutions, réglementation, benchmark, POC et livrables. Il s’appuie sur les textes officiels européens, cités mot pour mot, et sur des données publiques sourcées, jamais sur la mémoire du modèle.',
  },
  sections: [
    {
      kind: 'approach',
      title: { fr: 'Rien sans source' },
      points: [
        { label: { fr: 'Citations' }, text: { fr: 'Le modèle désigne un passage ; le texte affiché est relu dans la version officielle.' } },
        { label: { fr: 'Refus' }, text: { fr: 'Hors des textes, il répond que le corpus ne permet pas de conclure.' } },
        { label: { fr: 'Confidentialité' }, text: { fr: 'Une mission confidentielle ne peut appeler qu’un modèle local.' } },
      ],
    },
    {
      kind: 'result',
      title: { fr: 'Résultats' },
      body: { fr: 'Sur 48 questions de test gelées avant mesure, 90 % de réponses justes avec gpt-5.1 et 79 % avec un modèle local de 9B. Le POC de démonstration, un agent de lecture des commandes, est évalué sur 30 cas jamais vus : 100 % de commandes justes, mais un cas ambigu sur six accepté, d’où le verdict « pas encore ».' },
    },
  ],
  images: [
    { src: compassImg, note: { fr: 'Tableau de bord : la mission en 7 étapes et ses garde-fous.' } },
    { src: compassSolutionsImg, note: { fr: 'Solutions d’une mission fictive, de l’IA en quick win à la blockchain quand elle est justifiée.' } },
    { src: compassPocImg, note: { fr: 'Évaluation d’un POC : seuils, mesures, intervalles de confiance et corrections.' } },
    { src: compassCyberImg, note: { fr: 'Diagnostic de maturité cyber selon le NIST CSF 2.0.' } },
  ],
  stack: ['Python', 'FastAPI', 'PostgreSQL', 'pgvector', 'LiteLLM', 'Ollama', 'React', 'TypeScript', 'Docker'],
  links: { github: 'https://github.com/JN13012/compass-consulting' },
  facts: [
    { value: '13', label: { fr: 'textes officiels européens' }, source: 'Compass: README « En bref », corpus/sources.yaml' },
    { value: '90 %', label: { fr: 'de réponses justes en test' }, source: 'Compass: docs/RESULTATS.md, run gpt-5.1 on eval/qa_test.jsonl (43/48)' },
  ],
  scale: { months: 1, tests: 88 },
}
