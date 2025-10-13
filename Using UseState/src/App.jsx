import React, { useState } from 'react'

const App = () => {
  const [num, setNum] = useState(0)

  return (
    <div className='text-center p-60'>
      <h1 className='text-4xl font-bold'>Number: {num}</h1>
      <div className='mt-7'>
        <button onClick={() => {setNum(num + 1)}} className='bg-green-600 px-3 py-3 text-2xl font-bold text-white rounded-2xl'>+ INCREAMENT</button>
      <button onClick={() => {setNum(num - 1)}} className='bg-red-600 ml-30 px-3 py-3 text-2xl font-bold text-white rounded-2xl'>- DECREAMENT</button>
      </div>
    </div>
  )
}

export default App