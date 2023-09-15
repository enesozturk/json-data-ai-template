"use client";

import * as React from "react";
import useJSONDataCompletion from "@/hooks/use-json-data-completion";
import JSONDataFrom from "@/components/json-data-form";
import JSONDataCodeBlock from "@/components/json-data-codeblock";
import { Column } from "@/components/ui/column";
import { H1, P, Span } from "@/components/ui/typography";
import { Step } from "@/components/step";
import { exampleFormValues } from "@/components/section-example-jsons";
import { Button } from "@/components/ui/button";
import { Row } from "@/components/ui/row";
import { FormProps } from "@/hooks/use-playground-form";

const easySelections = [
  {
    shortTitle: "Rick and Morty Characters",
    formValues: exampleFormValues.rickAndMortyCharacters,
  },
  {
    shortTitle: "Top Europe countries",
    formValues: exampleFormValues.topEuropeCountries,
  },
  {
    shortTitle: "Top science fiction books",
    formValues: exampleFormValues.booksRead,
  },
];

export default function Playground() {
  const {
    completion,
    isLoading,
    stop,
    fields,
    append,
    control,
    errors,
    removeField,
    replaceFields,
    setValue,
    handleSubmit,
    handleGenerateJSON,
  } = useJSONDataCompletion({
    testimonial: true,
  });

  function handleSelectOption(option: FormProps) {
    setValue("prompt", option.prompt);
    setValue("limit", option.limit);
    const arrayToReplace = option.fields.map((_, index) => {
      return {
        name: option.fields[index].name,
        inputType: option.fields[index].inputType,
        description: option.fields[index].description,
      };
    });
    replaceFields(arrayToReplace);
  }

  return (
    <React.Fragment>
      <Column>
        <H1 className="!text-3xl font-semibold !mb-0">Try yourself</H1>
        <P className="text-xl text-muted-foreground !mt-2 mb-8">
          See how the JSONDataAI magic works.
        </P>
        <Step
          className={""}
          step="1"
          text="Create your JSON data format in the form below."
        />
        <Span className="text-muted-foreground text-sm mt-2">
          Or you can select one of the examples formats below.
        </Span>
        <Row className="flex-wrap gap-2 justify-start items-center my-2 w-full">
          {easySelections.map((item) => (
            <Button
              key={item.shortTitle}
              onClick={() => {
                handleSelectOption(item.formValues);
              }}
              className="whitespace-nowrap"
              size={"xs"}
              variant={"outline"}
            >
              {item.shortTitle}
            </Button>
          ))}
        </Row>
        <Step className={"mt-4"} step="2" text="Click Get JSON Data" />
      </Column>
      <div
        id="playground-section"
        className="flex items-center w-full justify-center"
      >
        <div className="w-full max-w-5xl mx-auto gap-2 md:gap-6 flex flex-col md:flex-row items-center md:items-start">
          <Column className="flex-col md:flex-row w-full flex items-start gap-4">
            <JSONDataFrom
              formProps={{
                fields,
                control,
                append,
                removeField,
                handleSubmit,
                handleGenerateJSON,
              }}
              completionProps={{
                isLoading,
                stop,
              }}
            />
            <JSONDataCodeBlock completion={completion} />
          </Column>
        </div>
      </div>
    </React.Fragment>
  );
}
