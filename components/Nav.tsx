"use client";

import { useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[5%] py-5 bg-[rgba(13,13,13,0.92)] backdrop-blur-xl border-b border-[#2a2a2a]">
      {/* Logo */}
      <Link href="#" className="font-serif text-xl font-semibold tracking-wide text-[#f5f0eb] no-underline">
        Mariele<span className="text-[#e07b2a]">.</span>
      </Link>

      {/* Desktop links */}
      <ul className="hidden md:flex gap-8 list-none">
        {[
          { href: "#sobre", label: "Sobre" },
          { href: "#como-funciona", label: "Método" },
          { href: "#servicos", label: "Serviços" },
          { href: "#depoimentos", label: "Resultados" },
        ].map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="text-[0.8rem] font-medium tracking-widest uppercase text-[#888] no-underline hover:text-[#f5f0eb] transition-colors"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Link
        href="#contato"
        className="hidden md:inline-block text-[0.78rem] font-semibold tracking-widest uppercase text-[#0d0d0d] bg-[#e07b2a] px-6 py-2.5 rounded-sm no-underline hover:bg-[#f59f3f] transition-colors"
      >
        Quero Mentoria
      </Link>

      {/* Hamburger */}
      <button
        className="flex md:hidden flex-col gap-[5px] cursor-pointer bg-transparent border-0"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
      >
        <span className="block w-6 h-px bg-[#f5f0eb]" />
        <span className="block w-6 h-px bg-[#f5f0eb]" />
        <span className="block w-6 h-px bg-[#f5f0eb]" />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#141414] border-b border-[#2a2a2a] p-6 flex flex-col gap-4 md:hidden">
          {[
            { href: "#sobre", label: "Sobre" },
            { href: "#como-funciona", label: "Método" },
            { href: "#servicos", label: "Serviços" },
            { href: "#depoimentos", label: "Resultados" },
            { href: "#contato", label: "Quero Mentoria" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium uppercase tracking-widest text-[#888] hover:text-[#f5f0eb] no-underline transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
