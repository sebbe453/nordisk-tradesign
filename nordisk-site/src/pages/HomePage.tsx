import React from "react";
import ContactSection from "../components/ContactSection";

export default function HomePage() {
  return (
    <main className="bg-neutral-950 text-gray-100">
      <section className="relative overflow-hidden bg-neutral-950 bg-[url('../hero.png')] bg-cover bg-center">
        <div className="relative z-10 mx-auto max-w-6xl px-6 py-28 text-center md:py-36">
          <div className="flex items-center justify-center gap-3 text-emerald-700 font-semibold">
            <span className="h-px w-16 bg-emerald-700" />
            <span className="text-xs tracking-[0.35em]">SEDAN 2024</span>
            <span className="h-px w-16 bg-emerald-700" />
          </div>
          <h1 className="mt-6 font-serif text-5xl md:text-7xl font-extrabold text-white drop-shadow-2xl">Nordisk Trädesign</h1>
          <p className="mx-auto mt-4 max-w-2xl text-white drop-shadow-md">Där skandinavisk tradition möter modernt hantverk.</p>
          <div className="mt-10">
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center rounded bg-amber-600 px-6 py-3 font-semibold uppercase tracking-wide text-white hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-white/50 shadow-xl"
            >
              Utforska
            </a>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 z-0 bg-black/30" />
      </section>

      <section className="bg-neutral-900">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-10 text-center">
            <p className="text-xs tracking-[0.35em] text-emerald-700 font-semibold">OM OSS</p>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl font-extrabold">Genuint hantverk sedan 2024</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-neutral-700 bg-neutral-800 p-6">
              <div className="mb-4 overflow-hidden rounded-md aspect-[4/3] bg-neutral-700">
                <img src="Ny mapp/hallbarhet.jpg" alt="Hållbarhet" className="h-full w-full object-cover" />
              </div>
              <div className="text-sm text-emerald-700 font-semibold">Hållbarhet</div>
              <h3 className="mt-2 font-serif text-xl font-semibold text-gray-100">Ansvarsfullt materialval</h3>
              <p className="mt-2 text-sm text-gray-300">Vi använder certifierat virke och processer med omtanke om miljön.</p>
            </div>
            <div className="rounded-lg border border-neutral-700 bg-neutral-800 p-6">
              <div className="mb-4 overflow-hidden rounded-md aspect-[4/3] bg-neutral-700">
                <img src="Ny mapp/hantverk.jpg" alt="Genuint hantverk" className="h-full w-full object-cover" />
              </div>
              <div className="text-sm text-emerald-700 font-semibold">Genuint Hantverk</div>
              <h3 className="mt-2 font-serif text-xl font-semibold text-gray-100">Detaljer som består</h3>
              <p className="mt-2 text-sm text-gray-300">Tradition möter innovation för tidlös design med precision.</p>
            </div>
            <div className="rounded-lg border border-neutral-700 bg-neutral-800 p-6">
              <div className="mb-4 overflow-hidden rounded-md aspect-[4/3] bg-neutral-700">
                <img src="Ny mapp/anpassning.jpg" alt="Anpassning" className="h-full w-full object-cover" />
              </div>
              <div className="text-sm text-emerald-700 font-semibold">Anpassning</div>
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
