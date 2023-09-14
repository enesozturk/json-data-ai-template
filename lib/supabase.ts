import {
  createClientComponentClient as _createClientComponentClient,
  createServerComponentClient as _createServerComponentClient,
  createRouteHandlerClient as _createRouteHandlerClient,
} from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { cache } from "react";

export const createServerComponentClient = cache(() => {
  const cookieStore = cookies();
  return _createServerComponentClient({ cookies: () => cookieStore });
});

export const createRouteHandlerClient = cache(() => {
  const cookieStore = cookies();
  return _createRouteHandlerClient({ cookies: () => cookieStore });
});

export default async function getSession() {
  const supabase = createServerComponentClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return { session };
}

export async function getSessionInRouteHandler() {
  const supabase = createRouteHandlerClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return { supabase, session };
}
