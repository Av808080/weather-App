import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Data } from "../Types/Data"

type Props = {
    data: Data
    city: string
}


const ShowData = (data: Props) => {
    const { data: { country, description, icon: Image, temp } } = data;
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className="w-72 h-76 rounded-xl bg-indigo-300 shadow-xl shadow-indigo-500 p-3 flex flex-col items-center gap-2" data-aos='fade-up' data-aos-duration='800'>
            <p className="text-2xl font-bold text-slate-900/95">{data.city}-<span className="bg-orange-500 mx-1 px-1 py-0.5 rounded-lg">{country} </span></p>
            <p className="text-4xl font-bold ">{temp.toFixed(2)}&#176;C</p>
            <p className="text-xl font-semibold tracking-wider">{description}</p>
            <img className="w-3/5" src={Image} alt='status of weather' />

        </div>
    )
}

export default ShowData
