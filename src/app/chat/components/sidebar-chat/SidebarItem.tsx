import { NavLink } from "react-router";

interface SidebarItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
}

export const SidebarItem = ({to, icon, label }: SidebarItemProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => `
        w-full flex items-center gap-3 px-3 py-2 rounded-md
        transition-colors text-sm font-medium
        ${
          isActive
            ? "bg-[#404249] text-white"
            : "text-[#b5bac1] hover:bg-[#35373c] hover:text-white"
        }
      `}
    >
      {icon}
      {label}
    </NavLink>
  );
};