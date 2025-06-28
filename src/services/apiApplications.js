import supabase from "./supabase";

const PAGE_COUNT = 5;

export async function getApplications({ filter, sort, page }) {
  let query = supabase.from("Applications").select("*", { count: "exact" });

  if (filter) {
    query = query[filter.method || "eq"](filter.field, filter.value);
  }

  if (sort) {
    query = query.order(sort.field, {
      ascending: sort.direction === "asc" ? true : false,
    });
  }

  if (page) {
    const from = PAGE_COUNT * (page - 1);
    const to = from + PAGE_COUNT - 1;

    query = query.range(from, to);
  }

  const { data, error, count } = await query;

  if (error) {
    throw new Error("Applications could not be loaded");
  }

  return { data, count };
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

export async function updateApplicationStatus(applicationId, status) {
  const { data: updatedApplication, error } = await supabase
    .from("Applications")
    .update({ status: status })
    .eq("id", applicationId)
    .select();

  console.log(applicationId, status);
  if (error) {
    throw new Error("Your application could not be updated. Please try again");
  }

  console.log(updatedApplication);

  return updatedApplication;
}
