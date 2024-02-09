import "./enderecos-box.scss";
const EnderecoBox = ({ showLink, showContact }) => {
	return (
		<div className="enderecos-container">

			{
				showContact &&

				<div className="enderecos-container-header">
					<div className="row">
						<div className="col-12">
							<h4 className="content-card__title d-flex justify-content-between align-items-center">
								<span>Contato</span>
							</h4>
						</div>
						<div className="col-12 col-md-6">
							<p>Pedro Melo</p>
							<p><a href="/">pedromello@quantuminternacional.com.br</a></p>
						</div>
						<div className="col-12 col-md-6 justify-content-md-end d-flex mt-3 mt-lg-0">
							<button className="button button-md button-light-blue">
								Alterar senha
							</button>
						</div>
					</div>
				</div>

			}


			<div className="box-enderecos-container">

				<div className="box-endereco">
					<h4 className="content-card__title d-flex justify-content-between align-items-center">
						<span>Endereço de</span>
						{
							showLink && <a href="/">Gerenciar endereço</a>
						}

					</h4>
					<p>Pedro Mello</p>
					<p>Quantum Internacional Distribuidora</p>
					<p>Avenida Interlagos, 3665</p>
					<p>Jardim Umuarama</p>
					{
						!showLink && <button className="button button-md button-light-blue">Gerenciar endereço</button>
					}
				</div>

				<div className="box-endereco">
					<h4 className="content-card__title d-flex justify-content-between align-items-center">
						<span>Endereço de</span>
						{
							showLink && <a href="/">Gerenciar endereço</a>
						}
					</h4>
					<p>Pedro Mello</p>
					<p>Quantum Internacional Distribuidora</p>
					<p>Avenida Interlagos, 3665</p>
					<p>Jardim Umuarama</p>
					{
						!showLink && <button className="button button-md button-light-blue">Gerenciar endereço</button>
					}

				</div>
			</div>
		</div>
	)
}

export default EnderecoBox;