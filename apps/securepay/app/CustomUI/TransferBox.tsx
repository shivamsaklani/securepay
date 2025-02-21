import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export default function TransferBox(){
    return (
        <>
        <Card className="grid h-80 w-80 sm:h-96 sm:96">
        <CardContent className="grid place-self-center  grid-cols ">
            <div className="grid bg-red-300">
                user Details
            </div>
            <div>
            </div>

        </CardContent>
        <CardFooter className="grid grid-cols content-center">
            <Button className="font-primary bg-secondary text-white " variant={"outline"}>Transfer</Button>
        </CardFooter>
    </Card>
        </>
    )
}