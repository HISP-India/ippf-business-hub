import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Info } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

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

const ProjectExpenseBudget = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  return (
    <div>
      <h2 className="text-lg font-semibold text-[#005F6A] flex items-center gap-1 mb-4">
        2.2 Project Expense Budget
        <Info className="h-4 w-4 text-[#005F6A]" />
      </h2>

      {/* Summary row */}
      <div className="border border-border rounded-md bg-background overflow-hidden mb-6">
        <div className="grid grid-cols-4">
          <div className="p-3 border-r border-border">
            <label className="text-xs font-semibold text-[#005F6A] block mb-1">Basic Project Budget</label>
            <CurrencyInput readOnly defaultValue="" />
          </div>
          <div className="p-3 border-r border-border">
            <label className="text-xs font-semibold text-[#005F6A] block mb-1">IPPF Core Funding Allocated</label>
            <CurrencyInput readOnly defaultValue="" />
          </div>
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

      {/* Project Details */}
      <div className="border border-border rounded-md bg-background p-6">
        <h3 className="text-sm font-semibold text-[#005F6A] mb-4">Project Details</h3>

        <div className="flex flex-col gap-1">
          {projectItems.map((item, idx) => {
            const isOpen = openItem === idx;
            return (
              <Collapsible key={idx} open={isOpen} onOpenChange={(open) => setOpenItem(open ? idx : null)}>
                <CollapsibleTrigger className="w-full text-left px-4 py-3 text-sm font-semibold text-primary rounded-md transition-colors"
                  style={{ backgroundColor: isOpen ? "#00EEEF33" : "#f0fdfa" }}
                >
                  {idx + 1}. {item}
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="border border-border rounded-b-md p-5 bg-background">
                    {/* Fields row */}
                    <div className="grid grid-cols-4 gap-4 mb-5">
                      <div>
                        <label className="text-xs font-semibold text-[#005F6A] block mb-1">Basic Project Budget</label>
                        <CurrencyInput />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-[#005F6A] block mb-1">IPPF Core Funding Allocated</label>
                        <CurrencyInput />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-[#005F6A] block mb-1">Total Annual Budget</label>
                        <CurrencyInput />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-[#005F6A] block mb-1">Estimated Likelihood</label>
                        <Select defaultValue="likely">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="likely">Likely (Over 80%)</SelectItem>
                            <SelectItem value="possible">Possible (50-80%)</SelectItem>
                            <SelectItem value="unlikely">Unlikely (Below 50%)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
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
                  </div>
                </CollapsibleContent>
              </Collapsible>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectExpenseBudget;
