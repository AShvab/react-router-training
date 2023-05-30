import About from 'pages/About/About';
import Home from 'pages/Home/Home';
import NotFound from 'pages/NotFound';
import Products from 'pages/Products/Products';
import { Route, Routes } from 'react-router-dom';
import ProductDetails from 'pages/ProductDetails/ProductDetails';
import Mission from './Mission/Mission';
import Reviews from './Reviews/Reviews';
import Team from './Team/Team';
import SharedLayout from './SharedLayout/SharedLayout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />

        <Route path="/about" element={<About />}>
          <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>

        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
