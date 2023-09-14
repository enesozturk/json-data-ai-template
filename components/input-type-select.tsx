import React, { forwardRef } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { Column } from "@/components/ui/column";
import { Span } from "@/components/ui/typography";

export type InputTypeSelectProps = {
  containerClassName?: string;
  title?: string;
  className?: string;
  placeholder?: string;
  defaultValue?: string | number;
  triggerClassName?: string;
  value: string;
  onChange: (value: string) => void;
};

const inputTypeOptions = [
  { value: "string", label: "String" },
  { value: "number", label: "Number" },
  { value: "boolean", label: "Boolean" },
];

export const InputTypeSelect = forwardRef(
  (
    {
      className,
      containerClassName,
      title,
      value,
      onChange,
      placeholder,
      triggerClassName,
      ...props
    }: InputTypeSelectProps,
    ref
  ) => (
    // @ts-ignore
    <Select value={value} onValueChange={onChange} ref={ref} {...props}>
      <Column className={cn(containerClassName)}>
        {title && (
          <Span className="text-xs mb-1 font-medium text-muted-foreground">
            {title}
          </Span>
        )}
        <SelectTrigger
          className={cn("w-auto h-10 min-h-[2.5rem]", triggerClassName)}
        >
          <SelectValue placeholder={placeholder || "Select"} />
        </SelectTrigger>
      </Column>
      <SelectContent>
        <SelectGroup>
          {inputTypeOptions.map((item) => (
            <SelectItem key={item.label} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
);
