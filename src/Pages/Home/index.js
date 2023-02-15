import Card from "../../Components/Card";
import Button from "../../Components/Button";
import { api } from "../../utils/api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
        <Button text="Advertise My Car" />
      </Link>

      {sales.map((currentSale) => {
        return (
          <>
            <Card
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
