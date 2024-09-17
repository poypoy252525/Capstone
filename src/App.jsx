import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./Components/Navbar/Navbar"
import Hero from "./Components/Hero/Hero"
import Programs from "./Components/Programs/program";
import Title from "./Components/Title/title";
import About from "./Components/About/about";
import Campus from "./Components/Campus/campus";
import Feedback from "./Components/Feedback/feedback";
import Contact from "./Components/Contact/contact";
import Footer from "./Components/Footer/Footer";
import VideoPlayer from "./Components/VideoPlayer/video";
import LoginPage from "./Components/Login/LoginPage";

const App = () => {

    const [playState, setPlayState] = useState(false);

  return (
     <Router>
      <Navbar />
      <Routes>
        {/* Route for the login page */}
        <Route path="/login" element={<LoginPage />} />
        {/* Default route for the main content */}
        <Route
          path="/"
          element={
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='OUR INSTITUTE' title='What We Offer'/>
      <Programs/>
      <About setPlayState={setPlayState}/>
       <Title title='GALLERY' subTitle='CDM PHOTOS'/>
       <Campus/>
       <Title subTitle='What Student Says' title='FEED BACK'/>
       <Feedback/>
         <Title subTitle='GEt in Touch' title='Contact US'/>
         <Contact/>
         <Footer/>
    </div>
    <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
      }
        />
      </Routes>
    </Router>
  );
};

export default App;