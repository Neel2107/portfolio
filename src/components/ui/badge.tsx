interface BadgeProps {
  icon?: React.ReactNode;
  text: string;
}

const Badge = ({ icon, text }: BadgeProps) => {
  return (
    <span
      key={text}
      className="text-xs bg-[#89bbfe]/10 text-[#89bbfe] px-3 py-2 rounded-md"
    >
      {text}
    </span>
  );
};

export default Badge;
