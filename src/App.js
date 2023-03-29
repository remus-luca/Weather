import Search from "./components/search/search";
import "./App.css";
import Select, { components } from "react-select";
import CurrentWeather from "./components/current-weather/current-weather";


function App() {
const handleOnSearchChange = (searchData) => {
  const [lat, lon] = searchData.value.split(" ");
};

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      <CurrentWeather />
    </div>
  );
}

export default App;
