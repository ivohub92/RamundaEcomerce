import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import vestido from './media/yukata2.jpeg';
import conjunto from './media/conjunto.jpeg';
import './ItemListContainer.css';


function ItemListContainer({}){
    return(
        <div>
            <Container className='containerYukata'>
                <Row className='itemList'>
                <Col className='yukata'><img className="imgConjunto" src={conjunto} alt="conjuntos"/><h3>Conjuntos</h3></Col>
                <Col className='yukata'><img className='imgYukata' src={vestido} alt="vestido"/><h3>Vestidos</h3></Col>
                </Row>
            </Container>
        </div>
    );
}

export default ItemListContainer;

