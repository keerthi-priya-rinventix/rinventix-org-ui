import { ResultCard } from './ResultCard';

const RESULT_TEXTS = ['nnn', 'nnnn', 'nnn'];

export function WhyThisWorksSection() {
  return (
    <section className="relative z-10 w-full bg-white py-12 sm:py-16">
      <div className="mx-auto px-4 sm:px-6 lg:px-[60px]">
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
          {/* Left column */}
          <div className="flex flex-col items-start gap-6 w-full lg:max-w-[628px] text-start">
            <h2 className="font-medium text-2xl sm:text-3xl lg:text-[40px] leading-[105%] tracking-[-0.03em] text-black w-full">
              Why This Works
            </h2>
            <p className="font-normal text-lg leading-6 text-[#2C3A4B] w-full">
              Most AI projects fail at the gap between planning and implementation. We close that gap by assigning domain-aware system owners who align AI development with real user needs, so clients don&apos;t have to do the heavy lifting themselves.
            </p>
            <p className="italic font-normal text-[20px] leading-[105%] tracking-[0.01em] text-black w-full">
              Less talk. Faster wins. Systems people actually trust.
            </p>
          </div>

          {/* Right column - The result */}
          <div
            className="w-full lg:w-[325px] rounded-2xl p-6 flex flex-col gap-4 shrink-0 ml-auto"
            style={{
              background: 'rgba(207, 224, 255, 0.12)',
            }}
          >
            <h3 className="italic font-normal text-[20px] leading-[105%] tracking-[0.01em] text-[#5A5A5A] text-start">
              The result:
            </h3>
            <div className="flex flex-col gap-2">
              {RESULT_TEXTS.map((text, i) => (
                <ResultCard key={i} text={text} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
