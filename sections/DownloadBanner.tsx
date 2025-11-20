import Section from "@/components/Section";
import Image from "next/image";

export default function DownloadSection() {
  return (
    <>
    <Section id="download" className="w-full bg-white mt-[-2px] lg:mt-0 pt-[60px]">
      {/* Text */}
      <div className="text-left px-[25px]">
        <p className="text-[22px] lg:text-[33px] lg:max-w-[630px] font-medium leading-[26px] lg:leading-[39px] text-[#1A1A1A]">
          Download the app, connect your wallet, and hold your phone near the
          terminal to complete the payment.
        </p>
      </div>

      {/* Button */}
      <div className="mt-[75px] flex justify-center">
        <button className="px-10 py-[20px] text-[31px] leading-[37px] font-medium text-[#2C2D38] rounded-full bg-[#00E6C8] hover:opacity-90 transition">
          Download App
        </button>
      </div>

      
    </Section>
    {/* Full-width image */}
      <div className="w-full mt-[-2px] lg:mt-0">
        <Image
          src="/bl-pay-image1.jpg" 
          alt="Download app usage"
          width={1600}
          height={1000}
          className="w-full h-auto object-cover"
          priority
        />
      </div>
    </>
  );
}
