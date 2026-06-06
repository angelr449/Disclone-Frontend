import {
  MessageCircle,
  Users,
  Store,
  Compass,
  Plus,
} from "lucide-react";

export const CustomChatSidebar = () => {
  return (
    <aside className="w-[300px] bg-[#2b2d31] border-r border-[#1e1f22] flex flex-col">
      
      {/* Buscador */}
      <div className="p-2 border-b border-[#1e1f22]">
        <button className="w-full bg-[#1e1f22] text-[#949ba4] text-sm px-3 py-2 rounded-md text-left">
          Busca o inicia una conversación
        </button>
      </div>

      {/* Navegación */}
      <div className="p-2 space-y-1">
        <SidebarItem
          icon={<Users size={18} />}
          label="Amigos"
          active
        />

        <SidebarItem
          icon={<Compass size={18} />}
          label="Nitro"
        />

        <SidebarItem
          icon={<Store size={18} />}
          label="Tienda"
        />

        <SidebarItem
          icon={<MessageCircle size={18} />}
          label="Misiones"
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
    </aside>
  );
};

function SidebarItem({
  icon,
  label,
  active = false,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}) {
  return (
    <button
      className={`
        w-full flex items-center gap-3 px-3 py-2 rounded-md
        transition-colors text-sm font-medium
        ${
          active
            ? "bg-[#404249] text-white"
            : "text-[#b5bac1] hover:bg-[#35373c] hover:text-white"
        }
      `}
    >
      {icon}
      {label}
    </button>
  );
}

function DMItem({
  avatar,
  name,
  subtitle,
}: {
  avatar: string;
  name: string;
  subtitle?: string;
}) {
  return (
    <button className="w-full flex items-center gap-3 p-2 rounded-md hover:bg-[#35373c] transition-colors">
      <img
        src={avatar}
        alt={name}
        className="w-8 h-8 rounded-full"
      />

      <div className="text-left overflow-hidden">
        <p className="text-sm text-[#dbdee1] truncate">
          {name}
        </p>

        {subtitle && (
          <p className="text-xs text-[#949ba4] truncate">
            {subtitle}
          </p>
        )}
      </div>
    </button>
  );
}