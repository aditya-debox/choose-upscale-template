import React from 'react';
import Img from "@/assets/delicious-veggie-dishes-still-life (1) 1.png"
import Image from 'next/image';


const data ={
    title: "A Passion for Gastronomy",
    description: "Established in 2015, our restaurant has quickly become a beacon of culinary excellence in the city, drawing discerning diners from near and far. Our mission is to redefine the fine dining experience, offering a truly exceptional and immersive journey for our guests, one bite at a time",
    Image: Img 
}

const About = () => {
  return (
    <div className='flex flex-col lg:flex-row  items-center justify-center px-6 sm:px-16 py-24 xl:px-24 lg:px-12'>
        <div className='w-full sm:w-[400px] lg:w-[500px] xl:w-[550px] h-auto z-20'>
            <Image 
                src={data.Image} 
                alt='Banner-Image' 
                className='rounded-t-full' 
                objectFit='cover' 
                layout='responsive'
            />
        </div>

        <div className='flex flex-col lg:ml-20 items-start space-y-8 sm:space-y-10 max-w-[600px] lg:max-w-[584px] pt-10 font-primary'>
            <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-secondary !font-normal leading-[65px]'>{data.title}</h2>
            <p className='text-xl sm:text-2xl md:text-3xl leading-8 sm:leading-10 font-normal text-subTextColor'>{data.description}</p>
        </div>
        
    </div>
  )
}

export default About