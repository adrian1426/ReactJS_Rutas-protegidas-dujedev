import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Product from './components/Product';
import LoginPage from './pages/LoginPage';
import ProductsPage from './pages/ProductsPage';
import ProtectedRoute from './router/ProtectedRoute';

function App() {

  const handleLogin = () => {
    localStorage.setItem('token', 'wieiei8383fj9r');
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage handleLogin={handleLogin} />} />

        <Route element={<ProtectedRoute />}>
          <Route path='/products' element={<ProductsPage />} />
          <Route path='/products/:id' element={<Product />} />
          <Route path='/cart' element={<h1>Carrito de compra</h1>} />
        </Route>

        {/* <Route path='*' element={<h1>Not Found</h1>} /> */}
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
