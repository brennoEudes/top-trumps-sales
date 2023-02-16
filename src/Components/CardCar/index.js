import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import style from "../CardCar/style.modules.css"

function CardCar(props) {
  const { key, carPhoto, carName, carLink } = props;

  return (
    <>
      <div className="CardBox">
        <img id={key} src={carPhoto} alt="car-icon" />
        <h2>{carName}</h2>

        <Link to={`/detail/${carLink}`}>
        <Button variant="success">Learn More</Button>{' '}
        </Link>
      </div>
    </>
  );
}

export default CardCar;
