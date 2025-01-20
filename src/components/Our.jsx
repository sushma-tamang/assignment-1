import React from 'react'
import img9 from "../images/Lt1.jpg"
import img10 from "../images/Lt2.jpg"
import img11 from "../images/Lt3.jpg"
export default function Our() {
  return (
    <div className=' flex flex-col mx-20'>
      <div className='flex flex-col text-center py-10 mx-10 my-10 gap-2 '>
        <p className='text-green-700 text-3xl font-serif font-bold'>Our Team </p>
        <p className='text-xl text-black'>Pediatric Rehabilitation at Lalitpur Neo Clinic offers the latest evaluation and treatment techniques to improve function and quality of life for children. Our experts see children from birth through age 18, in a warm, holistic and collaborative environment.The Pediatric Rehabilitation team diagnoses and treats a wide range of conditions. Using a team approach, pediatric rehabilitation experts partners with you and your child as the center of our comprehensive team.</p>

      </div>

      <div className='flex gap-8 '>
 <div >
 <img className='rounded-xl w-50 h-50' src={img9} alt=''/>
 <h1 className='text-blue-500 font-serif font-bold text-2xl'>Dr. Asim Shrestha</h1>
 <h1 className=' text-xl text-left font-serif'> CHILD NEUROLOGIST</h1>
 </div>

 <div className='flex flex-col gap-2'>
    <img className='rounded-xl  h-50  ' src={img10} alt=''/>
<h1 className='text-blue-500 font-serif font-bold text-2xl'>Shamed Katila Shrestha</h1>
<h1 className=' text-xl text-left font-serif'> Clinical Pedriatic ( Pediatric Physiotherapist with 12 years of experience)</h1>
 </div>
 <div>
    <img className='rounded-xl h-70 ' src={img11} alt=''/>
    <h1 className='text-blue-500 font-serif font-bold text-2xl'>Sarna Maharjan</h1>
    <h1 className=' text-xl text-left font-serif'> Physiotherapist ( Experience: 10 years in field of pedriatic neurological disorders)</h1>
 </div>
      </div>
    </div>
  )
}
