"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const signIn = async (formData: FormData) => {
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    console.error(error);

    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/account");
};
