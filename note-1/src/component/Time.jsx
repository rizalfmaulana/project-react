import React, { useState } from "react"

function Time(){
    setInterval(updateTime, 1000)
    const now = new Date().toLocaleTimeString()
    const [time, setTime] = useState(now)

    function updateTime(){
        const newTime= new Date().toLocaleTimeString()
        setTime(newTime)
    }
    return <div className="waktu">
        <h1>{time}</h1>
    </div>
}

export default Time