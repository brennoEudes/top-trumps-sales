import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { api } from "../../utils/api";

export function CarDetail() {
  const params = useParams();
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
      <Link to={`/edit/${params.detailId}`}>
        <button>Editar</button>
      </Link>
      <button>Deletar!</button>
    </>
  );
}
