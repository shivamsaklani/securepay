import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type UserBoxProps = {
  name: string;
  avatar: string;
  id: string;
  onclick: () => void;
};

export default function UserBox({ name, avatar, onclick, id }: UserBoxProps) {
  return (
    <Card className="h-12 w-full bg-white flex items-center px-2 sm:px-4 ">
      <CardContent className="flex w-full items-center justify-between p-0 ">
        {/* Left Section - Avatar & Name */}
        <div className="flex items-center gap-x-2 sm:gap-x-4 max-h-12">
          <h1 className="text-xs sm:text-sm md:text-base font-secondary break-words">
            {name}
          </h1>
        </div>

        {/* Right Section - Button */}
        <Button 
          className="bg-secondary text-white px-3 py-1 text-xs sm:text-sm md:text-base flex-shrink-0"
          onClick={onclick}
        >
          Send
        </Button>
      </CardContent>
    </Card>
  );
}
