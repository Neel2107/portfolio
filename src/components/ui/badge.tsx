interface BadgeProps {
  text: string;
  icon?: React.ReactNode;
  className?: string;
}

const Badge = ({ icon, text, className = "" }: BadgeProps) => {
  return (
    <span
      key={text}
      className={`text-xs flex flex-row items-center cursor-pointer bg-[#89bbfe]/5 border-[0.5px] border-[#89bbfe]/10 text-[#89bbfe] px-3 py-2 rounded-md ${className}`}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {text}
    </span>
  );
};

export default Badge;
