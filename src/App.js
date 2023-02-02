import React,{ useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import {
  BrowserRouter as Router,
  Routes,
  Route
  
} from "react-router-dom";

const App = () => {
  const[mode,setMode] = useState("light");
  const toggleMode=()=>{
    if(mode === 'light')
      setMode('dark');
    else
      setMode('light');  
  }
  return (
    <>
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Routes>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/" element={<Textform heading= "Enter the text to analyze"/>}/>
        </Routes>
    </Router>
    </>
  );
};
export default App;
