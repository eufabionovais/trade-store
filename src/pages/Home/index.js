import Banner from "../../components/Banner"
import ContentContainer from "../../components/Layout/ContentContainer"
import ProductsSlider from "../../components/ProductsSlider"
import Brands from "../../components/Brands";
import Stores from "../../components/Stores";
import Newsletter from "../../components/NewsLetter"
import Loader from "components/Loading"
import "./home.scoped.scss";

const Home = () => {
    return (
        <>
            <Banner />

            <ContentContainer title="Ofertas em destaque">
                <ProductsSlider />
            </ContentContainer>
            <ContentContainer className="has-shadow" title="Escolha por marca">
                <Brands />
            </ContentContainer>

            <Newsletter />

            <ContentContainer title="Compre direto de lojas exclusivas">
                <Stores />
            </ContentContainer>
        </>
    )
}

export default Home;