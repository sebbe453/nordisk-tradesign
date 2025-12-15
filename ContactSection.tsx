import React, { useState } from "react";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload: FormData = { name, email, message };

    try {
      const res = await fetch(
        "https://hook.eu1.make.com/4s3ppu3ws06d88i7ibhd4avxt7658yl8",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (res.ok) {
        setIsSubmitted(true);
        setName("");
        setEmail("");
        setMessage("");
        setTimeout(() => setIsSubmitted(false), 5000);
      }
    } catch {}
  };

  return (
    <section className="bg-neutral-900 text-gray-100 py-20">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center mb-10">
          <p className="text-sm tracking-[0.3em] text-gray-300">KONTAKT</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold">Låt oss skapa tillsammans</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300">Namn</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ditt fullständiga namn"
              className="mt-2 w-full rounded border border-neutral-700 bg-neutral-800 px-4 py-3 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-600"
              required={false}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300">E-post</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="din@epost.se"
              className="mt-2 w-full rounded border border-neutral-700 bg-neutral-800 px-4 py-3 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-600"
              required={false}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300">Din Fråga / Meddelande</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Berätta om ditt projekt eller ställ en fråga..."
              rows={6}
              className="mt-2 w-full rounded border border-neutral-700 bg-neutral-800 px-4 py-3 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-600"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded bg-amber-700 px-6 py-3 font-semibold uppercase tracking-wide text-white hover:bg-amber-800 focus:outline-none focus:ring-2 focus:ring-amber-600"
            >
              Skicka förfrågan
            </button>
          </div>

          {isSubmitted && (
            <div className="text-amber-400 text-sm">Tack! Din förfrågan är skickad.</div>
          )}
        </form>
      </div>
    </section>
  );
}

