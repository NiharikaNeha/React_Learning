import React from 'react'

const HeroSection = (props) => {

  return (
    <div className='mr-7 bg-amber-50 text-black p-6 inline-block text-center rounded-2xl'>
     <h1 className='text-2xl font-semibold mb-4'>Name: {props.username}</h1>
     <h2>Age: {props.age}</h2>
     <h2>City: {props.city}</h2>
     <h2>Profession: {props.prof}</h2>
     <button className='mt-5 bg-emerald-600 text-white px-4 py-2 rounded font-medium'>Add Details</button>
    </div>
  )
}

export default HeroSection