import React from 'react';
import { Nav, Navbar, NavDropdown, Container  } from 'react-bootstrap';
export const NavBar = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Escandinava Lenceria</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#coleccion">Coleccion 2021</Nav.Link>
              <Nav.Link href="#socios">Trabaja con nosotros</Nav.Link>
              <NavDropdown title="Colecciones anteriores" id="collasible-nav-dropdown">
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
