import Section from "@/components/Section";
import Image from "next/image";

const items = [
  {
    text: "Pay directly with your crypto – no card needed.",
    icon: "/icons/tokens.svg",
    height: '124',
    width: '138',
  },
  {
    text: "Confirmation in seconds, right at the counter.",
    icon: "/icons/confirmation.svg",
    height: '107',
    width: '183',
  },
  {
    text: "Keep control: you approve every payment before it’s sent.",
    icon: "/icons/control.svg",
    height: '125',
    width: '101',
  },
];

export default function WhatYouGetSection() {
  return (
    <Section
      id="what-you-get"
      className="w-full bg-[#2d2d38] pt-[40px] lg:pt-[100px] pb-[60px] lg:pb-[180px]"
    >
      {/* Title */}
      <h2 className="text-[37px] lg:text-[51px] font-medium text-[#00E6C8]">
        What you get:
      </h2>

      {/* Blocks */}
      <div className="flex flex-col lg:flex-row gap-[27px] mt-[50px] lg:mt-[112px] px-[45px] lg:px-0 justify-between">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-[#474959] rounded-[20px] px-[30px] py-[40px] flex flex-col items-center text-center"
          >
            {/* Icon */}
            <Image
              src={item.icon}
              alt="Benefit icon"
              width={Number(item.width)}
              height={Number(item.height)}
              className={`object-contain w-[${item.width}px] h-[${item.height}px] lg:scale-[1.2] `}
            />

            {/* Text */}
            <p className="text-[17px] lg:text-[30px] leading-[20px] lg:leading-[36px] text-white max-w-[280px] mt-[30px] lg:mt-[50px]">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
