import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { api } from "../../utils/api";

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

async function handleDelete () {
    try {
      const response = await api.delete (`/sales/${params.detailId}`)
      console.log (response);
      navigate("/");

    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <h1>{detail.name}</h1>

      <img src={detail.image} alt={detail.name} />
      <p>{detail.description}</p>
      <p>{detail.brand}</p>
      <p>{detail.year}</p>
      <p>{detail.price}</p>
      <p>{detail.aceleration}</p>
      <p>{detail.fipe}</p>
      <p>{detail.fuel}</p>
      <Link to={"https://wa.me/5511943764418?text=Olá,%20tenho%20interesse%20em%20comprar%20um%20carro%20pelo%20Super%20Trumps%20Sales%20e%20gostaria%20de%20informações."}>
        <button>Chat With Specialist</button>
      </Link>
      <Link to={`/edit/${params.detailId}`}>
        <button>Edit</button>
      </Link>
      <button onClick={handleDelete}>Delete</button>
    </>
  );
}
