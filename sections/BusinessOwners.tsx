import Section from "@/components/Section";
import Image from "next/image";

export default function BusinessOwnersSection() {
  return (
    <>
    <Section
      id="business-owners"
      className="w-full bg-[#00E6C8]"
    >
      <div className="w-full relative">
        {/* Top Green Area */}
        <div className=" px-[45px] pt-[60px] pb-[160px] relative overflow-visible">
          <h2 className="text-[39px] lg:text-[75px] leading-[47px] lg:leading-[90px] font-medium text-white">
            Business owners:
          </h2>

          <p className="text-[26px] lg:text-[50px] leading-[31px] lg:leading-[60px] mt-5 text-[#2C2D38]">
            Bring crypto
            <br />
            to your counter!
          </p>

          
        </div>

      </div>
    </Section>
    {/* Device image - positioned on the RIGHT */}
      <Image
        src="/device_terminal.png"
        alt="Blazar Pay terminal"
        width={420}
        height={260}
        className="
          absolute 
          right-[0px] 
          mt-[-331px]
          w-[320px] lg:w-[769px]
          h-auto z-30
          pointer-events-none 
        "
        priority
      />
    {/* PARQUET FULL WIDTH (independent from container) */}
      <div className="w-full bg-white relative z-10">
        <Image
          src="/parquet-bg.jpg"
          alt="Parquet background"
          width={2000}
          height={400}
          className="w-full h-[170px] lg:h-[350px] object-cover"
        />
      </div>
    </>
  );
}
