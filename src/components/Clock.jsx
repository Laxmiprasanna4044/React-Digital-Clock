import {useState,useEffect} from "react";
import "../App.css";
const Clock = () => {
    const [date, setDate]=useState(new Date());
    useEffect(()=>{
        const intervalId=setInterval(()=>{
            setDate(new Date());
        },1000)
        return ()=>{
            clearInterval(intervalId);
        }
    },[])
    
  return (
    <div className="clock-container">
        <h1 className="heading">Clock</h1>
        <img className="image" src="https://assets.ccbp.in/frontend/hooks/clock-img.png" alt="" />
        <h3 className="time">{date.toLocaleTimeString()}</h3>
    </div>
  )
}

export default Clock