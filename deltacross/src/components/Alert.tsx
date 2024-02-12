import { ReactNode } from "react";

interface ModeKeys {
  danger: string;
  dark: string;
  light: string;
  primary: string;
  warning: string;
}

type ModeKey = keyof ModeKeys;

interface Props {
  children: ReactNode;
  mode: ModeKey;
  onClose?: () => void;
}

const modes: ModeKeys = {
  "danger": "alert-danger",
  "dark": "alert-dark",
  "light": "alert-light",
  "primary": "alert-primary",
  "warning": "alert-warning",
};
const Alert = (props: Props) => {
  const text = props.children;
  const mode = modes[props.mode];
  const onClose = props.onClose ? props.onClose : () => {};
  return (
    <>
      <div className={`alert ${mode} alert-dismissible fade show`} role="alert">
        {text}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
          onClick={onClose}
        ></button>
      </div>
    </>
  );
};

export default Alert;
