"use client";
import { Toaster } from "react-hot-toast";
import { RecoilRoot } from "recoil";

export function Provider({children}:{
    children:React.ReactNode
}){

    return(
        <RecoilRoot>
             <Toaster position="top-right"/>
            {children}
        </RecoilRoot>
    )
}