// import { useState } from "react";

interface Props {
  logo: string;
  label: string;
  url?: string;
}
const NavLinks = (prop: Props) => {
  const logo = prop.logo;
  const label = prop.label;
  const url = prop.url ? prop.url : "#";

  // Properties
  //   const [isActive, setIsActive] = useState(false);

  return (
    <li
      onClick={() => (window.location.href = `${url}`)}
      className={`logoContainer ${
        window.location.pathname === url ? "active" : ""
      }`}
    >
      <div>
        <span className="material-icons">{logo}</span>
      </div>
      <div className="labelContainer">{label}</div>
    </li>
  );
};

export default NavLinks;
