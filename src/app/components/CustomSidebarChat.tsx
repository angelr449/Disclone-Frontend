import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarInset,
} from "@/components/ui/sidebar"
import { Plus, Settings, MicOff, Headphones, } from "lucide-react"
import { useState } from "react";

const dms = [
  { id: 1, name: "Práctica de inglés", members: 3, avatar: null, isGroup: true },
  { id: 2, name: "Los muertos", members: 6, avatar: null, isGroup: true },
  { id: 3, name: "Dai^^", avatar: null, isGroup: false, active: true },
  { id: 4, name: "Alvajar", avatar: null, isGroup: false },
  { id: 5, name: "Herrera", avatar: null, isGroup: false },
  { id: 6, name: "SAIT-V", avatar: null, isGroup: false, status: "All we need is love..." },
]

const Avatar = ({ name, size = 36 }: { name: string; size?: number }) => {
  const initials = name.slice(0, 2).toUpperCase()
  const colors = ["#5865f2", "#57f287", "#eb459e", "#fee75c", "#ed4245"]
  const color = colors[name.charCodeAt(0) % colors.length]

 

  return (
    <div style={{
      width: size, height: size, borderRadius: "50%",
      background: color, display: "flex", alignItems: "center",
      justifyContent: "center", fontSize: 13, fontWeight: 600,
      color: "#fff", flexShrink: 0
    }}>
      {initials}
    </div>
  )
}

export const CustomSidebarChat = () => {
  return (
    <Sidebar className="w-60 bg-[#2b2d31] border-r border-[#1e1f22]">
      <SidebarHeader className="bg-[#2b2d31] px-3 py-2 border-b border-[#1e1f22]">
        {/* <input
          placeholder="Busca o inicia una conversación"
          className="w-full bg-[#1e1f22] text-[#dbdee1] placeholder-[#8e9297] text-sm rounded px-2 py-1.5 outline-none"
        /> */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {["Amigos"].map((item) => (
                <SidebarMenuItem key={item}>
                  <SidebarMenuButton className="text-[#949ba4] hover:text-[#dbdee1] hover:bg-[#35373c] rounded px-2 py-1.5 text-sm w-full text-left">
                    {item}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>


      </SidebarHeader>

      <SidebarContent className="bg-[#2b2d31] px-2">
        {/* Links principales */}
        

        {/* Mensajes directos */}
        <SidebarGroup>
          <SidebarGroupLabel className="flex items-center justify-between px-2 text-[#949ba4] text-xs font-semibold uppercase mb-1">
            Mensajes directos
            <Plus size={16} className="cursor-pointer hover:text-[#dbdee1]" />
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {dms.map((dm) => (
                <SidebarMenuItem key={dm.id} className="mb-2 ">
                  <SidebarMenuButton
                    className={`flex items-center gap-2 px-2 py-5.5 rounded text-sm w-full text-left active:bg-[#303035]
                     text-[#949ba4] hover:text-[#dbdee1] hover:bg-[#35373c]`}
                  >
                    <Avatar name={dm.name} />
                    <div className="flex flex-col min-w-0 ">
                      <span className=" truncate font-medium text-[#dbdee1] text-sm">{dm.name}</span>
                      {dm.isGroup && (
                        <span className="text-[10px] text-[#949ba4]">{dm.members} miembros</span>
                      )}
                      {dm.status && (
                        <span className="text-[10px] text-[#949ba4] truncate">{dm.status}</span>
                      )}
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Panel de usuario abajo */}
      <div className="mt-auto bg-[#232428] px-2 py-2 flex items-center gap-2">
        <Avatar name="angel_r" size={32} />
        <div className="flex flex-col flex-1 min-w-0">
          <span className="text-sm font-medium text-white truncate">angel_r</span>
          <span className="text-[11px] text-[#949ba4] truncate">No molestar</span>
        </div>
        <div className="flex items-center gap-1 text-[#949ba4]">
          <MicOff size={16} className="cursor-pointer hover:text-white" />
          <Headphones size={16} className="cursor-pointer hover:text-white" />
          <Settings size={16} className="cursor-pointer hover:text-white" />
        </div>
      </div>
    </Sidebar>
  )
}