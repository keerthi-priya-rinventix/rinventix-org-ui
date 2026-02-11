import checkedIcon from '../../assets/checked-icon.svg';

export interface SolutionItem {
  heading: string;
  subheading: string;
  features: string[];
  conclusion: string;
  opacity?: number;
}

interface HowCTIsDifferentProps {
  leftBackgroundColor: string;
  solutions: SolutionItem[];
}

export function HowCTIsDifferent({ leftBackgroundColor, solutions }: HowCTIsDifferentProps) {
  const [mainSolution] = solutions.filter((s) => s.features.length > 0 && s.conclusion);
  const hasPlaceholder = solutions.some((s) => s.opacity !== undefined);

  return (
    <section className="relative z-10 w-full">
      <div className="max-w-[1319px] mx-auto flex flex-col lg:flex-row min-h-0">
        {/* Left column - background color */}
        <div
          className="w-full lg:w-1/2 min-h-[280px] lg:min-h-[400px] flex items-center justify-center p-8 lg:p-12"
          style={{ backgroundColor: leftBackgroundColor }}
        >
          <div className="w-full max-w-md h-48 lg:h-64 rounded-lg bg-gray-300/50 shrink-0" aria-hidden />
        </div>
        {/* Right column - content */}
        <div className="w-full lg:w-1/2 bg-white flex items-center p-8 lg:p-12 lg:pl-16">
          {mainSolution && (
            <div className={`w-full max-w-lg ${hasPlaceholder && solutions.length > 1 ? 'opacity-90' : ''}`}>
              <h3 className="text-xl lg:text-2xl font-medium text-black tracking-tight">
                {mainSolution.heading}
              </h3>
              <p className="mt-3 text-base text-[#2C3A4B] leading-6">
                {mainSolution.subheading}
              </p>
              {mainSolution.features.length > 0 && (
                <ul className="mt-6 space-y-3 list-none pl-0">
                  {mainSolution.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-[#2C3A4B] text-base leading-6">
                      <img src={checkedIcon} alt="" className="w-5 h-5 shrink-0 mt-0.5" aria-hidden />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              )}
              {mainSolution.conclusion && (
                <p className="mt-6 text-base text-[#2C3A4B] leading-6">
                  {mainSolution.conclusion}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
