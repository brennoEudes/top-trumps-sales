import Button from "../Button";
import { Link } from "react-router-dom";

function Card(props) {
  const { key, carPhoto, carName, carLink } = props;

  return (
    <>
      <div>
        <img id={key} src={carPhoto} alt="car-icon" />
        <h2>{carName}</h2>

        <Link to={`/detail/${carLink}`}>
          <Button text="Learn More" />
        </Link>
      </div>
    </>
  );
}

export default Card;
