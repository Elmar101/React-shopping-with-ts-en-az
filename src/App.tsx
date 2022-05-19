import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import MyNavbar from "./components/navbar/MyNavbar";
import Products from "./components/products/Products";
import BasketContextProvider from "./context-api/basket-context/BasketContext";
import MyRouter from "./my-routers/MyRouter";

function App() {
  return (
    <BasketContextProvider>
      <MyNavbar />
      <MyRouter />
    </BasketContextProvider>
  );
}

export default App;
