import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { ClipboardList, FileCheck, BarChart3, Info, Globe, LogOut } from "lucide-react";
import ippfLogo from "@/assets/ippf-logo-white.png";

const regionData: Record<string, string[]> = {
  AR: ["IPPF AR Regional Office", "Family Planning Association of Pakistan", "Rahnuma-FPAP"],
  AF: ["IPPF AF Regional Office", "Planned Parenthood Association of Ghana", "Family Planning Association of Kenya"],
  ESEAOR: ["IPPF ESEAOR Regional Office", "Family Planning Association of India", "Indonesia Planned Parenthood Association"],
  EN: ["IPPF EN Regional Office", "British Pregnancy Advisory Service", "Rutgers Netherlands"],
  SAR: ["IPPF SAR Regional Office", "PLAFAM Venezuela", "BEMFAM Brazil"],
  AWR: ["IPPF AWR Regional Office", "Association Tunisienne du Planning Familial", "AMPF Morocco"],
};

const navCards = [
  {
    title: "Annual Business Plan",
    bg: "bg-[hsl(220,41%,41%)]",
    hoverBg: "hover:bg-[hsl(220,41%,35%)]",
    icon: ClipboardList,
    route: "/business-plan",
  },
  {
    title: "Annual / Semi-Annual Report Submission & Approval",
    bg: "bg-[hsl(186,100%,21%)]",
    hoverBg: "hover:bg-[hsl(186,100%,17%)]",
    icon: FileCheck,
    route: "/report-submission",
  },
  {
    title: "Standard Report Generation from the BP Portal",
    bg: "bg-[hsl(258,90%,66%)]",
    hoverBg: "hover:bg-[hsl(258,90%,58%)]",
    icon: BarChart3,
    route: "/report-generation",
  },
];

const Dashboard = () => {
  const navigate = useNavigate();
  const [region, setRegion] = useState("");
  const [ma, setMa] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [selectedMa, setSelectedMa] = useState("");

  const associations = region ? regionData[region] ?? [] : [];

  const handleSubmit = () => {
    if (!region || !ma) {
      toast({ title: "Please select both Region and Member Association", variant: "destructive" });
      return;
    }
    setSubmitted(true);
    setSelectedMa(ma);
    toast({ title: `MA/CP Selected: ${ma}` });
  };

  const handleCardClick = (route: string) => {
    if (!submitted) return;
    navigate(route, { state: { region, ma: selectedMa } });
  };

  return (
    <div className="min-h-screen bg-secondary flex flex-col">
      {/* Header */}
      <header className="h-16 bg-primary flex items-center justify-between px-6 shrink-0">
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

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10 max-w-6xl mx-auto w-full space-y-8">
        {/* Selection Card */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <Info className="h-5 w-5 text-primary" />
            <h1 className="text-xl font-semibold text-foreground">Select MA / CP</h1>
          </div>

          <Card>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_auto] gap-4 items-end">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Region</label>
                  <Select
                    value={region}
                    onValueChange={(v) => {
                      setRegion(v);
                      setMa("");
                      setSubmitted(false);
                    }}
                  >
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="Select Region" />
                    </SelectTrigger>
                    <SelectContent className="bg-popover z-50">
                      {Object.keys(regionData).map((r) => (
                        <SelectItem key={r} value={r}>
                          {r}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Member Association</label>
                  <Select
                    value={ma}
                    onValueChange={(v) => {
                      setMa(v);
                      setSubmitted(false);
                    }}
                    disabled={!region}
                  >
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="Select Member Association" />
                    </SelectTrigger>
                    <SelectContent className="bg-popover z-50">
                      {associations.map((a) => (
                        <SelectItem key={a} value={a}>
                          {a}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Button className="bg-primary text-primary-foreground hover:bg-primary/90" onClick={handleSubmit}>
                  Submit
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Navigation Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {navCards.map((card) => {
            const Icon = card.icon;
            return (
              <button
                key={card.route}
                onClick={() => handleCardClick(card.route)}
                disabled={!submitted}
                className={`${card.bg} ${submitted ? card.hoverBg : ""} rounded-xl p-8 text-left text-primary-foreground transition-all duration-200 ${
                  submitted
                    ? "opacity-100 cursor-pointer hover:scale-[1.03] hover:shadow-lg"
                    : "opacity-40 cursor-not-allowed"
                }`}
              >
                <Icon className="h-10 w-10 mb-4" />
                <h2 className="text-lg font-semibold leading-snug">{card.title}</h2>
              </button>
            );
          })}
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
