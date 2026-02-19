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
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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

const NarrativePlan = () => {
  const [openSection, setOpenSection] = useState<string>("section-1");

  return (
    <div>
      <h1 className="text-xl font-semibold text-primary mb-4">1.2 Narrative Plan</h1>

      <Accordion
        type="single"
        collapsible
        value={openSection}
        onValueChange={(val) => setOpenSection(val)}
        className="border border-border rounded-md bg-background"
      >
        {/* Section 1: Country context and theory of change */}
        <AccordionItem value="section-1" className="border-b-0">
          <AccordionTrigger className="px-4 py-3 hover:no-underline">
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center h-6 w-6 rounded-full bg-primary text-primary-foreground text-xs font-bold">1</span>
              <span className="text-primary font-semibold text-base">Country context and theory of change</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="bg-[#E0F7F7] rounded-md px-4 py-2 mb-6">
              <span className="text-primary font-semibold flex items-center gap-2">
                <span className="flex items-center justify-center h-6 w-6 rounded-full bg-primary text-primary-foreground text-xs font-bold">1</span>
                Country context and theory of change
              </span>
            </div>

            {/* Ques 1 */}
            <div className="mb-6">
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
            <div className="mb-6">
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
            <div className="mb-6">
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
            <div className="mb-6">
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
            <div className="mb-6">
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
            <div className="mb-6">
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
            <div className="flex justify-end gap-3 mt-4">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
                SAVE AS DRAFT
              </Button>
              <Button className="bg-[#005F6A] hover:bg-[#004F5A] text-white">
                NEXT
              </Button>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Section 2: Organisational status */}
        <AccordionItem value="section-2" className="border-b-0 border-t border-border">
          <AccordionTrigger className="px-4 py-3 hover:no-underline">
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center h-6 w-6 rounded-full bg-primary text-primary-foreground text-xs font-bold">2</span>
              <span className="text-primary font-semibold text-base">Organisational status</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="bg-[#E0F7F7] rounded-md px-4 py-2 mb-6">
              <span className="text-primary font-semibold flex items-center gap-2">
                <span className="flex items-center justify-center h-6 w-6 rounded-full bg-primary text-primary-foreground text-xs font-bold">2</span>
                Organisational status
              </span>
            </div>

            <h3 className="text-primary font-semibold text-base mb-4">Challenges and opportunities</h3>

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

            <div className="flex justify-end gap-3 mt-4">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
                SAVE AS DRAFT
              </Button>
              <Button className="bg-[#005F6A] hover:bg-[#004F5A] text-white">
                NEXT
              </Button>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Section 3: Technical Assistance */}
        <AccordionItem value="section-3" className="border-b-0 border-t border-border">
          <AccordionTrigger className="px-4 py-3 hover:no-underline">
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center h-6 w-6 rounded-full bg-primary text-primary-foreground text-xs font-bold">3</span>
              <span className="text-primary font-semibold text-base">Technical Assistance</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="bg-[#E0F7F7] rounded-md px-4 py-2 mb-6">
              <span className="text-primary font-semibold flex items-center gap-2">
                <span className="flex items-center justify-center h-6 w-6 rounded-full bg-primary text-primary-foreground text-xs font-bold">3</span>
                Technical Assistance
              </span>
            </div>

            <p className="text-sm text-muted-foreground italic mb-6">
              Choose as many as relevant with number 1 being the top priority/area of expertise and 5 being the lowest.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-6">
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
                <h4 className="font-semibold text-sm text-primary mb-4">
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

            <div className="mb-6">
              <Label className="text-foreground font-semibold text-sm">Other</Label>
              <Textarea className="mt-2 min-h-[100px]" />
              <WordCounter max={200} />
            </div>

            <div className="flex justify-end gap-3 mt-4">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
                SAVE AS DRAFT
              </Button>
              <Button className="bg-[#005F6A] hover:bg-[#004F5A] text-white">
                NEXT: 2.1 Project Description
              </Button>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default NarrativePlan;
