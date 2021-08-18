import React from 'react'
import {Container, Card, Col} from 'react-bootstrap';
import ItemCount from '../ItemListContainer/ItemCount';

 //creacion del state
        
 const [datosItemDetail, setdatosItem] = useState("");
    
 //ejecucion promesa tardia
 useEffect(() => {
    
 //desarollo de la promesa Tardia
 
     const promesaTardia = new Promise ((resolve,reject)=>{
         setTimeout(()=>{
              resolve(listaDetail);
         },2000)
     });
 
 //promesa
     promesaTardia
     .then((result)=>{ setdatosItem(listaDetallada[id]);
                 console.log(datosItemDetail);})
    }, [])



function ItemDetail ({id, nombre , precio, descripcion, imagen}){

    return(
    <Container class='itemBootstrap'>    
      <Card style={{ width: '20 rem' }}>
        <Card.Img variant="top" src={imagen} />
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>
            {descripcion}
          </Card.Text>
          <Card.Text>{precio}</Card.Text>
          <ItemCount stock={5} inicial={1} />            
          
        </Card.Body>
      </Card>
      
    </Container>
    
        )

}

export default ItemDetail




