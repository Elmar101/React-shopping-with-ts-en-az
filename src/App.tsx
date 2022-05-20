import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import Footer from "./components/footer/Footer";
import MyNavbar from "./components/navbar/MyNavbar";
import Products from "./components/products/Products";
import BasketContextProvider from "./context-api/basket-context/BasketContext";
import MyRouter from "./my-routers/MyRouter";

function App() {
  return (
    <BasketContextProvider>
      <MyNavbar />
      <MyRouter />
      <footer>
      <Footer/>
      </footer>
      
    </BasketContextProvider>
  );
}

export default App;
