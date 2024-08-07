import { useEffect } from "react";
import { LuSunMedium, LuMoon  } from "react-icons/lu";

export const TemaBotao = ()=>{

    const PreferenciaSistema = window.matchMedia('(prefers-color-scheme: light)').matches
    useEffect (() =>{
        PreferenciaSistema && document.documentElement.classList.add('dark')
    })
    const toogle = () => {
        document.documentElement.classList.toggle('dark')
    }
    return(
        <div className="">
            <LuSunMedium className= "cursor-pointer text-black w-[24px] h-[24px] hover:text-green-400 transition-all block dark:hidden dark:text-white " onClick={toogle}/>
            <LuMoon className=" cursor-pointer text-white w-[24px] h-[24px] hover:text-green-400 transition-all hidden dark:block" onClick={toogle} />
        </div>
    )
} 
