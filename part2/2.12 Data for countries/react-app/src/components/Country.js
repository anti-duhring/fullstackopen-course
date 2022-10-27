import { useState, useEffect } from "react";
import axios from 'axios'

const Country = ({country}) => {
    const [weather, setWeather]  = useState(null)

    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${country.capital[0]}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`).then(response => {
            console.log('Weather API called')
            setWeather(response.data)
        })
    },[])

    return ( 
        <div>
            <h2>{country.name.common}</h2>
            <p>capital {country.capital[0]}</p>
            <p>area {country.area}</p>
            <div>
                <b>languages</b>
                <ul>
                {Object.keys(country.languages).map(key => <li key={key}>{country.languages[key]}</li>)}
                </ul>
            </div>
            <img src={country.flags.png} />
            <h2>Weather in {country.capital[0]}</h2>
            {weather?
                <>
                    <p>
                        temperature {weather.main.temp} Celcius
                    </p>
                    <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} />
                    <p>
                        wind {weather.wind.speed} m/s
                    </p>
                </>
            : <p>Loading...</p>
            }
        </div>
     );
}
 
export default Country;
