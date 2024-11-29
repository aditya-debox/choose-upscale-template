import React from 'react';
import Item1 from "../assets/fried-meat-with-smashed-potato 1.png"
import Image from 'next/image';
import ArrowRight from "@/assets/arrowright.png";
import ArrowLeft from "@/assets/arrowleft.png";

const data = {
    title: "Our Best Sellers",
    card:[
        {
            cardImage:Item1,
            cardTitle:"Filet Mignon",
            cardDescription: "Tender filet mignon cooked to perfection with a rich red wine sauce"
        }, 
        {
            cardImage:Item1,
            cardTitle:"Filet Mignon",
            cardDescription: "Tender filet mignon cooked to perfection with a rich red wine sauce"
        }, 
        {
            cardImage:Item1,
            cardTitle:"Filet Mignon",
            cardDescription: "Tender filet mignon cooked to perfection with a rich red wine sauce"
        }, 
        {
            cardImage:Item1,
            cardTitle:"Filet Mignon",
            cardDescription: "Tender filet mignon cooked to perfection with a rich red wine sauce"
        }, 
       
    
    ],
    button: "View Full Menu"

}

const Slider = () => {
  return (
    <div className='w-full flex flex-col  items-center justify-center px-6  py-16 ' >
        <h2 className='text-6xl font-secondary text-textColor text-center ' >{data.title}</h2>
        <div className='flex items-center justify-center pt-20' >
            <div>
                <Image src={ArrowLeft} alt='arrow-btn' width={30} />
            </div>

  <div className='flex lg:flex-row flex-col items-center justify-between ' >
            {data.card.map((card, index)=>(
                <div key={index} className={`flex  flex-1 flex-col items-center justify-center space-x-6 `}  >
                    <div className='lg:w-[290px] w-[250px] sm:w-[full] h:auto' >
                    <Image src={card.cardImage} alt='Dining Image' className='rounded-t-full' 
                objectFit='cover' 
                layout='responsive' />
                </div>
                    <p className='font-secondary text-3xl font-normal text-textColor' >{card.cardTitle}</p>
                    <p className='font-primary text-[20px] leading-8 text-center font-normal text-subTextColor max-w-[300px]' >{card.cardDescription}</p>
                </div>
            ))}
            
        </div>
            <div>
                <Image src={ArrowRight} alt='arrow-btn' width={30}  />
            </div>

            
        </div>
    </div>
  )
}

export default Slider