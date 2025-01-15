import React from 'react'
import img2 from "../images/download.jpg"
import { Link } from 'react-router'
export default function Description() {
    return (
        <div className='flex flex-col gap-5 bg-teal-800 w-full py-20 '>

            <div>
                <h1 className='text-5xl text-white font-semibold font-sans my-10 mx-80 text-center'>
                    WELCOME TO THE LALITPUR NEO CLINIC
                </h1>

                <h1 className='text-white text-xl text-center mx-80'>Our expert team specializes in providing a wide range of therapeutic services tailored to your unique needs. We are committed to helping you achieve optimal health and well-being in a compassionate and supportive environment. Thank you for choosing us for your therapy needs!</h1>

            </div>

            <div className='flex justify-center gap-6'>
                <Link to={"about us"} className=' text-xl bg-teal-950 rounded-md text-white font-semibold px-4 py-2 hover:bg-teal-400 duration-50 scale-105'>
                    More about Us
                </Link>

                <Link to={"contact us"} className=' text-xl bg-teal-950 rounded-md text-white font-semibold px-4 py-2 hover:bg-teal-400 duration-50 scale-105'>
                    Contact Us
                </Link>
            </div>

            <div className='flex justify-center py-4'>
                <img src={img2} alt='' />
            </div>
        </div>
    )
}
