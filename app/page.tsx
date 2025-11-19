import Hero from "@/components/Hero";
import HowItWorks from "@/sections/HowItWorks";
import DownloadBanner from "@/sections/DownloadBanner";
import BusinessOwnersSection from "@/sections/BusinessOwners";
import Header from "@/components/Header";
import WhatYouGetSection from "@/sections/WhatYouGet";
import BenefitsSection from "@/sections/Benefits";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <DownloadBanner />
      <HowItWorks />
      <WhatYouGetSection />
      <BusinessOwnersSection />
      <BenefitsSection />
      <Footer />
    </>
  );
}
