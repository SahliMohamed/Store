import React from 'react'
import bannerImg from '../../assets/banner.png'
const Banner = () => {
  return (
    <div className='flex flex-col md:flex-row-reverse py-16 justify-between items-center gap-12'>
        {/* right side */}
        <div className='md:w-1/2 w-full flex items-center md:justify-end'>
            <img src={bannerImg}/>
        </div>
        
        {/* left side */}
        <div className='md:w-1/2 w-full'>
            <h1 className='md:text-5xl text-2xl font-medium mb-7'>New released this week</h1>
            <p className='mb-10'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt sit distinctio fugiat perferendis magnam assumenda sint veritatis vero ipsa in numquam asperiores est suscipit facere, aut cumque omnis dolore quo.</p>
            <button className='btn-primary'>Subscribe</button>
        </div>
        
    </div>
  )
}

export default Banner