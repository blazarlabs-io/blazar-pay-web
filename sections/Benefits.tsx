import Section from "@/components/Section";
import Image from "next/image";

const items = [
  {
    title: "Keep more",
    text: "of each sale – near-zero processing & conversion fees.",
    icon: "/icons/sale.svg",
    width: "89",
    height: "67",
    desktopWidth: "102",
    desktopHeight: "102",
  },
  {
    title: "Instant confirmation",
    text: "payouts on your schedule – withdraw anytime.",
    icon: "/icons/confirmation-benefits.svg",
    width: "78",
    height: "53",
    desktopWidth: "82",
    desktopHeight: "82",
  },
  {
    title: "Accept",
    text: "ADA, USDM, BTC at the counter.",
    icon: "/icons/tokens-benefit.svg",
    width: "84",
    height: "78",
    desktopWidth: "82",
    desktopHeight: "82",
  },
  {
    title: "No currency surprises",
    text: "the price on the tag is the price paid.",
    icon: "/icons/graph.svg",
    width: "69",
    height: "69",
    desktopWidth: "82",
    desktopHeight: "82",
  },
  {
    title: "Live visibility",
    text: "every payment shows in your dashboard.",
    icon: "/icons/live-benefit.svg",
    width: "69",
    height: "66",
    desktopWidth: "82",
    desktopHeight: "82",
  },
  {
    title: "Fast setup",
    text: "plug in, connect Wi-Fi, go live in minutes.",
    icon: "/icons/plug-in.svg",
    width: "73",
    height: "70",
    desktopWidth: "82",
    desktopHeight: "82",
  },
];


export default function BenefitsSection() {
  return (
    <Section
      id="benefits"
      className="w-full bg-white pt-[40px] mt-[-1px] pb-[60px] lg:pb-[176px]"
    >
      {/* Mobile = single column, Desktop = two columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-[60px] gap-y-[45px] lg:gap-y-[100px]">
        {items.map((item) => (
          <div
            key={item.title}
            className="flex items-start gap-[28px] md:gap-[20px] lg:flex-col"
          >
            {/* Icon */}
            <div className="flex-shrink-0 bg-[#00E6C8] rounded-[10px] w-[100px] lg:w-[150px] h-[100px] lg:h-[150px] flex items-center justify-center md:w-[120px] md:h-[120px]  ">
              <Image
                src={item.icon}
                alt={item.title}
                width={Number(item.width)}
                height={Number(item.height)}
                className={`
                  object-contain
                  w-[${item.width}px] h-[${item.height}px]
                  lg:w-[${item.desktopWidth}px] lg:h-[${item.desktopHeight}px] lg:scale-[1.3]
                `}
              />
            </div>

            {/* Text */}
            <div className="flex-1">
              <h3 className="text-[26px] leading-[24px] md:text-[24px] lg:text-[50px] md:leading-[28px] lg:leading-[50px] font-medium text-[#2C2D38]">
                {item.title}
              </h3>

              <p className="mt-[4px] text-[17px] leading-[20px] md:text-[16px] lg:text-[30px] md:leading-[22px] lg:leading-[36px] text-[#2C2D38] lg:max-w-[335px]">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}