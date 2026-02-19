import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ChevronDown, ChevronRight, LogOut, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import ippfLogo from "@/assets/ippf-logo-white.png";

const bpMenuItems = [
  { id: "1.1", label: "Organization Details" },
  { id: "1.2", label: "Narrative Plan" },
  { id: "2.1", label: "Project Description" },
  { id: "2.2", label: "Project Expense Budget" },
  { id: "2.3", label: "Expense Budget by Focus Area" },
  { id: "2.4", label: "Budget by Expense Category" },
  { id: "3.1", label: "Total Income" },
  { id: "3.2", label: "Income by Donor" },
  { id: "3.3", label: "Value Add of Core Funding" },
  { id: "3.4", label: "Order Commodities from IPPF" },
  { id: "3.5", label: "Commodities by Source of Funding" },
];

const BusinessPlan = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const ma = (state as any)?.ma ?? "N/A";
  const region = (state as any)?.region ?? "";
  const [menuOpen, setMenuOpen] = useState(true);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-secondary">
      {/* Header */}
      <header className="h-16 bg-primary flex items-center justify-between px-6 shrink-0 z-10">
        <img src={ippfLogo} alt="IPPF" className="h-10" />
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            className="border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground/10"
          >
            Maintenance
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="text-primary-foreground hover:bg-primary-foreground/10 gap-1"
          >
            <Globe className="h-4 w-4" />
            EN
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="text-primary-foreground hover:bg-primary-foreground/10 gap-1"
            onClick={() => navigate("/")}
          >
            <LogOut className="h-4 w-4" />
            LOG OUT
          </Button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-72 shrink-0 flex flex-col bg-[hsl(210,60%,45%)] text-primary-foreground overflow-y-auto">
          {/* Logo area */}
          <div className="p-5 flex justify-center bg-[hsl(210,60%,40%)]">
            <img src={ippfLogo} alt="IPPF" className="h-14" />
          </div>

          {/* MA/CP label */}
          <div className="px-5 py-4 border-b border-primary-foreground/20">
            <p className="text-xs uppercase tracking-widest opacity-70">Select MA / CP</p>
            <p className="text-sm font-semibold mt-1 truncate">{ma}</p>
          </div>

          {/* Menu */}
          <nav className="flex-1">
            {/* Annual Business Plan group */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-full flex items-center justify-between px-5 py-3 bg-[hsl(210,60%,38%)] hover:bg-[hsl(210,60%,34%)] transition-colors font-semibold text-sm"
            >
              Annual Business Plan
              {menuOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
            </button>

            {menuOpen && (
              <ul className="flex flex-col">
                {bpMenuItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => setActiveItem(item.id)}
                      className={`w-full text-left px-5 py-3 text-sm transition-colors border-b border-primary-foreground/10 ${
                        activeItem === item.id
                          ? "bg-[hsl(186,100%,21%)] font-semibold"
                          : "bg-[hsl(195,80%,50%)] hover:bg-[hsl(195,80%,44%)]"
                      }`}
                    >
                      {item.id} {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </nav>

          {/* Back button */}
          <div className="p-4 border-t border-primary-foreground/20">
            <Button
              variant="ghost"
              size="sm"
              className="w-full text-primary-foreground hover:bg-primary-foreground/10 justify-start gap-2"
              onClick={() => navigate("/dashboard", { state: { region, ma } })}
            >
              ← Back to Dashboard
            </Button>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-8 overflow-y-auto">
          {activeItem ? (
            <div>
              <h1 className="text-2xl font-semibold text-foreground mb-2">
                {bpMenuItems.find((i) => i.id === activeItem)?.id}{" "}
                {bpMenuItems.find((i) => i.id === activeItem)?.label}
              </h1>
              <p className="text-muted-foreground">Coming Soon</p>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <h1 className="text-2xl font-semibold text-foreground mb-2">Annual Business Plan</h1>
              <p className="text-muted-foreground">
                Select a section from the sidebar to get started.
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default BusinessPlan;
