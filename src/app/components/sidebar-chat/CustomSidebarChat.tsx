import {
  MessageCircle,
  Users,
  Store,
  Compass,
  Plus,
} from "lucide-react";
import { CustomUserPanel } from "../CustomUserPanel";
import { SidebarItem } from "./SidebarItem";
import { DMItem } from "./DMItem";

export const CustomChatSidebar = () => {
  return (
    <aside className="w-[300px] bg-[#2b2d31] border-r border-[#1e1f22] flex flex-col">
      
      {/* Buscador */}
      {/* <div className="p-2 border-b border-[#1e1f22]">
        <button className="w-full bg-[#1e1f22] text-[#949ba4] text-sm px-3 py-2 rounded-md text-left">
          Busca o inicia una conversación
        </button>
      </div> */}

      {/* Navegación */}
      <div className="p-2 space-y-1">
        <SidebarItem
          icon={<Users size={18} />}
          label="Amigos"
          active
        />

       
      </div>

      {/* Divider */}
      <div className="mx-2 border-t border-[#3f4147]" />

      {/* Mensajes directos */}
      <div className="flex items-center justify-between px-4 pt-4 pb-2">
        <span className="text-xs uppercase text-[#949ba4] font-semibold">
          Mensajes directos
        </span>

        <button className="text-[#949ba4] hover:text-white">
          <Plus size={16} />
        </button>
      </div>

      {/* Lista */}
      <div className="flex-1 overflow-y-auto px-2 space-y-1">
        <DMItem
          avatar="https://i.pravatar.cc/40?img=1"
          name="Práctica de inglés"
          subtitle="3 miembros"
        />

        <DMItem
          avatar="https://i.pravatar.cc/40?img=2"
          name="Los muertos"
          subtitle="6 miembros"
        />

        <DMItem
          avatar="https://i.pravatar.cc/40?img=3"
          name="Herrera"
        />

        <DMItem
          avatar="https://i.pravatar.cc/40?img=4"
          name="Anibal Germán"
        />

        <DMItem
          avatar="https://i.pravatar.cc/40?img=5"
          name="Shei"
        />
      </div>


      {/* UserPanelButton */}
      <CustomUserPanel/>
    </aside>
  );
};



