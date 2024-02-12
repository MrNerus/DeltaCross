import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <NavLinks label="Delta Plus" logo="menu" url="/" />
        <NavLinks label="Home" logo="home" url="/home" />
        <NavLinks label="Browse" logo="language" url="/browse" />
        <NavLinks label="Cart" logo="shopping_cart" url="/cart" />
        <NavLinks label="Track" logo="location_searching" url="/track" />
        <NavLinks label="Developer" logo="settings" url="/test" />
      </ul>
      <ul>
        <NavLinks label="Profile" logo="person" url="/settings" />
        <NavLinks label="Signout" logo="logout" url="/logout" />
        <NavLinks label="Login" logo="login" url="/login" />
        <NavLinks label="Signup" logo="person_add" url="/signup" />
      </ul>
    </nav>
  );
};

export default Navbar;
