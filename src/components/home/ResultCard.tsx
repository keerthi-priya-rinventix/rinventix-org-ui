import callIcon from '../../assets/call.svg';

interface ResultCardProps {
  text: string;
}

export function ResultCard({ text }: ResultCardProps) {
  return (
    <div
      className="rounded-2xl flex flex-row items-center gap-2 px-6 py-4 min-h-[69px] max-w-[269px]"
      style={{
        background: 'linear-gradient(357.85deg, rgba(207, 224, 255, 0.28) 26.45%, rgba(207, 244, 253, 0.34) 98.5%)',
      }}
    >
      <img src={callIcon} alt="" className="w-5 h-5 shrink-0" aria-hidden />
      <span className="font-bold text-[20px] leading-[105%] tracking-[-0.03em] text-[#0F9DF3]">
        {text}
      </span>
    </div>
  );
}
