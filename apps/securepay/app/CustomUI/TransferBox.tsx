"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import axios from "axios";
import { useEffect, useRef } from "react";
import toast from "react-hot-toast";

export default function TransferBox({
    name,accountnumber
}:{
    name?:string,
    accountnumber?:string
}){

    const Amountref= useRef<HTMLInputElement |null>(null);
    const Accountref= useRef<HTMLInputElement |null>(null);
    console.log(accountnumber);
    if(accountnumber){
        Accountref.current!.value = String(accountnumber);
      }
    useEffect(()=>{
        async ()=>{
            
        }
    },[Accountref]);
    async function transfer() {
        const payamount=Amountref.current?.value;
        const typeaccountno=Accountref.current?.value;
        try {
            if(!payamount && typeaccountno ){
                toast.error("Enter Correct Details");
            }
            
            const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/account/transferfund`,{
                account_number:Accountref.current?.value as string,
                sendamount:Number(payamount)
            },{
                withCredentials:true
            });
            if(response.status == 200) {
                toast.success(` ${payamount} Successfully transfered to ${name}`)
            }
        } catch (error) {

            toast.error("Try Again");
            
        }
        
    }
    return (
        <>
        <Card className="grid  h-80 w-80 sm:h-96 sm:96">
        <CardContent className="grid place-self-center gap-y-5  grid-cols ">
            <div className="grid font-primary text-lg">
                Transfer to: {name}
            </div>
            <div className="grid grid-cols">
               <div className="grid grid-rows">
               <Label>Account Number</Label>
               <Input ref={Accountref} type="text" placeholder="Enter Account Number"/>
               </div>
               <div className="grid grid-rows">
                <Label>Amount</Label>
                <Input ref={Amountref} type="text" placeholder="Enter Amount"/>
               </div>
            </div>

        </CardContent>
        <CardFooter className="grid grid-cols content-center">
            <Button className="font-primary bg-secondary text-white " variant={"outline"} onClick={transfer}>Transfer</Button>
        </CardFooter>
    </Card>
        </>
    )
}