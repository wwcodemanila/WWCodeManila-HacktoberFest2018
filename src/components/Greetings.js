import React from "react"
import moment from "moment"

const Greetings = () =>{ 
    //console.log(moment().format())
    return(
        <React.Fragment>
            <header className="greeting">
                <span className="time">{moment().format('h:mm')}</span>
                <span className="text">Good evening, Hi <span>WWCode</span>.</span>
            </header>
        </React.Fragment>
)}


export default Greetings