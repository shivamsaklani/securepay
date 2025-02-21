"use client"

import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import UserBox from "../CustomUI/UserBox";
import axios from "axios";
import { useRouter } from "next/navigation"
import { useCurrent } from "../Customhook/Currentuser";
import {UserDetails} from "@repo/typesafe/customtypes";
export default function Dashboard(){
  const [currentuser,setCurrentUser] = useState<UserDetails | null>(null);
  const user = useCurrent();
  const router = useRouter();
  const [users,setuser]=useState([{
    id:"",
    name :"",
    image:"",
    email:"",
    balance:""

  }]);
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
  


    function Transferfund(id:string){
        router.push(`/Dashboard/transfer/${id}`);
    }

  return(<>
  
  <Card className="grid grid-rows-[auto,1fr] h-full w-full p-10">
        <div>
        <h1 className="font-primary text-lg">Search User</h1>
        <Input type="text" placeholder="Find the user"/>
        </div>
      
        <div className=" space-y-5 overflow-y-auto h-[400px] p-4">
          {users.map((items)=>(
            <UserBox key={items.id} id={items.id} name={items.name} avatar={items.image} onclick={()=>Transferfund(items.id)} />
          ))}
        </div>
       
        
       </Card>

  
  </>)
    
}