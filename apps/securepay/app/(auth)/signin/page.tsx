"use client";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import axios from "axios";
import Link from "next/link";
import { useRef } from "react";
import { toast } from "react-hot-toast";
import {motion} from "framer-motion";
import { useRouter } from "next/navigation";
export default function SignIn(){
        const router=useRouter();
        const passwordref= useRef<HTMLInputElement>(null);
        const emailref= useRef<HTMLInputElement >(null);
    async function backend(){
   
        const password= passwordref.current?.value;
        const email= emailref.current?.value;
       try {
         const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/signin`,{
        
           password:password,
           email:email,
         },{
           withCredentials:true
         });
         if(!response){
           toast.error("No user Found");
         }else{
          toast.success("Successful");
          router.push("/Dashboard");
         }
       } catch (error) {
           toast.error("Try Again");
       }
      }
    return(
        <>
     <div className="flex p-5 w-full  justify-center">SignIn</div>
     <CardContent>

            <Label>Email</Label>
            <Input ref={emailref} type="text" placeholder="Enter User Email" />
            
            <Label>Password</Label>
            <Input ref={passwordref} type="password" placeholder="Enter Password" />
            <div className="flex text-other w-full justify-start items-center">
              Forgot Password?
            </div>
        
            <div className="flex justify-center flex-cols" >
              <motion.div  whileHover={{scale:1.2}}>
              <Button className="text-white font-primary"  onClick={backend} size="lg">Login</Button>
         
                </motion.div>    </div>

            <Link className="flex items-end justify-end" href="/signup">New User?</Link>

        </CardContent>  
    </>

    
    )
}