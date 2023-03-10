 import React from 'react'
import Navbar from '/src/components/Navbar'
import Hero from '/src/components/Hero'
import Card from '/src/components/Card'
import airbnbData from '/src/components/data'
import jokesData from './jokesData'
import Contact from '/src/components/Contact'
import Joke from '/src/components/Joke'


function App() {
    const data = airbnbData.map((data)=>{
      return <Card 
          key={data.id}
          data={data}/>
    }) 
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <div className="flex">
      {data}
      </div>
    </div>
  )
}

export default App
