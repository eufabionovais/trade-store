import ListGroup from 'react-bootstrap/ListGroup';
import { Link, NavLink } from 'react-router-dom';
import "../../assets/icomoon-v1.0/style.css";
import "./list-menu.scss";
function ListMenu() {
  return (
    <ListGroup variant="flush" className='list-menu'>
      <ListGroup.Item >

        <NavLink to="/minha-conta">
          <i className="icon icon-user-rounded"></i> Meu Painel
        </NavLink>
      </ListGroup.Item>
      <ListGroup.Item>
        <NavLink to="/dados-pessoais">
          <i className="icon icon-list"></i> Dados Pessoais
        </NavLink>
      </ListGroup.Item>
      <ListGroup.Item>
        <NavLink to="/enderecos">
          <i className="icon icon-pin"></i> Endereços
        </NavLink>
      </ListGroup.Item>
      <ListGroup.Item>
        <NavLink to="/pedidos">
          <i className="icon icon-box"></i> Pedidos
        </NavLink>
      </ListGroup.Item>
      <ListGroup.Item>
        <NavLink to="/favoritos">
          <i className="icon icon-heart"></i> Favoritos
        </NavLink>
      </ListGroup.Item>
      <ListGroup.Item>
        <NavLink to="/carrinho">
          <i className="icon icon-ship-cart"></i> Lista Carrinho
        </NavLink>
      </ListGroup.Item>
    </ListGroup>
  );
}

export default ListMenu;