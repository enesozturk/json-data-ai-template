"use client";

import { Button } from "@/components/ui/button";
import { Column } from "@/components/ui/column";
import { Input } from "@/components/ui/input";
import { Row } from "@/components/ui/row";
import { H1, List, ListItem, Span } from "@/components/ui/typography";
import { toast } from "@/components/ui/use-toast";
import { CheckIcon } from "@radix-ui/react-icons";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import * as React from "react";
import { Controller, useForm } from "react-hook-form";

type FormProps = {
  email: string;
};

export function JoinWaitlist() {
  const mutation = useMutation<unknown, unknown, FormProps>({
    mutationFn: async (data) => {
      await axios.post("/api/waitlist", data);
    },
    onSuccess: () => {
      toast({
        title: "Success",
        description: "You have been added to the wait list.",
      });
    },
  });
  const { control, handleSubmit, setValue } = useForm<FormProps>({
    defaultValues: {
      email: "",
    },
  });

  function handleJoinWaitList(data: FormProps) {
    mutation.mutate({ email: data.email });
    setValue("email", "");
  }

  return (
    <section
      id="join-waitlist-secion"
      className="rounded bg-primary w-full border border-primary/10 px-8 py-10 selection:!bg-secondary/10"
    >
      <Column className="gap-2">
        <H1 className="text-secondary">Need More? Go Pro.</H1>
        <Span className="text-secondary mb-5">
          Join the waitlist to get early access to the pro version. We will send
          you an email when it's ready.
        </Span>
        <List className="text-secondary mb-5">
          <ListItem>
            <CheckIcon className="text-green-500 inline-block w-6 h-6 mr-1" />
            <strong>More accurate and faster</strong>{" "}
            <span className="block sm:inline-block">
              Get better results with fined-tuned AI model.
            </span>
          </ListItem>
          <ListItem>
            <CheckIcon className="text-green-500 inline-block w-6 h-6 mr-1" />
            <strong>Save responses</strong>{" "}
            <span className="block sm:inline-block">
              Save and edit your responses. Fetch them as REST API without
              waiting AI to respond.
            </span>
          </ListItem>
          <ListItem>
            <CheckIcon className="text-green-500 inline-block w-6 h-6 mr-1" />
            <strong>Paginate</strong>{" "}
            <span className="block sm:inline-block">
              Fetch your saved responses with pagination for more realistic use
              cases.
            </span>
          </ListItem>
          <ListItem>
            <CheckIcon className="text-green-500 inline-block w-6 h-6 mr-1" />
            <strong>Nested objects</strong>{" "}
            <span className="block sm:inline-block">
              You can return nested objects in you responses.
            </span>
          </ListItem>
          <ListItem>
            <CheckIcon className="text-green-500 inline-block w-6 h-6 mr-1" />
            <strong>Limitless</strong>{" "}
            <span className="block sm:inline-block">
              Generate and fetch responses without rate limits.
            </span>
          </ListItem>
        </List>
        <Row className="flex flex-row items-center gap-2 max-w-[20rem] w-full">
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <Input
                {...field}
                defaultValue={field.value}
                onChange={field.onChange}
                className="!text-secondary focus-visible:!ring-offset-foreground !border-muted-foreground/50"
                placeholder="Email address"
              />
            )}
          />
          <Button
            disabled={mutation.isLoading}
            className="focus-visible:!ring-offset-foreground"
            type="submit"
            variant={"secondary"}
            onClick={handleSubmit(handleJoinWaitList)}
          >
            {mutation.isLoading ? "..." : "Join"}
          </Button>
        </Row>
      </Column>
    </section>
  );
}

export default JoinWaitlist;
