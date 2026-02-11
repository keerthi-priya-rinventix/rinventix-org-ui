import { useState } from 'react';
import backgroundImage from '../assets/adobestock-1058921822-1--1.png';
import casestudy1 from '../assets/Casestudy1.jpg';
import casestudy2 from '../assets/Casestudy2.jpg';
import casestudy3 from '../assets/Casestudy3.jpg';
import {
  HeroSection,
  ToggleSection,
  StatsSection,
  WhatWeBuildSection,
  WhyThisWorksSection,
  ProcessSectionThreePhase,
  GlobalSuccessStories,
  RinventixInfoHub,
  Footer,
} from '../components/home';
import type { InfoHubCaseStudy, StatCard, StoryItem } from '../components/home';

const enterpriseStats: StatCard[] = [
  { icon: 'phone', percentage: '30-60%', description: 'less manual work' },
  { icon: 'document', percentage: '2-4x', description: 'faster execution' },
  { icon: 'percent', percentage: '99%+', description: 'uptime & traceability' },
];

const startupStats: StatCard[] = [
  { icon: 'phone', percentage: '⁓95%', description: 'of calls automated' },
  { icon: 'trend-up', percentage: '⁓300%', description: 'boosts in appointments' },
  { icon: 'plus', percentage: '+45%', description: 'in lead conversion rates' },
];

const successStories: StoryItem[] = [
  {
    id: '1',
    image: casestudy2,
    imageAlt: '24/7 AI Chat Support',
    heading: '24/7 AI Chat Support',
    supportingText: 'Cut inventory costs by 24% and tripled fulfillment speed.',
    caseStudyLink: '/case-studies',
  },
  {
    id: '2',
    image: casestudy1,
    imageAlt: 'Smarter Retail Forecasting',
    heading: 'Smarter Retail Forecasting',
    supportingText: 'Cut inventory costs by 24% and tripled fulfillment speed.',
    caseStudyLink: '/case-studies',
  },
  {
    id: '3',
    image: casestudy2,
    imageAlt: '24/7 AI Chat Support',
    heading: '24/7 AI Chat Support',
    supportingText: 'Cut inventory costs by 24% and tripled fulfillment speed.',
    caseStudyLink: '/case-studies',
  },
  {
    id: '4',
    image: casestudy3,
    imageAlt: 'Smarter Retail Forecasting',
    heading: 'Smarter Retail Forecasting',
    supportingText: 'Cut inventory costs by 24% and tripled fulfillment speed.',
    caseStudyLink: '/case-studies',
  },
];

const infoHubCaseStudies: InfoHubCaseStudy[] = [
  {
    id: '1',
    image: casestudy1,
    imageAlt: 'Smarter Retail Forecasting',
    heading: 'Smarter Retail Forecasting',
    supportingText: 'Cut inventory by 24% and sped fulfillment speed.',
    caseStudyLink: '/case-studies',
  },
  {
    id: '2',
    image: casestudy2,
    imageAlt: '24/7 AI Chatbot',
    heading: '24/7 AI Chatbot',
    supportingText: 'Cut inventory by 24% and sped fulfillment speed.',
    caseStudyLink: '/case-studies',
  },
  {
    id: '3',
    image: casestudy3,
    imageAlt: 'Smarter Retail Forecasting',
    heading: 'Smarter Retail Forecasting',
    supportingText: 'Cut inventory by 24% and sped fulfillment speed.',
    caseStudyLink: '/case-studies',
  },
];

export function Home() {
  const [isEnterprise, setIsEnterprise] = useState(true);

  return (
    <>
      {/* Background image - fixed behind navbar */}
      <div className="fixed z-0 inset-0 w-screen h-screen">
        <img
          src={backgroundImage}
          alt=""
          className="w-full h-full object-cover block"
          aria-hidden
        />
      </div>

      {/* Overlay */}
      <div
        className="fixed z-0 inset-0 w-screen h-screen"
        style={{ backgroundColor: '#FFFFFF59' }}
        aria-hidden
      />

      {/* Content - pt-16 clears fixed navbar */}
      <div className="relative overflow-x-hidden w-full min-h-screen pt-16">
        <HeroSection />

        <ToggleSection
          isEnterprise={isEnterprise}
          onToggle={() => setIsEnterprise(!isEnterprise)}
        />

        <StatsSection cards={isEnterprise ? enterpriseStats : startupStats} />

        <div className="px-[60px] bg-white">
          <WhatWeBuildSection />
        </div>

        <WhyThisWorksSection />

        <ProcessSectionThreePhase />

        <GlobalSuccessStories
          title="Our Global Success Stories"
          learnMoreLink={{ text: 'Learn More', href: '/case-studies' }}
          stories={successStories}
        />

        <div className="px-[60px]"><RinventixInfoHub /></div>

        <Footer />
      </div>
    </>
  );
}
