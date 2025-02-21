import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Wallet } from "lucide-react";

export default function Recharge(){

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
        <Input type="text" placeholder="Enter Amount"/>
        <Label>Enter Account Number</Label>
            <Input type="text" placeholder="Enter Your Account Number"/> 
        </div> 
         </CardContent>

           <CardFooter className="grid content-center "> <Button className="bg-secondary text-white font-primary text-lg" variant="outline"> Recharge</Button></CardFooter>
        </Card>
         
      </div>

     
    </div>
 
        </>
    )
}