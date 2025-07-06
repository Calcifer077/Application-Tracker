import { createClient } from "@supabase/supabase-js";
import { SUPABASE_URL } from "../constants.js";
import { SUPABASE_KEY } from "../constants.js";

const URL = SUPABASE_URL;
const api = SUPABASE_KEY;

export const supabaseUrl = URL;

const supabaseKey = api;

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
