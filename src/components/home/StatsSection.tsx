import callIcon from '../../assets/call.svg';
import trendUpIcon from '../../assets/trend-up.svg';

export interface StatCard {
  icon: 'phone' | 'document' | 'percent' | 'trend-up' | 'plus' | string;
  percentage: string;
  description: string;
}

interface StatsSectionProps {
  cards: StatCard[];
}

export function StatsSection({ cards }: StatsSectionProps) {
  const renderIcon = (card: StatCard) => {
    if (card.icon === 'phone') {
      return (
        <img
          src={callIcon}
          alt=""
          className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
          aria-hidden
        />
      );
    }
    if (
      card.icon === 'document' ||
      card.icon === 'percent' ||
      card.icon === 'trend-up'
    ) {
      return (
        <img
          src={trendUpIcon}
          alt=""
          className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
          aria-hidden
        />
      );
    }
    if (card.icon === 'plus') {
      return <span className="w-5 h-5 flex-shrink-0 block" aria-hidden />;
    }
    return (
      <img
        src={card.icon}
        alt=""
        className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
        aria-hidden
      />
    );
  };

  return (
    <section className="relative z-10 flex flex-col items-center gap-4 sm:gap-5 w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 pb-8 sm:pb-12 md:pb-16">
      <h2 className="font-medium text-black text-base sm:text-lg md:text-xl text-center tracking-[-0.40px] sm:tracking-[-0.60px] leading-[21px]">
        You can expect:
      </h2>

      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-2.5 md:gap-4 w-full">
        {cards.map((card, index) => (
          <div
            key={index}
            className="w-full sm:flex-1 sm:max-w-[269px] min-h-[90px] sm:h-[102px] rounded-xl sm:rounded-2xl overflow-hidden border-0 p-4 sm:p-6 flex flex-col justify-between relative bg-[linear-gradient(134deg,rgba(207,224,255,1)_0%,rgba(207,244,253,1)_100%)]"
          >
            {card.icon ? (
              <div className="flex items-center gap-1 sm:gap-2 z-10">
                {renderIcon(card)}
                <span className="font-bold text-[#0f9df3] text-base sm:text-lg md:text-xl tracking-[-0.40px] sm:tracking-[-0.60px] leading-[21px] whitespace-nowrap">
                  {card.percentage}
                </span>
              </div>
            ) : (
              <div className="font-bold text-[#0f9df3] text-base sm:text-lg md:text-xl text-left sm:text-center tracking-[-0.40px] sm:tracking-[-0.60px] leading-[21px] whitespace-nowrap">
                {card.percentage}
              </div>
            )}
            <div className="font-medium text-black text-sm sm:text-base md:text-xl tracking-[-0.40px] sm:tracking-[-0.60px] leading-[21px] mt-2 sm:mt-0 sm:absolute sm:bottom-6 sm:left-6">
              {card.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
