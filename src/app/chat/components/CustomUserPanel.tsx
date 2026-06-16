import { getUserByToken } from "@/app/actions/get-user";
import { useQuery } from "@tanstack/react-query";
import { Headphones, Mic, Settings } from "lucide-react";

export const CustomUserPanel = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["me"],
    queryFn: getUserByToken,
  });

  if (isLoading) {
    return (
      <div className="h-[52px] bg-[#232428] border-t border-[#1e1f22]" />
    );
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
          src={`https://i.pravatar.cc/40?u=${user.id}`}
          alt={user.name}
          className="w-8 h-8 rounded-full"
        />

        <div className="min-w-0">
          <p className="text-sm font-medium text-white truncate">
            {user.name}
          </p>

          <p className="text-xs text-[#b5bac1] truncate">
            En línea
          </p>
        </div>
      </div>

      <div className="flex items-center">
        {/* <button
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
          <Mic size={18} />
        </button>

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
          <Headphones size={18} />
        </button> */}

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
      </div>
    </div>
  );
};