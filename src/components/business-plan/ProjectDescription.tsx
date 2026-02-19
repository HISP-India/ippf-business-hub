import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Info, Plus } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Project {
  name: string;
  startDate: string;
  endDate: string;
  projectTheme: string;
  projectDonor: string;
  fundingType: string;
  totalContractValue: string;
  annualProjectIncome: string;
  description: string;
}

const emptyProject = (): Project => ({
  name: "",
  startDate: "",
  endDate: "",
  projectTheme: "",
  projectDonor: "",
  fundingType: "",
  totalContractValue: "",
  annualProjectIncome: "",
  description: "",
});

const WordCounter = ({ text, max }: { text: string; max: number }) => {
  const count = text.trim() ? text.trim().split(/\s+/).length : 0;
  const remaining = max - count;
  return (
    <p className="text-xs text-muted-foreground mt-1">
      {remaining} words remaining
    </p>
  );
};

interface Props {
  onNavigate?: (id: string) => void;
}

const ProjectDescription = ({ onNavigate }: Props) => {
  const [projects, setProjects] = useState<Project[]>([emptyProject()]);

  const updateProject = (index: number, field: keyof Project, value: string) => {
    setProjects((prev) => {
      const copy = [...prev];
      copy[index] = { ...copy[index], [field]: value };
      return copy;
    });
  };

  const addProject = () => setProjects((prev) => [...prev, emptyProject()]);

  return (
    <div>
      {/* Section header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-[#005F6A] flex items-center gap-1">
          2.1 Project Description
          <Info className="h-4 w-4 text-[#005F6A]" />
        </h2>
        <p className="text-sm text-foreground">
          Total projects <span className="font-semibold">{projects.length}</span>
        </p>
      </div>

      {/* Projects */}
      {projects.map((project, idx) => (
        <div
          key={idx}
          className="border border-border rounded-md bg-background p-6 mb-6"
        >
          {/* Project Name */}
          <label className="text-sm font-semibold text-[#005F6A] block mb-2">
            Project Name {idx + 1}
          </label>
          <Input
            value={project.name}
            onChange={(e) => updateProject(idx, "name", e.target.value)}
            className="mb-4"
          />

          {/* Row 1: Start Date, Project Theme, Funding Type, Total Contract Value */}
          <div className="grid grid-cols-4 gap-4 mb-4">
            <div>
              <label className="text-xs font-medium text-foreground block mb-1">Start Date:</label>
              <Input
                type="date"
                value={project.startDate}
                onChange={(e) => updateProject(idx, "startDate", e.target.value)}
              />
            </div>
            <div>
              <label className="text-xs font-medium text-foreground block mb-1">Project Theme:</label>
              <Select
                value={project.projectTheme}
                onValueChange={(v) => updateProject(idx, "projectTheme", v)}
              >
                <SelectTrigger><SelectValue placeholder="Choose" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="srhr">SRHR</SelectItem>
                  <SelectItem value="health">Health</SelectItem>
                  <SelectItem value="advocacy">Advocacy</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-xs font-medium text-foreground block mb-1">Funding Type:</label>
              <Select
                value={project.fundingType}
                onValueChange={(v) => updateProject(idx, "fundingType", v)}
              >
                <SelectTrigger><SelectValue placeholder="Choose" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="restricted">Restricted</SelectItem>
                  <SelectItem value="unrestricted">Unrestricted</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-xs font-medium text-foreground block mb-1">Total Contract Value:</label>
              <Input
                value={project.totalContractValue}
                onChange={(e) => updateProject(idx, "totalContractValue", e.target.value)}
              />
            </div>
          </div>

          {/* Row 2: End Date, Project Donor, Annual Project Income */}
          <div className="grid grid-cols-4 gap-4 mb-4">
            <div>
              <label className="text-xs font-medium text-foreground block mb-1">End Date:</label>
              <Input
                type="date"
                value={project.endDate}
                onChange={(e) => updateProject(idx, "endDate", e.target.value)}
              />
            </div>
            <div>
              <label className="text-xs font-medium text-foreground block mb-1">Project Donor:</label>
              <Select
                value={project.projectDonor}
                onValueChange={(v) => updateProject(idx, "projectDonor", v)}
              >
                <SelectTrigger><SelectValue placeholder="Choose" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="usaid">USAID</SelectItem>
                  <SelectItem value="dfid">DFID</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-xs font-medium text-foreground block mb-1">Annual Project Income:</label>
              <Input
                value={project.annualProjectIncome}
                onChange={(e) => updateProject(idx, "annualProjectIncome", e.target.value)}
              />
            </div>
            <div />
          </div>

          <hr className="my-4 border-border" />

          {/* Description */}
          <label className="text-sm font-semibold text-[#005F6A] block mb-2">
            Description of Project {idx + 1}
          </label>
          <Textarea
            value={project.description}
            onChange={(e) => updateProject(idx, "description", e.target.value)}
            rows={5}
          />
          <WordCounter text={project.description} max={250} />
        </div>
      ))}

      {/* Add New Project */}
      <div className="flex justify-end mb-6">
        <Button onClick={addProject} className="bg-[#005F6A] hover:bg-[#004952] text-white gap-1">
          <Plus className="h-4 w-4" /> Add New Project
        </Button>
      </div>

      {/* Footer buttons */}
      <div className="flex justify-end gap-3">
        <Button variant="default">SAVE AS DRAFT</Button>
        <Button
          variant="outline"
          className="border-[#005F6A] text-[#005F6A] hover:bg-[#005F6A]/10"
          onClick={() => onNavigate?.("2.2")}
        >
          NEXT: 2.2 Project Expense Budget
        </Button>
      </div>
    </div>
  );
};

export default ProjectDescription;
