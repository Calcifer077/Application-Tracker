import { useMutation } from "@tanstack/react-query";
import { updateApplicationStatus as updateApplicationStatusApi } from "../services/apiApplications";
import toast from "react-hot-toast";

export function useUpdateApplicationStatus() {
  const { mutate: updateApplicationStatus, isLoading } = useMutation({
    mutationFn: ({ id, status }) => updateApplicationStatusApi(id, status),
    onSuccess: () => {
      toast.success("Application updated successfully");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isLoading, updateApplicationStatus };
}
