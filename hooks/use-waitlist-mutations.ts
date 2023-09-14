import { toast } from "@/components/ui/use-toast";
import { onError } from "@/lib/mutationHandlers";

import { useMutation } from "@tanstack/react-query";
import axios from "axios";

type WaitlistMutationsVariables = {};

export function useWaitlistMutations() {
  const mutationSendEmails = useMutation<
    unknown,
    unknown,
    WaitlistMutationsVariables
  >({
    mutationFn: (data) => {
      return axios.post("/api/email", data);
    },
    onSuccess: () => {
      toast({
        title: "Emails sent",
        description: "Your emails sent successfully.",
      });
    },
    onError,
  });

  return {
    mutationSendEmails,
  };
}
