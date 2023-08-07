import { ChangeEvent, FormEvent, useState } from 'react'
import axios from 'axios'
//Type
import { Data } from './Types/Data'
import ShowData from './components/ShowData';

const API_KEY = "5a4e03723d22ebc949c51818dce21b9a";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather"

const App = () => {
  const [data, setData] = useState({} as Data)
  const [city, setCity] = useState("")

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(city.length>2)
    try {
      const { data } = await axios.get(`${BASE_URL}?q=${city}&units=metric&appid=${API_KEY}`)
      setData({
        temp: data.main.temp, icon: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`
        , country: data.sys.country, description: data.weather[0].description, isError: false
      })
    }
    catch {
      setData({ ...data, isError: true })
    }
  }

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
    setData({} as Data)
  }
  return (
    <div className='min-h-screen bg-gradient-to-br from-indigo-400 to-indigo-500 flex flex-col items-center gap-4 pt-4'>
      <h1 className='font-bold text-3xl tracking-wider'>Weather App</h1>
      <form onSubmit={submitHandler} className='flex flex-col justify-center items-center gap-4'>
        <input type='text' value={city} onChange={changeHandler} className='ring-1 ring-cyan-500 rounded-xl px-2 py-0.5 focus:outline-none focus:ring-2' placeholder='Enter A City...' />
        <button type='submit' className='font-semibold  tracking-wider bg-orange-500 hover:bg-orange-600 transition duration-300 rounded-xl px-2 py-0.5' >Submit</button>
      </form>
      {data.isError && <p className='text-center p-2 text-xl font-semibold text-rose-600'>{city} is Not A CityName</p>}
      {!!data.country && <ShowData data={data} city={city} />}
    </div>
  )
}

export default App
