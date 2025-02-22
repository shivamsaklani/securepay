import { UserDetails } from "@repo/typesafe/customtypes";
import axios from "axios"
import { useEffect, useState } from "react";

export const useCurrent =()=>{ 
    const [user , setuser] = useState<UserDetails | null>(null);
    useEffect(() => {
        const fetchUser = async () => {
          try {
            const response = await axios.get(
              `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/currentuser`,
              { withCredentials: true }
            );
            setuser(response.data.response);
          } catch (err) {
            console.log(err);
          }
        };
    
        fetchUser();
      }, []);
    return user;
}