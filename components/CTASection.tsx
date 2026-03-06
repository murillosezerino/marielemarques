import Link from "next/link";

export default function CTASection() {
  return (
    <section
      id="contato"
      className="relative px-[5%] py-24 md:py-32 text-center overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[rgba(224,123,42,0.04)] blur-3xl" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto">
        <p className="text-[0.72rem] font-semibold tracking-[0.14em] uppercase text-[#e07b2a] mb-4">
          Pronto para começar?
        </p>
        <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] font-light leading-[1.08] mb-6">
          Sua próxima vaga<br />começa com{" "}
          <em className="text-[#e07b2a] italic">estratégia</em>
        </h2>
        <p className="text-[rgba(245,240,235,0.55)] text-[0.95rem] leading-[1.7] mb-10 max-w-lg mx-auto">
          Entre em contato e descubra como a mentoria pode acelerar sua recolocação.
          Primeira conversa sem compromisso.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-14">
          <Link
            href="https://wa.me/5511968987112"
            target="_blank"
            className="inline-flex items-center gap-2 text-[0.85rem] font-semibold tracking-widest uppercase text-[#0d0d0d] bg-[#e07b2a] px-8 py-3.5 rounded-sm no-underline hover:bg-[#f59f3f] hover:-translate-y-px transition-all"
          >
            ✦ Falar pelo WhatsApp
          </Link>
          <Link
            href="mailto:contato@mamconsultoria.com.br"
            className="inline-flex items-center gap-2 text-[0.85rem] font-medium tracking-widest uppercase text-[#f5f0eb] border border-[#2a2a2a] px-8 py-3.5 rounded-sm no-underline hover:border-[#e07b2a] transition-colors"
          >
            Enviar e-mail →
          </Link>
        </div>

        {/* Contact row */}
        <div className="flex flex-wrap justify-center gap-8 pt-8 border-t border-[#2a2a2a]">
          <Link
            href="tel:+5511968987112"
            className="flex items-center gap-2 text-[0.8rem] text-[#888] no-underline hover:text-[#f5f0eb] transition-colors"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.68 3.39 2 2 0 0 1 3.65 1.21h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            (11) 96898-7112
          </Link>

          <Link
            href="mailto:contato@mamconsultoria.com.br"
            className="flex items-center gap-2 text-[0.8rem] text-[#888] no-underline hover:text-[#f5f0eb] transition-colors"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            contato@mamconsultoria.com.br
          </Link>

          <Link
            href="https://linkedin.com/in/marielemarquesoficial"
            target="_blank"
            className="flex items-center gap-2 text-[0.8rem] text-[#888] no-underline hover:text-[#f5f0eb] transition-colors"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            linkedin.com/in/marielemarquesoficial
          </Link>
        </div>
      </div>
    </section>
  );
}
