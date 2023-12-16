import { useState } from "react"


const Weather = ({handleClick, data}) => {

    const [value, setValue] = useState("")

    const handleValue = (e)=>{
      setValue(e.target.value)
    }

    const isCityAvailable = Boolean(data.location?.name)

  return (
    <div className="container">
    <div>
        <h2>Weather App</h2>
    </div>
    <div className="input-container">
            <input type="text" placeholder="City" onChange={handleValue}/>
            <button onClick={()=>handleClick(value)}>Check</button>
    </div>
    {isCityAvailable && (
    <div className="quote-container">
        
        <div>
            <h3>{data.location.name}</h3>
            <h4>{data.location.localtime}</h4>
            <p>NOW</p>
           
                <h1>{data.current.temp_c} C</h1>
              
        
            <h4>{data.current.condition.text}</h4>
            <img src={data.current.condition.icon} alt="icon" />
            <p>Feels Like: {data.current.feelslike_c} C</p>
            <p>Humudity: {data.current.humidity} %</p>
        </div> 
    </div>
     )}
</div>

  )
}
export default Weather