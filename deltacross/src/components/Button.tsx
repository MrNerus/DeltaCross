interface ButtonTypes {
  primary: string;
  secondary: string;
  success: string;
  light: string;
  dark: string;
  warning: string;
  danger: string;
}

type ButtonType = keyof ButtonTypes;

interface Props {
  children: string | JSX.Element;
  mode?: ButtonType;
  onClick: () => void;
}

const modes: ButtonTypes = {
  "primary": "btn-primary",
  "secondary": "buttonSecondary",
  "success": "btn-success",
  "light": "btn-light",
  "dark": "btn-dark",
  "warning": "btn-warning",
  "danger": "btn-danger",
};

const Button = (props: Props) => {
  const buttonType = modes[props.mode ? props.mode : "primary"];
  const value = props.children;
  const onClick = props.onClick;
  return (
    <button type="button" className={`button ${buttonType}`} onClick={onClick}>
      {value}
    </button>
  );
};

export default Button;
