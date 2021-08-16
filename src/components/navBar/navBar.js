import React from 'react';
import { Nav, Navbar, NavDropdown, Container  } from 'react-bootstrap';
import CartWidget from "./CartWidget"
export const NavBar = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <CartWidget/>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto mx-auto">
              <Nav.Link className='margenNav' href="productos">Coleccion 2021</Nav.Link>
              <Nav.Link className='margenNav' href="#socios">Trabaja con nosotros</Nav.Link>
              <NavDropdown className='margenNav' title="Colecciones anteriores" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Vestidos</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">Lenceria</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">Bodies y guantes</NavDropdown.Item>
                
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Contacto</Nav.Link>
              <Nav.Link eventKey={2} href="#socios">
                Iniciar sesion!
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
export default NavBar;
