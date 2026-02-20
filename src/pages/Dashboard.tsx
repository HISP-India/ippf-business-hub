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
import WelcomeBanner from "@/components/dashboard/WelcomeBanner";
import DeadlinesCard from "@/components/dashboard/DeadlinesCard";
import NowActiveCard from "@/components/dashboard/NowActiveCard";
import NoticeBoardCard from "@/components/dashboard/NoticeBoardCard";

const regionData: Record<string, string[]> = {
  "SAR": [
    "Afghan Family Guidance Association",
    "Family Planning Association of Bangladesh",
    "Respect, Educate, Nurture and Empower Women",
    "Family Planning Association of India",
    "Society for Health Education",
    "Family Planning Association of Nepal",
    "Family Planning Association of Sri Lanka",
  ],
  "AF": [
    "Association Béninoise pour la Promotion de la Famille",
    "Association Burkinabè pour le Bien-Être Familial",
    "Association Burundaise pour le Bien-Être Familial",
    "Cameroon National Association for Family Welfare",
    "Family Guidance Association of Ethiopia",
    "Planned Parenthood Association of Ghana",
    "Family Planning Association of Kenya",
    "Family Planning Association of Malawi",
    "Planned Parenthood Federation of Nigeria",
    "Association Rwandaise pour le Bien-Être Familial",
    "Association Sénégalaise pour le Bien-Être Familial",
    "Family Planning Association of South Africa",
    "Sudan Family Planning Association",
    "Uzazi na Malezi Bora Tanzania",
    "Reproductive Health Uganda",
    "Planned Parenthood Association of Zambia",
    "Zimbabwe National Family Planning Council",
  ],
  "ACR": [
    "Fundación para Estudio e Investigación de la Mujer",
    "Bahamas Family Planning Association",
    "Barbados Family Planning Association",
    "Belize Family Life Association",
    "Centro de Investigación, Educación y Servicios",
    "Sociedade Civil Bem-Estar Familiar no Brasil",
    "Asociación Chilena de Protección de la Familia",
    "Asociación Probienestar de la Familia Colombiana",
    "Fundación Mexicana para la Planeación Familiar",
    "Instituto Peruano de Paternidad Responsable",
    "Planned Parenthood Federation of America",
  ],
  "AWR": [
    "Egyptian Family Planning Association",
    "Jordan Association for Family Planning and Protection",
    "Lebanese Family Planning Association for Development and Empowerment",
    "Association Marocaine de Planification Familiale",
    "Palestinian Family Planning and Protection Association",
    "Association Tunisienne de la Santé de la Reproduction",
    "Yemeni Family Care Association",
  ],
  "ESEAOR": [
    "Sexual Health Quarters",
    "Reproductive Health Association of Cambodia",
    "China Family Planning Association",
    "Indonesian Planned Parenthood Association",
    "Japanese Organization for International Cooperation in Family Planning",
    "Family Planning Organization of the Philippines",
    "Population and Development Association",
    "Vietnam Family Planning Association",
  ],
  "EN": [
    "Albanian Family Planning Association",
    "Armenian Family Planning Association",
    "Mouvement Français pour le Planning Familial",
    "pro familia Deutsche Gesellschaft für Familienplanung",
    "Irish Family Planning Association",
    "Associazione Italiana per l'Educazione Demografica",
    "Rutgers",
    "Federación de Planificación Familiar Estatal",
    "Swedish Association for Sexuality Education",
    "Brook",
  ],
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
        <div className="flex items-center gap-2" />
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
        {/* Welcome Banner */}
        <WelcomeBanner />

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

        {/* Info Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <DeadlinesCard />
          <NowActiveCard />
          <NoticeBoardCard />
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
