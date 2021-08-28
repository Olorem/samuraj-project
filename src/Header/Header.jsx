import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <NavLink to="/profile">Profile</NavLink>
      <NavLink to="/dialogs">Messages</NavLink>
      <a href="#">News</a>
      <a href="#">Music</a>
    </div>
  );
}

export default Header