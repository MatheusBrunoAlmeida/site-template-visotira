import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ListIcon(){
    return(
        <div className="list-section">
		<div className="container">

			<div className="row">
				<div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
					<div className="list-box d-flex align-items-center">
						<div className="list-icon">
							<i className="fa fa-check-circle"></i>
						</div>
						<div className="content">
							<h3>Seguraça</h3>
							<p>Para quem vende</p>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
					<div className="list-box d-flex align-items-center">
						<div className="list-icon">
                            <i className="fa fa-check-circle"></i>
						</div>
						<div className="content">
							<h3>Tranquilidade</h3>
							<p>Para quem compra</p>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-6">
					<div className="list-box d-flex justify-content-start align-items-center">
						<div className="list-icon">
                            <i className="fa fa-check-circle"></i>
						</div>
						<div className="content">
							<h3>Satisfação</h3>
							<p>Para todos</p>
						</div>
					</div>
				</div>
			</div>

		</div>
	</div>
    )
}