

export const DMItem = ({
  avatar,
  name,
  subtitle,
}: {
  avatar: string;
  name: string;
  subtitle?: string;
}) => {
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
