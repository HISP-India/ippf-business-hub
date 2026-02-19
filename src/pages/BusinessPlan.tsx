import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import ippfLogo from "@/assets/ippf-logo-white.png";

const BusinessPlan = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const ma = (state as any)?.ma ?? "N/A";

  return (
    <div className="min-h-screen bg-secondary flex flex-col">
      <header className="h-16 bg-primary flex items-center justify-between px-6">
        <img src={ippfLogo} alt="IPPF" className="h-10" />
        <span className="text-sm text-primary-foreground">{ma}</span>
      </header>
      <main className="flex flex-1 items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-semibold text-foreground">Annual Business Plan</h1>
          <p className="text-muted-foreground">Coming Soon</p>
          <Button variant="outline" onClick={() => navigate("/dashboard")} className="gap-2">
            <ArrowLeft className="h-4 w-4" /> Back to Dashboard
          </Button>
        </div>
      </main>
    </div>
  );
};

export default BusinessPlan;
