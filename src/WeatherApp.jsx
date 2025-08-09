import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import {useState} from "react";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] =useState({
        city:"Delhi",
        feelslike:37.05,
        humidity:94,
        temp:30.05,
        tempMax:30.05,
        tempMin:30.05,
        weather:"light intensity dri",
    });

    let updateInfo=(newinfo) =>{
        setWeatherInfo(newinfo);
    }; 

return (
    <div style={{textAlign:"center"}}>
        <h2>Weather App by Indresh</h2>
        <SearchBox updateInfo={updateInfo} />
        <InfoBox info={weatherInfo}/>
    </div>
);
}