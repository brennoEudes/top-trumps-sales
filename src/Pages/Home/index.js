import CardCar from "../../Components/CardCar/index";
import { api } from "../../utils/api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

export function Home() {
  const [sales, setSales] = useState([]);
  console.log(sales);

  useEffect(() => {
    async function fetchSales() {
      try {
        const response = await api.get("/sales");

        setSales(response.data.data);
      } catch (err) {}
    }
    fetchSales();
  }, []);

  return (
    <>
      <Link to="/sales">
      <Button variant="success">Sell My Car</Button>{' '}
      </Link>

      {sales.map((currentSale) => {
        return (
          <>
            <CardCar
              key={currentSale.id}
              carPhoto={currentSale.attributes.image}
              carName={currentSale.attributes.name}
              carLink={currentSale.id}
            />
          </>
        );
      })}
    </>
  );
}
