import React from "react";
import ContactSection from "./ContactSection";

export default function HomePage() {
  return (
    <main className="bg-neutral-950 text-gray-100">
      <section className="relative overflow-hidden bg-neutral-950">
        <div className="mx-auto max-w-6xl px-6 py-28 text-center">
          <div className="flex items-center justify-center gap-3 text-emerald-700">
            <span className="h-px w-16 bg-emerald-700" />
            <span className="text-xs tracking-[0.35em]">SEDAN 2024</span>
            <span className="h-px w-16 bg-emerald-700" />
          </div>
          <h1 className="mt-6 font-serif text-5xl md:text-7xl font-extrabold">Nordisk Trädesign</h1>
          <p className="mx-auto mt-4 max-w-2xl text-gray-300">Där skandinavisk tradition möter modernt hantverk.</p>
          <div className="mt-10">
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center rounded bg-amber-700 px-6 py-3 font-semibold uppercase tracking-wide text-white hover:bg-amber-800 focus:outline-none focus:ring-2 focus:ring-amber-600"
            >
              Utforska
            </a>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent" />
      </section>

      <section className="bg-neutral-900">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-10 text-center">
            <p className="text-xs tracking-[0.35em] text-emerald-700">OM OSS</p>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl font-extrabold">Genuint hantverk sedan 2024</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-neutral-700 bg-neutral-800 p-6">
              <div className="text-sm text-emerald-700">Hållbarhet</div>
              <h3 className="mt-2 font-serif text-xl font-semibold text-gray-100">Ansvarsfullt materialval</h3>
              <p className="mt-2 text-sm text-gray-300">Vi använder certifierat virke och processer med omtanke om miljön.</p>
            </div>
            <div className="rounded-lg border border-neutral-700 bg-neutral-800 p-6">
              <div className="text-sm text-emerald-700">Genuint Hantverk</div>
              <h3 className="mt-2 font-serif text-xl font-semibold text-gray-100">Detaljer som består</h3>
              <p className="mt-2 text-sm text-gray-300">Tradition möter innovation för tidlös design med precision.</p>
            </div>
            <div className="rounded-lg border border-neutral-700 bg-neutral-800 p-6">
              <div className="text-sm text-emerald-700">Anpassning</div>
              <h3 className="mt-2 font-serif text-xl font-semibold text-gray-100">Formad efter dig</h3>
              <p className="mt-2 text-sm text-gray-300">Varje projekt planeras efter dina behov, från idé till leverans.</p>
            </div>
          </div>
        </div>
      </section>

      <div id="kontakt">
        <ContactSection />
      </div>
    </main>
  );
}

