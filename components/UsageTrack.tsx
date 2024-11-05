"use client"

import React, { useContext, useEffect, useState } from "react";
import { Button } from "./ui/button";
import { useUser } from "@clerk/nextjs";
import { AIOutput } from "@/utils/schema";
import { db } from "@/utils/db";
import { eq } from "drizzle-orm";
import { HISTORY } from "./dashboard/history/History";
import { TotalUsageContext } from "@/context/TotalUsageContext";
import Link from "next/link";
import { UpdateCreditUsageContext } from "@/context/UpdateCreditUsageContext";

const UsageTrack = () => {

    const {totalUsage, setTotalUsage} = useContext(TotalUsageContext);
    const {updateCreditUsage, setUpdateCreditUsage} = useContext(UpdateCreditUsageContext);
    const {user} = useUser();

    const GetData = async() => {
        {/* @ts-ignore */}
        const result:HISTORY[] = await db.select().from(AIOutput).where(eq(AIOutput.createdBy, user?.primaryEmailAddress?.emailAddress))

        GetTotalUsage(result)
    }

    useEffect(()=>{
        user&&GetData();
    }, [user])

    useEffect(()=>{
        user&&GetData();
    }, [updateCreditUsage&&user])

    const GetTotalUsage = (result:HISTORY[]) => {
        let total:number = 0;
        result.forEach(element=>{
            total = total + Number(element.aiResponse?.length)
        })
        setTotalUsage(total)
    }

  return (
    <div className="m-5">
      <div className="bg-primary text-white p-3 rounded-lg">
        <h2 className="font-medium">Credits</h2>
        <div className="h-2 bg-[#9981f9] w-full rounded-full mt-3">
          <div
            className="h-2 bg-white rounded-full"
            style={{ width: (totalUsage/100000)*100 }}
          ></div>
        </div>
        <h2 className="text-sm my-2">{totalUsage}/100000 credits used</h2>
      </div>
      <Link href={'/dashboard/billing'}>
      <Button variant={'outline'} className="w-full text-primary my-3">Upgrade</Button>
      </Link>
    </div>
  );
};

export default UsageTrack;
