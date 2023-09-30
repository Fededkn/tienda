import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';
import './NavBarComponent.css';
import { useCollection } from '../../hooks/useCollection';

const NavBarComponent = () => {

    const {data, loading} = useCollection("categories")

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand as={NavLink} className='brand' to={"/"}>Tienda Tech</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto d-flex justify-content-center w-100">
                        
                        { loading ? null : (
                            <NavDropdown title="Categorias" id="basic-nav-dropdown">
                            {data[0].categories.map((category, index) => {
                                return (
                                    <NavDropdown.Item className='navDropdownItem' key={index}>
                                <Link to={`/category/${category}`}>{category}</Link>
                            </NavDropdown.Item>
                        );
                        })}
                            </NavDropdown>
                        )}
                        <Nav.Link href="#link">Contacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <CartWidget/>
        </Navbar>
    );
};

export default NavBarComponent;