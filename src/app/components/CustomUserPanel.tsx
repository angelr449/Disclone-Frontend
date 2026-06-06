import { Headphones, Mic, Settings } from "lucide-react";

export const CustomUserPanel = () => {
  return (
    <div className="h-[52px] bg-[#232428] border-t border-[#1e1f22] flex items-center justify-between px-2">
      <div className="flex items-center gap-2 min-w-0">
        <img
          src="https://i.pravatar.cc/40"
          alt="User"
          className="w-8 h-8 rounded-full"
        />

        <div className="min-w-0">
          <p className="text-sm font-medium text-white truncate">
            Angel
          </p>

          <p className="text-xs text-[#b5bac1] truncate">
            En línea
          </p>
        </div>
      </div>

      <div className="flex items-center">
        <UserPanelButton>
          <Mic size={18} />
        </UserPanelButton>

        <UserPanelButton>
          <Headphones size={18} />
        </UserPanelButton>

        <UserPanelButton>
          <Settings size={18} />
        </UserPanelButton>
      </div>
    </div>
  );
};

function UserPanelButton({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
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
      {children}
    </button>
  );
}