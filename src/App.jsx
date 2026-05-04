import Clock from "./components/Clock";
import "./App.css";
import {useState} from 'react';
const App = () => {
  const [isMounted,setIsMounted]=useState(true);
  const onToggle=()=>{
    setIsMounted(isMounted=>!isMounted);
  }
  return (
  
      <div className="main-container">
        <button className="button" onClick={onToggle}>{isMounted?"Hide Clock":"Show Clock"}</button>
          {isMounted && <Clock />}
      </div>
  )
}

export default App