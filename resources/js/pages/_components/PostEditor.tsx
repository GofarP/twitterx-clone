import { User } from "@/types";
import { useState } from "react";
import { TabType } from "./types";
import TabNavigation from "./TabNavigation";

interface PostEditorProps{
    user:User;
    onPostCreated:()=>void;
}
const PostEditor=({user, onPostCreated}:PostEditorProps)=>{
    const {activeTab, setActiveTab}=useState<TabType>("for-you")
   return(
        <div className="border-b bg-card">
            <TabNavigation
                activeTab={activeTab}
                onTabChange={setActiveTab}
            />
        </div>
   )


}

export default PostEditor;