import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ChevronDown, ChevronRight, LogOut, Globe, PanelLeftClose, PanelLeftOpen, Maximize, Minimize } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ippfLogo from "@/assets/ippf-logo-white.png";
import ippfLogoRed from "@/assets/ippf-logo-red.png";
import OrganizationDetails from "@/components/business-plan/OrganizationDetails";
import NarrativePlan from "@/components/business-plan/NarrativePlan";
import ProjectDescription from "@/components/business-plan/ProjectDescription";
import ProjectExpenseBudget from "@/components/business-plan/ProjectExpenseBudget";
import ExpenseBudgetByFocusArea from "@/components/business-plan/ExpenseBudgetByFocusArea";
import TotalIncome from "@/components/business-plan/TotalIncome";

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
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  return (
    <div className="h-screen flex bg-secondary overflow-hidden">
      {/* Sidebar - fixed, independently scrollable */}
      {sidebarOpen && (
      <aside className="w-72 shrink-0 flex flex-col bg-background border-r border-border h-screen overflow-y-auto">
        {/* Logo area */}
        <div className="p-5 flex flex-col items-center gap-2 border-b border-border">
          <img src={ippfLogoRed} alt="IPPF" className="h-12" />
          <p className="text-[11px] font-medium text-muted-foreground tracking-wide text-center leading-tight">
            International Planned Parenthood Federation
          </p>
        </div>

        {/* MA/CP label */}
        <div className="px-5 py-4 border-b border-border">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">MA / CP</p>
          <p className="text-sm font-semibold mt-1 text-foreground break-words">{ma}</p>
        </div>

        {/* Menu */}
        <nav className="flex-1">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-full flex items-center justify-between px-5 py-3 bg-secondary hover:bg-secondary/80 transition-colors font-semibold text-sm text-foreground border-b border-border"
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
                    className={`w-full text-left px-5 py-3 text-sm transition-colors border-b border-border ${
                      activeItem === item.id
                        ? "border-l-4 border-l-primary bg-secondary/60 font-semibold text-foreground"
                        : "text-foreground hover:bg-secondary/40"
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
        <div className="p-4 border-t border-border">
          <Button
            variant="ghost"
            size="sm"
            className="w-full text-foreground hover:bg-secondary justify-start gap-2"
            onClick={() => navigate("/dashboard", { state: { region, ma } })}
          >
            ← Back to Dashboard
          </Button>
        </div>
      </aside>
      )}

      {/* Right side - header + content scroll together */}
      <div className="flex-1 flex flex-col h-screen overflow-y-auto">
        {/* Header */}
        <header className="h-16 bg-primary flex items-center justify-between px-6 shrink-0">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="text-primary-foreground hover:bg-primary-foreground/10"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              title={sidebarOpen ? "Hide Sidebar" : "Show Sidebar"}
            >
              {sidebarOpen ? <PanelLeftClose className="h-5 w-5" /> : <PanelLeftOpen className="h-5 w-5" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-primary-foreground hover:bg-primary-foreground/10"
              onClick={toggleFullscreen}
              title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
            >
              {isFullscreen ? <Minimize className="h-5 w-5" /> : <Maximize className="h-5 w-5" />}
            </Button>
          </div>
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

        {/* Context bar */}
        <div className="bg-[#5B4A9E] text-white px-6 py-3 grid grid-cols-4 gap-4 text-sm shrink-0">
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
        <div className="p-8 flex-1">
          {activeItem === "1.1" ? (
            <OrganizationDetails ma={ma} region={region} />
          ) : activeItem === "1.2" ? (
            <NarrativePlan />
          ) : activeItem === "2.1" ? (
            <ProjectDescription onNavigate={setActiveItem} />
          ) : activeItem === "2.2" ? (
            <ProjectExpenseBudget />
          ) : activeItem === "2.3" ? (
            <ExpenseBudgetByFocusArea />
          ) : activeItem === "3.1" ? (
            <TotalIncome onNavigate={setActiveItem} />
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
      </div>
    </div>
  );
};

export default BusinessPlan;
