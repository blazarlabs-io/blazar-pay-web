import Hero from "@/components/Hero";
import HowItWorks from "@/sections/HowItWorks";
import DownloadBanner from "@/sections/DownloadBanner";
import CTA from "@/sections/CTA";
import Header from "@/components/Header";
import WhatYouGetSection from "@/sections/WhatYouGet";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <DownloadBanner />
      <HowItWorks />
      <WhatYouGetSection />
    </>
  );
}
