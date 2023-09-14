import * as React from "react";
import { useCompletion } from "ai/react";
import { jsonDataPrompt, jsonDataPromptDataHelper } from "@/lib/prompt";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { onError } from "@/lib/mutationHandlers";
import { usePlaygroundForm } from "@/hooks/use-playground-form";
import { parseResponse } from "@/lib/parser";
import { toast } from "@/components/ui/use-toast";

type FormProps = {
  prompt: string;
  limit: number;
  fields: {
    name: string;
    inputType: string;
    description: string;
  }[];
};

type UseJSONDataCompletionProps = {
  testimonial?: boolean;
};

export default function useJSONDataCompletion({
  testimonial,
}: UseJSONDataCompletionProps) {
  const [completed, setCompleted] = React.useState(true);
  const { completion, complete, isLoading, stop, error } = useCompletion({
    api: "/api/completion",
  });
  const {
    register,
    control,
    reset,
    handleSubmit,
    getValues,
    errors,
    fields,
    replaceFields,
    removeField,
    append,
    setValue,
  } = usePlaygroundForm();
  const mutationTestimonial = useMutation({
    mutationFn: async (data: any) => {
      return await axios.post("/api/testimonial", data);
    },
    onError,
  });

  React.useEffect(() => {
    if (error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  }, [error]);

  const onCompleteGeneration = React.useCallback(
    async (input: string, output: string) => {
      mutationTestimonial.mutate({
        input,
        output,
      });
    },
    []
  );

  const responseJSON = React.useMemo(
    () => parseResponse(completion),
    [completion]
  );
  const responseJSONString = JSON.stringify(responseJSON);

  function handleGenerateJSON(data: FormProps) {
    setCompleted(false);

    const dataFormatPrompty = jsonDataPromptDataHelper(data.fields);
    const openAIPrompt = jsonDataPrompt(
      data.prompt,
      dataFormatPrompty,
      data.limit
    );

    complete(openAIPrompt);
  }

  const input = getValues();
  const inputString = JSON.stringify(input);

  React.useEffect(() => {
    if (!isLoading && !completed && testimonial) {
      onCompleteGeneration(inputString, completion);
      setCompleted(true);
    }
  }, [
    isLoading,
    completed,
    inputString,
    completion,
    testimonial,
    onCompleteGeneration,
  ]);

  return {
    completion,
    isLoading,
    control,
    fields,
    errors,
    input,
    output: responseJSONString,
    stop,
    reset,
    register,
    setValue,
    replaceFields,
    removeField,
    handleSubmit,
    handleGenerateJSON,
    append,
  };
}
