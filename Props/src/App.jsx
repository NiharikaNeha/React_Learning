import React from 'react'
import HeroSection from './components/HeroSection'

const App = () => {

    const users = [
  {
    "name": "Manish Kumar",
    "age": 60,
    "city": "Mumbai",
    "profession": "Manager"
  },
  {
    "name": "Neha Sharma",
    "age": 18,
    "city": "Odisha",
    "profession": "Frontend Developer"
  },
  {
    "name": "Roshan Sharma",
    "age": 20,
    "city": "Jharkhand",
    "profession": "Full-Stack Developer"
  },
  {
    "name": "Ayush Kumar",
    "age": 25,
    "city": "Bangalore",
    "profession": "UI/UX Designer"
  }
]

  return (
    <div className='p-6'>
      {users.map(function(elem,idx){
        return <HeroSection key={idx} username={elem.name} age={elem.age} city={elem.city} prof={elem.profession}/>
      })}
    </div>
  )
}

export default App