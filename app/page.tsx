"use client";

import * as React from "react";

import { Column } from "@/components/ui/column";
import { H1, P, Span } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { Row } from "@/components/ui/row";
import Playground from "@/components/playground";
import JoinWaitlist from "@/components/join-waitlist";
import { SectionExampleJSONs } from "@/components/section-example-jsons";

export default function Home() {
  const handleTryNow = () => {
    const joinWaitlistSection = document.getElementById(
      "playground-section"
    ) as HTMLElement;

    if (joinWaitlistSection) {
      joinWaitlistSection.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  };

  const handleScrollToJoinWaitlist = () => {
    const joinWaitlistSection = document.getElementById(
      "join-waitlist-secion"
    ) as HTMLElement;

    if (joinWaitlistSection) {
      joinWaitlistSection.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  };

  return (
    <Column className="items-center pt-16 sm:pt-24 md:pt-36 pb-10 w-full max-w-4xl">
      <H1 className="text-6xl font-bold">JSON Data AI</H1>
      <P className="text-center text-xl text-muted-foreground mt-4 mb-4">
        Get JSON data about anything depending on your prompt. Define your
        structure, list results.
      </P>
      <Row className="gap-2 mt-4">
        <Button onClick={handleTryNow} variant={"outline"}>
          Try Now
        </Button>
        <Button onClick={handleScrollToJoinWaitlist} variant={"default"}>
          See All Features
        </Button>
      </Row>
      <Row className="my-16 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent" />
      <Column className="gap-8 w-full">
        <Playground />
      </Column>
      <Row className="my-16 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent" />
      <Column className="w-full items-center justify-start">
        <Column className="w-full">
          <H1 className="!text-3xl font-semibold !mb-0">See examples</H1>
          <P className="text-xl text-muted-foreground !mt-2 mb-8">
            You can see more examples. Select one of the prompts below.
          </P>
        </Column>
        <SectionExampleJSONs />
      </Column>
      <Row className="my-16 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent" />
      <JoinWaitlist />
      <Row className="my-16 w-full h-[1px] bg-transparent" />
    </Column>
  );
}
