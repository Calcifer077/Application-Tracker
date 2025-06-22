import { useQueryClient, useMutation } from "@tanstack/react-query";
import { createApplication as createApplicationApi } from "../services/apiApplications";
import toast from "react-hot-toast";

export function useCreateApplication() {
  // Get queryclient from the context
  const queryClient = useQueryClient();
  const { mutate: createApplication, isLoading } = useMutation({
    mutationFn: createApplicationApi,
    onSuccess: () => {
      toast.success("New Application successfully added!");

      queryClient.invalidateQueries({
        queryKey: ["applications"],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isLoading, createApplication };
}
