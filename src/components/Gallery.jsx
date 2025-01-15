import React from 'react'
import img0 from "../images/proxy-image (1).jpeg"
import img6 from "../images/proxy-image (2).jpeg"
import img7 from "../images/proxy-image (3).jpeg"
import img8 from "../images/proxy-image (4).jpeg"
export default function Gallery() {
    return (
        <div className='flex justify-between gap-5 mx-20 my-10'>
            <div className='flex flex-col gap-7 justify-center'>
                <img src={img0} alt='' />
                <img src={img6} alt=''/>
                
            </div>

            <div className='flex flex-col gap-7 justify-center'>
            <img src={img7} alt=''/>
            <img src={img8} alt=''/>
            </div>


        </div>
    )
}
