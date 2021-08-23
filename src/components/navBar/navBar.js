import React from 'react';
import { Nav, Navbar, NavDropdown, Container  } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartWidget from "./CartWidget";
import ItemList  from '../ItemListContainer/ItemList';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemDetailContainer from '../ItemListContainer/ItemDetailContainer';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import "./navBar.css";

export const NavBar = () => {
  return (
    <div>
      <BrowserRouter>
        
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            
            <CartWidget/>
          
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto mx-auto">
                <Nav.Link className='margenNav' as= {Link} to='/category/lenceria'>Lingerie</Nav.Link>
                <Nav.Link className='margenNav' as= {Link} to='/category/vestidos' >Vestidos</Nav.Link>
                <NavDropdown className='margenNav' title="Colecciones anteriores" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Trabaja con nosotros</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.2">Nuestros ideales</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.2">Slow Fashion</NavDropdown.Item>
                  
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
        
        <Switch>
        <Route exact path="/category/:categoryId">
            <ItemListContainer/>
          </Route>
          <Route exact path="/">
            <ItemListContainer/>
          </Route>
          <Route exact path="/productos">
            <ItemList/> 
          </Route>
          <Route path="/Item/:itemId">
            <ItemDetailContainer/>
          </Route>              
        </Switch>
      </BrowserRouter>
    </div>
  );
};
export default NavBar;
