"use client"

import Templates from '@/data/Templates'
import React, { useEffect, useState } from 'react'
import TemplateCard from './TemplateCard'

export interface TEMPLATE{
    name:string,
    icon:string,
    desc:string,
    category:string,
    slug:string,
    aiPrompt:string,
    form?:FORM[]
}

export interface FORM{
    label:string,
    field:string,
    name:string,
    required?:boolean,   
}

const TemplateListSection = ({userSearchInput}:any) => {
    const [templateData, setTemplateData] = useState(Templates);
    useEffect(() => {
      if(userSearchInput){
        const filtereData = templateData.filter((item, index)=>item.name.toLowerCase().includes(userSearchInput.toLowerCase()));
        setTemplateData(filtereData);
      }
      else{
        setTemplateData(Templates);
      }
    }, [userSearchInput])
    

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-10 gap-5'>
        {templateData.map((item, index)=>(
            <TemplateCard key={index} {...item} />
        ))}
    </div>
  )
}

export default TemplateListSection