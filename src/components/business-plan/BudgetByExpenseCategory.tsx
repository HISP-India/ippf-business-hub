import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";
import SectionAccordion from "./SectionAccordion";

const CurrencyInput = ({ className = "", ...props }: React.ComponentProps<typeof Input>) => (
  <div className={`flex items-center ${className}`}>
    <span className="px-2 text-sm text-muted-foreground border border-r-0 border-input rounded-l-md bg-secondary/30 h-10 flex items-center">$</span>
    <Input className="rounded-l-none" {...props} />
  </div>
);

const projectItems = [
  "Information and access to Family Planning services",
  "Administrative and General Services",
  "IPPF contraceptives and other supplies",
  "Sexual and Reproductive Health Education and services to young people",
  "Cervical Cancer Screening",
  "Antenatal/Postnatal Care",
  "Community Based Distribution",
  "Training of Staff and Volunteer",
  "Family Health Services",
  "HIV/AIDS Reduction STI/RTI Screening",
  "Implementing Partner to CIWILL",
];

const BudgetByExpenseCategory = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggle = (idx: number) => setOpenItem(openItem === idx ? null : idx);

  return (
    <div>
      <h2 className="text-lg font-semibold text-[#005F6A] flex items-center gap-1 mb-4">
        2.4 Breakdown by expense category
        <Info className="h-4 w-4 text-[#005F6A]" />
      </h2>

      {/* Summary row */}
      <div className="border border-border rounded-md bg-background overflow-hidden mb-6">
        <div className="grid grid-cols-2">
          <div className="p-3 border-r border-border">
            <label className="text-xs font-semibold text-[#005F6A] block mb-1">Total Annual Budget</label>
            <CurrencyInput readOnly defaultValue="" />
          </div>
          <div className="p-3">
            <label className="text-xs font-semibold text-[#005F6A] block mb-1">Difference</label>
            <CurrencyInput readOnly defaultValue="0" className="[&_input]:bg-green-100" />
          </div>
        </div>
      </div>

      {/* Project budget card */}
      <div className="border border-border rounded-md bg-background p-6">
        <h3 className="text-sm font-semibold text-[#005F6A] mb-4">Project budget based on expense category</h3>

        <div className="space-y-3">
          {projectItems.map((item, idx) => (
            <SectionAccordion
              key={idx}
              number={idx + 1}
              title={item}
              isOpen={openItem === idx}
              onToggle={() => toggle(idx)}
            >
              {/* Expense category fields */}
              <div className="grid grid-cols-4 gap-4 mb-5">
                <div>
                  <label className="text-xs font-semibold text-[#005F6A] block mb-1">Personnel</label>
                  <CurrencyInput />
                </div>
                <div>
                  <label className="text-xs font-semibold text-[#005F6A] block mb-1">Direct project activities</label>
                  <CurrencyInput />
                </div>
                <div>
                  <label className="text-xs font-semibold text-[#005F6A] block mb-1">Commodities</label>
                  <CurrencyInput />
                </div>
                <div>
                  <label className="text-xs font-semibold text-[#005F6A] block mb-1">Indirect/ support costs</label>
                  <CurrencyInput />
                </div>
              </div>

              {/* Variation */}
              <div className="mb-5">
                <label className="text-sm font-semibold text-[#005F6A] flex items-center gap-1 mb-1">
                  Variation from total project budget
                  <Info className="h-3.5 w-3.5 text-[#005F6A]" />
                </label>
                <CurrencyInput readOnly defaultValue="0" className="[&_input]:bg-green-100" />
              </div>

              {/* Comments */}
              <div className="mb-2">
                <label className="text-sm font-medium text-foreground">
                  Comments <span className="text-muted-foreground font-normal">( optional )</span>
                </label>
                <Textarea className="mt-1" rows={4} />
                <p className="text-xs text-muted-foreground mt-1">200 words remaining</p>
              </div>

              {/* Actions */}
              <div className="flex justify-end gap-2 mt-4">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
                  SAVE AS DRAFT
                </Button>
                <Button className="bg-[#005F6A] hover:bg-[#004f58] text-white">
                  NEXT
                </Button>
              </div>
            </SectionAccordion>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BudgetByExpenseCategory;
