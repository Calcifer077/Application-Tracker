import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteApplication as deleteApplicationApi } from "../services/apiApplications";
import toast from "react-hot-toast";

export function useDeleteApplication() {
  const queryClient = useQueryClient();

  const { mutate: deleteApplication, isLoading } = useMutation({
    mutationFn: (applicationId) => deleteApplicationApi(applicationId),
    onSuccess: () => {
      toast.success("Application deleted successfully!");

      queryClient.invalidateQueries({
        queryKey: ["applications"],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isLoading, deleteApplication };
}
