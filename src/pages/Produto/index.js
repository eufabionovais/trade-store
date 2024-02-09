import Banner from "../../components/Banner"
import ContentContainer from "../../components/Layout/ContentContainer"
import BreadcrumbsComponent from "../../components/Layout/Breadcrumb";
import ProductDetailsSlider from "../../components/ProductDetailsSlider"
import Rating from '@mui/material/Rating';
import IncrementalField from "../../components/IncrementalField"
import ProductDetailsTabs from "../../components/ProductDetailsTabs";
import Avaliacoes from "../../components/Avaliacoes"
import Newsletter from "components/NewsLetter";

import Form from 'react-bootstrap/Form';


const Produto = () => {

    // const [age, setAge] = React.useState('');

    // const handleChange = (event) => {
    //   setAge(event.target.value);
    // };

    return (
        <>
            <Banner />

            <BreadcrumbsComponent />

            <ContentContainer>
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <ProductDetailsSlider />
                    </div>
                    <div className="col-12 col-lg-6 d-flex flex-column">
                        <Rating className="rating" name="size-medium" defaultValue={2} size="medium" />
                        <div className="product-sold-label">
                            + Vendidos
                        </div>
                        <h2 className="product-title">
                            Hastes Flexíveis, Cotonetes
                        </h2>
                        <p className="product-ref">
                            Ref: 7891010560737
                        </p>


                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="quantidade">Selecione a quantidade</Form.Label>
                            <Form.Select className="form-select" id="quantidade">
                                <option value="75">75 unidades</option>
                                <option value="150">150 unidades</option>
                            </Form.Select>
                        </Form.Group>

                        <div className="shipping-info">
                            Melhor preço e frete para o seu CEP: <span className="highlight">06050190</span>
                        </div>

                        <div className="product-info">
                            <p className="sold-by">Vendido e entregue por <span>Quantum Internacional Distribuidora</span></p>

                            <div className="product-actions">
                                <p className="product-price">
                                    <span className="currency-symbol">R$</span>
                                    <span className="int-number">3</span>
                                    <span className="cents">,75</span>
                                </p>

                                <IncrementalField />

                                <button className="bt-buy">Comprar</button>

                            </div>

                        </div>
                    </div>
                </div>

            </ContentContainer>

            <div className="container">
                <ProductDetailsTabs className="product-details-tabs" />
            </div>

            <div className="container">
                <Avaliacoes />
            </div>

            <div className="container">
                <Newsletter />
            </div>



        </>
    )
}

export default Produto;