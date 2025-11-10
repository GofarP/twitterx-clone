import { on } from "events";
import { TabType } from "./types";

interface TabNavigationProps{
    activeTab:TabType;
    onTabChange:(tab:TabType)=>void;
}

const TabNavigation=({activeTab, onTabChange}:TabNavigationProps)=>{
    return(
        <div>TabNavigation</div>
    )
}

export default TabNavigation