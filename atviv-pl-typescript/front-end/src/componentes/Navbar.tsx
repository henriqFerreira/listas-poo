import { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
    render () {
        return (
            <nav className="navbar navbar-dark bg-dark sticky-top mb-5">
                <div className="container-fluid">
                    <Link to={ '/' } className="navbar-brand text-info">PetLovers</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-start text-bg-dark" tabIndex={ -1 } id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title text-info" id="offcanvasDarkNavbarLabel">PetLovers</h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <div className="list-group list-group-flush">
                                <div className="fw-bold my-2">Listagem</div>
                                <Link to={ '/' } className="list-group-item bg-dark text-white py-1 border-dark"> Clientes </Link>
                            </div>
                            <div className="list-group list-group-flush">
                                <div className="fw-bold my-2">Cadastro</div>
                                <Link to={ '/cadastro' } className="list-group-item bg-dark text-white py-1 border-dark"> Clientes </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;