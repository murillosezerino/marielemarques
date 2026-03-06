const services = [
  {
    icon: "🎯",
    title: "Mentoria Individual",
    desc: "Acompanhamento personalizado com sessões 1:1, estratégia de recolocação e suporte durante todo o processo seletivo.",
  },
  {
    icon: "📄",
    title: "Currículo & LinkedIn",
    desc: "Reformulação completa do currículo e perfil no LinkedIn para atrair recrutadores e passar pelos filtros de ATS.",
  },
  {
    icon: "🎤",
    title: "Preparação para Entrevistas",
    desc: "Simulações de entrevistas reais, técnicas de resposta e como apresentar sua trajetória de forma convincente.",
  },
  {
    icon: "🔗",
    title: "Estratégia de Networking",
    desc: "Como usar o LinkedIn de forma estratégica, construir conexões relevantes e ser encontrado pelos recrutadores certos.",
  },
  {
    icon: "💼",
    title: "Transição de Carreira",
    desc: "Para profissionais que querem mudar de área ou nível, com roadmap claro de como fazer essa transição com segurança.",
  },
  {
    icon: "📊",
    title: "Mentoria para RH",
    desc: "Consultoria para empresas e equipes de RH sobre melhores práticas de recrutamento, onboarding e employer branding.",
  },
];

export default function Servicos() {
  return (
    <section id="servicos" className="px-[5%] py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        <p className="text-[0.72rem] font-semibold tracking-[0.14em] uppercase text-[#e07b2a] mb-3 text-center">
          O que ofereço
        </p>
        <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-light leading-[1.1] mb-4 text-center">
          Serviços &amp; <em className="text-[#e07b2a] italic">Mentoria</em>
        </h2>
        <p className="text-[rgba(245,240,235,0.55)] max-w-lg mx-auto text-center text-[0.95rem] mb-14">
          Soluções sob medida para diferentes momentos da sua carreira.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((svc) => (
            <div
              key={svc.title}
              className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-[4px] p-7 hover:border-[rgba(224,123,42,0.25)] hover:-translate-y-0.5 transition-all"
            >
              <div className="text-2xl mb-4">{svc.icon}</div>
              <h3 className="font-semibold text-[#f5f0eb] mb-2">{svc.title}</h3>
              <p className="text-[0.85rem] text-[rgba(245,240,235,0.55)] leading-[1.7]">
                {svc.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
