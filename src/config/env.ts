const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_KEY;

if (!SUPABASE_URL) {
  throw new Error("SUPABASE_URL is not defined in the environment variables!");
}

if (!SUPABASE_KEY) {
  throw new Error(
    "SUPABASE_PUBLISHABLE_KEY is not defined in the environment variables!",
  );
}

const envConfig = {
  SUPABASE_URL,
  SUPABASE_KEY,
};

export default envConfig;
