"use client"
import { Button } from "@/components/ui/button";
import { CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import Link from "next/link";
import { useRef} from "react";
import {toast} from "react-hot-toast";
import {motion }from "framer-motion";
export default function Signup(){
    const userref= useRef<HTMLInputElement>( null);
    const passwordref= useRef<HTMLInputElement>(null);
    const emailref= useRef<HTMLInputElement >(null);

    async function backend(){
      const user= userref.current?.value;
      const password= passwordref.current?.value;
      const email= emailref.current?.value;
     try {
       const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL }/user/signup`,{
         username:user,
         password:password,
         email:email,
       });
       if(!response){
         toast.error("Try Again");
       }
       else  toast.success("Successful");
     } catch (er) {
        if(er){
          toast.error("Try Again");
        }
     }
    }
    return(<>
     <div className="flex p-5 w-full text-primary justify-center">Signup</div>
     <CardContent>
             <Label>User</Label>
            <Input ref={userref} className="w-full" type="text" placeholder="Enter User Name" />


            <Label>Email</Label>
            <Input ref={emailref} type="text" placeholder="Enter User Email" />
            
            <Label>Password</Label>
            <Input ref={passwordref} type="password" placeholder="Enter Password" />
            <Link href="/forgotpassword" className="flex text-other w-full justify-start items-center">
              Forgot Password?
            </Link>
            <div  className="flex justify-center w-full flex-cols">
            <motion.div whileHover={{scale:1.2}}>
               <Button className="text-white font-primary" size="lg" onClick={backend}>Signup</Button>
            </motion.div>

            </div>
           
            <Link href="/signin" className="flex justify-end">
              Login
            </Link>

        </CardContent>  
    </>

        
    )
}