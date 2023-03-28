import Search from "./components/search/search";
import "./App.css";
import Select, { components } from "react-select";

function App() {
const handleOnSearchChange = (searchData) => {};

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
    </div>
  );
}

export default App;
