"use client";

import * as React from "react";
import { Column } from "@/components/ui/column";
import { CodeBlock } from "@atlaskit/code";
import { parseResponse } from "@/lib/parser";
import { Badge } from "@/components/ui/badge";

type JSONDataCodeBlockProps = {
  completion: string;
};

export default function JSONDataCodeBlock({
  completion,
}: JSONDataCodeBlockProps) {
  const responseCodeBlockRef = React.useRef(null);
  const responseJSON = React.useMemo(
    () => parseResponse(completion),
    [completion]
  );

  return (
    <Column className="w-full md:w-auto md:flex-1 overflow-hidden">
      {responseJSON && (
        <div
          ref={responseCodeBlockRef}
          className="relative scrollbar-hide max-h-[400px] overflow-auto shadow-sm min-h-[350px] border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 w-full rounded-lg p-1"
        >
          <div className="absolute right-3 top-3 flex items-center justify-end">
            <Badge variant={"outline"}>{responseJSON?.length} items</Badge>
          </div>
          <CodeBlock
            language="json"
            showLineNumbers={false}
            text={JSON.stringify(responseJSON, null, 2)}
          />
        </div>
      )}
    </Column>
  );
}
