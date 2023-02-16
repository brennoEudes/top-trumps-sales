import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { api } from "../../utils/api";
import style from "./style.modules.css";
import Button from "react-bootstrap/Button";

export function CarDetail() {
  const params = useParams();
  const navigate = useNavigate();
  const [detail, setDetail] = useState({});

  useEffect(() => {
    async function fetchDetail() {
      try {
        const response = await api.get(`/sales/${params.detailId}`);
        console.log(response);
        setDetail(response.data.data.attributes);
      } catch (err) {
        console.log(err);
      }
    }
    fetchDetail();
  }, []);

  async function handleDelete() {
    try {
      const response = await api.delete(`/sales/${params.detailId}`);
      console.log(response);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <Link to="/">
      <Button variant="outline-primary">Home</Button>{' '}
      </Link>
      <div className="carInfo">
        <h1 className="cardInfoHeader">{detail.name}</h1>
        <div className="carInfoImage">
          <img src={detail.image} alt={detail.name} />
        </div>
        <div className="carInfoFields">
          <p>{detail.description}</p>
          <p>{detail.brand}</p>
          <p>{detail.year}</p>
          <p>{detail.price}</p>
          <p>{detail.aceleration}</p>
          <p>{detail.fipe}</p>
          <p>{detail.fuel}</p>

          <div className="btn-carInfo">
            <div className="btn-WhatsApp">
              <Link
                to={
                  "https://wa.me/5511943764418?text=Olá,%20tenho%20interesse%20em%20comprar%20um%20carro%20pelo%20Super%20Trumps%20Sales%20e%20gostaria%20de%20informações."
                }
              >
                 <Button variant="primary" size="lg">
        Buy Now
      </Button>
              </Link>
            </div>
            <Link to={`/edit/${params.detailId}`}>
              <Button variant="warning">Edit</Button>{" "}
            </Link>
            <Button onClick={handleDelete} variant="danger">
              Delete
            </Button>{" "}
          </div>
        </div>
      </div>
    </>
  );
}
