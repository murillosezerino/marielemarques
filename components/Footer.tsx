import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-[5%] py-8 border-t border-[#2a2a2a] flex flex-col md:flex-row items-center justify-between gap-4">
      <Link href="#" className="font-serif text-lg font-semibold text-[#f5f0eb] no-underline">
        Mariele Marques<span className="text-[#e07b2a]">.</span>
      </Link>

      <p className="text-[0.75rem] text-[#555]">
        © 2026 MAM Consultoria · Todos os direitos reservados
      </p>

      <div className="flex gap-6">
        <Link
          href="https://linkedin.com/in/marielemarquesoficial"
          target="_blank"
          className="text-[0.75rem] text-[#555] no-underline hover:text-[#888] transition-colors"
        >
          LinkedIn
        </Link>
        <Link
          href="https://wa.me/5511968987112"
          target="_blank"
          className="text-[0.75rem] text-[#555] no-underline hover:text-[#888] transition-colors"
        >
          WhatsApp
        </Link>
      </div>
    </footer>
  );
}
