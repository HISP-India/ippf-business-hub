import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";

const deadlines = [
  { label: "Annual Report", date: "June 10" },
  { label: "HYR", date: "October 1" },
  { label: "BP", date: "October 1" },
  { label: "TRT Review", date: "November 1" },
  { label: "AR/HYR Review", date: "June 20" },
];

const DeadlinesCard = () => (
  <Card className="h-full">
    <CardContent className="p-5">
      <div className="flex items-center gap-2 mb-4">
        <Calendar className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-semibold text-primary">Deadlines</h3>
      </div>
      <ul className="space-y-0">
        {deadlines.map((d, i) => (
          <li
            key={d.label}
            className={`flex justify-between items-center py-2.5 ${
              i < deadlines.length - 1 ? "border-b border-border" : ""
            }`}
          >
            <span className="text-sm font-medium text-foreground">{d.label}</span>
            <span className="text-sm text-muted-foreground">{d.date}</span>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

export default DeadlinesCard;
