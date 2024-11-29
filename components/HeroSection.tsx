import React from 'react';
import HeroImage from "../assets/HeroImage.png"
import Img1 from "../assets/Isolation_Mode (1).png";
import Img2 from "../assets/Isolation_Mode (2).png";
import Button from './common/Button';
import Image from 'next/image';

const data = {
    Title:"Savor the Extraordinary",
    Description: "At our upscale fine dining establishment, we elevate the art of gastronomy, crafting dishes that are as visually stunning as they are delectable.",
    Button: "Reserve your Table",
    HeroImg: HeroImage,
}

const HeroSection = () => {
  return (
    <div className='relative flex flex-col-reverse lg:flex-row lg:items-start items-center justify-between px-6 sm:px-16 py-16 xl:px-24 lg:px-12'>
        {/* Floating Images */}
        <div className='absolute top-0 right-12 z-10 hidden lg:block'>
            <Image src={Img1} width={300} height={300} alt='Image top' />
        </div>
        <div className='absolute bottom-0 left-0 z-10 hidden lg:block'>
            <Image src={Img2} alt='Image bottom' width={300} height={300} />
        </div>

        <div className='flex flex-col items-start space-y-8 sm:space-y-10 max-w-[600px] lg:max-w-[584px] pt-10 font-primary'>
            <h2 className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-secondary !font-normal'>{data.Title}</h2>
            <p className='text-xl sm:text-2xl md:text-3xl leading-8 sm:leading-10 font-normal text-subTextColor'>{data.Description}</p>
            <Button text={data.Button} url='' boundary={true} />
        </div>

        <div className='w-full sm:w-[500px] lg:w-[600px] xl:w-[600px] h-auto z-20'>
            <Image 
                src={data.HeroImg} 
                alt='Banner-Image' 
                className='rounded-t-full' 
                objectFit='cover' 
                layout='responsive'
            />
        </div>
    </div>
  );
}

export default HeroSection;
