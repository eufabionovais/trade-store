import { Link, NavLink } from "react-router-dom";

import "./quem-somos-menu-item.scss";
import "../../assets/icomoon-v1.0/style.css";
const QuemSomosMenuitem = ({ menuItem }) => {
    return (
        <div className="quem-somos__menu-item">

            <NavLink to={menuItem.path}>
                <div className="quem-somos__icon-wrapper">
                    <i className={`quem-somos__icon icon-${menuItem.icon}`}></i>
                </div>

                <p className="quem-somos__menu-item__titulo">{menuItem.text}</p>
                <div className="quem-somos__arrow-wrapper">
                    <i className="quem-somos__icon icon-arrow-forward"></i>
                </div>
            </NavLink >
        </div >
    )
}

export default QuemSomosMenuitem;