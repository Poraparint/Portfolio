interface SidebarProps {
  label: string;
  icon: string;
  onClick: () => void;
}

export const Sidebar = ({
  label,
  icon,
  onClick,
}: SidebarProps) => {
  return (
    <button
      onClick={onClick}
      className="flex flex-col justify-center items-center hover:text-black duration-100"
    >
      <div className="w-12 h-12 flex justify-center items-center rounded-full bg-white">
        <i className={`fa-solid ${icon}`}></i>
      </div>
      <span className="mt-2 text-base ">{label}</span>
    </button>
  );
};
