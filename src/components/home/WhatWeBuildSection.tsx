import { WhatWeBuildTile } from "./WhatWeBuildTile";

const solutions = [
  {
    heading: 'AI Proof-of-Concepts (POC-First Builds)',
    subheading: 'Fast, production-oriented POCs that create trust by showing results.',
    features: [
      'Working systems, not slides or mockups',
      'Designed to run on real data and real workflows',
      'Built to reduce turnaround time, cost, or effort immediately',
    ],
    conclusion: 'Build the foundation for production systems.',
  },
  {
    heading: 'AI Product & Feature Builds',
    subheading: 'Launch-ready AI systems that integrate cleanly into real products.',
    features: [
      'Production-grade AI features (not plugins or wrappers)',
      'Designed for reliability, iteration, and scale',
      'Clear ownership, evaluation, and cost controls from day one',
    ],
    conclusion: 'Ideal for startups and product teams moving from idea -> real users.',
  },
  {
    heading: 'Enterprise AI Systems',
    subheading: 'AI systems designed to survive audits, edge cases, and long-term usage.',
    features: [
      'Explainable, auditable, and traceable by design',
      'Human-in-the-loop where it matters',
      'Built to operate inside legacy, regulated, and custom environments',
    ],
    conclusion: 'Best fit for enterprise leaders driving AI adoption across real operations.',
  },
  {
    heading: 'CX & Operations Intelligence',
    subheading: 'Assistive AI that improves outcomes without losing control.',
    features: [
      'Call summaries, QA scoring, compliance and risk signals',
      'Consistent quality across high-volume workflows',
      'Supervisor-ready insights backed by evidence',
    ],
    conclusion: 'Designed to improve performance without replacing human judgment.',
  },
  {
    heading: 'Evaluation, Guardrails & Governance',
    subheading: 'The layer that turns AI from fragile to dependable.',
    features: [
      'Evaluation tied to real business workflows',
      'Guardrails, fallbacks, and safe modes',
      'Monitoring for quality, cost, latency and drift',
    ],
    conclusion: 'This is what makes AI usable beyond the pilot phase.',
  },
  {
    heading: 'System Stabilisation & Recovery',
    subheading: 'We fix AI systems that break under real usage.',
    features: [
      'Resolve inconsistency, hallucinations, and edge case failures',
      'Add observability, logging, and ownership',
      'Prepare systems for real adoption and long-term scale',
    ],
    conclusion: 'For teams whose AI works in theory but fails in practice.',
  },
];

export function WhatWeBuildSection() {
  return (
    solutions.map((solution, index) => (
      <WhatWeBuildTile
        key={index}
        title={solution.heading}
        topText={solution.subheading}
        features={solution.features}
        bottomText={solution.conclusion}
      />
    ))
  );
}
