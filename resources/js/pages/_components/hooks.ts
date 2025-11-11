import { useEffect, useRef } from "react";
export function useAutoResizeTextArea(content:string){
    const textarearef=useRef<HTMLTextAreaElement>(null);
    useEffect(()=>{
        const textarea=textarearef.current;
        if(textarea){
            textarea.style.height='auto';
            textarea.style.height=`${textarea.scrollHeight} px`
        }
    },[content]);

    return textarearef;
}

export function useCharacterCounter(content:string, maxLength:number){
    const remaining=maxLength-content.length;
    const percentage=Math.min((content.length/maxLength) * 100, 100);

    const getStrokeColor=()=>{
        if(remaining < 0) return 'rgb(239 68 68)';
        if(remaining < 20) return 'rgb(245 158 11)'
    };

    return{
        remaining,
        percentage,
        strokeColor:getStrokeColor(),
        isOverLimit:remaining < 0
    };
}