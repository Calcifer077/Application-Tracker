import { createClient } from "@supabase/supabase-js";

const URL = "https://ntsvuqmfzykhceafmsgj.supabase.co";
const api =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im50c3Z1cW1menlraGNlYWZtc2dqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk0NzM4NDQsImV4cCI6MjA2NTA0OTg0NH0.CbZ6lSssBBNktbIuBuqVqylHNesh084cMbKVh-pfD1s";

export const supabaseUrl = URL;

const supabaseKey = api;

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
