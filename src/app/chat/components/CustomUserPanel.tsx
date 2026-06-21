import { getUserByToken } from "@/app/actions/get-user";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { Settings, LogOut } from "lucide-react";
import { logout } from "@/auth/actions/logout";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const CustomUserPanel = () => {
 const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["me"],
    queryFn: getUserByToken,
  });

  const handleLogout = () => {
    logout(queryClient);
    navigate("/");
  };

  if (isLoading) {
    return <div className="h-[52px] bg-[#232428] border-t border-[#1e1f22]" />;
  }

  if (isError || !data?.user) {
    return (
      <div className="h-[52px] bg-[#232428] border-t border-[#1e1f22] flex items-center px-3">
        <span className="text-sm text-red-400">
          Error al cargar usuario
        </span>
      </div>
    );
  }

  const user = data.user;

  return (
    <div className="h-[52px] bg-[#232428] border-t border-[#1e1f22] flex items-center justify-between px-2">
      <div className="flex items-center gap-2 min-w-0">
        <img
          src={user.avatar || `https://i.pravatar.cc/40?u=${user.id}`}
          alt={user.name}
          className="w-8 h-8 rounded-full"
        />
        <div className="min-w-0">
          <p className="text-sm font-medium text-white truncate">
            {user.name}
          </p>
          {/* //TODO set the diferents states */}
          <p className="text-xs text-[#b5bac1] truncate">
            En línea 
          </p>
        </div>
      </div>

      <div className="flex items-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              className="
                w-8 h-8
                flex items-center justify-center
                rounded-md
                text-[#b5bac1]
                hover:bg-[#3f4147]
                hover:text-white
                transition-colors
              "
            >
              <Settings size={18} />
            </button>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            align="end"
            className="bg-[#111214] border-[#1e1f22] text-white"
          >
            <DropdownMenuItem
              onClick={handleLogout}
              className="text-red-400 hover:!text-red-400 hover:!bg-[#3f4147] cursor-pointer"
            >
              <LogOut size={16} className="mr-2" />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};