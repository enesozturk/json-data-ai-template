import { toast } from "@/components/ui/use-toast";
import { redirect } from "next/navigation";

export async function onError(data: any) {
  if (data?.response?.status === 401) {
    toast({
      title: "Authentication",
      description: "Please login.",
      variant: "destructive",
    });
    redirect("/sign-in");
  }
}
