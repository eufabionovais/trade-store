import "./minicart.scss";
import "../../assets/icomoon-v1.0/style.css";

const MiniCart = ({ variant }) => {

    return (


        <div className="mini-cart" data-theme={variant}>

            <div className="icon">
                <a href="/"><i className="icon icon-ship-cart"></i></a>
                <span className="counter">10</span>
            </div>
        </div>
    )
}

export default MiniCart;