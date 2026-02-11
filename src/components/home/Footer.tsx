import { Button } from "../Button";
import rinventixLogo from '../../assets/rinventix-logo.svg';
import facebookBlackIcon from '../../assets/facebook-black.svg';
import twitterBlackIcon from '../../assets/twitter-black.svg';
import instagramBlackIcon from '../../assets/instagram-black.svg';
import youtubeBlackIcon from '../../assets/youtube-black.svg';
import linkedinBlackIcon from '../../assets/linkedin-black.svg';

export function Footer() {

  return (
    <div className='flex flex-col gap-4 bg-[#F9F9F9] pt-16 px-[60px] pb-8'>
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <img src={rinventixLogo} alt="logo" className="h-[35px] w-[38px]"/>
          <div className="font-satoshi font-medium text-[25px] text-[#133447]">
            Rinventix
          </div>
        </div>
        <div className="flex gap-4">
          <img src={facebookBlackIcon} alt="facebook" className="h-[20px] w-[20px]"/>
          <img src={twitterBlackIcon} alt="twitter" className="h-[20px] w-[20px]"/>
          <img src={instagramBlackIcon} alt="instagram" className="h-[20px] w-[20px]"/>
          <img src={youtubeBlackIcon} alt="youtube" className="h-[20px] w-[20px]"/>
          <img src={linkedinBlackIcon} alt="linkedin" className="h-[20px] w-[20px]"/>
        </div>
        <div>
          <Button text="Book a Strategy Call" />
        </div>

      </div>
      <div className="text-start font-satoshi font-normal text-[18px] text-[#2C3A4B] pt-2">
        Address: PT - 164,165,166,169 Nizampet, <br /> Hyderabad, India.
      </div>

      <div className="flex gap-8 font-inter font-normal text-[14px] text-[#648599] pt-8">
        <div>Terms of Service</div>
        <div>Privacy Policy</div>
        <div className="ml-auto">© 2024 Rinventix Technologies Private Limited. All rights reserved.</div>
      </div>
    </div>
  );
}
