"use client"
import Navbar from "./CustomUI/navbar"
import CustomBox from "./CustomUI/CustomBox";
import {motion} from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import{ LucideShieldCheck}from "lucide-react";
import BackgroundImage from "../public/bg.png";
export default function Home() {
  return (
    <>
    {/* Navbar */}
<div className="flex justify-center items-center">
     <Navbar>
      <div className="flex h-full w-full bg-muted items-center justify-around bg-secondary">
      <motion.div className="text-brand font-primary " whileHover={{cursor:"pointer"}}>
        <div className="flex flex-cols items-center ">
        <LucideShieldCheck/>
        <p>SecurePay</p>
          </div></motion.div>
       
       <div className="hidden sm:flex gap-x-5">
       <motion.div className="font-primary" whileHover={{scale:1.2}}>
        <Link href="/signup"  >Signup</Link>    
          </motion.div>

          <motion.div className="font-primary"  whileHover={{scale:1.2}}>
          <Link href="/signin" >SignIn</Link> 
          </motion.div>

       </div>
       
          


        {false && <motion.div whileHover={{scale:1.2}} className="hidden sm:flex">
        <Button className="rounded-full font-primary">Logout</Button>
        </motion.div>}
         
      
      </div>

      </Navbar>
     </div> 


    {/* main Dashboard */}
<div className="min-h-screen p-y-10">


<div className="h-auto bg-white">
  <div className="h-auto w-auto bg-green-300">
  Pay Secure With Secure pay
    pay safely with secure pay 
    <Button>Pay</Button>
  </div>
    <Image src={BackgroundImage}  layout="responsive" objectFit="cover" alt="Background"/>
 </div>   

<div className="flex h-screen">
 <CustomBox variant="primary" className="h-full w-full">
  <div className="bg-red-300  grid text-white  justify-around items-center">
    Pay Secure With Secure pay
    pay safely with secure pay 
    <Button>Pay</Button>
  </div>
  <div>
    Section 2
  </div>
 </CustomBox>
</div>

 <div className="flex min-h-screen bg-blue-300 p-10">
 
</div>
<div className="min-h-screen bg-red-300">
 </div>

</div>

<div className="w-full flex justify-center items-center h-48 bg-black text-white">
  Footer
</div>
    </>
   

      
    
  
  );
}
