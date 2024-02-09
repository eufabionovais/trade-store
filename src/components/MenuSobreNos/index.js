import ListGroup from 'react-bootstrap/ListGroup';
import { Link, NavLink } from 'react-router-dom';
import "./list-menu-sobre.scss";
function ListMenu() {

  const menuItems = [
    {
      text: "Sobre nós",
      path: "/sobre-nos",
    },
    {
      text: "Termos e condições do vendedor",
      path: "/termos-condicoes-vendedor",
    },
    {
      text: "Termos e  condições do comprador",
      path: "/termos-condicoes-comprador",
    },
    {
      text: "Política de Privacidade e Segurança",
      path: "/politica-privacidade-seguranca",
    },
    {
      text: "Política de Entrega",
      path: "/politica-entrega",
    },
    {
      text: "Politica de trocas e reembolsos",
      path: "/politica-trocas-reembolsos",
    },
    {
      text: "Fale conosco",
      path: "/fale-conosco",
    },
    {
      text: "Trabalhe conosco",
      path: "/trabalhe-conosco",
    },
  ]


  return (
    <ListGroup variant="flush" className='list-menu'>

      {
        menuItems.map((menuItem, index) => {
          return (
            <ListGroup.Item key={index}>
              <NavLink to={menuItem.path}>
                {menuItem.text}
              </NavLink>
            </ListGroup.Item>
          )
        })
      }

    </ListGroup>
  );
}

export default ListMenu;