import supabase from "./supabase";

export async function getApplications() {
  let { data, error } = await supabase.from("Applications").select("*");

  if (error) {
    throw new Error("Applications could not be loaded");
  }

  return data;
}

export async function createApplication(application) {
  const { data, error } = await supabase
    .from("Applications")
    .insert([{ ...application }])
    .select();

  if (error) {
    throw new Error("Your applicatoin could not be saved. Please try again");
  }

  console.log(data);
  return data;
}
