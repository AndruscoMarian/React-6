import { Link } from "react-router-dom";

export const Navbar = () => {
  const navbar = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    margin: "auto",
  };
  return (
    <div style={navbar} className="navbar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/form">Form</Link>
    </div>
  );
};
