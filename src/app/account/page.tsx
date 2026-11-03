import { createClient } from "@/lib/supabase/server";
import { Suspense } from "react";

const AccountPage = async () => {
  const supabase = await createClient();
  const res = await supabase.auth.getSession();

  console.error(res);

  return (
    <section>
      <h1>Welcome User</h1>
    </section>
  );
};

const Account = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <AccountPage />
    </Suspense>
  );
};

export default Account;
