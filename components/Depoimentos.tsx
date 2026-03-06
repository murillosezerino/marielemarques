const testimonials = [
  {
    stars: 5,
    text: "Em 6 semanas de mentoria consegui 3 entrevistas e uma proposta de emprego. O método da Mariele é direto ao ponto.",
    initial: "R",
    name: "Rafael S.",
    role: "Analista de Marketing · SP",
  },
  {
    stars: 5,
    text: "Depois de 8 meses desempregada, a Mariele me ajudou a reposicionar meu LinkedIn e em menos de 1 mês tive retorno de recrutadores.",
    initial: "A",
    name: "Amanda L.",
    role: "Coordenadora de Projetos · RJ",
  },
  {
    stars: 5,
    text: "A preparação para entrevista foi o diferencial. Cheguei confiante, soube responder tudo e fui aprovado na primeira tentativa.",
    initial: "C",
    name: "Carlos M.",
    role: "Engenheiro de Software · MG",
  },
];

export default function Depoimentos() {
  return (
    <section id="depoimentos" className="px-[5%] py-24 md:py-32 bg-[#141414]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[0.72rem] font-semibold tracking-[0.14em] uppercase text-[#e07b2a] mb-3">
            Resultados reais
          </p>
          <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-light leading-[1.1]">
            O que dizem os{" "}
            <em className="text-[#e07b2a] italic">mentorados</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="testimonial-card bg-[#1a1a1a] border border-[#2a2a2a] rounded-[4px] p-7"
            >
              <div className="text-[#e07b2a] text-lg mb-4">
                {"★".repeat(t.stars)}
              </div>
              <p className="text-[0.9rem] text-[rgba(245,240,235,0.8)] leading-[1.7] mb-6 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[rgba(224,123,42,0.15)] border border-[rgba(224,123,42,0.3)] flex items-center justify-center text-[#e07b2a] text-sm font-semibold">
                  {t.initial}
                </div>
                <div>
                  <div className="text-[0.85rem] font-semibold text-[#f5f0eb]">
                    {t.name}
                  </div>
                  <div className="text-[0.75rem] text-[#888]">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
