import { useEffect, useState } from "react";


function App() {
  const [search, setSearch] = useState("")
    const [weather, setWeather] = useState({})
    const searchPressed = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=5179ec243aa66ca9819fe6818ac82795`).then((res) => {
            return res.json()
        }).then((data) => {
            setWeather(data)
        })
    }


  return (
    <div className="App">
     
            <div className="inputData">
                <input type="text" placeholder="Search..." className="inputField" onChange={e => {
                    setSearch(e.target.value)
                }} />
                <button className="search" onClick={searchPressed}>Search</button>

                {typeof weather.main != "undefined" ?
                    (
                        <div className="inside-box">
                            <p>{weather.name}</p>

                            <p>{weather.main.temp}°C</p>
                            <p>{weather.weather[0].main}</p>
                            <p>({weather.weather[0].description})</p>
                        </div>
                    )
                    :
                    ""}
            </div>
        </div>
  );
}

export default App;
