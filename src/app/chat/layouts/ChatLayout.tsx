import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

import {
  Phone,
  Video,
  Search,
  Users,
  Pin,
} from "lucide-react";

export const ChatLayout = () => {

    return (
        <header className="h-12 border-b px-4 flex items-center justify-between bg-[#313338]" >
            <div className="flex items-center gap-3">
                <Avatar className="h-8 w-8">
                    <AvatarImage src="/avatar.png" />
                    <AvatarFallback>D</AvatarFallback>
                </Avatar>

                <div>
                    <h2 className="font-semibold text-sm">
                        Dai^^
                    </h2>

                    <p className="text-xs text-muted-foreground">
                        En línea
                    </p>
                </div>
            </div>

            <div className="flex items-center gap-1">
                <Button variant="ghost" size="icon">
                    <Phone />
                </Button>

                <Button variant="ghost" size="icon">
                    <Video />
                </Button>

                <Button variant="ghost" size="icon">
                    <Pin />
                </Button>

                <Button variant="ghost" size="icon">
                    <Users />
                </Button>

                <Button variant="ghost" size="icon">
                    <Search />
                </Button>
            </div>
        </header>
    );
}
