import React from 'react';
import { Nav, Navbar, NavDropdown, Container  } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartWidget from "./CartWidget";
import "./navBar.css";
import Logo from './Logo';

export const NavBar = () => {
  return (
    <div>
     
        
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>      
          <Nav.Link className='link' as= {Link} to='/'><Logo/></Nav.Link>            
             <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto mx-auto">
                <NavDropdown className='margenNav' title="Categorias" id="collasible-nav-dropdown">
                  <NavDropdown.Item className='margenNav' as= {Link} to='/category/lenceria'>Lenceria</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item className='margenNav' as= {Link} to='/category/vestidos'>Vestidos</NavDropdown.Item>                       
                </NavDropdown>
                <Nav.Link href="#" >Sobre nosotros</Nav.Link>
                <Nav.Link href="#" >Contactanos!</Nav.Link>              
              </Nav>
              
            </Navbar.Collapse>
            <Link to="/cart">
            <CartWidget/>
            </Link>
          </Container>
        </Navbar>       
       
    </div>
  );
};
export default NavBar;
