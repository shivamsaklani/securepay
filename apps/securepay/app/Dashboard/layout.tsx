"use client"
import { Card, CardContent } from "@/components/ui/card";
import { Children, ReactNode, useEffect, useState } from "react";
import axios from "axios";
import { useCurrent } from "../Customhook/Currentuser";
import {UserDetails} from "@repo/typesafe/customtypes";
import { LucideShieldCheck } from "lucide-react";
import Navbar from "../CustomUI/navbar";
import {motion} from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
export default function Dashboard({children}:{
  children:ReactNode
}){
  const [currentuser,setCurrentUser] = useState<UserDetails | null>(null);
  const user = useCurrent();
  const [users,setuser]=useState([{
    id:"",
    name :"",
    image:"",
    email:"",
    balance:""

  }]);
  const [path,setpathname]=useState("Home");
  const navigation= [
    { name: "Home", path: "/Dashboard" },
    { name: "Transfer", path: "/transfer" },
    {name:"TopUp", path:"/Dashboard/topup"}
  ];
  const balance = currentuser?.Account?.balance || 0;

  useEffect(() => {
    if (user) {
      setCurrentUser(user);
    }
  }, [user]);
 
   useEffect( ()=>{

    let response;
       const findusers= async()=>{
        
       try {
         response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/allusers`,{
           withCredentials:true
         });
         setuser(response.data.users);
       } catch (error) {
          console.log(error);
       }
        
      }
      findusers();
   },[]);
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
    <div className="flex justify-center p-6 sm:mt-5 mt-10">
       {children}
      </div>


      <div className="flex justify-start items-start p-6">
         
         <CardContent className="grid grid-rows-3 justify-start items-center top-10 p-10">
         
         <h1 className="font-primary text-brand">Balance :{currentuser?.Account.balance}</h1>
         <h1 className="font-secondary text-lg"> Account Address:</h1>
        {(balance <= 0) && <p className="font-other text-md text-red-400">Please top up your bank balance before making fund transfer</p>
      }
           </CardContent>
     
      </div>


     
    </div>
  </div>
</div>

  
  </>)
    
}