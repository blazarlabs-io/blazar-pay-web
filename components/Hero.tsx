import Section from "./Section";

export default function Hero() {
  return (
    <Section id="home" className="pt-20">
      <div className="grid lg:grid-cols-2 gap-10 items-center">

        {/* Text */}
        <div>
          <p className="text-teal-500 font-semibold uppercase tracking-wide">
            Crypto payments
          </p>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mt-2">
            You can pay here with crypto using{" "}
            <span className="text-teal-500">Blazar Pay</span>
          </h1>

          <p className="mt-4 text-slate-600 max-w-prose">
            Download the app, connect your wallet, and hold your phone near the
            terminal to complete the payment.
          </p>

          <div className="mt-6 flex gap-4 flex-wrap">
            <a
              href="#download"
              className="rounded-2xl bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-3"
            >
              Download App
            </a>

            <a
              href="#how-it-works"
              className="rounded-2xl border border-slate-300 hover:bg-slate-100 px-6 py-3 font-semibold"
            >
              How it works
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src="/device_terminal.png"
            alt="Blazar terminal"
            className="w-full max-w-md h-auto rounded-2xl shadow-xl"
          />
        </div>
      </div>
    </Section>
  );
}
