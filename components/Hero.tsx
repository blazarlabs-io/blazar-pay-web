import Section from "./Section";
import Image from "next/image";

export default function Hero() {
  return (
    <>
    <Section id="home" paddingX="px-0" className="relative overflow-hidden pt-6 ">
      {/* White bottom half */}
      {/* <div className="absolute inset-x-0 bottom-0 h-[28%] lg:h-[35%] bg-white -z-10" /> */}

      {/* Content wrapper */}
      <div className="relative max-w-6xl mx-auto px-6 lg:px-10">
        {/* Text block */}
        <div className="relative z-10 max-w-md mb-[82px] lg:mt-[62px]">
          <div className="flex gap-[20px] items-center">
            <p className="text-white text-[14px] leading-[20px] ">
              Home
            </p>
            <div>
              <Image
                src="icons/arrow.svg"
                alt="arrow icon"
                width={6}
                height={13}
                className="w-[6px] h-auto "
                priority
              />
            </div>
            <p className="text-[#00E6C8] text-[14px] leading-[20px] ">
              Blazar Pay
            </p>
          </div>

          <p className="text-[#00E6C8] lg:mt-[60px] font-medium text-[32px] sm:text-[37px] leading-[40px] sm:leading-[44px] tracking-wide">
            You can pay here
            <br />
            with crypto using
          </p>

          <div className="mt-5 lg:mt-[60px]">
            <Image
              src="/nav-logo-green-white.svg"
              alt="Blazar Pay logo"
              width={210}
              height={70}
              priority
            />
          </div>
        </div>

        
      </div>
    </Section>
    {/* Device image */}
      <div
        className="
          flex justify-center
          lg:mt-0
          lg:absolute lg:right-0 lg:top-[150px]
        "
      >
        <Image
          src="/device_terminal.png"
          alt="Blazar terminal"
          width={480}
          height={320}
          className="w-full lg:w-[769px] h-auto "
          priority
        />
      </div>
      </>
  );
}
