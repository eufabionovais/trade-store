import { Link } from 'react-router-dom';
import BaseBox from "components/BaseBox";
import PedidoStepper from "components/PedidoStepper";
import "../../assets/icomoon-v1.0/style.css";
import "./item-pedido-resumo.scss";

const ItemPedidoResumo = ({ title, variant, statusOnly, children, pedido }) => {



    const statusOnlyClass = statusOnly ? 'status-only' : '';
    return (
        <BaseBox title={title} variant={variant} className={`resumo-pedido ${statusOnlyClass}`}>
            {
                !statusOnly &&
                <div className="resumo-pedido__itens">
                    <div className="item">
                        <img src="/assets/img/produtos/produto-1.png" alt="" />
                    </div>
                    <div className="item">
                        <img src="/assets/img/produtos/produto-2.png" alt="" />
                    </div>
                    <div className="item">
                        <a href="/">+10</a>
                    </div>
                </div>
            }

            <div className={`resumo-pedido__status ${statusOnlyClass}`} >
                <PedidoStepper pedido={pedido} />
            </div>
            {
                !statusOnly &&
                <div className="resumo-pedido__numero">
                    <p>Pedido <span>10000000028</span> </p>
                    <Link className='resumo-pedido__link' to={`1`}>Ver detalhes</Link>

                </div>
            }

            {
                children &&
                <div className="pedido__produtos">
                    {children}
                </div>
            }



        </BaseBox>
    )
}

export default ItemPedidoResumo;