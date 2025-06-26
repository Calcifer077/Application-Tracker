import { useQuery } from "@tanstack/react-query";
import { getApplications } from "../services/apiApplications";
import { useSearchParams } from "react-router-dom";

export function useApplications() {
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

  const { isLoading, data: applications } = useQuery({
    queryKey: ["applications", filter, sort],
    queryFn: () => getApplications({ filter, sort }),
  });

  return { isLoading, applications };
}
