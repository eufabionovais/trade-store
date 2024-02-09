import "./pedido-stepper.scss";
const PedidoStatus = ({ fullWidth, pedido }) => {
    const fullWidthClass = fullWidth ? 'full-width' : '';
    return (
        <div className={`stepper-wrapper ${fullWidthClass}`} active-step={pedido.activeStep}>
            <div className="stepper-trail">
                <div className="fill" style={{ 'width': `${(100 / 6) * pedido.activeStep}%` }}></div>
            </div>
            {/* <div className="stepper-trail" style={{ 'width': `${100 / pedido.activeStep}%` }} /> */}

            {
                pedido.steps.map((step, index) => {
                    return (
                        <div className={`step-item-wrapper ${step.status}`} key={index}>
                            <div className="step-item">
                                <div className="step-item-content">
                                    <i className={`icon icon-${step.icon}`}></i>
                                </div>
                            </div>
                            <div className="step-content-label">
                                <p className="data">{step.date}</p>
                                <p className="status">{step.text}</p>
                            </div>
                        </div >


                    )
                })
            }

            {/* <div className="step-item-wrapper completed">
                <div className="step-item ">
                    <div className="step-item-content">
                        <i className="icon icon-payment"></i>
                    </div>
                </div>
                <div className="step-content-label">
                    <p className="data">24/06/2022</p>
                    <p className="status">Aguardando pagamento</p>
                </div>
            </div>
            <div className="step-item-wrapper completed">
                <div className="step-item ">
                    <div className="step-item-content">
                        <i className="icon icon-transportation"></i>
                    </div>
                </div>
                <div className="step-content-label">
                    <p className="data">24/06/2022</p>
                    <p className="status">Em separação</p>
                </div>
            </div>
            <div className="step-item-wrapper active">
                <div className="step-item ">
                    <div className="step-item-content">
                        <i className="icon icon-truck"></i>
                    </div>
                </div>
                <div className="step-content-label">
                    <p className="data">24/06/2022</p>
                    <p className="status">Em transporte</p>
                </div>
            </div>
            <div className="step-item-wrapper">
                <div className="step-item">
                    <div className="step-item-content">
                        <i className="icon icon-home"></i>
                    </div>
                </div>
                <div className="step-content-label">
                    <p className="data">24/06/2022</p>
                    <p className="status">Entregue</p>
                </div>
            </div> */}
        </div>
    )
}

export default PedidoStatus;