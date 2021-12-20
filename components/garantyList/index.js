export default function GarantyList(){
    return(
        <div className="vistoriaCheckSection">
		<div className="vistoriaCheckSectionTitleContainer">
			<h1 id="vistoriaCheckSectionTitle">A vistoria veicular da 2D proporciona tranquilidade e segurança porque garante:</h1>
		</div>

		<div className="vistoriaCheckCardContainer">
			<div className="row align-items-center-cards">
				<div className="vistoriaCheckCard">
					<i className="fa fa-check-circle iconVistoriaCheckCard"></i>
					<h1 className="vistoriaCheckCardTitle">Autenticidade da documentação</h1>
				</div>
				<div className="vistoriaCheckCard">
					<i className="fa fa-check-circle iconVistoriaCheckCard"></i>
					<h1 className="vistoriaCheckCardTitle max-width-small">Legitimidade da propriedade</h1>
				</div>
				<div className="vistoriaCheckCard">
					<i className="fa fa-check-circle iconVistoriaCheckCard"></i>
					<h1 className="vistoriaCheckCardTitle">Funcionamento dos equipamentos</h1>
				</div>
			</div>

			<div className="row align-items-center-cards div-margin-bottom">
				<div className="vistoriaCheckCard">
					<i className="fa fa-check-circle iconVistoriaCheckCard"></i>
					<h1 className="vistoriaCheckCardTitle max-width-small">Identidade da identificação</h1>
				</div>
				<div className="vistoriaCheckCard">
					<i className="fa fa-check-circle iconVistoriaCheckCard"></i>
					<h1 className="vistoriaCheckCardTitle max-width-small">Condições de circulação de veículo</h1>
				</div>
				<div className="vistoriaCheckCard">
					<i className="fa fa-check-circle iconVistoriaCheckCard"></i>
					<h1 className="vistoriaCheckCardTitle">Regularização e transferência veicular</h1>
				</div>
			</div>
		</div>
	</div>
    )
}