import Section from "@/components/Section";
import Image from "next/image";
import { text } from "stream/consumers";

const steps = [
  {
    number: 1,
    text: "Download and install the Blazar Pay app.",
    icon: "/icons/download-icon.svg",
    iconW: '38',
    iconH: '48',
    horElemClassNames: 'mt-[38px] lg:mt-[50px]',
    textClassNames: 'mt-[10px] sm:mt-[23px] lg:mt-[20px]',
  },
  {
    number: 2,
    text: "Sign in or create your account.",
    icon: "/icons/account.svg",
    iconW: '46',
    iconH: '49',
    divClassNames: 'mt-[-35px]',
    horElemClassNames: 'mt-[38px] lg:mt-[50px]',
    textClassNames: 'sm:mt-[25px] lg:mt-[15px]',
  },
  {
    number: 3,
    text: "Connect your wallet and make sure you have an ADA / USDM / BTC balance.",
    icon: "/icons/wallet.svg",
    iconW: '37',
    iconH: '38',
    divClassNames: 'mt-[-35px]',
    textClassNames: 'mt-[-20px]  sm:mt-[10px] lg:mt-[0px]',
    horElemClassNames: 'mt-[25px] lg:mt-[30px]',
  },
  {
    number: 4,
    text: "At checkout, open the Blazar Pay app.",
    icon: "/icons/checkout.svg",
    iconW: '42',
    iconH: '44',
    divClassNames: 'mt-[-35px]',
    textClassNames: 'mt-[15px]  sm:mt-[20px] lg:mt-[15px]',
    horElemClassNames: 'mt-[38px] lg:mt-[45px]',
  },
  {
    number: 5,
    text: "Hold your phone close to the Blazar Pay terminal.",
    icon: "/icons/phone.svg",
    iconW: '42',
    iconH: '49',
    divClassNames: 'mt-[-35px]',
    textClassNames: 'mt-[0px]  sm:mt-[15px] lg:mt-[15px]',
    horElemClassNames: 'mt-[38px] lg:mt-[45px]',
  },
  {
    number: 6,
    text: "Review the amount and currency, then approve the payment.",
    icon: "/icons/amount.svg",
    iconW: '41',
    iconH: '28',
    divClassNames: 'mt-[-35px]',
    textClassNames: 'mt-[-10px]  sm:mt-[10px] md:mt-[25px] lg:mt-[1px]',
    horElemClassNames: 'mt-[38px] lg:mt-[35px]',
  },
  {
    number: 7,
    text: "See “Paid” on your phone and terminal — your receipt appears in History.",
    icon: "/icons/receipt.svg",
    iconW: '40',
    iconH: '48',
    divClassNames: 'mt-[-35px]',
    textClassNames: 'mt-[10px] lg:mt-[5px]',
    horElemClassNames: 'mt-[38px]',
  },
];

export default function HowItWorksSection() {
  return (
    <Section
      id="how-it-works"
      paddingX="px-0"
      className="w-full bg-white mt-[-2px] pt-[60px] lg:pt-[140px] pb-[40px] lg:pb-[153]"
    >
      {/* Heading */}
      <div className="px-[25px]">
        <h2 className="text-[37px] lg:text-[51px] leading-[44px] lg:leading-[61px] font-medium text-[#1A1A1A]">
          How it works
        </h2>
      </div>

      {/* Steps */}
      <div className="px-[25px] flex flex-col gap-[24px] mt-[50px] lg:mt-[100px]">
        {steps.map((step, index) => (
          <div
            key={step.number}
            className={`flex items-stretch ${step.divClassNames} gap-[16px] lg:gap-[45px]`}
          >
            {/* Icon column */}
            <div className="mt-[4px]">
              <div className="h-[71px] w-[71px] rounded-full bg-[#071B27] flex items-center justify-center">
                <Image
                  src={step.icon}
                  alt={`Step ${step.number} icon`}
                  width={32}
                  height={32}
                  className={`h-[${step.iconH}px] h-[${step.iconH}px] object-contain`}
                />
              </div>
            </div>

            {/* Number + vertical line */}
            <div className="flex flex-col items-center">
              <div className="flex h-[32px] w-[32px] mt-[20px] items-center justify-center rounded-full bg-[#00E6C8]">
                <span className="text-[18px] font-semibold text-white">
                  {step.number}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div className="w-[2px] bg-[#00E6C8] h-[88px] mt-[8px]" />
              )}
            </div>

            {/* Text + horizontal line */}
            <div className="flex flex-col w-full">
              <p className={`${step.textClassNames} text-[21px] lg:text-[30px] leading-[24px] lg:leading-[36px] font-medium text-[#2C2D38]`}>
                {step.text}
              </p>
              {index < steps.length - 1 && (
                <div className={` w-full bg-[#00E6C8] h-[2px] ${step.horElemClassNames}`} />
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
