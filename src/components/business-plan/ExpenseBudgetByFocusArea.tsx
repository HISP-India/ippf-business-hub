import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
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

const focusAreas = [
  "Care: Static Clinic",
  "Care: Outreach, mobile clinic, Community-based, delivery",
  "Care: Other Services, enabled or referred (associated clinics)",
  "Care: Social Marketing Services",
  "Care: Digital Health Intervention and Selfcare",
  "Advocacy",
  "CSE",
  "CSE Online, including social media",
  "Partnerships and Movements: capacity-sharing, amplifying messages, and sub-granting",
  "Knowledge, research, evidence, innovation, and publishing, including peer-review articles",
  "Internal MA infrastructure, Organisational Development, Capacity Development, values, processes, and procedures",
];

const ExpenseBudgetByFocusArea = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  return (
    <div>
      <h2 className="text-lg font-semibold text-[#005F6A] flex items-center gap-1 mb-4">
        2.3 Breakdown by focus area
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

      {/* Focus area card */}
      <div className="border border-border rounded-md bg-background p-6">
        <h3 className="text-sm font-semibold text-[#005F6A] mb-2">Project budget based on focus area</h3>
        <p className="text-sm text-muted-foreground mb-6">
          Please note that the focus areas have been reduced from 22 to 11 in total.
        </p>

        <div className="flex flex-col gap-1">
          {projectItems.map((item, idx) => {
            const isOpen = openItem === idx;
            return (
              <Collapsible key={idx} open={isOpen} onOpenChange={(open) => setOpenItem(open ? idx : null)}>
                <CollapsibleTrigger
                  className="w-full text-left px-4 py-3 text-sm font-semibold text-primary rounded-md transition-colors"
                  style={{ backgroundColor: isOpen ? "#00EEEF33" : "#f0fdfa" }}
                >
                  {idx + 1}. {item}
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="border border-border rounded-b-md p-5 bg-background">
                    {/* Focus area table */}
                    <div className="border border-border rounded-md overflow-hidden mb-5">
                      <div className="grid grid-cols-[1fr_200px] bg-secondary/40 px-4 py-2 border-b border-border">
                        <span className="text-xs font-semibold text-[#005F6A]">Project Focus Area</span>
                        <span className="text-xs font-semibold text-[#005F6A] text-right">Budget by "Project Focus Area"</span>
                      </div>
                      {focusAreas.map((fa, faIdx) => (
                        <div key={faIdx} className={`grid grid-cols-[1fr_200px] px-4 py-3 items-center ${faIdx < focusAreas.length - 1 ? "border-b border-border" : ""}`}>
                          <span className="text-sm text-foreground">{faIdx + 1}. {fa}</span>
                          <Input className="h-9 text-right" />
                        </div>
                      ))}
                    </div>

                    {/* Variation */}
                    <div className="mb-5">
                      <label className="text-sm font-semibold text-[#005F6A] block mb-1">Variation from total project budget 2024</label>
                      <CurrencyInput readOnly />
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

export default ExpenseBudgetByFocusArea;
