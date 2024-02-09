import "./store-mini-card.scoped.scss";
import ProductMiniCart from "components/ProductMiniCart";
import ProgressBarCustom from "components/ProgressBarCustom";

const StoreMiniCart = () => {
    return (
       <>
            <div className="store-mini-cart-wrapper">
                <p className="seller">Vendido e entregue por: <span>Quantum Internacional Distribuidora</span></p>
                <ProductMiniCart />
                <ProductMiniCart />
                <ProductMiniCart />
     

                <div className="store-subtotal">
                    <header>
                        <strong>Subtotal</strong>
                        <strong>R$15,22</strong>
                    </header>
                    <p>Faltam <strong>R$ 0.000,00</strong> para atingir o pedido mínimo! <a href="/">Ver produtos</a>.</p>
                    <ProgressBarCustom />
                </div>

            </div>
       </>
    )
}

export default StoreMiniCart;