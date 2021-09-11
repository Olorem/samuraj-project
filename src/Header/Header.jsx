import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="headerWrapper">
      <div className="header">
        <NavLink to="/profile">Home</NavLink>
        <NavLink to="/dialogs">Messages</NavLink>
        <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md">News</a>
        <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md">Music</a>
      </div>
    </div>
  );
}

export default Header