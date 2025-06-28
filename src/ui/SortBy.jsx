import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const sortBy = searchParams.get("sortBy") || options.at(0).value;

  function handleChange(e) {
    searchParams.set("sortBy", e.target.value);

    if (searchParams.get("page")) {
      searchParams.set("page", 1);
    }

    setSearchParams(searchParams);
  }

  return <Select value={sortBy} options={options} onChange={handleChange} />;
}

export default SortBy;
