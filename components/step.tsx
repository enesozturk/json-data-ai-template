import { Row } from "@/components/ui/row";
import { P, Span } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

type StepProps = {
  className?: string;
  step: number | string;
  text: string;
};

export function Step({ className, step, text }: StepProps) {
  return (
    <Row className={cn("items-center gap-2 w-full justify-start", className)}>
      <Row className="justify-center items-center w-8 h-8 min-w-[2rem] bg-foreground rounded-full">
        <Span className="font-light text-primary-foreground">{step}</Span>
      </Row>
      <Span className="mt-0">{text}</Span>
    </Row>
  );
}
