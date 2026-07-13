import { SiWhatsapp } from "react-icons/si";
import { company } from "@/data/company";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <a
              href={company.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#20bd5a] hover:scale-110 hover:-translate-y-1 transition-all duration-300"
              data-testid="button-whatsapp-floating"
            >
              <SiWhatsapp className="w-7 h-7" />
            </a>
          </TooltipTrigger>
          <TooltipContent side="left" className="font-medium">
            <p>Solicitar cotización</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
