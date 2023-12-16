
import { useState, useEffect, useRef } from "react"
import Weather from "./Weather"


const App = () => {
  const [data, setData] = useState({})
  const [city, setCity] = useState("")

  const handleClick = (value)=>{
    setCity(value)
  }

  console.log(city);

 
 
  useEffect(()=>{
    const fetchData = async()=>{
      try {
        const url = `https://api.weatherapi.com/v1/current.json?key=58600cf98b124475add122624231512&q=${city}`
        const res = await fetch(url);
        const data = await res.json();
        setData(data);
      } catch (e) {}
    }
    fetchData()
  },[city])

  console.log(data);




  return (
    <div className="bigbox">
    <Weather handleClick={handleClick} data={data}/>
   </div>
  
  )
}
export default App