"use client"
import { Card } from "@/components/ui/card";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import UserBox from "../CustomUI/UserBox";
import axios from "axios";
import { useRouter } from "next/navigation";
import { UserDetails } from "@repo/typesafe/customtypes";
export default function Dashboard(){
  const searchUser=useRef<HTMLInputElement|null>(null);
  const router = useRouter();
  const [users,setuser]=useState<UserDetails []>([]);
  const [search,setseach]=useState("");
  const [filteruser,setfilteruser]=useState<UserDetails []>([]);

 
   useEffect( ()=>{

    let response;
       const findusers= async()=>{
        
       try {
         response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/allusers`,{
           withCredentials:true
         });
         setuser(response.data.users);
         setfilteruser(response.data.users);
       } catch (error) {
          console.log(error);
       }
        
      }
      findusers();
   },[]);
  
   function filtersearch(e:ChangeEvent<HTMLInputElement>){
    const query=e.target.value.toLowerCase();
    if(query ===""){
        setfilteruser(users);
    }
    else{
    const filter =users.filter(user=>user.name.toLowerCase().includes(query));
    setfilteruser(filter);
    }
  
   }


    function Transferfund(id:string){
        router.push(`/Dashboard/transfer/${id}`);
    }

  return(<>
  
  <Card className="grid grid-rows-[auto,1fr] h-full w-full p-10">
        <div>
        <h1 className="font-primary text-lg">Search User</h1>
        <Input ref={searchUser} type="text" onChange={filtersearch} placeholder="Find the user"/>
        </div>
      
        <div className=" space-y-5 overflow-y-auto h-[400px] p-4">
          {filteruser.length == 0 ?<>No user</>:filteruser.map((items)=>(
            <UserBox key={items.id} id={items.id} name={items.name} avatar={items.image} onclick={()=>Transferfund(items.id)} />
          ))}
        </div>
       
        
       </Card>

  
  </>)
    
}