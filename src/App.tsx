import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout      from './components/Layout/Layout';
import HomePage    from './pages/HomePage';
import ShopPage    from './pages/ShopPage';
import ProductPage from './pages/ProductPage';
import CartPage    from './pages/CartPage';

export default function App() {
  return (
    <BrowserRouter>  
      <Layout>
        <Routes>
          <Route path="/"          element={<HomePage />}    />
          <Route path="/shop"      element={<ShopPage />}    />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart"      element={<CartPage />}    />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
