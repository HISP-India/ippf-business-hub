import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ChevronDown, ChevronRight, LogOut, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ippfLogo from "@/assets/ippf-logo-white.png";
import ippfLogoRed from "@/assets/ippf-logo-red.png";
import OrganizationDetails from "@/components/business-plan/OrganizationDetails";

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
    <div className="min-h-screen flex bg-secondary">
      {/* Sidebar - full height */}
      <aside className="w-72 shrink-0 flex flex-col bg-primary overflow-y-auto">
        {/* Logo area in primary color */}
        <div className="p-5 flex justify-center">
          <img src={ippfLogo} alt="IPPF" className="h-14" />
        </div>

        {/* MA/CP label */}
        <div className="px-5 py-4 border-t border-primary-foreground/20">
          <p className="text-xs uppercase tracking-widest text-primary-foreground/70">Select MA / CP</p>
          <p className="text-sm font-semibold mt-1 text-primary-foreground break-words">{ma}</p>
        </div>

        {/* Menu */}
        <nav className="flex-1">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-full flex items-center justify-between px-5 py-3 bg-primary-foreground/10 hover:bg-primary-foreground/15 transition-colors font-semibold text-sm text-primary-foreground border-t border-primary-foreground/20"
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
                    className={`w-full text-left px-5 py-3 text-sm transition-colors text-primary-foreground ${
                      activeItem === item.id
                        ? "bg-[hsl(0,85%,55%)] font-semibold"
                        : "hover:bg-primary-foreground/10"
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

      {/* Right side with header + content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top header bar */}
        <header className="h-16 bg-background flex items-center justify-end px-6 shrink-0 border-b border-border">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              className="text-foreground hover:bg-secondary gap-1"
            >
              <Globe className="h-4 w-4" />
              English
            </Button>
            <Button
              size="sm"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              IPPF
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-foreground/30 text-foreground hover:bg-secondary gap-1"
              onClick={() => navigate("/")}
            >
              <LogOut className="h-4 w-4" />
              LOG OUT
            </Button>
          </div>
        </header>

        {/* Context bar */}
        <div className="bg-[#5B4A9E] text-white px-6 py-3 grid grid-cols-4 gap-4 text-sm">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide opacity-80">Year</p>
            <Input className="mt-1 bg-white/20 border-white/30 text-white placeholder:text-white/60 h-8 text-sm" defaultValue="2027" readOnly />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide opacity-80">Region</p>
            <Input className="mt-1 bg-white/20 border-white/30 text-white placeholder:text-white/60 h-8 text-sm" value={region} readOnly />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide opacity-80">MA</p>
            <Input className="mt-1 bg-white/20 border-white/30 text-white placeholder:text-white/60 h-8 text-sm" value={ma} readOnly />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide opacity-80">MA-ID</p>
            <Input className="mt-1 bg-white/20 border-white/30 text-white placeholder:text-white/60 h-8 text-sm" defaultValue="IPPF_CODE" readOnly />
          </div>
        </div>

        {/* Main content */}
        <main className="flex-1 overflow-y-auto">
          <div className="p-8">
            {activeItem === "1.1" ? (
              <OrganizationDetails ma={ma} region={region} />
            ) : activeItem ? (
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
          </div>
        </main>
      </div>
    </div>
  );
};

export default BusinessPlan;
