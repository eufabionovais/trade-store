import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import "./product-details-tabs.scss"


function ProductDetailsTabs() {
  return (
    <Tabs
      defaultActiveKey="detalhes"
      className="details-tab"
    >
      <Tab eventKey="detalhes" title="Detalhes">
        <ul className="details-list">
          <li>Item 01</li>
          <li>Item 02</li>
          <li>Item 03</li>
          <li>Item 04</li>
          <li>Item 05</li>
        </ul>
      </Tab>
      <Tab eventKey="inforAdicionais" title="Informações Adicionais">
        <p>Cotonetes é feito com algodão 100% puro e possui hastes plásticas flexíveis. Por isso oferece toda a suavidade, conforto e absorção para o cuidado da sua pele. Cotonetes é indicado para a higiene pessoal de toda a família.</p>
      </Tab>
    </Tabs>
  );
}

export default ProductDetailsTabs;