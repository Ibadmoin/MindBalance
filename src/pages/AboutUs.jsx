import React from 'react'
import { GlobeDemo } from '../components/GitGlobe'
function AboutUs() {
  return (<>
      <h1 className="text-4xl font-bold  text-center bg-black pt-40">About Us</h1>
    <div className=" w-full bg-black pb-20 p-10 mx-auto text-white flex justify-start items-start">
      <div className="pt-32 px-6 pb-20 max-w-1xl mx-auto text-white" >
      
      <p className="text-lg text-white/80 leading-relaxed mb-8">
        Mental health is one of the most pressing global issues of our time. According to the World Health Organization, more than <strong>970 million people</strong> worldwide live with a mental disorder — that's over 1 in 8 people. Yet, due to stigma, lack of access, or awareness, many suffer in silence.
      </p>

      <p className="text-lg text-white/80 leading-relaxed mb-8">
        Our mission is simple: <strong>make mental well-being accessible, trackable, and personal.</strong> This web app is designed as a tool for self-reflection, helping you understand your emotions through daily journaling. By logging your mood, analyzing your emotional trends, and providing insights, we empower you to take control of your mental journey — one day at a time.
      </p>

      <p className="text-lg text-white/80 leading-relaxed mb-8">
        Unlike traditional solutions that require appointments, payments, or external help, this platform puts <strong>you in the driver's seat</strong>. With features like visual mood graphs, personal stats, and guided prompts, it turns reflection into a habit — helping you prevent burnout, manage stress, and nurture emotional resilience.
      </p>

      <p className="text-lg text-white/80 leading-relaxed mb-8">
        Mental health is not just a personal issue — it's a <strong>global movement</strong>. That’s why we’re integrating a visual GitHub Globe right here on this page — to represent users from around the world who are united by one goal: healing, understanding, and growing.
      </p>

      </div>
      {/* Placeholder for GitHub Globe */}
      <div className="mt-8 w-full ">
        {/* Insert your GitHub Globe component here */}
        <div className="mt-8 w-full hidden md:flex h-[600px]  rounded-xl flex-col items-center justify-center">
           <h2 className="text-4xl font-bold text-center bg-black pt-10 text-white">
    You're Not Alone – It's a Global Struggle
  </h2>
  <p className="text-lg text-center text-gray-300 max-w-2xl mt-4 px-4">
    Mental health challenges affect millions around the world. MindBalance connects us all in the journey toward healing, growth, and understanding.
  </p>
          <GlobeDemo />
        </div>

      </div>
    </div>
  
  </>
  
  )
}

export default AboutUs
