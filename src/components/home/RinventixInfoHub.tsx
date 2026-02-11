import { Button } from "../Button";
import casestudy1 from '../../assets/person-working-html-computer-1--1.png';
import casestudy2 from '../../assets/representation-user-experience-interface-design-1--1.png';


export function RinventixInfoHub() {
  return (
    <div className="flex gap-10 py-16 bg-white">
      <div className="flex flex-col gap-2 items-start">
        <div className="text-[#1A61FF] font-inter font-semibold text-[16px]">Latest</div>
        <div className="Satoshi-Medium font-medium text-[24px] text-[#141415]">Rinventix Info Hub</div>
        <div className="font-inter font-normal text-[18px] text-[#667085]">The latest industry news, interviews, technologies, and resources.</div>
        <Button text="View All Post" />
      </div>

      <div className="flex gap-8 ml-auto">
        <div className="flex flex-col gap-2 items-start rounded-lg w-[420px]">
          <img src={casestudy1} alt="casestudy1" className="w-[420px] h-[240px] object-cover rounded-t-lg" />
          <div className="bg-[#F9FBFF] flex flex-col gap-2 items-start px-6 pb-8 pt-6 rounded-b-lg w-[420px] text-start">
            <div className="Satoshi-Medium font-medium text-[24px] text-[#141415]">24/7 AI Chat Support</div>
            <div className="Satoshi-Regular font-normal text-[18px] text-[#2C3A4B]">Cut inventory costs by 24% and tripled fulfillment speed.</div>
            <div className="Satoshi-Medium font-medium text-[9px] text-[#133447] border border-[#133447] rounded-lg px-4 py-1 mt-4">CASE STUDY</div>
          </div>
        </div>

        <div className="flex flex-col gap-2 items-start rounded-lg w-[420px]">
          <img src={casestudy2} alt="casestudy2" className="w-[420px] h-[240px] object-cover rounded-t-lg" />
          <div className="bg-[#F9FBFF] flex flex-col gap-2 items-start px-6 pb-8 pt-6 rounded-b-lg w-[420px] text-start">
            <div className="Satoshi-Medium font-medium text-[24px] text-[#141415]">Smarter Retail Forecasting</div>
            <div className="Satoshi-Regular font-normal text-[18px] text-[#2C3A4B]">Cut inventory costs by 24% and tripled fulfillment speed.</div>
            <div className="Satoshi-Medium font-medium text-[9px] text-[#133447] border border-[#133447] rounded-lg px-4 py-1 mt-4">CASE STUDY</div>
          </div>
        </div>
      </div>
    </div>
  );
}