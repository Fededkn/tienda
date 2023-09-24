import { Link, NavLink } from 'react-router-dom';
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
                <Navbar.Brand as={NavLink} className='brand' to={"/"}>Tienda Tech</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Categorías" id="basic-nav-dropdown">
                            <NavDropdown.Item as={NavLink} to="/category/motherboards">Motherboards</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/category/procesadores">Procesadores</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/category/placasdevideo">Placas de video</NavDropdown.Item>
                            <NavDropdown.Divider />
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
