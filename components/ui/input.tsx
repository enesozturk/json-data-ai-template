import * as React from "react";

import { cn } from "@/lib/utils";
import { Column } from "@/components/ui/column";
import { Span } from "@/components/ui/typography";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  containerClassName?: string;
  title?: string;
  description?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, containerClassName, description, title, type, ...props },
    ref
  ) => {
    return (
      <Column className={cn(containerClassName)}>
        {title && (
          <Span className="text-xs mb-1 font-medium text-muted-foreground">
            {title}
          </Span>
        )}
        <input
          {...props}
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
        />
      </Column>
    );
  }
);
Input.displayName = "Input";

export { Input };
