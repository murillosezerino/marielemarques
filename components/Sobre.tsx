import Link from "next/link";
import Image from "next/image";

export default function Sobre() {
  const highlights = [
    "Gupy Experts — especialista certificada em recrutamento",
    "Fundadora da MAM Consultoria",
    "Conteúdo gratuito diário no LinkedIn para profissionais em transição",
    "Mentoria personalizada com foco em resultado real",
  ];

  return (
    <section id="sobre" className="px-[5%] py-24 md:py-32">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Photo placeholder */}
        <div className="relative">
          <div className="w-full aspect-[4/5] bg-[#1a1a1a] rounded-[4px] border border-[#2a2a2a] overflow-hidden relative">
            <Image
              src="/foto-mariele.jpg"
              alt="Mariele Marques"
              fill
              className="object-cover object-top"
            />
          </div>

          {/* Decorative accent */}
          <div className="absolute -bottom-3 -left-3 w-24 h-24 border border-[rgba(224,123,42,0.2)] rounded-[4px] -z-10" />
        </div>

        {/* Text */}
        <div>
          <p className="text-[0.72rem] font-semibold tracking-[0.14em] uppercase text-[#e07b2a] mb-4">
            Sobre
          </p>

          <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-light leading-[1.1] mb-6">
            Consultora de<br />
            <em className="text-[#e07b2a] italic">carreira estratégica</em>
          </h2>

          <div className="space-y-4 text-[rgba(245,240,235,0.75)] leading-[1.7] text-[0.95rem] mb-8">
            <p>
              Mariele Marques é mentora especializada em recolocação de carreira, com trajetória
              reconhecida no mercado de RH e seleção. Fundadora da MAM Consultoria, ela une
              experiência prática e método estruturado para ajudar profissionais a conquistarem
              suas vagas com intenção e estratégia.
            </p>
            <p>
              Certificada pela Gupy como especialista em recrutamento e seleção, Mariele entende
              exatamente o que os recrutadores buscam — e como você pode se posicionar para se
              destacar em qualquer processo seletivo.
            </p>
          </div>

          {/* Highlights */}
          <ul className="space-y-3 mb-8">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[0.9rem] text-[rgba(245,240,235,0.75)]">
                <span className="w-2 h-2 rounded-full bg-[#e07b2a] mt-[0.4rem] shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <Link
            href="https://linkedin.com/in/marielemarquesoficial"
            target="_blank"
            className="inline-flex items-center gap-2 text-[0.85rem] font-medium tracking-widest uppercase text-[#f5f0eb] border border-[#2a2a2a] px-6 py-3 rounded-sm no-underline hover:border-[#e07b2a] transition-colors"
          >
            Ver perfil no LinkedIn →
          </Link>
        </div>
      </div>
    </section>
  );
}
