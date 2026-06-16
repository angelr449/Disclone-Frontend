import { NavLink } from "react-router";

interface DMItemProps {
  to: string;
  avatar: string;
  name: string;
  subtitle?: string;
}

export const DMItem = ({
  to,
  avatar,
  name,
  subtitle,
}: DMItemProps) => {
  return (
    <NavLink
      to={to}
      className="w-full flex items-center gap-3 p-2 rounded-md hover:bg-[#35373c] transition-colors"
    >
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
    </NavLink>
  );
};