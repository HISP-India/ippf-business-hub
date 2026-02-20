import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

/* ───── types ───── */
interface ContactRow {
  label: string;
  fields: string[];
}

/* ───── static data ───── */
const volunteerRanges = ["0-10", "11-25", "26-50", "51-100", "101-250", "251 or above"];

const orgTypes = [
  "Not-for-Profit NGO or Charity",
  "Not-for-profit Membership organisation or Network",
  "Parastatal (state joint venture)",
  "For-profit organisation",
  "Community-based organisation",
  "Other",
];

const focusAreas = [
  "Abortion Care",
  "General SRHR or FP",
  "Advocacy & Norms shifting",
  "Humanitarian SRHR",
  "Youth Care or CSE",
  "HIV Prevention or Care",
  "LGBTQ+ Care",
];

const advocacyPriorities = [
  "Decriminalisation of abortion",
  "Access to comprehensive sexuality education",
  "Universal health coverage including SRH",
  "Ending gender-based violence",
  "LGBTQ+ rights",
  "Youth participation",
  "Other",
];

const commoditySources = [
  { id: "ippf", label: "IPPF (see 3.4)" },
  { id: "moh", label: "Ministry of Health (upload MoU)" },
  { id: "unfpa", label: "UNFPA Supplies (upload IP Agreement)" },
  { id: "local", label: "Local Procurement" },
];

const contactRows: ContactRow[] = [
  { label: "Executive Director / CEO (or equivalent)", fields: ["Name", "Contact Email", "Contact phone"] },
  { label: "Board chair / President", fields: ["Name", "Contact Email", "Contact phone"] },
  { label: "Officer of the board #1 (e.g., vice president, secretary, treasurer)", fields: ["Name", "Contact Email", "Contact phone"] },
  { label: "Officer of the board #2 (e.g., vice president, secretary, treasurer)", fields: ["Name", "Contact Email", "Contact phone"] },
  { label: "Officer of the board #3 (e.g., vice president, secretary, treasurer)", fields: ["Name", "Contact Email", "Contact phone"] },
  { label: "Youth board member", fields: ["Name", "Contact Email", "Contact phone"] },
  { label: "Programmatic lead(s)", fields: ["Name", "Contact Email", "Contact phone"] },
  { label: "Programmatic lead(s)", fields: ["Name", "Contact Email", "Contact phone"] },
  { label: "Programmatic lead(s)", fields: ["Name", "Contact Email", "Contact phone"] },
  { label: "Programmatic lead(s)", fields: ["Name", "Contact Email", "Contact phone"] },
  { label: "Finance lead", fields: ["Name", "Contact Email", "Contact phone"] },
];

const keyDocUploads = [
  "Please upload key strategy documents",
  "Please upload key annual report documents",
  "Please upload key audits reports documents (if the most recent audit reports was submitted in 2024 Annual Reporting, please leave it as is)",
  "Please upload valid Memorandum of Understanding with your Government, if in place and available",
  "Please upload valid Implementing Partner Agreement with UNFPA (Supplies), if in place and available",
  "Other 1",
  "Other 2",
];

import SectionAccordion from "./SectionAccordion";

/* ───── chip selector ───── */
const ChipSelect = ({
  options,
  selected,
  onSelect,
}: {
  options: string[];
  selected: string | null;
  onSelect: (val: string) => void;
}) => (
  <div className="flex flex-wrap gap-2">
    {options.map((opt) => (
      <button
        key={opt}
        type="button"
        onClick={() => onSelect(opt)}
        className={`px-4 py-1.5 rounded-full border text-sm transition-colors ${
          selected === opt
            ? "bg-primary text-primary-foreground border-primary"
            : "bg-background border-border text-foreground hover:bg-secondary/40"
        }`}
      >
        {opt}
      </button>
    ))}
  </div>
);

/* ───── main component ───── */
interface OrganizationDetailsProps {
  ma?: string;
  region?: string;
}

const OrganizationDetails = ({ ma = "IPPF", region = "" }: OrganizationDetailsProps) => {
  const [openSection, setOpenSection] = useState<number>(1);
  const [selectedVolunteers, setSelectedVolunteers] = useState<string | null>(null);
  const [selectedOrgType, setSelectedOrgType] = useState<string | null>(null);
  const [primaryFocus, setPrimaryFocus] = useState<string | null>(null);
  const [secondaryFocus, setSecondaryFocus] = useState<string | null>(null);
  const [hasYouthGroup, setHasYouthGroup] = useState<string | null>(null);
  const [hasBranches, setHasBranches] = useState<string | null>(null);

  const toggle = (n: number) => setOpenSection(openSection === n ? 0 : n);

  const goNext = () => {
    if (openSection < 4) setOpenSection(openSection + 1);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold text-[#005F6A] mb-5">1.1 Organization Details</h2>

      <div className="space-y-3">
        {/* ─── 1. Membership Details ─── */}
        <SectionAccordion number={1} title="Membership details" isOpen={openSection === 1} onToggle={() => toggle(1)}>
          <div className="space-y-5">
            {/* Row 1 – read-only pre-filled */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label className="text-foreground font-semibold text-sm">Country of Operation</Label>
                <Input className="mt-1 bg-secondary/30" defaultValue="United Kingdom" readOnly />
              </div>
              <div>
                <Label className="text-foreground font-semibold text-sm">Organisation Code</Label>
                <Input className="mt-1 bg-secondary/30" defaultValue="TEST" readOnly />
              </div>
              <div>
                <Label className="text-foreground font-semibold text-sm">IPPF Region</Label>
                <Input className="mt-1 bg-secondary/30" defaultValue={region || "Europe"} readOnly />
              </div>
            </div>

            {/* Row 2 – read-only pre-filled */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label className="text-foreground font-semibold text-sm">Organisation Name (English)</Label>
                <Input className="mt-1 bg-secondary/30" defaultValue={ma} readOnly />
              </div>
              <div>
                <Label className="text-foreground font-semibold text-sm">Organisation name (original language)</Label>
                <Input className="mt-1 bg-secondary/30" defaultValue={ma} readOnly />
              </div>
            </div>

            {/* Row 3 – Grant amounts (read-only pre-filled) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label className="text-foreground font-semibold text-sm">
                  Formula-generated proposed grant amount (Year 1) (USD)
                </Label>
                <div className="relative mt-1">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">$</span>
                  <Input className="pl-7 bg-secondary/30" defaultValue="150,000" readOnly />
                </div>
              </div>
              <div>
                <Label className="text-foreground font-semibold text-sm">
                  Formula-generated proposed grant amount (Year 2) (USD) (only 75% guaranteed)
                </Label>
                <div className="relative mt-1">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">$</span>
                  <Input className="pl-7 bg-secondary/30" defaultValue="112,500" readOnly />
                </div>
              </div>
              <div>
                <Label className="text-foreground font-semibold text-sm">
                  Provisional formula-generated grant amount (Year 3) (USD) (only 75% guaranteed)
                </Label>
                <div className="relative mt-1">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">$</span>
                  <Input className="pl-7 bg-secondary/30" defaultValue="112,500" readOnly />
                </div>
              </div>
            </div>

            {/* Row 4 – Contact person */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label className="text-foreground font-semibold text-sm">Primary contact person</Label>
                <Input className="mt-1" />
              </div>
              <div>
                <Label className="text-foreground font-semibold text-sm">Business plan contact role</Label>
                <Input className="mt-1" />
              </div>
              <div>
                <Label className="text-foreground font-semibold text-sm">Business plan Contact Email</Label>
                <Input className="mt-1" />
              </div>
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-3 pt-2">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
                SAVE AS DRAFT
              </Button>
              <Button onClick={goNext}>NEXT</Button>
            </div>
          </div>
        </SectionAccordion>

        {/* ─── 2. Contact Information ─── */}
        <SectionAccordion number={2} title="Contact Information" isOpen={openSection === 2} onToggle={() => toggle(2)}>
          <div className="space-y-5">
            <div>
              <Label className="text-foreground font-semibold text-sm">Address</Label>
              <Input className="mt-1" />
            </div>

            <h3 className="text-base font-semibold text-foreground">Key Contacts</h3>

            {contactRows.map((row, idx) => (
              <div key={idx}>
                <p className="text-sm font-semibold text-[#005F6A] mb-2">{row.label}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {row.fields.map((field) => (
                    <div key={field}>
                      <Label className="text-foreground text-sm">{field}</Label>
                      <Input className="mt-1" />
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Current board term */}
            <div>
              <p className="text-sm font-semibold text-[#005F6A] mb-2">Current board term</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label className="text-foreground text-sm">Start year</Label>
                  <Input className="mt-1" />
                </div>
                <div>
                  <Label className="text-foreground text-sm">End year</Label>
                  <Input className="mt-1" />
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
                SAVE AS DRAFT
              </Button>
              <Button onClick={goNext}>NEXT</Button>
            </div>
          </div>
        </SectionAccordion>

        {/* ─── 3. Organisation Data ─── */}
        <SectionAccordion number={3} title="Organisation Data" isOpen={openSection === 3} onToggle={() => toggle(3)}>
          <div className="space-y-6">
            {/* Strategic period */}
            <div>
              <p className="text-sm font-semibold text-[#005F6A] mb-2">Strategic period</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label className="text-foreground text-sm">Start year</Label>
                  <Input className="mt-1" />
                </div>
                <div>
                  <Label className="text-foreground text-sm">End year</Label>
                  <Input className="mt-1" />
                </div>
              </div>
            </div>

            {/* Staff */}
            <div>
              <p className="text-sm font-semibold text-[#005F6A] mb-2">
                Total Number of Fixed Staff (paid staff on a contract)
              </p>
              <div className="max-w-xs">
                <Label className="text-foreground text-sm">Staff Size</Label>
                <Input className="mt-1" />
              </div>
            </div>

            {/* Volunteers */}
            <div>
              <p className="text-sm font-semibold text-[#005F6A] mb-2">
                Total Number of volunteers (excluding governance)
              </p>
              <ChipSelect options={volunteerRanges} selected={selectedVolunteers} onSelect={setSelectedVolunteers} />
            </div>

            {/* Type of org */}
            <div>
              <p className="text-sm font-semibold text-[#005F6A] mb-2">Type of organisation</p>
              <ChipSelect options={orgTypes} selected={selectedOrgType} onSelect={setSelectedOrgType} />
            </div>

            {/* Primary focus */}
            <div>
              <p className="text-sm font-semibold text-[#005F6A] mb-2">
                What is your primary focus area (choose most relevant)
              </p>
              <ChipSelect options={focusAreas} selected={primaryFocus} onSelect={setPrimaryFocus} />
            </div>

            {/* Secondary focus */}
            <div>
              <p className="text-sm font-semibold text-[#005F6A] mb-2">
                What is your secondary focus area (chose most relevant)
              </p>
              <ChipSelect options={focusAreas} selected={secondaryFocus} onSelect={setSecondaryFocus} />
            </div>

            {/* Youth group */}
            <div>
              <p className="text-sm font-semibold text-[#005F6A] mb-2">
                Does your organisation have a youth group or networks?
              </p>
              <ChipSelect options={["Yes", "No"]} selected={hasYouthGroup} onSelect={setHasYouthGroup} />
              {hasYouthGroup === "Yes" && (
                <div className="mt-3 max-w-md">
                  <Label className="text-foreground text-sm">If yes, how many youth volunteers do you have?</Label>
                  <Input className="mt-1" />
                </div>
              )}
            </div>

            {/* Branches */}
            <div>
              <p className="text-sm font-semibold text-[#005F6A] mb-2">Does the MA have branches?</p>
              <ChipSelect options={["Yes", "No"]} selected={hasBranches} onSelect={setHasBranches} />
              {hasBranches === "Yes" && (
                <div className="mt-3 max-w-md">
                  <Label className="text-foreground text-sm">If yes, number of branches</Label>
                  <Input className="mt-1" />
                </div>
              )}
            </div>

            {/* Advocacy priorities */}
            <div>
              <p className="text-sm font-semibold text-[#005F6A] mb-2">
                Advocacy priority 1 (choose most relevant)
              </p>
              <Label className="text-muted-foreground text-xs">Select Any</Label>
              <Select>
                <SelectTrigger className="mt-1 max-w-md">
                  <SelectValue placeholder="Choose" />
                </SelectTrigger>
                <SelectContent>
                  {advocacyPriorities.map((p) => (
                    <SelectItem key={p} value={p}>{p}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <p className="text-sm font-semibold text-[#005F6A] mb-2">
                Advocacy priority 2 (choose most relevant)
              </p>
              <Select>
                <SelectTrigger className="mt-1 max-w-md">
                  <SelectValue placeholder="Choose" />
                </SelectTrigger>
                <SelectContent>
                  {advocacyPriorities.map((p) => (
                    <SelectItem key={p} value={p}>{p}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Commodities checkboxes */}
            <div>
              <p className="text-sm font-semibold text-[#005F6A] mb-2">
                In this year will your MA receive (donated) commodities from (choose all that apply):
              </p>
              <div className="space-y-2">
                {commoditySources.map((src) => (
                  <div key={src.id} className="flex items-center gap-2">
                    <Checkbox id={src.id} />
                    <label htmlFor={src.id} className="text-sm text-foreground cursor-pointer">
                      {src.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Commodity values */}
            <div>
              <p className="text-sm font-semibold text-[#005F6A] mb-2">
                What is the total value of commodities in USD you plan to access in this year from:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {commoditySources.map((src) => (
                  <div key={src.id}>
                    <Label className="text-foreground text-sm font-semibold">{src.label}</Label>
                    <Input className="mt-1" />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
                SAVE AS DRAFT
              </Button>
              <Button onClick={goNext}>NEXT</Button>
            </div>
          </div>
        </SectionAccordion>

        {/* ─── 4. Key Documents ─── */}
        <SectionAccordion number={4} title="Key Documents" isOpen={openSection === 4} onToggle={() => toggle(4)}>
          <div className="space-y-5">
            {keyDocUploads.map((doc, idx) => (
              <div key={idx}>
                <p className="text-sm font-semibold text-foreground mb-2">{doc}</p>
                <Input type="file" className="max-w-lg" />
              </div>
            ))}

            <div className="flex justify-end gap-3 pt-2">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
                SAVE AS DRAFT
              </Button>
              <Button>NEXT: 1.2 Narrative Plan</Button>
            </div>
          </div>
        </SectionAccordion>
      </div>
    </div>
  );
};

export default OrganizationDetails;
