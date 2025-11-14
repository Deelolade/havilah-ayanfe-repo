import Axios from "./components/Axios"
import Birthday from "./components/Birthday"
import Box1 from "./components/Box1"
import Box2 from './components/Box2'
import Box3 from './components/Box3'
import Box4 from './components/Box4'
import Box5 from './components/Box5'
import Events from "./components/Events"
import EventTwo from "./components/EventTwo"
import Form from "./components/Form"
import Image from "./components/Image"
import LoadingState from "./components/LoadingState"
import Map from "./components/Map"
import Movie from "./components/Movie"
import Props from "./components/Props"
import RandomUser from "./components/RandomUser"
import State from "./components/State"
import StateTwo from "./components/StateTwo"
import Style from "./components/Style"
import Tanstack from "./components/Tanstack"
import TanstackTwo from "./components/TanstackTwo"
import UseEffect from "./components/UseEffect"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Navbar from "./components/ui/Navbar"
import Career from "./pages/Career"

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route index element={<Home/>}/>  
        <Route path="/about" element={<About/>}/>  
        <Route path="/contact" element={<Contact/>}/>  
        <Route path="/careers" element={<Career/>}/>  
      </Routes>



    <div className='p-20'>
      {/* <Props name="Deelolade" age={201}/>
      <Props name="Rasaq" age={21}/>
      <Props name="Jake" age={13}/>
      <Props name="John" age={98}/> */}

      {/* <Style/>
      <State/>
      <StateTwo/> */}

      {/* <UseEffect/> */}
      {/* <Map/> */}

        {/* <Events/> */}
        {/* <EventTwo/> */}
      {/* <Box1/>
      <Box2/>
      <Box3/>
      <Box4/>
      <Box5/> */}
      {/* <Image/> */}
      {/* <RandomUser/> */}
      {/* <Axios/> */}
      {/* <LoadingState/> */}
      {/* <Tanstack/> */}
      {/* <TanstackTwo/> */}
      {/* <Birthday/> */}
      {/* <Movie/> */}
      {/* <Form/> */}
    </div>
    </Router>

  )
}

export default App
