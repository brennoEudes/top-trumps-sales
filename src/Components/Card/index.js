import Button from "../Button";
import { Link } from "react-router-dom";

function Card (props) {

  const {key, carPhoto, carName} = props;

  return (
    <>
      <div className="card-box">
        <img id={key} src={carPhoto} alt="car-icon" />
        <h2>{carName}</h2>

        <Link to="/">
        <Button text="Learn More"/>
        </Link>
      </div>
    </>
  );
}

export default Card;
