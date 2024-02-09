import Card from 'react-bootstrap/Card';
import "./avaliacoes.card.scss"

import AvaliacaoItem from "../AvaliacaoItem";
import ModalAvaliacoes from 'components/ModalAvaliacoes';
import ModalNovaAvaliacao from 'components/ModalNovaAvaliacao';

function Avaliacoes() {
  return (
    <>
    <Card className='avaliacoes-card'>
        <Card.Header>
            <Card.Title>Avaliações</Card.Title>

            <ModalNovaAvaliacao />
        </Card.Header>
      <Card.Body>
   
         <AvaliacaoItem />
         <AvaliacaoItem />
         <AvaliacaoItem />
         <AvaliacaoItem />
         <AvaliacaoItem />
         <AvaliacaoItem />
         <AvaliacaoItem />
     
      </Card.Body>
      <Card.Footer>
        <ModalAvaliacoes />
      </Card.Footer>
    </Card>

    </>
  );
}

export default Avaliacoes;