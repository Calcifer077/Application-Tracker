import Select from "../ui/Select";
import { useState } from "react";
import { useUpdateApplicationStatus } from "./useUpdateApplicationStatus";

function DropdownApplicationStatus({ status, items, applicationId }) {
  const [newStaus, setNewStatus] = useState(status);
  const { isLoading, updateApplicationStatus } = useUpdateApplicationStatus();

  const options = items.map((item) => ({
    label: item.label,
    value: item.value,
  }));

  function handleChange(e) {
    const updatedStatus = e.target.value;
    setNewStatus(updatedStatus);

    console.log(updatedStatus);
    updateApplicationStatus({ id: applicationId, status: updatedStatus });
  }

  return (
    <div>
      <Select
        value={newStaus}
        options={options}
        onChange={handleChange}
        disabled={isLoading}
        type="details"
      />
    </div>
  );
}

export default DropdownApplicationStatus;
