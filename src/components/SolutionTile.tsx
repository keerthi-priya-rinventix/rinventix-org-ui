import checkedIcon from '../assets/checked-icon.svg';

export interface SolutionTileProps {
  imageSrc: string;
  title: string;
  topText: string;
  features: string[];
  bottomText: string;
}

export function SolutionTile({ imageSrc, title, topText, features, bottomText }: SolutionTileProps) {
  return (
    <div
      className="w-[635px] flex flex-col overflow-hidden"
    >
      <div
        className="w-full flex-shrink-0"
      >
        <img
          src={imageSrc}
          alt=""
          className="w-full h-[365px] object-cover object-center rounded-lg"
        />
      </div>

      <div
        className="flex flex-col w-full flex-1 py-8 items-start gap-6"
      >
        <div className="font-medium text-[28px] leading-[105%] tracking-[-0.03em] text-[#1A61FF]">
          {title}
        </div>
        <div className="font-satoshi font-medium text-[20px] leading-[105%] tracking-[-0.03em] text-black">
          {topText}
        </div>
        <div className="flex flex-col gap-[10px] list-none m-0 p-0">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-4"
            >
              <img src={checkedIcon} alt="" className="w-[24px] h-[24px]" aria-hidden />
              <span className="font-satoshi font-normal text-[16px] leading-[100%] tracking-[0] text-[#2C3A4B]">{feature}</span>
            </div>
          ))}
        </div>
        <div className="font-larken font-normal italic text-[20px] leading-[105%] tracking-[0.01em] text-black">
          {bottomText}
        </div>
      </div>
    </div>
  );
}
