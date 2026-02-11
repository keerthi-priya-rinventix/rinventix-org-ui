export function InfoPill({
  type,
  minsToRead,
}: {
  type: string;
  minsToRead: number;
}) {
  return (
    <div className="inline-flex items-center pl-1 pr-2  gap-2 bg-[#EFF9FE] rounded-full h-[30px] text-[#1A61FF] font-inter font-medium text-[12px] leading-[18px] tracking-[0] text-center">
      <div className="h-[22px] bg-white rounded-full z-10 px-2 flex text-center my-auto pt-[1px]">{type}</div>
      <div>{minsToRead} min read</div>
    </div>
  );
}