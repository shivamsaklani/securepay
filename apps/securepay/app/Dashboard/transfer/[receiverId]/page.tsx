"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useParams } from "next/navigation";
export default function Transferfund(){
    const param = useParams<{receiverId:string}>();
    <Card className="grid">
        <CardContent className="grid grid-cols h-80 w-80 sm:h-96 sm:96">
            <div>
                user Details
            </div>
            <div>

            </div>

        </CardContent>
        <CardFooter>
            <Button className="font-primary bg-secondary text-white " variant={"outline"}>Transfer</Button>
        </CardFooter>
    </Card>
}
