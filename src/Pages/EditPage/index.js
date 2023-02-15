import { useState, useEffect } from "react";
import { api } from "../../utils/api";
import { useNavigate, useParams, Link } from "react-router-dom";
import Button from "../../Components/Button/index";

export function EditPage() {
  const [sale, setSale] = useState({
    name: "",
    image: "",
    description: "",
    price: 0,
    fipe: 0,
    brand: "",
    year: "",
    fuel: "",
    aceleration: 0,
  });

  useEffect(() => {
    async function fetchSale() {
      try {
        const response = await api.get(`/sales/${params.editId}`);
        console.log(response);

        setSale(response.data.data.attributes);
      } catch (err) {
        // console.log(err);
      }
    }

    fetchSale();
  }, []);

  const navigate = useNavigate();
  const params = useParams();

  function handleChange(e) {
    //console.log(e.target)
    setSale({ ...sale, [e.target.name]: e.target.value });
    //console.log(sale)
  }
  async function handleSubmit(e) {
    try {
      e.preventDefault();
      let obj = { data: { ...sale } };

      await api.put(`/sales/${params.editId}`, obj);

      navigate("/"); // navegar para a home
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <Link to="/">
        <Button text="Home" />
      </Link>

      <h1>Editar Anúncio</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="input-sale-name">Car name</label>
        <input
          id="input-sale-name"
          name="name"
          value={sale.name}
          onChange={handleChange}
        />
        <label htmlFor="input-sale-description">Description</label>
        <input
          id="input-sale-description"
          name="description"
          value={sale.description}
          onChange={handleChange}
        />
        <label htmlFor="input-sale-image">image</label>
        <input
          id="input-sale-image"
          name="image"
          value={sale.image}
          onChange={handleChange}
        />
        <label htmlFor="input-sale-brand">Brand</label>
        <input
          id="input-sale-brand"
          name="brand"
          value={sale.brand}
          onChange={handleChange}
        />
        <label htmlFor="input-sale-price">Price</label>
        <input
          id="input-sale-price"
          type="number"
          name="price"
          value={sale.price}
          onChange={handleChange}
        />
        <label htmlFor="input-sale-fipe">Fipe</label>
        <input
          id="input-sale-fipe"
          type="number"
          name="fipe"
          value={sale.fipe}
          onChange={handleChange}
        />
        <label htmlFor="input-sale-year">Year</label>
        <input
          id="input-sale-year"
          type="date"
          name="year"
          value={sale.year}
          onChange={handleChange}
        />
        <label htmlFor="input-sale-fuel">Fuel</label>
        <input
          id="input-sale-fuel"
          name="fuel"
          value={sale.fuel}
          onChange={handleChange}
        />
        <label htmlFor="input-sale-aceleration">Acelerator</label>
        <input
          id="input-sale-aceleration"
          type="number"
          name="aceleration"
          value={sale.aceleration}
          onChange={handleChange}
        />

        <button>Editar</button>
      </form>
    </>
  );
}
