import React from 'react'
import img3 from "../images/doctor.jpg"
export default function Services() {
    return (
        <div className='flex justify-between gap-x-28 px-20' >

<div> <img className='size-80 mx-10 my-5' src={img3} alt=''/> </div>

            <div className='flex flex-col text-left px-50 mx-10  max-h-0 my-5 '>
                <p className='text-2xl text-green-600 font-semibold'>
                    Psychology Counseeling service
                </p>

                <p className='text-xl font-semibold my-2'>What is Psychology Counseeling and How Can It Help ?</p>

                <p>Psychology is the scientific study of the mind and behavior. It encompasses a wide range of topics, including cognition, emotion, perception, motivation, brain functioning, personality, and social interactions. Psychologists aim to understand how people think, feel, and behave in various situations and to apply this knowledge to help individuals improve their lives.

                    Psychology can help in numerous ways. It offers therapeutic interventions such as cognitive-behavioral therapy (CBT), psychotherapy, and counseling to treat mental health conditions like depression, anxiety, and stress. Psychologists also provide support for individuals dealing with life challenges, such as grief, relationship issues, and trauma. Additionally, psychology can enhance personal development, improve relationships, and promote overall well-being by helping people understand and change unhelpful behavior patterns and develop healthier coping strategies. Through assessment, diagnosis, and tailored treatment plans, psychology plays a crucial role in improving mental health and quality of life.</p>

                    <button className='flex  my-3 rounded-sm bg-blue-900 mx-10'>
                        Back
                    </button>
            </div>
            
            
        </div>
    )
}
