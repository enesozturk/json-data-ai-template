import React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { CodeBlock } from "@atlaskit/code";
import { P } from "@/components/ui/typography";

export type SeeExampleOutputDialogProps = {
  item: any;
  setOpen: (state: boolean) => void;
};

export const SeeExampleOutputDialog = ({
  item,
  setOpen,
}: SeeExampleOutputDialogProps) => {
  return (
    <Dialog open={!!item} onOpenChange={setOpen}>
      <DialogContent className="!pt-[50px] data-[state=open]:animate-contentShow flex flex-col items-start fixed left-[50%] top-[50%] w-[100vw] max-h-[85vh] min-h-[30vh] sm:w-[100vw] max-w-5xl -translate-x-1/2 -translate-y-1/2 border p-[25px] focus:outline-none">
        <P>{item?.prompt}</P>
        <div className="relative scrollbar-hide max-h-[400px] overflow-auto shadow-sm min-h-[350px] border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 w-full rounded-lg p-1">
          <div className="absolute right-3 top-3 flex items-center justify-end">
            <Badge variant={"outline"}>{item?.output?.length} items</Badge>
          </div>
          <CodeBlock
            language="json"
            showLineNumbers={false}
            text={JSON.stringify(item?.output, null, 2)}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};
