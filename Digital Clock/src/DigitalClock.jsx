import React,{useState,useEffect} from "react";

function DigitalClock(){

    const [time,setTime] = useState(new Date().toLocaleTimeString());

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setTime(new Date().toLocaleTimeString());
        },1000);
        return ()=>clearInterval(intervalId);
    },[]);

    return(
        <div className="clock-container">
            <div className="clock">
                <span>{time}</span>
            </div>
        </div>
    )
}
export default DigitalClock;