
import './weather.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react';
import TopButtons from "./TopButtons";
import Inputs from "./Inputs";
import TimeAndLocation from "./TimeAndLocation";
import TempAndDetails from "./TempAndDetails";
import Forecast from "./Forecast";
import getWeatherData from "../../services/weatherService";

function Weather() {

  const fetchWeather = async () => {
    const data = await getWeatherData("weather", { q: "london"});
    console.log(data);
  };

  fetchWeather();

  return (
    <div className="mx-auto max-w-screen-md 
    mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 
    h-fit shadow-xl shadow-gray-400">
      <TopButtons />
      <Inputs />

      <TimeAndLocation />
      <TempAndDetails />
      <Forecast title="hourly forecast"/>
      <Forecast title="daily forecast" />
    </div>
  );
}

export default Weather;