import { Routes, Route, Navigate } from "react-router-dom";
import ProductCard from "../components/card/ProductCard";
import Register from "../components/register/Register";
import ProductDetail from "../components/product-detail/ProductDetail";
import Products from "../components/products/Products";
import SignIn from "../components/register/CheckIn";
const MyRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path={`card`} element = {<ProductCard/>} />
        <Route path={`signIn`} element = {<SignIn/>} />
        <Route path={`product/:id`} element = {<ProductDetail/>} />
      </Routes>
    </div>
  );
};

export default MyRouter;
