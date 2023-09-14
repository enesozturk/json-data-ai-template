import { useFieldArray, useForm } from "react-hook-form";

export type FormProps = {
  prompt: string;
  limit: number;
  fields: {
    name: string;
    inputType: string;
    description: string;
  }[];
};

export function usePlaygroundForm() {
  const {
    register,
    control,
    handleSubmit,
    getValues,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormProps>({
    defaultValues: {
      prompt: "Top science fiction books read in 2020",
      limit: 10,
      fields: [
        {
          name: "title",
          inputType: "string",
          description: "Title of the book",
        },
        {
          name: "author",
          inputType: "string",
          description: "Author of the book",
        },
        {
          name: "year",
          inputType: "number",
          description: "Year of the book",
        },
      ],
    },
  });
  const { fields, replace, remove, append } = useFieldArray({
    control,
    name: "fields",
  });

  return {
    control,
    fields,
    errors,
    reset,
    getValues,
    setValue,
    register,
    replaceFields: replace,
    removeField: remove,
    handleSubmit,
    append,
  };
}
