import AccountForm from "@/components/account-form";
import { createClient } from "@/lib/supabase/server";

export default async function Account() {
  const supabase = await createClient();

  const { data: claimsData } = await supabase.auth.getClaims();

  return <AccountForm claims={claimsData?.claims ?? null} />;
}
