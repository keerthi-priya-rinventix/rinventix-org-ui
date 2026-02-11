const dividerStyle = {
  border: '1px solid',
  borderImageSource:
    'radial-gradient(28.22% 6137.25% at 50% 50%, #929292 0%, rgba(141, 141, 141, 0) 100%)',
  borderImageSlice: 1,
};

interface ToggleSectionProps {
  isEnterprise: boolean;
  onToggle: () => void;
}

export function ToggleSection({ isEnterprise, onToggle }: ToggleSectionProps) {
  return (
    <div className="relative z-10 flex flex-col items-center gap-4 sm:gap-5 w-full max-w-2xl mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-12">
      <div className="w-full h-px" style={dividerStyle} />

      <div className="flex items-center gap-2 sm:gap-3 md:gap-3.5 flex-wrap justify-center">
        <button
          type="button"
          onClick={onToggle}
          className="font-medium text-[#141415] text-xs sm:text-sm md:text-base whitespace-nowrap hover:opacity-80 transition-opacity cursor-pointer bg-transparent border-0"
        >
          I&apos;m an Enterprise
        </button>

        <button
          type="button"
          onClick={onToggle}
          className={`flex items-center w-10 h-5 sm:w-11 sm:h-6 p-0.5 rounded-lg sm:rounded-xl overflow-hidden flex-shrink-0 cursor-pointer transition-all duration-300 hover:opacity-90 bg-[linear-gradient(131deg,rgba(65,123,255,1)_0%,rgba(51,255,241,1)_100%)] ${isEnterprise ? 'justify-start' : 'justify-end'}`}
          aria-label="Toggle between Enterprise and Startup"
        >
          <div className="w-4 h-4 sm:w-5 sm:h-5 bg-white rounded-lg sm:rounded-[10px] shadow-sm transition-all duration-300 ease-in-out" />
        </button>

        <button
          type="button"
          onClick={onToggle}
          className="font-medium text-[#141415] text-xs sm:text-sm md:text-base whitespace-nowrap hover:opacity-80 transition-opacity cursor-pointer bg-transparent border-0"
        >
          I&apos;m a Startup
        </button>
      </div>

      <div className="w-full h-px" style={dividerStyle} />
    </div>
  );
}
