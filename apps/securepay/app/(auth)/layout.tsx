import { Card } from "@/components/ui/card";
import { ReactNode } from "react";

export default function AuthPage({ children }: {
    children: ReactNode
}) {
    return (
        <div className="h-screen w-screen bg-secondary flex justify-center items-center">
            <Card className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl h-auto p-10">
                {children}
            </Card>
        </div>
    )
}