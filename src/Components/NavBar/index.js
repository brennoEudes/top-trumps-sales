import Button from "../Button";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
       <Link to="/sales">
          <Button text="Advertise My Car" />
        </Link>
            
    </>
  );
}

export default NavBar;
