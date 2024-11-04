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
import { useState } from "react";
import { use } from "react";
import moment from 'moment'

interface PROPS {
  params: Promise<{
    "template-slug": string;
  }>;
}

const CreateNewContent = (props: PROPS) => {
  const [loading, setLoading] = useState(false);
  const [aiOutput, setAiOutput] = useState<string>('');
  
  const {user} = useUser();
  
  const params = use(props.params);

  const selectedTemplate: TEMPLATE | undefined = Templates.find(
    (item) => item.slug === params["template-slug"]
  );

  const GenerateAIContent = async (formData: any) => {
    setLoading(true);
    const selectedPrompt = selectedTemplate?.aiPrompt;
    const FinalAiPrompt = JSON.stringify(formData) + ', ' + selectedPrompt;

    const result = await chatSession.sendMessage(FinalAiPrompt);

    setAiOutput(result.response.text());
    SaveInDB(formData, selectedTemplate?.slug, aiOutput);
    setLoading(false);
  };

  const SaveInDB = async (formData:any, slug:any, aiResp:any) => {
    const result = await db.insert(AIOutput).values({
      formData:formData,
      templateSlug:slug,
      aiResponse: aiResp,
      createdBy: user?.primaryEmailAddress?.emailAddress,
      createdAt: moment().format('DD/MM/YYYY')
    })

    console.log(result);
    
  }

  return (
    <div className="p-5">
      <Link href={"/dashboard"}>
        <Button>
          <ArrowLeft /> Back
        </Button>
      </Link>
      <div className="grid grid-col-1 md:grid-cols-2 py-5 p-5 gap-5">
        <FormSection
          userFormInput={(v: any) => GenerateAIContent(v)}
          selectedTemplate={selectedTemplate}
          loading={loading}
        />
        <OutputSection aiOutput={aiOutput} />
      </div>
    </div>
  );
};

export default CreateNewContent;
