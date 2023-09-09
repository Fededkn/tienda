<<<<<<< HEAD
import { Link } from 'react-router-dom';
=======
import { Link } from 'react-router-dom'
>>>>>>> d569e9762616fef27b7860a21d47c6e5de136bb7
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import './NavBarComponent.css';

const NavBarComponent = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
<<<<<<< HEAD
                <Navbar.Brand><Link to={"#home"}></Link>Tienda Tech</Navbar.Brand>
=======
                <Navbar.Brand><Link to={"/"}>Buenas tardes</Link></Navbar.Brand>
>>>>>>> d569e9762616fef27b7860a21d47c6e5de136bb7
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Categorías" id="basic-nav-dropdown">
                            <NavDropdown.Item><Link to={"/category/motherboards"}>Motherboards</Link></NavDropdown.Item>
<<<<<<< HEAD
                            <NavDropdown.Item><Link to={"/category/procesadores"}>Procesadores</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to={"/category/placasdevideo"}>Placas de video</Link></NavDropdown.Item>
=======
                            <NavDropdown.Item href="#action/3.2">
                                Procesadores
                            </NavDropdown.Item>
>>>>>>> d569e9762616fef27b7860a21d47c6e5de136bb7
                            <NavDropdown.Item href="#action/3.3">Placas de video</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Teclados
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#link">Contacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <CartWidget/>
        </Navbar>
    );
}

export default NavBarComponent;
