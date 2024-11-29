import Image from 'next/image';
import React from 'react';
import Img2 from "../assets/Isolation_Mode (3).png";
import Img1 from "../assets/Isolation_Mode (4).png";

const data = {
    tilte: "Elevate Your Palate",
    description: "At our upscale fine dining restaurant, we believe that dining is an art form, a celebration of the senses that transcends the merely functional. Our culinary team, led by award-winning Chef John Doe, has crafted a menu that showcases the finest ingredients, expertly prepared and presented with unparalleled attention to detail"
}

const BannerSection = () => {
  return (
    <div className='relative w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 py-12 sm:py-16 md:py-20 lg:py-24 bg-buttonBgColor text-bgColor text-center'>
        <div className='absolute top-0 right-0 z-10 hidden lg:block'>
            <Image 
                src={Img1} 
                width={240} 
                height={200} 
                alt='Image top' 
                className='text-white' 
            />
        </div>
        <div className='absolute bottom-0 left-0 z-10 hidden lg:block'>
            <Image 
                src={Img2} 
                alt='Image bottom' 
                width={240} 
                height={200} 
            />
        </div>

        <h2 className='font-secondary text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center capitalize'>
            {data.tilte}
        </h2>
        <p className='font-primary text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed md:leading-loose lg:leading-10 pt-4 sm:pt-6 md:pt-8 lg:pt-10 font-normal'>
            {data.description}
        </p>
    </div>
  )
}

export default BannerSection