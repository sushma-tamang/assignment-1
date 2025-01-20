import React from 'react'

export default function Footer() {
    return (
        <div className='bg-green-700  py-20  flex flex-col gap-10 justify-center items-center mt-36'>
            <div className='flex justify-between gap-10'>
                <div className='flex flex-col gap-3  flex-1'>
                    <p>logo</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, doloribus!</p>
                    <p>iicons</p>
                </div>
                <div className='flex flex-col gap-3 flex-1'>
                    <p className=' text-3xl text-white font-semibold'>Our Services</p>
                    <p className=' text-gray-300 text-xl'>Occupational Therapy</p>
                    <p className=' text-gray-300 text-xl'>Autism Diagnosis (ADOS)</p>
                    <p className=' text-gray-300 text-xl'>Psychology Counseeling</p>
                    <p className=' text-gray-300 text-xl'>Sensory Integration</p>
                    <p className=' text-gray-300 text-xl'>Behavioural Therapy</p>
                    <p className=' text-gray-300 text-xl'>Behavioural Therapy</p>
                    <p className=' text-gray-300 text-xl'>Behavioural Therapy</p></div>
                <div className='flex flex-col gap-3 flex-1'>
                    <p className=' text-3xl text-white font-semibold'>Helpful Links</p>
                    <p className=' text-gray-300 text-xl'>About Us</p>
                    <p className=' text-gray-300 text-xl'>Contact Us</p>
                    <p className=' text-gray-300 text-xl'>Gallery</p>
                </div>
                <div className='flex flex-col gap-3 flex-1'>
                    <p className=' text-3xl text-white font-semibold'>
                        24/7 Hours Supports
                    </p>
                    <p className=' text-gray-300 text-xl'> lalitpurneoclinic@gmail.com</p>
                    <p className=' text-gray-300 text-xl'>+ 977 9702451907</p>
                    <p className=' text-gray-300 text-xl'>Gwarkho-6 Lalitpur</p>
                </div>
            </div>
            <div className=' flex justify-between ' >
                <p>copyright by sushma tamang</p>
                <div className='   ml-96 bg-white px-2 py-1'>


                    <input className=' outline-none placeholder:text-black' placeholder=' enter your email' type="
                
                " />
                    <button className=' bg-blue-800 text-white py-1 rounded-md px-4'>
                        subscribe
                    </button>
                </div>
            </div>
        </div>
    )
}
