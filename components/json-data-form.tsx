"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Column } from "@/components/ui/column";
import { Row } from "@/components/ui/row";
import { Input } from "@/components/ui/input";
import {
  Control,
  Controller,
  FieldArrayWithId,
  UseFieldArrayAppend,
  UseFieldArrayRemove,
  UseFormHandleSubmit,
} from "react-hook-form";
import { InputTypeSelect } from "@/components/input-type-select";
import { TrashIcon } from "@radix-ui/react-icons";
import { FormProps } from "@/hooks/use-playground-form";

type JSONDataFromProps = {
  formProps: {
    control: Control<FormProps, any>;
    fields: FieldArrayWithId<FormProps, "fields", "id">[];
    append: UseFieldArrayAppend<FormProps, "fields">;
    removeField: UseFieldArrayRemove;
    handleSubmit: UseFormHandleSubmit<FormProps, undefined>;
    handleGenerateJSON: (data: FormProps) => void;
  };
  completionProps: {
    isLoading: boolean;
    stop: () => void;
  };
};

export default function JSONDataFrom({
  formProps,
  completionProps,
}: JSONDataFromProps) {
  const {
    fields,
    append,
    removeField,
    control,
    handleSubmit,
    handleGenerateJSON,
  } = formProps;
  const { isLoading, stop } = completionProps;

  return (
    <Column className="gap-4 w-full md:w-auto md:flex-1">
      <Row className="gap-2 !justify-start">
        <Controller
          control={control}
          name="prompt"
          rules={{
            required: {
              value: true,
              message: "This field is required",
            },
          }}
          render={({ field }) => (
            <Input
              containerClassName="flex-1"
              {...field}
              title="Prompt"
              value={field.value}
              onChange={field.onChange}
              placeholder="Type..."
            />
          )}
        />
        <Controller
          name="limit"
          control={control}
          rules={{
            required: {
              value: true,
              message: "This field is required",
            },
            pattern: {
              value: /^[0-9]+$/,
              message: "This field must be a number",
            },
            max: {
              value: 50,
              message: "Must be less than 50",
            },
            min: {
              value: 1,
              message: "Must be greater than 1",
            },
          }}
          render={({ field }) => (
            <Input
              containerClassName="flex-1 max-w-[100px]"
              {...field}
              value={field.value}
              onChange={field.onChange}
              type="number"
              title="Limit"
              placeholder="Type..."
            />
          )}
        />
      </Row>
      {fields.map((item: any, index: number) => {
        const firstElement = index === 0;
        return (
          <Row
            key={item.id}
            className="relative rounded group gap-2 !justify-start !items-end"
          >
            <Controller
              name={`fields.${index}.name`}
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "This field is required",
                },
              }}
              render={({ field }) => (
                <Input
                  {...field}
                  containerClassName="flex-1 max-w-[180px] min-w-[150px]"
                  title={firstElement ? "Name" : ""}
                  value={field.value}
                  onChange={field.onChange}
                  placeholder="Type"
                />
              )}
            />
            <Controller
              name={`fields.${index}.inputType`}
              control={control}
              render={({ field }) => (
                <InputTypeSelect
                  title={firstElement ? "Type" : ""}
                  triggerClassName="flex-1 min-w-[100px] max-w-[120px]"
                  {...field}
                  onChange={field.onChange}
                />
              )}
            />
            <Controller
              name={`fields.${index}.description`}
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "This field is required",
                },
              }}
              render={({ field }) => (
                <Input
                  containerClassName="flex-1"
                  title={firstElement ? "Description" : ""}
                  placeholder="Description"
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />
            <Row className="relative lg:absolute lg:invisible group-hover:lg:visible lg:-left-[50px] lg:bottom-0">
              <Button
                size={"icon"}
                variant={"destructive"}
                onClick={() => {
                  removeField(index);
                }}
              >
                <TrashIcon />
              </Button>
              <Row className="min-h-[2.5rem] w-[10px]"></Row>
            </Row>
          </Row>
        );
      })}
      <Button
        onClick={() =>
          append({ name: "", inputType: "string", description: "" })
        }
        variant="secondary"
      >
        + Add Field
      </Button>
      <Button
        onClick={isLoading ? stop : handleSubmit(handleGenerateJSON)}
        variant={isLoading ? "outline" : "default"}
      >
        {isLoading ? "Stop" : "Get JSON Data"}
      </Button>
    </Column>
  );
}
