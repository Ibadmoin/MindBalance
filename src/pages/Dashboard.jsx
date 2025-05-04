import React from 'react'
import MainGrid from '../components/dashboardComp/MainGrid'

function Dashboard() {
  return (
  <>
   <div className='pt-40 p-10 flex flex-col justify-center'>
   <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white">Your Dashboard</h1>
        <p className="text-lg text-white/70 mt-2">Get insights from your daily journal entries</p>

      </div>
   <MainGrid />
   </div>
  </>
  // <h1>hi</h1>
  )
}

export default Dashboard
