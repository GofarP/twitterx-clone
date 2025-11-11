import { Globe, Users } from "lucide-react";
import { Audience } from "./types";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"; // gunakan shadcn/ui
import { Button } from "@/components/ui/button";

interface AudienceSelectorProps {
  audience: Audience;
  onAudienceChange: (audience: Audience) => void;
}

const audienceOptions = [
  {
    value: "everyone" as const,
    icon: Globe,
    label: "Everyone can reply",
    description: "Anyone can reply to this post",
  },
  {
    value: "circle" as const,
    icon: Users,
    label: "Only your circle can reply",
    description: "Limit who can reply to this post",
  },
];

const AudienceSelector = ({
  audience,
  onAudienceChange,
}: AudienceSelectorProps) => {
  const currentAudience = audienceOptions.find((a) => a.value === audience)!;
  const Icon = currentAudience.icon;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="h-7 gap-1.5 rounded-full text-primary hover:bg-primary/10"
        >
          <Icon className="h-3.5 w-3.5" />
          <span className="text-xs font-medium">{currentAudience.label}</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56" align="start">
        {audienceOptions.map(({ value, icon: Icon, label, description }) => (
          <DropdownMenuItem
            key={value}
            onClick={() => onAudienceChange(value)}
            className="gap-2"
          >
            <Icon className="h-4 w-4" />
            <div className="flex flex-col">
              <span className="font-medium">{label}</span>
              <span className="text-xs text-muted-foreground">
                {description}
              </span>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AudienceSelector;
