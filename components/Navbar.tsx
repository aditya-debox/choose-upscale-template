import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from './common/Button'


const navItems = [
    {name:"Home", link:"/"},
    {name:"Catering", link:"#catering"},
    {name:"Our Specials", link:"#our-specials"},
    {name:"Locations", link:"#locations"}
]

const Navbar = () => {
  return (
    <div className='w-full px-2 py-0 z-50 border-b-2 border-b-primaryColor font-primary' >
         <div className="flex justify-between items-center px-2 sm:px-16 py-6 xl:px-24 lg:px-12">
          <Link
            href={"/"}
            prefetch={false}
            passHref
            className="relative !w-[170px] !h-[53px] min-w-[115px] min-h-[53px]"
          >
            <Image
              src={""}
              alt="logo"
              className="!w-full !h-full object-contain"
            />
          </Link>
          <div>
          <ul className="justify-between flex  text-2xl  items-center text-textColor space-x-8  font-medium ">
          {navItems.map((item, index) => (
                  <li key={index}>
                    <Link href={item.link}>
                      <span className="cursor-pointer">
                        {item.name}
                      </span>
                    </Link>
                  </li>
                ))}
            </ul>

          </div>
          <Button text='order now' url='' />
          </div>
    </div>
  )
}

export default Navbar