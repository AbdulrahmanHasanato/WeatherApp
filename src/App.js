import { Container } from "react-bootstrap";
import WNavbar from "./components/wNavbar";
import WCityCard from "./components/wCityCard";
import { useEffect, useState } from "react";
import axios from "axios"

function App() {

  const [location, setLocation] = useState([])
  const [weather, setWeather] = useState([])
  const [cityy, setCityy] = useState("Gaziantep,Turkey")
  const getCityUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityy}?key=<<Your_API_Key>>`

  //Send API request by Axios
  const getWeatherForMainCity = async () => {
    const res = await axios.get(getCityUrl)
    setWeather(res.data.days)
  }

  useEffect(() => {
    getWeatherForMainCity()
    getCity()
  }, [cityy])

  const getCity = () => {
    const match = getCityUrl.match(/\/([^?\/]+),([^?\/]+)\?/)
    if (match) {
      const result = match.slice(1, 3).join(", ")
      setLocation(result)
    }
  }

  return (
    <div className="">
      <WNavbar />
      <Container>
        <WCityCard cityWeather={weather} city={location} cityy={cityy} setCityy={setCityy} />
      </Container>
    </div>
  );
}

export default App;
