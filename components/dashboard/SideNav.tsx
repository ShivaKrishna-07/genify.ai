"use client"

import { FileClock, Home, Settings, Wallet } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

const SideNav = () => {

  const MenuList = [
    {
      name: 'Home',
      icon: Home,
      path:'/dashboard'
    },
    {
      name: 'History',
      icon: FileClock,
      path:'/dashboard/history'
    },
    {
      name: 'Billing',
      icon: Wallet,
      path:'/dashboard/billing'
    },
    {
      name: 'Setting',
      icon: Settings,
      path:'/dashboard/setting'
    },
  ];

  const path = usePathname();

  return (
    <div className='h-screen bg-white p-5 shadow-sm border'>
      <div className='flex justify-center'>
      <Image alt='logo' width={100} height={100} src='/logo.svg'/>
      </div>
      <hr className='border my-6' />
      <div className='mt-10'>
        {
          MenuList.map((menu, index)=>(
            <Link href={`/dashboard/${menu.name == 'Home' ? '':menu.name.toLowerCase()}`} className={`flex mb-2 p-3 gap-6 hover:bg-primary hover:text-white rounded-lg cursor-pointer items-center
            ${path == menu.path && 'bg-primary text-white'}
            `} key={index}>
              <menu.icon className='h-6 w-6' />
              <h2 className='text-lg'>{menu.name}</h2>
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default SideNav