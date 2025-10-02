import { Button } from "./button";

interface BadgeProps {
  text: string;
  icon?: React.ReactNode;
  className?: string;
}

const Badge = ({ icon, text, className = "" }: BadgeProps) => {
  return (
    <Button
      key={text}
      className={`text-xs flex flex-row items-center cursor-pointer bg-primary/5 border-[0.5px] border-primary/10 hover:border-primary/30 text-primary px-3 py-2 rounded-md ${className}`}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {text}
    </Button>
  );
};

export default Badge;
