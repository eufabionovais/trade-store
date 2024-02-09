
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Rating from '@mui/material/Rating';
import "./form-avaliacao.scss";
function FormAvaliacao() {
    return (
        <Form className='form-avaliacao'>
        
            <div className="rating-wrapper">
                <ul>
                    <li>
                        <strong>Qualidade:</strong> <Rating className="rating-custom"  />
                    </li>
                    <li>
                        <strong>Preço:</strong><Rating className="rating-custom"  />
                    </li>
                    <li>
                        <strong>Prazo de enterga:</strong><Rating className="rating-custom"  />
                    </li>              
                </ul>
            </div>
            
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="text" placeholder="nome" />
        
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Título</Form.Label>
            <Form.Control type="text" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Comentário</Form.Label>
            <Form.Control as="textarea" rows={2} placeholder="Password" />
            </Form.Group>

            <div className="action-wrapper">
    
            <Button variant="primary" type="submit">
            Enviar Avaliação
            </Button>
            </div>
        </Form>
        );
    }
    
    export default FormAvaliacao;