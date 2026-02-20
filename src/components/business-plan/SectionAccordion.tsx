import React from "react";

interface SectionAccordionProps {
  number: number;
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

const SectionAccordion = ({
  number,
  title,
  isOpen,
  onToggle,
  children,
}: SectionAccordionProps) => (
  <div className="border border-border rounded-md overflow-hidden">
    <button
      onClick={onToggle}
      className={`w-full flex items-center gap-3 px-5 py-3 text-left transition-colors ${
        isOpen
          ? "bg-[#00AEEF]/20 border-b border-border"
          : "bg-background hover:bg-secondary/40"
      }`}
    >
      <span
        className={`flex items-center justify-center h-6 w-6 rounded-full text-xs font-semibold ${
          isOpen ? "bg-[#005F6A] text-white" : "text-[#005F6A]"
        }`}
      >
        {number}
      </span>
      <span className="text-sm font-semibold text-[#005F6A]">{title}</span>
    </button>
    {isOpen && <div className="p-5 bg-background">{children}</div>}
  </div>
);

export default SectionAccordion;
