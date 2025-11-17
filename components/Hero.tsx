import Section from "./Section";
import Image from "next/image";

export default function Hero() {
  return (
    <Section id="home" paddingX="px-0" className="relative overflow-hidden pt-6 ">
      {/* White bottom half */}
      <div className="absolute inset-x-0 bottom-0 h-[28%] bg-white -z-10" />

      {/* Content wrapper */}
      <div className="relative max-w-6xl mx-auto px-6 lg:px-10">
        {/* Text block */}
        <div className="relative z-10 max-w-md">
          <p className="text-[#00E6C8] font-medium text-[32px] sm:text-[37px] leading-[40px] sm:leading-[44px] tracking-wide">
            You can pay here
            <br />
            with crypto using
          </p>

          <div className="mt-5">
            <Image
              src="/nav-logo-green-white.svg"
              alt="Blazar Pay logo"
              width={210}
              height={70}
              priority
            />
          </div>
        </div>

        {/* Device image */}
        <div
          className="
            flex justify-center w-full
            lg:mt-0
            lg:absolute lg:right-0 lg:bottom-[-40px] lg:translate-x-1/4
          "
        >
          <Image
            src="/device_terminal.png"
            alt="Blazar terminal"
            width={480}
            height={320}
            className="w-full lg:w-[460px] h-auto mr-[-48px]"
            priority
          />
        </div>
      </div>
    </Section>
  );
}
