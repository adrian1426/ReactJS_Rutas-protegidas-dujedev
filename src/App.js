import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ProductsPage from './pages/ProductsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<h1>Home</h1>} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/cart' element={<h1>Carrito de compra</h1>} />
        {/* <Route path='*' element={<h1>Not Found</h1>} /> */}
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
