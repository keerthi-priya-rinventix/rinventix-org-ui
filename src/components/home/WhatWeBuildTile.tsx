import checkedIcon from '../../assets/checked-icon.svg';

export interface WhatWeBuildTileProps {
  title: string;
  topText: string;
  features: string[];
  bottomText: string;
}

export function WhatWeBuildTile({ title, topText, features, bottomText }: WhatWeBuildTileProps) {
  return (
    <div
      className="w-full flex overflow-hidden h-[800px] items-center"
    >
      <div
        className="w-[50%] flex-shrink-0 h-full bg-[#E2F1FC] text-center"
      >
        Graphics
      </div>

      <div
            className="flex flex-col w-[50%] flex-1 py-8 items-start gap-6 bg-[#F2F9FE] px-[60px] h-full justify-center"
      >
        <div className="Satoshi-Medium font-medium text-[48px] text-black">
          {title}
        </div>
        <div className="Satoshi-Medium font-medium text-[20px] text-black">
          {topText}
        </div>
        <div className="flex flex-col gap-[10px] list-none m-0 p-0">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-4"
            >
              <img src={checkedIcon} alt="" className="w-[24px] h-[24px]" aria-hidden />
              <span className="font-satoshi font-normal text-[20px] text-black">{feature}</span>
            </div>
          ))}
        </div>
        <div className="font-larken font-normal italic text-[20px] text-black">
          {bottomText}
        </div>
      </div>
    </div>
  );
}
