import { AsyncPaginate } from "react-select-async-paginate";
import { useState } from "react";

const Search = ({ onSearchChange }) => {
  const [Search, setSearch] = useState(null);
  //const loadOptions=(inputValue)
  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <AsyncPaginate
      placeholder="Search of city"
      debounceTimeout={600}
      value={Search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
};
export default Search;
