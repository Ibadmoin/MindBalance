// src/pages/Home.jsx
import React, { useState } from 'react';
import MoodPopup from "../components/MoodPopup";
import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";
import FeatureHighlight from '../components/FeatureHighlight';
import { TextGenerateEffectDemo } from '../components/Herosectiontextgenerator';
import MoodSelector from '../components/MoodSelector';
import { FloatingDockDemo } from '../components/FloatingDockDemo';
import { StickyScrollRevealDemo } from '../components/HowitWorks';


const Home = () => {
  const [selectedMood, setSelectedMood] = useState(null);
  const [showPopup, setShowPopup] = useState(false);



  const handleSubmit = () => {
    if (!selectedMood) {
      alert("Please select a mood!");
      return;
    }
    localStorage.setItem('mood', selectedMood.name);
    setShowPopup(true);
    
  };

  return (
    <>
      <BackgroundGradientAnimation>
        <div className="absolute z-50 inset-0 flex flex-col items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
          <h1 className="text-xl md:text-9xl bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20 bg-clip-text text-transparent">
            Mind Balance
          </h1>
         
            <TextGenerateEffectDemo />
        

          {/* Track your mood section */}
          <MoodSelector
            selectedMood={selectedMood}
            setSelectedMood={setSelectedMood}
            handleSubmit={handleSubmit}
          />
        </div>
      </BackgroundGradientAnimation>

      <div className="w-full dark:bg-gray-900 bg-gray-900 py-16 px-6 md:px-5">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white dark:text-white mb-5">
            Why Choose Mind Balance?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-5 max-w-3xl mx-auto">
            Track your mood daily, reflect through journaling, and gain insight into your mental well-being with beautifully crafted charts and tips.
          </p>
        </div>
      </div>

      {/* Move FeatureHighlight here */}
      <FeatureHighlight className='' />

      {/* Mood Popup */}
      <MoodPopup isOpen={showPopup} setIsOpen={setShowPopup} />

      <div className="w-full dark:bg-gray-900 bg-gray-900 py-16 px-6 md:px-5">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white dark:text-white mb-5">
           How Its Works?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-5 max-w-3xl mx-auto">
            Mind Balance is design to track your daily Mood status.
          </p>
        </div>
        <StickyScrollRevealDemo />
      </div>
      
    
    </>
  );
};

export default Home;
