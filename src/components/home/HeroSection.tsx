import { useNavigate } from 'react-router-dom';
import { Button } from '../Button';
import callIcon from '../../assets/call-1.svg';

export function HeroSection() {
  const navigate = useNavigate();

  return (
    <main className="relative z-10 flex flex-col items-center gap-6 sm:gap-8 w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 sm:pt-12 md:pt-16 lg:pt-20 xl:pt-[82px] pb-8 sm:pb-12">
      <div className="flex flex-col items-center gap-4 sm:gap-5 w-full">
        <h1 className="text-center px-2">
          <span className="font-medium text-4xl sm:text-5xl lg:text-[60px] leading-[105%] tracking-[-0.03em] text-black">
            AI systems that survive real workflows
          </span>
          <span className="font-normal text-4xl sm:text-5xl lg:text-[60px] leading-[105%] tracking-[-0.05em] text-black">
            ,{' '}
          </span>
          <span className="font-normal text-4xl sm:text-5xl lg:text-[60px] leading-[105%] tracking-[-0.03em] text-black">
            not just demos.
          </span>
        </h1>

        <p className="w-full max-w-2xl Satoshi-Regular font-normal text-sm sm:text-base md:text-lg lg:text-xl text-center px-4 leading-relaxed">
          <span className="text-[#272a2c]">
            We build enterprise-scale AI systems that you can actually
          </span>
          <br />
          <span className="font-medium  Satoshi-Medium text-[#272a2c]">
            {' '}deploy, explain, rely on, and own.
          </span>
          <span className="font-bold Satoshi-Regular text-[#1ab100]">
            {' '}Risk-free.
          </span>
        </p>
      </div>

      <button
        type="button"
        onClick={() => navigate('/contact')}
        className="inline-flex items-center justify-center gap-2 h-10 sm:h-11 md:h-12 px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-[linear-gradient(134deg,rgba(26,96,255,1)_0%,rgba(0,241,225,1)_100%)] hover:opacity-90 font-bold text-white text-sm sm:text-base transition-opacity"
      >
        <img src={callIcon} alt="" className="w-4 h-4 sm:w-[18px] sm:h-[18px]" aria-hidden />
        <span>Book a Strategy Call</span>
      </button>
    </main>
  );
}
