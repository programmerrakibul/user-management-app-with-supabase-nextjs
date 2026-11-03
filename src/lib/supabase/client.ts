import envConfig from "@/config/env";
import { Database } from "@/types/database";
import { createBrowserClient } from "@supabase/ssr";

const supabaseUrl = envConfig.SUPABASE_URL;
const supabaseKey = envConfig.SUPABASE_KEY;

export const createClient = () => createBrowserClient<Database>(supabaseUrl, supabaseKey);
