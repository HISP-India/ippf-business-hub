import { Input } from "@/components/ui/input";
import { Info } from "lucide-react";

const CurrencyInput = ({ className = "", ...props }: React.ComponentProps<typeof Input>) => (
  <div className={`flex items-center ${className}`}>
    <span className="px-2 text-sm text-muted-foreground border border-r-0 border-input rounded-l-md bg-secondary/30 h-10 flex items-center">$</span>
    <Input className="rounded-l-none" {...props} />
  </div>
);

const ProjectExpenseBudget = () => {
  return (
    <div>
      {/* Header */}
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
            <CurrencyInput readOnly defaultValue="" className="[&_input]:bg-green-100" />
          </div>
        </div>
      </div>

      {/* Project Details card */}
      <div className="border border-border rounded-md bg-background p-6">
        <h3 className="text-sm font-semibold text-[#005F6A]">Project Details</h3>
        <p className="text-sm text-muted-foreground mt-2">No projects available. Please add projects in 2.1 Project Description first.</p>
      </div>
    </div>
  );
};

export default ProjectExpenseBudget;
