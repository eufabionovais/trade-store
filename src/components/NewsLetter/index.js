
import Form from 'react-bootstrap/Form';
import truck from "../../assets/img/truck-newsletter.png";
import "./newsletter.scoped.scss";
const Newsletter = () => {
    return (
        <div className="container newsletter-container">
            <div className="call-to-action">
                <img src={truck} alt="" />
                <p>Receba ofertas <span>em 1ª mão</span></p>
            </div>

            <div className="form-container">
                <p>Preencha seus dados e receba ofertas exclusivas</p>
                <form className="form" action="">

                    <div className="form-row">
                        <input type="text" placeholder="Nome" className="form-control" />
                            <input type="text" placeholder="E-mail"  className="form-control" />
                            <button type="button" className="btn">Enviar</button>
                        </div>

                    <div className="form-row">
                    <Form.Check type="checkbox" id='aceite'>
                            <Form.Check.Input type="checkbox" htmlFor="aceite" />
                            <Form.Check.Label>Eu li e aceito os termos de uso da <a href="#">política de privacidade</a></Form.Check.Label>
                        </Form.Check>
                    </div>
                    
                </form>
                
            </div>
            
        </div>
    )
}

export default Newsletter;