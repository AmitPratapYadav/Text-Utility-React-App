import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

function App() {

  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);

  const showalert=(message, type)=>{
    setalert({msg: message,
    type: type});

    setTimeout(() => {
      setalert(null);
    }, 1500);
  }

 const toggleMode=() =>{

    if(mode==='dark'){
      setmode('light');
      document.body.style.backgroundColor="white";
      showalert("Light Mode has been enabled", "success");
      console.log('Dark Mode is Disabled');
      
       
    }

    else{
      setmode('dark');
      document.body.style.backgroundColor="#042743";
      showalert("Dark mode has been enabled", "success");

      console.log("Dark Mode is Enabled");

    }
  }

  return (
    <>
    <Router>
    <Navbar title="TextUtils" link1="Home" link2="About Us" link3="Contact Us" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container">
    <Routes>
          <Route exact path="/about" element={<About/>}/>
          <Route path="/" element={<TextForm mode={mode} heading="Enter Your Text to Analyze" label="Enter text here" alert={alert} showalert={showalert}/>}/>
    </Routes>
         </div>
      </Router>
    </>
  );
}



export default App;


