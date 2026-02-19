import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const CurrencyInput = ({ className = "", ...props }: React.ComponentProps<typeof Input>) => (
  <div className={`flex items-center ${className}`}>
    <span className="px-2 text-sm text-muted-foreground border border-r-0 border-input rounded-l-md bg-secondary/30 h-10 flex items-center">$</span>
    <Input className="rounded-l-none" {...props} />
  </div>
);

const localCategories = [
  "Commodity sales (including contraceptive, other SRH and non-SRH supplies/products)",
  "Client/Patient fees",
  "Training, education, professional services and rentals",
  "Local/national: government",
  "Local/national: non-government",
  "Membership fees",
  "Non-operational income",
  "Other national income",
];

const internationalCategories = [
  "Multilateral Agencies and Organizations",
  "Foreign Governments",
  "International Trusts and Foundations / NGOs",
  "Corporate / Business Sector",
  "Other International Income",
];

const ippfCategories = ["IPPF Core Grant", "Other IPPF Grant"];

interface Props {
  onNavigate?: (id: string) => void;
}

const IncomeTable = ({
  title,
  categories,
}: {
  title: string;
  categories: string[];
}) => (
  <>
    <tr>
      <td
        colSpan={4}
        className="text-center font-semibold text-sm py-3 bg-secondary/30 border-b border-border"
      >
        {title}
      </td>
    </tr>
    <tr className="border-b border-border bg-secondary/20">
      <td className="p-3 text-xs font-semibold text-foreground">Income Sub-Categories</td>
      <td className="p-3 text-xs font-semibold text-foreground text-center">Restricted</td>
      <td className="p-3 text-xs font-semibold text-foreground text-center">Unrestricted</td>
      <td className="p-3 text-xs font-semibold text-foreground text-center">Total</td>
    </tr>
    {categories.map((cat) => (
      <tr key={cat} className="border-b border-border">
        <td className="p-3 text-sm text-foreground">{cat}</td>
        <td className="p-3"><CurrencyInput /></td>
        <td className="p-3"><CurrencyInput /></td>
        <td className="p-3"><CurrencyInput readOnly defaultValue="0" className="[&_input]:bg-secondary/30" /></td>
      </tr>
    ))}
  </>
);

const TotalIncome = ({ onNavigate }: Props) => {
  return (
    <div>
      <h2 className="text-lg font-semibold text-[#005F6A] mb-4">3.1 Total Income</h2>

      {/* Summary row */}
      <div className="border border-border rounded-md bg-background overflow-hidden mb-6">
        <div className="grid grid-cols-4">
          <div className="p-3 border-r border-border">
            <label className="text-xs font-semibold text-[#005F6A] block mb-1">Restricted</label>
            <CurrencyInput readOnly defaultValue="0" />
          </div>
          <div className="p-3 border-r border-border">
            <label className="text-xs font-semibold text-[#005F6A] block mb-1">Unrestricted</label>
            <CurrencyInput readOnly defaultValue="0" />
          </div>
          <div className="p-3 border-r border-border">
            <label className="text-xs font-semibold text-[#005F6A] block mb-1">Total</label>
            <CurrencyInput readOnly defaultValue="0" />
          </div>
          <div className="p-3">
            <label className="text-xs font-semibold text-[#005F6A] block mb-1">Deficit/Surplus</label>
            <CurrencyInput readOnly defaultValue="0" className="[&_input]:bg-green-100" />
          </div>
        </div>
      </div>

      {/* Income Details */}
      <div className="border border-border rounded-md bg-background p-6 mb-6">
        <h3 className="text-sm font-semibold text-[#005F6A] mb-4">Income Details</h3>
        <div className="overflow-auto">
          <table className="w-full text-sm">
            <tbody>
              <IncomeTable title="Locally generated income" categories={localCategories} />
              <IncomeTable title="International income (Non - IPPF)" categories={internationalCategories} />
              <IncomeTable title="IPPF income" categories={ippfCategories} />
            </tbody>
          </table>
        </div>
      </div>

      {/* Largest contributor */}
      <div className="border border-border rounded-md bg-background p-6 mb-6">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="text-sm font-semibold text-[#005F6A] block mb-2">
              Which organisation (government, trust, foundation, IPPF or other donor) was the largest contributor
            </label>
            <Input />
          </div>
          <div>
            <label className="text-sm font-semibold text-[#005F6A] block mb-2">
              How much income did they provide?
            </label>
            <CurrencyInput />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-end gap-3">
        <Button variant="default">SAVE AS DRAFT</Button>
        <Button
          variant="outline"
          className="border-[#005F6A] text-[#005F6A] hover:bg-[#005F6A]/10"
          onClick={() => onNavigate?.("3.2")}
        >
          NEXT: 3.2 Income by Donor
        </Button>
      </div>
    </div>
  );
};

export default TotalIncome;
