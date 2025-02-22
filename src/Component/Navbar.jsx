import { Link } from "react-router-dom";
import "../style/Navbar.css";
import { Heading } from "@chakra-ui/react";
const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <Heading className="Heading">My Cart</Heading>
        <nav className="nav">
          <Link to="/">Products</Link>
          <Link to="/cart">Cart</Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
