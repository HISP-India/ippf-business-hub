import { Card, CardContent } from "@/components/ui/card";
import { Info } from "lucide-react";

const WelcomeBanner = () => (
  <Card className="border-l-4 border-l-primary">
    <CardContent className="p-5 flex items-start gap-3">
      <Info className="h-5 w-5 text-primary mt-0.5 shrink-0" />
      <p className="text-[15px] text-foreground leading-relaxed">
        Welcome to the <span className="font-semibold">IPPF Business Planning and Reporting Portal</span>. 
        The portal is your one-stop-shop for uploading your annual business plans, submitting annual 
        and half-year reports, or for downloading reports and relevant documents.
      </p>
    </CardContent>
  </Card>
);

export default WelcomeBanner;
