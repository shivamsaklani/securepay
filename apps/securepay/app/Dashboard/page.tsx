"use client"
import { LucideShieldCheck } from "lucide-react";
import Navbar from "../CustomUI/navbar";
import {motion} from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import UserBox from "../CustomUI/UserBox";
import axios from "axios";
export default function Dashboard(){
  const [user,setuser]=useState({});
   useEffect( ()=>{
      async()=>{
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/signup`,{});
      }
   },[]);
  const [path,setpathname]=useState("Home");

  const users =[
    {name:"shivam",image:"S"},
    {name:"Saurabh",image:"S"},
    {name:"Shubham",image:"S"},
    {name:"Nikhil",image:"N"},
  ]
  const navigation= [
    { name: "Home", path: "/Dashboard" },
    { name: "Send", path: "/transfer" },
    { name: "Request", path: "/transfer" },
    {name:"Recharge", path:"/topup"}
  ];

  return(<>
  <Navbar>
    <div className="flex h-full w-full bg-muted items-center justify-around bg-secondary">
      <motion.div className="font-primary " whileHover={{cursor:"pointer"}}>
        <div className="flex gap-x-3 flex-cols justify-center items-center ">
        <LucideShieldCheck/>
        <p className="text-brand ">SecurePay</p>

        
          </div>
          
          
          </motion.div>
        
          <div className="hidden sm:flex flex-row items-center font-primary text-md space-x-6">
      {navigation.map((item) => (
        <motion.div
          key={item.name}
          whileHover={{ scale: 1.1 }}
          className={`p-2 rounded-full cursor-pointer transition-all duration-300 ${
            path=== item.path
              ? "bg-white text-black border border-white"
              : "hover:border-white"
          }`}
        >
          <Link href={item.path}>{item.name}</Link>
        </motion.div>
      ))}
    </div>

        <motion.div className="sm:flex  hidden" whileHover={{scale:1.2}}>
        <Button className="rounded-full font-primary">Logout</Button>
        </motion.div>
      </div>
    </Navbar>
    <div className="flex top-0 left-0 justify-center items-center min-h-screen w-full">
  <div className="grid pt-10 sm:pt-16 md:pt-20 min-h-screen w-full bg-white">

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 sm:px-10">
    <div className="flex justify-center p-6">
       <Card className="grid grid-rows-[auto,1fr] h-full w-full p-10">
        <div>
        <h1 className="font-primary text-lg">Search User</h1>
        <Input type="text" placeholder="Find the user"/>
        </div>
      
        <div className="mt-5 space-y-5 overflow-y-auto h-[400px] p-4">
          {users.map((items)=>(
            <UserBox key={items.name} name={items.name} avatar={items.image} onclick={()=>{}} />
          ))}
        </div>
       
        
       </Card>
      </div>


      <div className="flex justify-start items-start p-6">
         
         <CardContent className="grid grid-rows-3 justify-start items-center top-10 p-10">
         
         <h1 className="font-primary text-brand">Balance :</h1>
         <h1 className="font-secondary text-lg"> Account Address:</h1>
         <p className="font-other text-md text-red-400">Please top up your bank balance before making fund transfer</p>
         </CardContent>
     
      </div>


     
    </div>
  </div>
</div>

  
  </>)
    
}