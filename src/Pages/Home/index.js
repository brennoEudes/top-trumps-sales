import Card from "../../Components/Card";

import { api } from "../../utils/api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//
export function Home() {
  const [sales, setSales] = useState([]);
  console.log(sales);

  useEffect(() => {
    async function fetchSales() {
      try {
        const response = await api.get("/sales");
        //console.log(response)
        setSales(response.data.data);
      } catch (err) {}
    }
    fetchSales();
  }, []);
  //

  return (
    <>

      <h1>Vendas</h1>
      <div>
        <Link to="/sales">
          <button>Criar anúncio!</button>
        </Link>
      </div>

      {sales.map((currentSale) => {
        return (
          <>
            <strong key={currentSale.id}>{currentSale.attributes.name}</strong>
            <img src={currentSale.attributes.image} alt="foto de carro" />
          </>
        );
      })}

  
    </>
  );
}
