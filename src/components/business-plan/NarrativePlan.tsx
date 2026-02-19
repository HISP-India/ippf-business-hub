import { useState } from "react";
import { Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const technicalAreas = [
  "Abortion",
  "Adolescents",
  "Advocacy",
  "Clinical Services",
  "Comprehensive Sexuality Education",
  "Contraception",
  "Disability",
  "Gender",
  "Gender-Based Violence",
  "HIV & AIDS",
  "Humanitarian",
  "LGBTQI+",
  "Maternal Health",
  "Mental Health",
  "Research",
  "STIs",
  "Youth",
];

const InfoIcon = ({ tooltip }: { tooltip: string }) => (
  <Tooltip>
    <TooltipTrigger asChild>
      <Info className="h-4 w-4 inline-block ml-1 text-muted-foreground cursor-help" />
    </TooltipTrigger>
    <TooltipContent className="max-w-xs text-sm">{tooltip}</TooltipContent>
  </Tooltip>
);

const WordCounter = ({ max }: { max: number }) => (
  <p className="text-xs text-muted-foreground mt-1 italic">{max} words remaining</p>
);

/* ───── Reusable accordion matching 1.1 style ───── */
const SectionAccordion = ({
  number,
  title,
  isOpen,
  onToggle,
  children,
}: {
  number: number;
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) => (
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

const NarrativePlan = () => {
  const [openSection, setOpenSection] = useState<number>(1);

  const toggle = (n: number) => setOpenSection(openSection === n ? 0 : n);
  const goNext = () => {
    if (openSection < 3) setOpenSection(openSection + 1);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold text-[#005F6A] mb-5">1.2 Narrative Plan</h2>

      <div className="space-y-3">
        {/* ─── 1. Country context and theory of change ─── */}
        <SectionAccordion number={1} title="Country context and theory of change" isOpen={openSection === 1} onToggle={() => toggle(1)}>
          <div className="space-y-6">
            {/* Ques 1 */}
            <div>
              <Label className="text-foreground font-semibold text-sm">
                Ques 1. Country context <InfoIcon tooltip="Describe the country context as relevant to SRHR." />
              </Label>
              <p className="text-xs text-muted-foreground italic mt-1 mb-2">
                Please describe your country context as relevant to SRHR. What are the main SRHR gaps and social or political factors that should be addressed in the remainder of the IPPF strategic period (e.g., unmet need, service gaps, political environment, laws, policies, social norms, national health/education programmes and innovations, opposition, etc.). Please use updated and verified statistics where possible, and mention marginalized groups as relevant (500 words max)
              </p>
              <Textarea className="min-h-[120px]" />
              <WordCounter max={500} />
            </div>

            {/* Ques 2 */}
            <div>
              <Label className="text-foreground font-semibold text-sm">
                Ques 2. Strategy <InfoIcon tooltip="Describe your current strategy or theory of change." />
              </Label>
              <p className="text-xs text-muted-foreground italic mt-1 mb-2">
                Describe your current high-level strategy or theory of change. How does it respond to your local needs and context described above? What are its key components and activities, and how will you operationalize it?
              </p>
              <p className="text-xs text-muted-foreground italic mb-2">
                Please outline how it aligns with IPPF's strategic framework. If there are specific target groups you aim to serve, please mention them here. Please highlight any new approaches and how they differ from your past business plans or approaches.
              </p>
              <Textarea className="min-h-[120px]" />
              <WordCounter max={800} />
            </div>

            {/* Ques 3 */}
            <div>
              <Label className="text-foreground font-semibold text-sm">
                Ques 3. Landscape of other actors <InfoIcon tooltip="Describe other key actors in your country." />
              </Label>
              <p className="text-xs text-muted-foreground italic mt-1 mb-2">
                Who are the other key actors in your country (and region if applicable) working to advance SRHR (e.g. civil society, social movements, government ministries, parliamentarians, private sector, etc.)?
              </p>
              <p className="text-xs text-muted-foreground italic mb-2">
                How does your organization partner with them, and how do you operationalize those partnerships? Do you have partnerships outside of the SRHR sector?
              </p>
              <Textarea className="min-h-[120px]" />
              <WordCounter max={500} />
            </div>

            {/* Ques 4 */}
            <div>
              <Label className="text-foreground font-semibold text-sm">
                Ques 4. External risks and risk mitigation <InfoIcon tooltip="Describe critical external risks and challenges." />
              </Label>
              <p className="text-xs text-muted-foreground italic mt-1 mb-2">
                Within a three-year perspective, describe critical external risks and challenges related to the delivery of your Business Plan (e.g., political, economic), and your efforts to address/mitigate them.
              </p>
              <Textarea className="min-h-[100px]" />
              <WordCounter max={250} />
            </div>

            {/* Ques 5 */}
            <div>
              <Label className="text-foreground font-semibold text-sm">
                Ques 5. SMART Outcomes <InfoIcon tooltip="Describe your medium term strategic outcomes." />
              </Label>
              <p className="text-xs text-muted-foreground italic mt-1">
                SMART: Specific, Measurable, Achievable, Relevant, and Time-bound Outcomes
              </p>
              <p className="text-xs text-muted-foreground italic mt-1 mb-1">
                Describe your medium term (3-year) expected strategic outcomes (up to five).
              </p>
              <p className="text-xs text-primary italic mb-3">
                For example: IPPF Strat Pillar 1: By December 2026, rolled out at least three national Digital Health Interventions in four national regions.
              </p>
              {[1, 2, 3, 4, 5].map((n) => (
                <div key={n} className="mb-3">
                  <Textarea className="min-h-[60px]" />
                  <WordCounter max={50} />
                </div>
              ))}
            </div>

            {/* Ques 6 */}
            <div>
              <Label className="text-foreground font-semibold text-sm">
                Ques 6. Youth Leadership and Involvement <InfoIcon tooltip="Describe the process to ensure youth decided 5% of your core funding." />
              </Label>
              <p className="text-xs text-muted-foreground italic mt-1 mb-2">
                Describe the process followed to ensure youth decided 5% of your core funding. Please list the projects that will be youth led and/or have youth involvement.
              </p>
              <Textarea className="min-h-[100px]" />
              <WordCounter max={250} />
            </div>

            {/* Action buttons */}
            <div className="flex justify-end gap-3 pt-2">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
                SAVE AS DRAFT
              </Button>
              <Button onClick={goNext}>NEXT</Button>
            </div>
          </div>
        </SectionAccordion>

        {/* ─── 2. Organisational status ─── */}
        <SectionAccordion number={2} title="Organisational status" isOpen={openSection === 2} onToggle={() => toggle(2)}>
          <div className="space-y-5">
            <h3 className="text-base font-semibold text-[#005F6A]">Challenges and opportunities</h3>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="text-left text-sm font-semibold text-foreground p-3 w-1/3"></th>
                    <th className="text-left text-sm font-semibold text-foreground p-3 w-1/3">Challenges</th>
                    <th className="text-left text-sm font-semibold text-foreground p-3 w-1/3">Opportunities</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { label: "Institutional", example: "For example: governance, leadership, staff, systems, etc" },
                    { label: "Operational", example: "For example: administration, logistics, supply chain, demand, etc." },
                    { label: "Programmatic", example: "For example: delivery capacity, M&E, quality of care, client interest" },
                    { label: "Financial", example: "For example: audits, management letters, capacity, systems, etc." },
                    { label: "Sustainability challenges", example: "For example: income diversification, social enterprise, domestic financing, etc." },
                  ].map((row) => (
                    <tr key={row.label} className="border-t border-border">
                      <td className="p-3 align-top">
                        <p className="font-semibold text-sm text-foreground">
                          {row.label} <InfoIcon tooltip={row.example} />
                        </p>
                        <p className="text-xs text-muted-foreground italic mt-1">{row.example}</p>
                      </td>
                      <td className="p-3 align-top">
                        <Textarea className="min-h-[80px]" />
                        <WordCounter max={200} />
                      </td>
                      <td className="p-3 align-top">
                        <Textarea className="min-h-[80px]" />
                        <WordCounter max={200} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
                SAVE AS DRAFT
              </Button>
              <Button onClick={goNext}>NEXT</Button>
            </div>
          </div>
        </SectionAccordion>

        {/* ─── 3. Technical Assistance ─── */}
        <SectionAccordion number={3} title="Technical Assistance" isOpen={openSection === 3} onToggle={() => toggle(3)}>
          <div className="space-y-5">
            <p className="text-sm text-muted-foreground italic">
              Choose as many as relevant with number 1 being the top priority/area of expertise and 5 being the lowest.
            </p>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-sm text-foreground mb-4">
                  Main Technical Assistance / Capacity (our organisational needs)
                </h4>
                {[1, 2, 3, 4, 5].map((n) => (
                  <div key={n} className="flex items-center gap-2 mb-3">
                    <span className="text-sm text-muted-foreground w-4">{n})</span>
                    <Select>
                      <SelectTrigger className="flex-1">
                        <SelectValue placeholder="Choose" />
                      </SelectTrigger>
                      <SelectContent>
                        {technicalAreas.map((area) => (
                          <SelectItem key={area} value={area}>{area}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                ))}
              </div>
              <div>
                <h4 className="font-semibold text-sm text-[#005F6A] mb-4">
                  Organisational Areas of Expertise / Capacity (we can share tools & train others)
                </h4>
                {[1, 2, 3, 4, 5].map((n) => (
                  <div key={n} className="flex items-center gap-2 mb-3">
                    <span className="text-sm text-muted-foreground w-4">{n})</span>
                    <Select>
                      <SelectTrigger className="flex-1">
                        <SelectValue placeholder="Choose" />
                      </SelectTrigger>
                      <SelectContent>
                        {technicalAreas.map((area) => (
                          <SelectItem key={area} value={area}>{area}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Label className="text-foreground font-semibold text-sm">Other</Label>
              <Textarea className="mt-2 min-h-[100px]" />
              <WordCounter max={200} />
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
                SAVE AS DRAFT
              </Button>
              <Button>NEXT: 2.1 Project Description</Button>
            </div>
          </div>
        </SectionAccordion>
      </div>
    </div>
  );
};

export default NarrativePlan;
