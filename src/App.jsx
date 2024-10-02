import Home from "./pages/Home.jsx";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from 'react';
import Kanban from "./components/Kanban.jsx";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Feedback from "./components/Feedback.jsx";
import { TypeAnimation } from 'react-type-animation';
import { useUser } from "@clerk/clerk-react";
import Features from "./components/Features.jsx";
import Achievements from "./components/Achievements.jsx";
import About from "./components/About.jsx";
import Footer from "./components/Footer.jsx";
import Services from "./components/Services.jsx";
import Report from './components/Report.jsx'
import Updates from "./components/Updates.jsx";
import Alerts from "./components/Alerts.jsx";
import Map from "./components/Map.jsx";

export default function App() {

  const { user } = useUser();


  return (

    <div className="font-poppins">
      <Router>
      <div className="z-10 bg-custom-gradient">
          <Navbar />
      </div>
      <Routes>
      <Route path="/" element={
        <>
        <Suspense fallback={null}>
        <div className="z-0">
          <Canvas shadows style={{ width: "100vw", height: "100vh" }} className="absolute top-0 left-0 z-0 bg-custom-gradient">
            <Home />
          </Canvas>
          <Features />
          <About />

          {/* <Achievements /> */}
        </div>
        <div className="absolute inset-0 flex items-center justify-start text-white text-xl w-[60%] font-semibold text-center leading-relaxed  ">
         <div className="backdrop-blur-md p-8 py-12 mr-8 rounded-xl">
        <TypeAnimation 
            sequence={[
              // Same substring at the start will only be typed out once, initially
              'Building Tomorrow Together: Smart Cities for Connected Lives!',
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              'Building Tomorrow Together: Smart Cities for Connected Futures!',
              1000,
              'Building Tomorrow Together: Smart Cities for Connected Communities!',
              1000,
              'Building Tomorrow Together: Smart Cities for Connected Neighborhoods!',
              1000
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '2em', display: 'inline-block' }}
            repeat={Infinity}
            />
            <Link to={'/services'}>
            <button className="text-white text-lg flex justify-center items-center w-full py-8 hover:scale-125 hover:duration-300 transition-all">
              Explore Services
              <span className="px-3 "><img src="src/assets/images/rightArrow.png" height={25} width={25} alt="" /></span>
            </button>
            </Link>
          </div>
          </div>
        </Suspense>
        </>
      } />
        <Route path="/report" element={<Report />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/updates" element={<Updates />} />
        <Route path="/kanban" element={<Kanban />} />
        <Route path="/profile" element={<h1>Profile Page</h1>} />
        <Route path="/services" element={<Services />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/alerts" element={<Alerts />} />
        <Route path="/map" element={<Map />} />
      </Routes>
    </Router>
    <Footer />

    </div>

  )
}