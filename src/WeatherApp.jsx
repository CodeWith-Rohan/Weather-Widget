import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelslike: 30.77,
        humidity: 4,
        temp: 33.03,
        tempMax: 33.03,
        tempMin: 33.03,
        weather: "clear sky",
    });
    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };
    return (
        <div style={{textAlign: "center"}}>
            <h2>Weather App by Rohan </h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox  info={weatherInfo}/>
        </div>
    );
}
