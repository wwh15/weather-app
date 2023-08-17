import React from "react"
import sunny from '../images/sunny.jpg'
import cloudy from '../images/cloudy.jpg'
import partlyCloudy from '../images/partlyCloudy.jpg'
import rainy from '../images/showers.jpg'

export default function Box(props) {
    
    if (props.forecast == "sunny" || props.forecast == "mostly sunny") {
        var img = sunny
    }
    else if (props.forecast == "partly cloudy") {
        var img = partlyCloudy
    }
    else if (props.forecast == "cloudy" || props.forecast == "mostly cloudy") {
        var img = cloudy
    }
    else {
        var img = rainy
    }
    
    return(
            <div className="box">
                <p className="box--date">{props.date}</p>
                <img src={img} className="box--image"/>
                <div className="box--temps">
                    <p className="box--low">{props.low_temp}</p>
                    <p className="box--high">{props.high_temp}</p>
                </div>
            </div>
            
    )
}