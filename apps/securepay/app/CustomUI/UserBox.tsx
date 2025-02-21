import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card} from "@/components/ui/card"


type userbox ={
    name:string,
    avatar:string,
    id:string,
    onclick:()=>void
}



export default function UserBox({
    name,avatar,onclick,id
}:userbox){
    
    return(<>
    <Card className="h-12 content-center w-full ">
       
        <div className="flex flex-row justify-between items-center  flex-row px-5">
            <div className="flex flex-row justify-between space-x-5 items-center">
            <Avatar className="bg-white text-center font-primary">{avatar}</Avatar>
            <h1 className="font-secondary">{name}</h1>
            </div>
        <Button className="font-primary text-white" onClick={onclick}>Send</Button>
        </div>
        
    </Card>
    </>)
    
}