import { QueryClient, useMutation } from "@tanstack/react-query";
import { createApplication as createApplicationApi } from "../services/apiApplications";

export function useCreateApplication() {
  const { mutate: createApplication, isLoading } = useMutation({
    mutationFn: createApplicationApi,
    onSuccess: () =>
      QueryClient.invalidateQueries({
        queryKey: ["applications"],
      }),
  });

  return { isLoading, createApplication };
}
