"use client";

import { useState } from "react";

const sections = [
  { id: "hero", label: "Bayan", arabic: "بَيَان" },
  { id: "hierarchie", label: "Hierarchie", arabic: "مراتب" },
  { id: "sources", label: "9 Sources", arabic: "مصادر" },
  { id: "pipeline", label: "Pipeline", arabic: "منهج" },
  { id: "balagha", label: "Rhetorique", arabic: "بلاغة" },
  { id: "certitude", label: "Certitude", arabic: "يقين" },
  { id: "processus", label: "Processus", arabic: "عملية" },
  { id: "principes", label: "Principes", arabic: "أصول" },
] as const;

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Toggle button — fixed right edge */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-1/2 -translate-y-1/2 z-50 w-10 h-20 bg-ink-900 border border-ink-700 border-r-0 rounded-l-xl flex items-center justify-center transition-all duration-300 hover:bg-ink-800 hover:border-gold-700/50"
        style={{ right: open ? "280px" : "0" }}
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
      >
        <span className="text-gold-500 text-lg">
          {open ? "\u203A" : "\u2039"}
        </span>
      </button>

      {/* Overlay mobile */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar panel */}
      <nav
        className={`fixed top-0 right-0 h-full w-[280px] bg-ink-950 border-l border-ink-800 z-40 transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-12 pb-8 px-6">
          {/* Header */}
          <div className="mb-8">
            <p className="arabic text-2xl text-gold-500 mb-1">بَيَان</p>
            <p className="text-ink-500 text-xs">Navigation</p>
          </div>

          {/* Links */}
          <div className="flex-1 space-y-1">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between px-3 py-2.5 rounded-lg text-ink-300 hover:text-gold-400 hover:bg-ink-900/50 transition-all duration-200 group"
              >
                <span className="text-sm font-medium group-hover:text-gold-400">
                  {section.label}
                </span>
                <span className="arabic text-xs text-ink-600 group-hover:text-gold-700">
                  {section.arabic}
                </span>
              </a>
            ))}
          </div>

          {/* Footer */}
          <div className="pt-6 border-t border-ink-800">
            <p className="text-ink-600 text-xs text-center">
              9 sources &middot; 5 niveaux &middot; 8 etapes
            </p>
          </div>
        </div>
      </nav>
    </>
  );
}
