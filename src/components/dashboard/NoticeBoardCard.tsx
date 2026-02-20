import { Card, CardContent } from "@/components/ui/card";
import { Bell, HelpCircle } from "lucide-react";

const NoticeBoardCard = () => (
  <Card className="h-full">
    <CardContent className="p-5">
      <div className="flex items-center gap-2 mb-4">
        <Bell className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-semibold text-primary">Notice Board</h3>
      </div>

      <div className="space-y-3">
        <div className="bg-secondary rounded-md p-3">
          <p className="text-sm text-foreground leading-relaxed">
            The BP Portal has been updated with new features for the 2026 reporting cycle. 
            Please review the updated submission guidelines before your next report.
          </p>
          <p className="text-xs text-muted-foreground mt-1">Feb 15, 2026</p>
        </div>

        <div className="bg-secondary rounded-md p-3">
          <p className="text-sm text-foreground leading-relaxed">
            Reminder: Annual Report submissions are due by June 10, 2026.
          </p>
          <p className="text-xs text-muted-foreground mt-1">Feb 1, 2026</p>
        </div>
      </div>

      <a
        href="#"
        className="inline-flex items-center gap-1.5 mt-4 text-sm font-medium text-primary hover:underline"
      >
        <HelpCircle className="h-4 w-4" />
        FAQs
      </a>
    </CardContent>
  </Card>
);

export default NoticeBoardCard;
