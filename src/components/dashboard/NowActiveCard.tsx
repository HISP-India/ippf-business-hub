import { Card, CardContent } from "@/components/ui/card";
import { Activity } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const NowActiveCard = () => (
  <Card className="h-full border-l-4 border-l-primary">
    <CardContent className="p-5">
      <div className="flex items-center gap-2 mb-4">
        <Activity className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-semibold text-primary">Now Active</h3>
      </div>

      <p className="text-sm font-medium text-foreground mb-4">Annual Reporting</p>

      <div className="space-y-3">
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-muted-foreground">MAs Commenced</span>
            <span className="font-semibold text-foreground">50%</span>
          </div>
          <Progress value={50} className="h-2" />
        </div>
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-muted-foreground">Finalized Reporting</span>
            <span className="font-semibold text-foreground">5%</span>
          </div>
          <Progress value={5} className="h-2" />
        </div>
      </div>
    </CardContent>
  </Card>
);

export default NowActiveCard;
