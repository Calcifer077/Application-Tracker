import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getApplications } from "../services/apiApplications";
import { useSearchParams } from "react-router-dom";
import { PAGE_COUNT } from "../constants";

export function useApplications() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  const filterValue = searchParams.get("status");

  const filter =
    !filterValue || filterValue == "all"
      ? null
      : { field: "status", value: filterValue };

  let sortBy = searchParams.get("sortBy");

  const sort = !sortBy
    ? { field: "date_applied", direction: "asc" }
    : {
        field: sortBy.split("_").slice(0, -1).join("_"),
        direction: sortBy.split("_").pop(),
      };

  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const { isLoading, data: { data: applications, count } = {} } = useQuery({
    queryKey: ["applications", filter, sort, page],
    queryFn: () => getApplications({ filter, sort, page }),
  });

  // PREFETCHING

  const pageCount = Math.ceil(count / PAGE_COUNT);

  if (page < pageCount) {
    queryClient.prefetchQuery({
      queryKey: ["applications", filter, sort, page + 1],
      queryFn: () => getApplications({ filter, sort, page: page + 1 }),
    });
  }

  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ["applications", filter, sort, page - 1],
      queryFn: () => getApplications({ filter, sort, page: page - 1 }),
    });
  }

  return { isLoading, applications, count };
}
