import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import ImagenList from './media/yukata2.jpeg';
import './ItemListContainer.css'

function ItemListContainer({titulo}){
    return(
        <div>
            <Container className='containerYukata'>
                <Row className='itemList'>
                    <Col className='miTitulo'>{titulo}</Col>
                    <Col className='yukata'><img className='imgYukata' src={ImagenList} alt="logo"/></Col>
                </Row>
            </Container>
        </div>
    );
}

export default ItemListContainer;

