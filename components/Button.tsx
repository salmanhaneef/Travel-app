import Image from "next/image";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: string;
};

const Button = ({ type, title, icon, variant }: ButtonProps) => {
  return (
    <button
      className={`flexCenter gap-3 transition-shadow ease-in-out delay-150 hover:-translate-y-0 hover:scale-110 hover:bg-indigo-500 hover:shadow-lg duration-300 rounded-full border ${variant}`}
      type={type}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}{" "}
      {/* trim to remove any excess whitespace */}
      <label className="bold-16 whitespace-nowrap">{title}</label>
    </button>
  );
};

export default Button;
