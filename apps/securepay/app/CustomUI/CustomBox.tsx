import React, { ReactElement } from "react";
import clsx from "clsx";
type Boxvariant ="primary" | "secondary" |"other" | "none";


interface Boxtype extends React.HTMLAttributes<HTMLDivElement>{
    variant?:Boxvariant
}
 const Box:React.FC<Boxtype>=({children,variant="none",className,...props})=>{
    const baseclass = "grid grid-cols-1 sm:grid-cols-2 h-auto";
    const variants:Record<Boxvariant,string> ={
        primary:"bg-green-300",
        secondary:"bg-blue-300",
        other:"bg-red-300",
        none:"bg-transparent"

    }
    console.log("Received variant:", variant);

    return(
        <div className={clsx(variants[variant],baseclass,className)} {...props}>
        {children}
    </div>

    )
   

}

export default Box;