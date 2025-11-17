import Section from "@/components/Section";
import Image from "next/image";

const items = [
  {
    text: "Pay directly with your crypto – no card needed.",
    icon: "/icons/tokens.svg",
    height: '138',
    width: '124',
  },
  {
    text: "Confirmation in seconds, right at the counter.",
    icon: "/icons/confirmation.svg",
    height: '183',
    width: '107',
  },
  {
    text: "Keep control: you approve every payment before it’s sent.",
    icon: "/icons/control.svg",
    height: '101',
    width: '125',
  },
];

export default function WhatYouGetSection() {
  return (
    <Section
      id="what-you-get"
      className="w-full bg-[#1A1A1A] pt-[40px] pb-[60px]"
    >
      {/* Title */}
      <h2 className="text-[37px] font-medium text-[#00E6C8]">
        What you get:
      </h2>

      {/* Blocks */}
      <div className="flex flex-col gap-[27px] mt-[50px] px-[70px]">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-[#2C2D38] rounded-[20px] px-[30px] py-[40px] flex flex-col items-center text-center"
          >
            {/* Icon */}
            <Image
              src={item.icon}
              alt="Benefit icon"
              width={140}
              height={140}
              className={`object-contain w-[${item.width}px] h-[${item.height}px] `}
            />

            {/* Text */}
            <p className="text-[17px] leading-[20px] text-white max-w-[280px] mt-[30px]">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
