import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from 'react';
import Navbar from './AppComponents/Navbar/Navbar';

const Home = lazy(() => import('./Pages/Home/Home'));
const ProductDetail = lazy(() => import('./Pages/ProductDetail/ProductDetail'));

const App = () => {
  return <>
      <Navbar />
      <BrowserRouter>
        <Suspense fallback={<div>Loading ...</div>}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/product/:id" element={<ProductDetail />}></Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
  </>
}

export default App;