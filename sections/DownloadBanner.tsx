import Section from "@/components/Section";


export default function DownloadBanner() {
  return (
  <Section id="download">
    <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 grid lg:grid-cols-2 gap-8 items-center shadow">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Ready to pay with crypto?</h2>
        <p className="mt-2 text-slate-300">Download the app to get started in minutes.</p>
        <div className="mt-6 flex gap-3 flex-wrap">
          <a href="/download" className="rounded-2xl bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-3">Download App</a>
          <a href="/how-it-works" className="rounded-2xl bg-white/10 hover:bg-white/20 px-6 py-3 font-semibold">How it works</a>
        </div>
      </div>
      <img src="/phone-terminal.jpg" alt="Phone near terminal" className="w-full h-auto rounded-2xl" />
    </div>
  </Section>
  );
}