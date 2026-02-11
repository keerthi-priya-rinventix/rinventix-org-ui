import { Button } from './Button';
import sendIcon from '../assets/send-icon.svg';

export function NewsletterCard() {
  return (
    <div
      className="rounded-2xl p-8 flex flex-col gap-5 w-[384px] mx-auto"
      style={{
        background:
          'linear-gradient(357.85deg, rgba(207, 224, 255, 0.28) 26.45%, rgba(207, 244, 253, 0.34) 98.5%)',
      }}
    >
      <div
        className="flex items-center justify-center shrink-0 rounded-full self-center"
        style={{
          backgroundColor: '#D4ECFE',
          width: 56,
          height: 56,
        }}
      >
        <img src={sendIcon} alt="" className="w-[26px] h-[26px]" aria-hidden />
      </div>

      <div className="font-satoshi font-bold text-2xl text-[#141415] text-start">
        Weekly newsletter
      </div>

      <div className="font-satoshi font-normal text-base text-[#2C3A4B] text-start leading-relaxed">
        No spam. Just the latest releases and tips, interesting articles, and
        exclusive interviews in your inbox every week.
      </div>

      <div className="w-full flex flex-col gap-3">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 font-satoshi text-[16px] text-[#141415] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1A61FF] focus:border-transparent"
          aria-label="Email address"
        />

        <a
          href="/privacy"
          className="font-satoshi text-[14px] text-[#1A61FF] underline hover:text-[#1550dd] self-start"
        >
          Read about our privacy policy
        </a>

        <Button text="Surprise" onClick={() => {}} className="w-full" />
      </div>
    </div>
  );
}
