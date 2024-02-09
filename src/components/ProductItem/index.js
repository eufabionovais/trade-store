
import "./product.scoped.scss"
import Rating from '@mui/material/Rating';
import Button from 'react-bootstrap/Button';
const ProductItem = ({ product }) => {

    return (
        <div className='product'>
            <div className="sale-label">
                <span>-10</span>%
            </div>
            <div className="product-image">
                <img src={product.image} alt="" />
            </div>
            <div className="product-rating">
                <Rating className="rating" name="size-medium" defaultValue={2} size="medium" disabled />
            </div>
            <div className="product-sold-label">
                + Vendidos
            </div>
            <h3 className="product-title">
                {product.title}
            </h3>
            <div className="product-price">
                <span className="regular-price">R$4,99</span>
                <div className="sales-price">
                    <span className="currency">R$</span>
                    <span className="value">3</span>
                    <span className="cents">,99</span>
                </div>
            </div>
            {
                product.estoque ?
                    <button to="/produto" className="button button-lg button-light-blue">
                        Comprar
                    </button> :
                    <button disabled="disabled" className="button button-lg">
                        Esgotado
                    </button>
            }

        </div>
    )
}

export default ProductItem;