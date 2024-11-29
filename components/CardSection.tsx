import React from 'react';
import DiningTableImage from "../assets/diningTable.png"
import Image from 'next/image';

const data = {
    Title:"Unparalleled Dining Experience",
    Cards:[
        {
            cardImage:DiningTableImage,
            cardTitle:"Unparalleled Ambiance",
            cardDescription: "Lose yourself in an atmosphere of refined elegance, where every detail has been meticulously curated to transport you to a realm of sophisticated indulgence"
        }, 
        {
            cardImage:DiningTableImage,
            cardTitle:"Exquisite Ingredients",
            cardDescription: "Our chefs source the finest, locally-sourced ingredients to ensure each dish is a symphony of flavors, showcasing the true essence of seasonal produce"

        },
        {
            cardImage:DiningTableImage,
            cardTitle:"Impeccable Service",
            cardDescription: "Our attentive and knowledgeable staff will cater to your every need, ensuring a dining experience that is truly memorable"
        }
    ]
  
}

const CardSection = () => {
  return (
    <div className='w-full flex flex-col  items-center justify-center px-6 sm:px-16 py-16 xl:px-24 lg:px-12' >
        <h2 className='text-6xl font-secondary text-textColor text-center ' >{data.Title}</h2>
        <div className='flex lg:flex-row flex-col items-center justify-between ' >
            {data.Cards.map((card, index)=>(
                <div key={index} className={`${index === 1 ? "lg:pt-40" : " "} flex  flex-1 flex-col items-center justify-center space-y-6 `}  >
                    <div className='lg:w-[374px] w-[300px] sm:w-[full] h:auto' >
                    <Image src={card.cardImage} alt='Dining Image' className='rounded-t-full' 
                objectFit='cover' 
                layout='responsive' />
                </div>
                    <p className='font-secondary text-3xl font-normal text-textColor' >{card.cardTitle}</p>
                    <p className='font-primary text-[20px] leading-8 text-center font-normal text-subTextColor' >{card.cardDescription}</p>
                </div>
            ))}
            
        </div>
    </div>
  )
}

export default CardSection