import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import style from "../CardCar/style.modules.css";
import CardInfo from "../CardInfo/style.modules.css";

function CardCar(props) {
  const { key, carPhoto, carName, carLink } = props;

  return (
    <>
      <div className="cardsContainer">
        <div className="carForm">
          <img className="carPhoto" id={key} src={carPhoto} alt="car-icon" />
          <div className="carMiniDescription">
            <h2>{carName}</h2>

            <Link to={`/detail/${carLink}`}>
              <Button variant="outline-primary">See More</Button>{" "}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardCar;
