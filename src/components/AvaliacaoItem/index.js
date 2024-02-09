import Rating from '@mui/material/Rating';
import "./avaliacao-item.scss";
import IconeUsuario from "../../assets/img/icone-avaliacao.png";

const AvaliacaoItem = () => {
    return (
        <div className='avaliacao-item'>
            <Rating value={3} readOnly />
            <h3 className='avaliacao-item--titulo'>Bem macio</h3>
            <div className="avaliacao-item--descricao">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
            <div className="avaliacao-item--author">
                <div className="avaliacao-item--author_image">
                    <img src={IconeUsuario} alt="" />
                </div>
                <div className='avaliacao-item-author__descricao'>
                    <p>Tais A.</p>                    
                    <p>15/05/2022</p>                    
                </div>
            </div>

        </div>
    )
}

export default AvaliacaoItem;