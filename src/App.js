import React from "react"
import Header from "./components/Header"
import Box from "./components/Box"

export default function App(){

  const [weatherData, setWeatherData] = React.useState({})
  React.useEffect(() => {
    fetch("https://my-json-server.typicode.com/nfried16/swe-practice/weather")
    .then(res => res.json())
    .then(data => setWeatherData(data))
  }
  )

  // console.log(weatherData[0].date)

  const [frame, setFrame] = React.useState(false)
  


  function handleClick() {
    setFrame(prevFrame => !prevFrame)

  }
  let count = frame ? 0 : 5
  let buttonTxt = frame ? "see next week" : "see last week"

  return(
    <div>
      <Header />
      <div className="boxes">
        <Box 
          {...weatherData[count]}
        />
        <Box 
          {...weatherData[count+1]}
        />
        <Box 
          {...weatherData[count+2]}
        />
        <Box 
          {...weatherData[count+3]}
        />
        <Box 
          {...weatherData[count+4]}
        />
      </div>
      <div className="button">
        <button onClick={handleClick}>{buttonTxt}</button>
      </div>
      
    </div>
  )
}
