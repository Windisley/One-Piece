import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import SectionOne from "./components/SectionOne";
import SectionTow from "./components/SectionTow";
import SectionThree from "./components/Sectionthree";
import SectionFor from "./components/SectionFor";

import './App.css';


function App() {
  return (
    <div className="App">
       <Router>

       <Routes>
            <Route path="/" element={<SectionOne/>}  />
            <Route path="/Shanks" element={<SectionTow/>}/>
            <Route path="/teach" element={<SectionThree/>}/>
            <Route path="/buggy" element={<SectionFor/>}/>
        </Routes>
       </Router>

    </div>

  );
}

export default App;
