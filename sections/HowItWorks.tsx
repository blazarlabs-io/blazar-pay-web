import Section from "@/components/Section";
import { CreditCard, Wallet, Smartphone, CheckCircle2, ReceiptText, QrCode } from "@/components/icons";

const steps = [
  { title: "Download and install the Blazar Pay app.", Icon: DownloadIcon },
  { title: "Sign in or create your account.", Icon: CheckCircle2 },
  { title: "Connect your wallet and ensure ADA / USDM / BTC balance.", Icon: Wallet },
  { title: "At checkout, open the Blazar Pay app.", Icon: Smartphone },
  { title: "Hold your phone close to the Blazar Pay terminal.", Icon: QrCode },
  { title: "Review the amount and currency, then approve.", Icon: CreditCard },
  { title: "See ‘Paid’ on your phone—receipt in History.", Icon: ReceiptText },
];


function DownloadIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" x2="12" y1="15" y2="3" />
  </svg>
  );
}


export default function HowItWorks({ compact = true }: { compact?: boolean }) {
  return (
    <Section id="how-it-works" className={compact ? "py-12" : "py-16"}>
      <div className="grid md:grid-cols-[auto_1px_1fr] gap-8">
        {/* Left rail icons for desktop */}
        <div className="hidden md:flex flex-col gap-8 items-center">
          {steps.map((s, i) => (
            <div key={i} className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-teal-500 text-teal-600">
              {i + 1}
            </div>
          ))}
        </div>
      <div className="hidden md:block w-px bg-teal-100" />


      {/* Steps */}
        <ol className="grid gap-8">
          {steps.map(({ title, Icon }, i) => (
            <li key={i} className="grid grid-cols-[48px_1fr] gap-4 items-start">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-900 text-white">
                <Icon className="w-6 h-6" />
              </div>
              <p className="leading-relaxed text-slate-700">{title}</p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}