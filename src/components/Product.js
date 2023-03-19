import { Link, useParams } from 'react-router-dom';
import { products } from '../data/products';

const Product = () => {
  const params = useParams();

  const productSearched = products.find(p => p.id === Number(params.id));

  return (
    <div>
      <h2>Producto {productSearched?.name}</h2>
      <p>{productSearched?.desciption}</p>
      <br />
      <Link to={-1}>Regresar</Link>
    </div>
  );
};

export default Product;