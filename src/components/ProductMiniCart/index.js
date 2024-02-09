import "./product-mini-cart.scoped.scss";
import IncrementalField from "components/IncrementalField";
import IconTrash from "../../assets/img/icons/icon-trash.svg";
const ProductMiniCart = () => {
    return (
        <div className="product-mini-cart">
            <div className="product-image">
                <img src="/assets/img/produtos/produto-1.png" alt="" />
            </div>
            <div className="product-info">
                <h3 className="product-title">Hastes Flexíveis, Cotonetes, 75 Unidades</h3>
                <p className="product-description">75 Unidades</p>
                <div className="product-actions">
                    <IncrementalField size="small" />
                    <div className="product-price">
                        <span className="normal-price">R$ 4,19</span>
                        <span className="sale-price"> R$ 3,34</span>
                       
                    </div>
                    <button className="btn-remove">
                        <img src={IconTrash} alt="" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductMiniCart;