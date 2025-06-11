import { useQuery } from "@tanstack/react-query";
import { getApplications } from "../services/apiApplications";

export function useApplications() {
  const { isLoading, data: applications } = useQuery({
    queryKey: ["applications"],
    queryFn: getApplications,
  });

  return { isLoading, applications };
}
