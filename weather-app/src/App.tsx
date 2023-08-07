import { ChangeEvent, FormEvent, useState } from 'react'

const App = () => {
  const [data, setData] = useState({})
  const [city, setCity] = useState("")
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

  }
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value)
  }
  return (
    <div className='min-h-screen bg-gradient-to-br from-indigo-400 to-indigo-500 flex flex-col items-center gap-4 pt-4'>
      <h1 className='font-bold text-3xl tracking-wider'>Weather App</h1>
      <form onSubmit={submitHandler} className='flex flex-col justify-center items-center gap-4'>
        <input type='text' value={city} onChange={changeHandler} className='ring-1 ring-cyan-500 rounded-xl px-2 py-0.5 focus:outline-none focus:ring-2' placeholder='Enter A City...' />
        <button type='submit' className='font-semibold  tracking-wider bg-orange-500 hover:bg-orange-600 transition duration-300 rounded-xl px-2 py-0.5' >Submit</button>
      </form>
    </div>
  )
}

export default App
