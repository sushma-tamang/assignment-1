import React from 'react'
import img4 from "../images/proxy-image.jpeg"
export default function About() {
  return (
    <div className='flex flex-col mx-40'>
      <div className='flex justify-between gap-40 text-left py-10 '>
        <p className="px-2 my-5">
          At Neo Clinic, our vision is to be a leading provider of holistic therapy services, empowering individuals of all ages to achieve their fullest potential. We offer a range of services, including occupational, speech, and physiotherapy, as well as psychological counseling, all tailored to meet the unique needs of our clients.
<p className='my-5'>
Our goals are to ensure professional excellence and accessibility, making high-quality therapy available to everyone. We focus on personalized care, community engagement, and innovative practices to help individuals develop effective coping strategies, improve daily functioning, and gain greater independence and confidence.

</p>
          
        </p>
        <img className='size-80 mx-10 my-5' src={img4} alt=''/>


      </div>
      <div className='flex flex-col gap-4'>
        <p className=' text-2xl font-bold font-serif'>
        About us Neo Clinic
        </p>
        <p>
        Lalitpur Neo Clinic is located in Gwarkho-6, Lalitpur, Kathmandu, and is dedicated to enhancing the well-being and quality of life for individuals of all ages. Our multidisciplinary team provides a range of services, including occupational therapy, speech therapy, physiotherapy, and psychological counseling, all tailored to meet the unique needs of each client. We integrate evidence-based practices with innovative techniques to achieve the best outcomes. Our mission is to empower clients by helping them develop effective coping strategies, improve daily functioning, and gain greater independence and confidence, all within a supportive and inclusive environment.
        </p>
      </div>
    </div>
  )
}
