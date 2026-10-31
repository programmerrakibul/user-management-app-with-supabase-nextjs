"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const signUp = async (formData: FormData) => {
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const supabase = await createClient();
  const { error, data: user } = await supabase.auth.signUp(data);

  if (error) {
    redirect("/error");
  }

  console.log(user);

  revalidatePath("/", "layout");
  redirect("/account");
};
