const steps = [
  {
    num: "01",
    title: "Diagnóstico",
    desc: "Mapeamos sua situação atual, objetivos de carreira, pontos fortes e gaps que precisam ser trabalhados.",
  },
  {
    num: "02",
    title: "Posicionamento",
    desc: "Construímos sua marca profissional — currículo, LinkedIn e pitch pessoal alinhados com o que o mercado busca.",
  },
  {
    num: "03",
    title: "Estratégia",
    desc: "Definimos onde, como e para quais vagas você vai se candidatar. Networking ativo e candidatura estratégica.",
  },
  {
    num: "04",
    title: "Preparação",
    desc: "Treino para entrevistas, negociação salarial e como se comportar em cada etapa do processo seletivo.",
  },
  {
    num: "05",
    title: "Resultado",
    desc: "Acompanhamento até a conquista da vaga. Você não está sozinho durante o processo.",
  },
];

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="px-[5%] py-24 md:py-32 bg-[#141414]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[0.72rem] font-semibold tracking-[0.14em] uppercase text-[#e07b2a] mb-3">
            O Método
          </p>
          <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-light leading-[1.1] mb-4">
            Como funciona a{" "}
            <em className="text-[#e07b2a] italic">mentoria</em>
          </h2>
          <p className="text-[rgba(245,240,235,0.55)] max-w-lg mx-auto text-[0.95rem]">
            Um processo estruturado em etapas claras, do diagnóstico até a conquista da vaga ideal.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((step) => (
            <div
              key={step.num}
              className="step-card relative bg-[#1a1a1a] border border-[#2a2a2a] rounded-[4px] p-6 hover:border-[rgba(224,123,42,0.3)] transition-all group"
            >
              {/* Accent line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#e07b2a] to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-t-[4px]" />

              <div className="text-[2rem] font-serif font-light text-[rgba(224,123,42,0.4)] mb-4">
                {step.num}
              </div>
              <h3 className="font-semibold text-[#f5f0eb] mb-2 text-[0.95rem]">
                {step.title}
              </h3>
              <p className="text-[0.85rem] text-[rgba(245,240,235,0.55)] leading-[1.6]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
