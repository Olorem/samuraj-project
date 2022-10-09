import { NavLink } from "react-router-dom";

const Header = (props) => {
  console.log(props);
  return (
    <div className="headerWrapper">
      <div className="header">
        <NavLink to="/profile">Home</NavLink>
        <NavLink to="/dialogs">Messages</NavLink>
        <NavLink to="/users">Users</NavLink>
        {props.isAuthorized ? <NavLink to="/login">U are authorized</NavLink> : <NavLink to="/login">Login</NavLink> }
      </div>
    </div>
  );
}

export default Header