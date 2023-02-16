import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import style from "./style.modules.css";

function NavBar() {
  return (
    <>
    <div className="navBar">
    <h1>Super Trumps Sales</h1>
      <Link to="/sales">
        <Button variant="primary" size="lg">Sell My Car</Button>{" "}
      </Link>
    </div>
    
    </>
  );
}

export default NavBar;
