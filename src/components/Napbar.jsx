import React from 'react'
import img1 from "../images/hospital.jpg"
import { Link } from 'react-router'
export default function Napbar() {
    return (
        <div className=' flex justify-between bg-gray-50 mx-1 py-6  fixed sticky top-0 left-0 z-50 w-full '>

            <div className='flex gap-5'>
                <img className='size-12 mx-3 ' src={img1} alt='' />

                <p className='text-xl text-green-700 font-bold font-serif py-1'>
                    LALITPUR NEO CLINIC
                </p>

            </div>

            <div className='flex justify-normal gap-6 py-1'>
                <h1 className='text-xl font-semibold font-serif text-teal-400'>Home</h1>
            
                <Link to={"services"}className=' hover:text-teal-400 text-xl font-semibold font-serif '> services</Link> 
                <Link to={"about us"} className=' hover:text-teal-400 text-xl font-semibold font-serif '>About Us</Link> 
                <Link to={"gallery"}className=' hover:text-teal-400 text-xl font-semibold font-serif '>Gallery</Link> 
                <Link to={"our teams"}className=' hover:text-teal-400 text-xl font-semibold font-serif '>Our Teams</Link> 
                <Link to={"contact us"}className=' hover:text-teal-400 text-xl font-semibold font-serif '>Contact Us</Link> 
            </div>

        </div>
    )
}
