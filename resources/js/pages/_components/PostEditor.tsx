import { User } from "@/types";
import { useState } from "react";
import { Audience, TabType } from "./types";
import TabNavigation from "./TabNavigation";
import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar'
import AudienceSelector from "./AudienceSelector";
import { SelectContent } from "@radix-ui/react-select";
import { useAutoResizeTextArea } from "./hooks";

interface PostEditorProps{
    user:User;
    onPostCreated:()=>void;
}
const PostEditor=({user, onPostCreated}:PostEditorProps)=>{
    const [content, setContent]=useState('')
    const [activeTab, setActiveTab]=useState<TabType>("for-you")
    const [audience, setAudience]=useState<Audience>("everyone")
    const textAreaRef=useAutoResizeTextArea(content)
   return(
        <div className="border-b bg-card">
            <TabNavigation
                activeTab={activeTab}
                onTabChange={setActiveTab}
            />
            <div className="p-4">
                <div className="flex gap-3">
                    <Avatar>
                        <AvatarImage src={user.avatar ?? "https://github.com/shadcn.png"}/>
                        <AvatarFallback>
                            {user.name.substring(0,2).toUpperCase()}
                        </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-3">
                        <AudienceSelector
                            audience={audience}
                            onAudienceChange={setAudience}
                        />
                    </div>
                    <textarea
                        ref={textAreaRef}
                        value={content}
                        onChange={(e)=>setContent(e.target.value)}
                        placeholder="What's happening?"
                        className="min-h-[60px] w-full resize-none border-none bg-transparent p-0 text-xl 
                        outline-none placeholder:text-muted-foreground/60 focus-visible:ring-0"
                        style={{maxHeight:"300px"}}
                    />
                </div>
            </div>
        </div>
   )


}

export default PostEditor;