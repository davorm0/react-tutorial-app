interface ButtonProps {
  variant?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark"
    | "link";
  children: string;
  onClick?: () => void;
}

const Button = ({ variant = "primary", children, onClick }: ButtonProps) => {
  return (
    <button type="button" className={`btn btn-${variant}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
