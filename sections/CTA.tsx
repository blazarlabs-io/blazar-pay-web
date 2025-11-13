import Section from "@/components/Section";


export default function CTA() {
  return (
    <Section id="merchant">
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl font-bold">Accept crypto with Blazar Pay</h2>
        <p className="mt-3 text-slate-600 max-w-prose mx-auto">
          Simple setup for merchants. Pair your terminal, choose supported currencies, and start accepting payments.
        </p>
        <div className="mt-6">
          <a href="#" className="inline-flex rounded-2xl bg-slate-900 text-white px-6 py-3 font-semibold">Become a merchant</a>
        </div>
      </div>
    </Section>
  );
}