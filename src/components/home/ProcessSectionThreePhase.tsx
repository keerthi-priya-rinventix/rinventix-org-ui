import { useNavigate } from 'react-router-dom';
import { Button } from '../Button';
import { ProcessStep } from './ProcessStep';

export function ProcessSectionThreePhase() {
  const navigate = useNavigate();

  return (
    <section className="relative z-10 w-full bg-white py-12 sm:py-16">
      <div className=" px-4 sm:px-6 lg:px-[60px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12 text-start">
          <div className="flex-1">
            <h2 className="font-medium text-2xl sm:text-3xl lg:text-[40px] leading-[105%] tracking-[-0.03em] text-black mb-4">
              Our 3-Phase Process
            </h2>
            <p className="font-normal text-lg leading-6 text-[#2C3A4B]">
              We follow a build-led delivery process that prioritises early results, reduces <br /> risk, and leads to AI systems that can be owned, trusted, and scaled.
            </p>
          </div>
          <div className="flex flex-col items-end gap-3">
            <p className="w-full max-w-[310px] italic font-normal text-lg leading-6 text-[#2C3A4B] text-right">
              We don&apos;t start with long proposals.
              <br />
              We start by proving what works.
            </p>
            <Button text="Book a Strategy Call" onClick={() => navigate('/contact')} />
          </div>
        </div>

        {/* Divider */}
        <div
          className="w-full mb-12"
          style={{
            height: 0,
            borderTop: '1px solid #000000',
            opacity: 0.2,
          }}
        />

        {/* Process steps */}
        <div className="flex flex-col gap-12">
          <ProcessStep
            stepNumber={1}
            title="Feasibility & System Definition"
            description="We understand the workflow, constraints, and goals, then build a focused proof-of-concept to validate feasibility quickly. This replaces weeks of speculative planning with something concrete teams can see and evaluate."
            outcome="Outcome: A working POC, clear system boundaries, and confidence in what should go to production."
            graphicPosition="left"
          />
          <ProcessStep
            stepNumber={2}
            title="Build & Deploy"
            description="Once feasibility is proven, we implement the core AI flow and integrate it into real workflows. Evaluation, logging, and fallback behaviour are built in from day one."
            outcome="Outcome: A deployed AI system that works with real data, real users, and real constraints."
            graphicPosition="right"
          />
          <ProcessStep
            stepNumber={3}
            title="Stabilise & Harden"
            description="We improve the system based on real usage, handle edge cases, add guardrails, and optimise for cost, performance, and reliability. This is where systems move from 'working' to 'dependable'."
            outcome="Outcome: A production-ready AI system built for long-term use and scale."
            graphicPosition="left"
          />
        </div>
      </div>
    </section>
  );
}
