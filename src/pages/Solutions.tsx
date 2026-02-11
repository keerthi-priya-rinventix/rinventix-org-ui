import { SolutionTile } from '../components/SolutionTile';
import solutionHeaderImage from '../assets/solution-header-image.jpg';

const SOLUTIONS = [
  {
    image: solutionHeaderImage,
    title: 'AI Proof-of-Concepts (POC-First Builds)',
    topText: 'AI Proof-of-Concepts (POC-First Builds)',
    features: [
      'Working systems, not slides or mockups',
      'Designed to run on real data and real workflows',
      'Built to reduce turnaround time, cost, or effort immediately',
    ],
    bottomText:
      'Build the foundation for production systems.',
  },
  {
    image: solutionHeaderImage,
    title: 'Data Pipeline & Analytics',
    topText: 'AI Proof-of-Concepts (POC-First Builds)',
    features: [
      'End-to-end data ingestion and transformation',
      'Real-time dashboards and reporting',
      'Scalable architecture for growing data volumes',
    ],
    bottomText:
      'Build the foundation for production systems.',
  },
  {
    image: solutionHeaderImage,
    title: 'Custom ML Models',
    topText: 'AI Proof-of-Concepts (POC-First Builds)',
    features: [
      'Models trained on your domain-specific data',
      'Deployment and monitoring in production',
      'Continuous improvement with feedback loops',
    ],
    bottomText:
      'Build the foundation for production systems.',
  },
  {
    image: solutionHeaderImage,
    title: 'Process Automation',
    topText: 'AI Proof-of-Concepts (POC-First Builds)',
    features: [
      'Automate repetitive workflows and approvals',
      'Integrate with existing tools and systems',
      'Measure impact with clear KPIs',
    ],
    bottomText:
      'Build the foundation for production systems.',
  },
  {
    image: solutionHeaderImage,
    title: 'Intelligent Search & Discovery',
    topText: 'AI Proof-of-Concepts (POC-First Builds)',
    features: [
      'Semantic search across documents and knowledge bases',
      'Recommendations and personalization',
      'Fast, relevant results at scale',
    ],
    bottomText:
      'Build the foundation for production systems.',
  },
  {
    image: solutionHeaderImage,
    title: 'AI Strategy & Roadmap',
    topText: 'AI Proof-of-Concepts (POC-First Builds)',
    features: [
      'Assess readiness and identify high-value use cases',
      'Prioritized roadmap with quick wins',
      'Governance, ethics, and risk frameworks',
    ],
    bottomText:
      'Build the foundation for production systems.',
  },
];

export function Solutions() {
  return (
    <main className="min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="mx-auto py-12">
        <div className="w-fit font-satoshi font-medium text-[14px] leading-[100%] tracking-[0] text-center text-[#0F9DF3] p-[9px] rounded-full bg-[#0F9DF31A] mx-auto">SOLUTION</div>
        <p className="font-satoshi font-medium text-[40px] leading-[105%] tracking-[-0.03em] text-center text-black pb-10 pt-5">
          What We Build
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[50px] max-w-[635px] lg:max-w-[1320px] mx-auto">
          {SOLUTIONS.map((solution, index) => (
            <SolutionTile
              key={index}
              imageSrc={solution.image}
              title={solution.title}
              topText={solution.topText}
              features={solution.features}
              bottomText={solution.bottomText}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
