
import { Button } from '@/components/ui/button';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Copy } from 'lucide-react';
import { useEffect, useRef } from 'react';

interface PROPS{
  aiOutput?:string;
}

const OutputSection = ({aiOutput}:PROPS) => {

    const editorRef:any = useRef();

    useEffect(()=>{
      const editorInstance = editorRef.current.getInstance();
      editorInstance.setMarkdown(aiOutput);
    }, [aiOutput])

  return (
    <div className='bg-white shadow-lg border rounded-lg'>
        <div className='flex justify-between items-center p-5'>
            <h2 className='text-lg font-bold'>Your Result</h2>
            <Button onClick={()=>navigator.clipboard.writeText(aiOutput || "")} className='flex gap-2' ><Copy className='w-4 h-4' />Copy</Button>
        </div>
        <Editor
            ref={editorRef}
            initialValue="Your result will be appeared here"
            height="600px"
            initialEditType="wysiwyg"
            useCommandShortcut={true}
        />
    </div>
  )
}

export default OutputSection