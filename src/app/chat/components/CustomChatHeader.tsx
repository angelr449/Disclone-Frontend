// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Button } from "@/components/ui/button";

// import {
//   Phone,
//   Video,
//   Search,

// } from "lucide-react";

export const  CustomChatHeader =()=> {
  return (
    <header className="h-12 px-4 bg-[#36393f] border-b border-[#202225] flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img
          src="/avatar.png"
          alt="avatar"
          className="w-8 h-8 rounded-full"
        />

        <div>
          <h2 className="text-sm font-semibold text-white">
            Dai^^
          </h2>

          <p className="text-xs text-[#b9bbbe]">
            En línea
          </p>
        </div>
      </div>

      {/* <div className="flex gap-1">
        <Button size="icon" variant="ghost">
          <Phone />
        </Button>

        <Button size="icon" variant="ghost">
          <Video />
        </Button>

        <Button size="icon" variant="ghost">
          <Search />
        </Button>
      </div> */}
    </header>
  );
}