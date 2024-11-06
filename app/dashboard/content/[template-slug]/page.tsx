"use client";

import FormSection from "@/components/dashboard/content/FormSection";
import OutputSection from "@/components/dashboard/content/OutputSection";
import { TEMPLATE } from "@/components/dashboard/TemplateListSection";
import { Button } from "@/components/ui/button";
import Templates from "@/data/Templates";
import { db } from "@/utils/db";
import { chatSession } from "@/utils/gemini";
import { AIOutput } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useContext, useState } from "react";
import { use } from "react";
import moment from 'moment'
import { TotalUsageContext } from "@/context/TotalUsageContext";
import { useRouter } from "next/navigation";
import { UpdateCreditUsageContext } from "@/context/UpdateCreditUsageContext";

interface PROPS {
  params: Promise<{
    "template-slug": string;
  }>;
}

const CreateNewContent = (props: PROPS) => {
  const [loading, setLoading] = useState(false);
  const [aiOutput, setAiOutput] = useState<string>('');
  
  const {user} = useUser();
  const router = useRouter()
  const {totalUsage} = useContext(TotalUsageContext);
  const {updateCreditUsage, setUpdateCreditUsage} = useContext(UpdateCreditUsageContext);
  
  const params = use(props.params);

  const selectedTemplate: TEMPLATE | undefined = Templates.find(
    (item) => item.slug === params["template-slug"]
  );

  const GenerateAIContent = async (formData: any) => {

    if(totalUsage >= 100000){
      router.push('/dashboard/billing')
      return;
    }

    setLoading(true);
    const selectedPrompt = selectedTemplate?.aiPrompt;
    const FinalAiPrompt = JSON.stringify(formData) + ', ' + selectedPrompt;

    const result = await chatSession.sendMessage(FinalAiPrompt);

    setAiOutput(result.response.text());
    
    await SaveInDB(JSON.stringify(formData),selectedTemplate?.slug,result?.response.text())
    setLoading(false);

    setUpdateCreditUsage(Date.now());
  };

  const SaveInDB = async (formData:any, slug:any, aiOutput:any) => {
    const result = await db.insert(AIOutput).values({
      formData:formData,
      templateSlug:slug,
      aiResponse: aiOutput,
      createdBy: user?.primaryEmailAddress?.emailAddress,
      createdAt: moment().format('DD/MM/YYYY')
    })
  }

  return (
    <div className='p-5'>
            <Link href={"/dashboard"}>
                <Button> <ArrowLeft/> Back</Button>
            </Link>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-5 '>
                {/* FormSection  */}
                    <FormSection 
                    selectedTemplate={selectedTemplate}
                    userFormInput={(v:any)=>GenerateAIContent(v)}
                    loading={loading} 
                    />
                {/* OutputSection  */}
                <div className='col-span-2'>
                    <OutputSection aiOutput={aiOutput}/>
                    </div>
            </div>
        </div>
  );
};

export default CreateNewContent;
