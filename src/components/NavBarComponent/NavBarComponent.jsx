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
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <NavDropdown title="Categorías" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Motherboards</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Procesadores
                            </NavDropdown.Item>
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