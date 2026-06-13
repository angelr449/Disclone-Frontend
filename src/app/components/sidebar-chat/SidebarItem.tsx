

export const SidebarItem = ({
  icon,
  label,
  active = false,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}) => {
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
