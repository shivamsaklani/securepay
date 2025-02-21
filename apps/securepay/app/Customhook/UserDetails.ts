import axios from "axios";
export const useUserDetails=async (userid:string)=>{
    const id = userid;
  try {
    
    if(!id){
        
        return;
    }
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user/getuser/${id}`);
    if(!response){
        
        return;
    }

    return response.data;

      
  } catch (error) {
    return;
  }


}
