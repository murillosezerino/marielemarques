import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen grid grid-cols-1 md:grid-cols-2 items-center px-[5%] pt-32 pb-20 gap-16 overflow-hidden hero-gradient">

      {/* Left: text */}
      <div className="relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 text-[0.72rem] font-semibold tracking-[0.14em] uppercase text-[#e07b2a] border border-[rgba(224,123,42,0.3)] px-4 py-1.5 rounded-full mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#e07b2a]" />
          Mentoria de Recolocação
        </div>

        <h1 className="font-serif text-[clamp(2.8rem,5.5vw,4.8rem)] font-light leading-[1.08] tracking-tight mb-6">
          Sua próxima vaga começa com{" "}
          <em className="text-[#e07b2a] not-italic italic">estratégia</em>
        </h1>

        <p className="text-[1.05rem] font-light text-[rgba(245,240,235,0.65)] leading-[1.7] max-w-[480px] mb-10">
          Mentoria especializada para profissionais que querem se recolocar com
          método, clareza e resultado. Do currículo ao contrato assinado.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            href="https://wa.me/5511968987112"
            target="_blank"
            className="inline-flex items-center gap-2 text-[0.85rem] font-semibold tracking-widest uppercase text-[#0d0d0d] bg-[#e07b2a] px-8 py-3.5 rounded-sm no-underline hover:bg-[#f59f3f] hover:-translate-y-px transition-all"
          >
            ✦ Quero me recolocar
          </Link>
          <Link
            href="#como-funciona"
            className="inline-flex items-center gap-2 text-[0.85rem] font-medium tracking-widest uppercase text-[#f5f0eb] border border-[#2a2a2a] px-8 py-3.5 rounded-sm no-underline hover:border-[#e07b2a] transition-colors"
          >
            Como funciona →
          </Link>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-10 mt-14 pt-10 border-t border-[#2a2a2a]">
          {[
            { num: "200+", label: "Profissionais recolocados" },
            { num: "93%", label: "Taxa de recolocação" },
            { num: "6 sem", label: "Tempo médio de resultado" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-serif text-[2rem] font-light text-[#e07b2a]">
                {stat.num}
              </div>
              <div className="text-[0.72rem] tracking-widest uppercase text-[#888] mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right: photo */}
      <div className="relative flex justify-center">
        <div className="relative w-[min(380px,90%)]">

          {/* ── Floating card top-left — z-index fix ── */}
          <div className="absolute -top-4 -left-6 z-20 bg-[#1a1a1a] border border-[#2a2a2a] px-4 py-2.5 rounded-md flex items-center gap-2 text-[0.72rem] text-[#888] shadow-xl">
            <span className="text-[#e07b2a] text-base">✓</span>
            <span>
              Gupy <strong className="text-[#f5f0eb] font-semibold">Experts</strong> Certified
            </span>
          </div>

          {/* Photo frame */}
          <div className="relative w-full aspect-[3/4] bg-[#1a1a1a] rounded-[4px] overflow-hidden border border-[#2a2a2a]">
            <Image
              src="/foto-mariele.jpg"
              alt="Mariele Marques"
              fill
              className="object-cover object-top"
              priority
            />
          </div>

          {/* ── Floating tag bottom-right — z-index fix ── */}
          <div className="absolute -bottom-6 -right-6 z-20 bg-[#e07b2a] text-[#0d0d0d] text-[0.7rem] font-bold tracking-widest uppercase px-4 py-2.5 rounded-sm shadow-xl">
            MAM Consultoria
          </div>
        </div>
      </div>
    </section>
  );
}
