interface ProcessStepProps {
  stepNumber: number;
  title: string;
  description: string;
  outcome: string;
  graphicPosition: 'left' | 'right';
}

export function ProcessStep({
  stepNumber,
  title,
  description,
  outcome,
  graphicPosition,
}: ProcessStepProps) {
  const graphic = (
    <div className="w-full max-w-md h-56 rounded-xl bg-gray-200/60 shrink-0" aria-hidden />
  );

  return (
    <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
      {graphicPosition === 'left' && (
        <>
          <div className="w-full lg:w-2/5 order-2 lg:order-1">{graphic}</div>
          <div className="w-full lg:w-3/5 order-1 lg:order-2 text-start">
            <div className="flex flex-col items-start gap-4">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-xl shrink-0 bg-[linear-gradient(357.85deg,rgba(207,224,255,0.28)_26.45%,rgba(207,244,253,0.34)_98.5%)]"
                style={{
                  color: '#0F9DF3',
                }}
              >
                {stepNumber}
              </div>
              <h3 className="text-xl font-medium text-[#1A61FF] tracking-tight">{title}</h3>
            </div>
            <p className="mt-4 text-lg text-[#2C3A4B] leading-6 Satoshi-Regular font-normal text-[18px]">{description}</p>
            <p className="mt-4 text-base text-black leading-6 Larken-Regular font-normal text-[18px]">{outcome}</p>
          </div>
        </>
      )}
      {graphicPosition === 'right' && (
        <>
          <div className="w-full lg:w-3/5 text-start">
            <div className="flex flex-col items-start gap-4">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-xl shrink-0 bg-[linear-gradient(357.85deg,rgba(207,224,255,0.28)_26.45%,rgba(207,244,253,0.34)_98.5%)]"
                style={{
                  color: '#0F9DF3',
                }}
              >
                {stepNumber}
              </div>
              <h3 className="text-xl font-medium text-[#1A61FF] tracking-tight">{title}</h3>
            </div>
            <p className="mt-4 text-lg text-[#2C3A4B] leading-6 Satoshi-Regular font-normal text-[18px]">{description}</p>
            <p className="mt-4 text-base text-black leading-6 Larken-Regular font-normal text-[18px]">{outcome}</p>
          </div>
          <div className="w-full lg:w-2/5">{graphic}</div>
        </>
      )}
    </div>
  );
}
