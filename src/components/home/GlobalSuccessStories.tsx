import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import sideArrowIcon from '../../assets/side-arrow.svg';

export interface SuccessStory {
  id: string;
  image: string;
  imageAlt?: string;
  heading: string;
  supportingText: string;
  caseStudyLink?: string;
  onClick?: () => void;
}

/** @deprecated Use SuccessStory */
export type StoryItem = SuccessStory;

export interface GlobalSuccessStoriesProps {
  title?: string;
  learnMoreLink?: {
    text?: string;
    href?: string;
    onClick?: () => void;
  };
  stories: SuccessStory[];
  className?: string;
}

export function GlobalSuccessStories({
  title = 'Our Global Success Stories',
  learnMoreLink,
  stories,
  className = '',
}: GlobalSuccessStoriesProps) {
  const [isPaused, setIsPaused] = useState(false);

  const renderLearnMoreLink = () => {
    if (!learnMoreLink) return null;

    const linkContent = (
      <div className="flex flex-row items-center gap-2 px-2 py-3 rounded-md w-[130px] h-12">
        <span className="font-bold text-base leading-6 text-[#1A61FF]">
          {learnMoreLink.text ?? 'Learn More'}
        </span>
        <img
          src={sideArrowIcon}
          alt=""
          className="w-5 h-5"
          aria-hidden
        />
      </div>
    );

    if (learnMoreLink.href) {
      return (
        <Link to={learnMoreLink.href} onClick={learnMoreLink.onClick} className="hover:opacity-90 transition-opacity">
          {linkContent}
        </Link>
      );
    }

    return (
      <button type="button" onClick={learnMoreLink.onClick} className="cursor-pointer">
        {linkContent}
      </button>
    );
  };

  return (
    <section className={`relative z-10 w-full bg-white ${className}`}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[60px]">
        <div className="flex flex-col items-center gap-[30px] pb-20 min-h-[578px] w-full max-w-full">
          <h2 className="font-medium text-[40px] leading-[105%] text-start tracking-[-0.03em] text-black w-full max-w-[458px]">
            {title}
          </h2>

          {renderLearnMoreLink()}

          <div
            className="flex overflow-hidden w-full max-w-[1720px] pb-2"
            style={{ minHeight: '348px' }}
            aria-label="Success stories carousel"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              className="flex flex-row items-start gap-10 shrink-0"
              style={{
                minHeight: '348px',
                width: 'max-content',
                animation: 'success-stories-scroll 40s linear infinite',
                animationPlayState: isPaused ? 'paused' : 'running',
              }}
            >
              {[...stories, ...stories].map((story, index) => (
                <SuccessStoryCard
                  key={`${story.id}-${index}`}
                  story={story}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface SuccessStoryCardProps {
  story: SuccessStory;
}

function SuccessStoryCard({ story }: SuccessStoryCardProps) {
  const navigate = useNavigate();

  const handleCaseStudyClick = () => {
    if (story.onClick) {
      story.onClick();
    } else if (story.caseStudyLink) {
      navigate(story.caseStudyLink);
    }
  };

  return (
    <div
      className="flex flex-col items-start gap-6 flex-shrink-0 w-full max-w-[400px]"
      style={{ width: '400px', minHeight: '348px' }}
    >
      <div className="relative w-full rounded-xl overflow-hidden" style={{ height: '200px' }}>
        {story.image ? (
          <img
            src={story.image}
            alt={story.imageAlt ?? story.heading}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-[#E7E7E7] rounded-xl" />
        )}
      </div>

      <div className="flex flex-col items-start gap-3.5 w-full min-h-[124px]">
        <button
          type="button"
          onClick={handleCaseStudyClick}
          className="box-border w-[79px] h-[19px] border border-[#133447] rounded-[5px] bg-transparent cursor-pointer p-0 flex items-center justify-center"
        >
          <span className="font-medium text-[9px] leading-[10px] tracking-[0.06em] text-[#133447]">
            CASE STUDY
          </span>
        </button>

        <h3 className="font-medium text-2xl leading-[122%] tracking-[-0.03em] text-[#141415] w-full">
          {story.heading}
        </h3>

        <p className="font-normal text-lg leading-6 text-[#2C3A4B] w-full">
          {story.supportingText}
        </p>
      </div>
    </div>
  );
}
