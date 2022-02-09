import axios from 'axios';
import { useEffect, useState } from 'react';
import ItemListado from '../components/ItemListado';

export default function Productos() {
  const [mercaderia, setMercaderia] = useState([]);
  let traeProductos = async () => {
    const res = await axios.get(
      'https://fakerapi.it/api/v1/products?_quantity=10&_taxes=12&_categories_type=uuid'
    );
    console.log(res.data.data);
    setMercaderia(res.data.data);
  };

  useEffect(() => {
    traeProductos();
  }, []);
  return (
    <div>
      <h1>Somos los productos</h1>
      {mercaderia.map((item) => (
        <ItemListado {...item}></ItemListado>
      ))}
    </div>
  );
}
