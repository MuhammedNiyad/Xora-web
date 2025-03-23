import clsx from "clsx";
import "../index.css";
import Marker from "./Marker";

interface buttonProps {
  icon: string;
  children: string;
  href?: string;
  containerClassName?: string;
  onClick?: () => void;
  markerFill?: string;
}
const Button = ({
  icon,
  children,
  href,
  containerClassName,
  onClick,
  markerFill,
}: buttonProps) => {
  const Inner = () => (
    <>
      <span className="relative flex items-center min-h-[60px] px-4 g4 rounded-2xl inner-before g7 group-hover:before:opacity-0 overflow-hidden">
        <span className="absolute -left-[1px]">
          <Marker fill={markerFill} />
        </span>
        {icon && (
          <img
            src={icon}
            alt="icon"
            className="size-10 mr-5 object-contain z-10"
          />
        )}
        <span className="relative z-2 font-family-poppins base-bold text-p1 uppercase">{children}</span>
      </span>
      <span className="glow-before g8 glow-after"></span>
    </>
  );

  return href ? (
    <a
      href=""
      className={clsx(
        "relative p-0.5 g5 rounded-2xl shadow-500 group",
        containerClassName
      )}
    >
      <Inner />
    </a>
  ) : (
    <button
      className={clsx(
        "relative p-0.5 g5 rounded-2xl shadow-500 group",
        containerClassName
      )}
      onClick={onClick}
    >
      <Inner />
    </button>
  );
};

export default Button;
