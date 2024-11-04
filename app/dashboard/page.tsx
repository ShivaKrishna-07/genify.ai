"use client"

import SearchSection from '@/components/dashboard/SearchSection'
import TemplateListSection from '@/components/dashboard/TemplateListSection'
import React, { useState } from 'react'

const page = () => {
  const [userSearchInput, setUserSearchInput] = useState<string>()
  return (
    <div>
      <SearchSection onSearchInput={(value:string)=>setUserSearchInput(value)
      } />
      <TemplateListSection userSearchInput={userSearchInput} />
    </div>
  )
}

export default page