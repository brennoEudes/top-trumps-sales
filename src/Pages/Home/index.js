import Card from "../../Components/Card";
import { api } from "../../utils/api";
import { useState, useEffect } from "react";

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
      <h1>Top Trumps Sales</h1>

      {sales.map((currentSale) => {
        return (
          <Card
            key={currentSale.id}
            carPhoto={currentSale.attributes.image}
            carName={currentSale.attributes.name}
          />
        );
      })}
    </>
  );
}
