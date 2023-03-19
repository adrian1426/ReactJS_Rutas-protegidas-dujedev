import { Link } from 'react-router-dom';
import { products } from '../data/products';

const ProductsPage = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-around',
      padding: '5px'
    }}>
      {
        products.map(product => (
          <div
            key={product.id}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              width: '25%',
              height: '240px',
              border: '2px solid black'
            }}
          >
            <h4>{product.name}</h4>
            <h4>{product.desciption}</h4>
            <h4>{product.price}</h4>
            <Link to={`/products/${product.id}`}>Ir a {product.name}</Link>
          </div>
        ))
      }
    </div>
  );
};

export default ProductsPage;