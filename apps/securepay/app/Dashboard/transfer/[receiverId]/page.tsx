"use client";

import TransferBox from "@/app/CustomUI/TransferBox";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
export default function Transferfund(){
    const recid= useParams<{receiverId:string}>();
    const [accountnumber,setaccountnumber]=useState("");
    const [user,setuser]=useState("");
    useEffect(()=>{

       const response = async()=>{
             try {
               await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/getuser/${recid.receiverId}`).then((res)=>{ 
                     if(res.status == 200){
                            setaccountnumber(res.data.Account.account_number);
                            setuser(res.data.userdetails);
                            return;
                     }
                });

             } catch (e) {
                     console.log(e);
                     toast.error("Server Down ! Please Try Again");              
             }
       } 
       response();

    },[]);
   return(
    <>
    
           <TransferBox  name={user} accountnumber={accountnumber}/>
    </>
   )
}
