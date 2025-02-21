"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import axios from "axios";
import { Wallet } from "lucide-react";
import { useRef } from "react";

export default function Recharge(){
    const Amount = useRef<HTMLInputElement>(null);
    const Account_Number= useRef<HTMLInputElement>(null);

    async function Topup() {
        console.log(Account_Number.current?.value as string);
        console.log(Amount.current?.value);
       try {
         await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/account/topup`,{
             withCredentials:true, 
         },{
             data:{
             
                     "account_number":Account_Number.current?.value as string,
                     "sendamount":Number(Amount.current?.value)
             
             }
         });       
       } catch (error) {
        console.log(error);
       }
    }
    return(
        <>
         
  
    <div className="grid grid-cols-1 gap-6 px-4 sm:px-10">
  
    <div className="flex justify-center items-center p-6 sm:mt-5 mt-10">
      
        <Card className="grid h-80 w-80 sm:h-96 sm:w-96  grid-cols">
        
        <CardContent className="grid grid-cols   content-center gap-y-5">
        <div>
        <div className="w-full font-secondary grid content-center text-center p-0 sm:p-10"><Wallet className="place-self-center"/><h1>Topup</h1></div>
        </div>
        
      
        <div>
        <Label>Enter Amount</Label>
        <Input ref={Amount} type="text" placeholder="Enter Amount"/>
        <Label>Enter Account Number</Label>
            <Input ref={Account_Number} type="text" placeholder="Enter Your Account Number"/> 
        </div> 
         </CardContent>

           <CardFooter className="grid content-center "> <Button className="bg-secondary text-white font-primary text-lg" onClick={Topup} variant="outline"> Recharge</Button></CardFooter>
        </Card>
         
      </div>

     
    </div>
 
        </>
    )
}