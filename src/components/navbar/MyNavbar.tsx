import React from "react";
import { XLink } from "../../shared/x-lib/components/XLink";
import MenuIcon from "@mui/icons-material/Menu";
import { useCardContext } from "../../context-api/basket-context/BasketContext";
import { useNavigate } from "react-router-dom";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Register from "../register/Register";
import { useTranslation } from 'react-i18next';
import XLanguageSelector from "../../shared/x-lib/components/XLanguageComponent";

interface Props {
  children?: React.ReactNode;
}

interface State {
  isNavOpen: boolean;
}



const MyNavbar: React.FC<Props> = (props) => {
  const {t} = useTranslation();
  const navigate = useNavigate();
  const [state] = useCardContext();
  const [navbarState, setNavbarState] = React.useState<State>({ isNavOpen: false });


  const buttonClicked = () => {
    setNavbarState({
      isNavOpen: !navbarState.isNavOpen,
    });
  };

  return (
    <header>
      <nav className="d-flex container navbar navbar-expand-lg justify-content-between">
        <XLink className="navbar-brand" to="/">
          LEARN - CODE
        </XLink>

        <button
          className="navbar-toggler"
          type="button"
          onClick={buttonClicked}>
          <MenuIcon />
        </button>
        <div
          className="navbar-collapse"
          style={{ display: navbarState.isNavOpen ? "block" : "none" }}
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <XLink activeclassname="active" to="/" className="nav-link">
                {t("HOME")}
              </XLink>
            </li>
            <li className="nav-item">
              <XLink
                activeclassname="active"
                to="/hakkimizda"
                className="nav-link"
              >
                ABBOUT US
              </XLink>
            </li>
            <li className="nav-item">
              <XLink
                activeclassname="active"
                to="/iletisim"
                className="nav-link"
              >
                CONTACT
              </XLink>
            </li>
          </ul>
        </div>
        <div className="mx-3"><XLanguageSelector/></div>
        <Register/>
        <button className="btn btn-danger mx-1" onClick={()=> navigate("card")}>
          <AddShoppingCartIcon/>
           {state.length > 0 && state.length}
        </button>
        
      </nav>
    </header>
  );
};

export default MyNavbar;
