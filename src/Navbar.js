// import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Event Manager</h1>
      <div className="links">
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/signup" className="fullColeredButton">
          Sign Up
        </a>
        <a href="/login" className="borderColoredButton">
          Log In
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
