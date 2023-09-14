import { getSessionInRouteHandler } from "@/lib/supabase";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  const { supabase } = await getSessionInRouteHandler();

  const { email } = await request.json();

  const { data, error } = await supabase
    .from("waitlist")
    .insert({ email })
    .select();

  if (error) {
    return NextResponse.json(error, {
      status: 400,
    });
  }

  return NextResponse.json(data);
}
