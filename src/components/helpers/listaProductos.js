import React from 'react';
import bloodFantasy from "../media/conjuntos/bloodFantasy.png"
import blueVampirella from "../media/conjuntos/blueVampirella.png";
import charoline from "../media/conjuntos/charoline.png";
import redPoison from "../media/conjuntos/redPoison.png";
import redPriest from "../media/conjuntos/redPriest.jpg";



        export let listaProductos =[
          {id:1, stock:10, nombre:"Conjunto Blood Fantasy", category:"lenceria", descripcion:"Conjunto Sangriento", precio:"3000", imagen: bloodFantasy},
          {id:2, stock:10, nombre:"Conjunto Blue Vampirella", category:"lenceria", descripcion:"Bella e inmortal", precio:"3000", imagen: blueVampirella},
          {id:3, stock:10, nombre:"Body Charoline", category:"lenceria", descripcion:"Para los amantes del charol",precio:"3000", imagen: charoline},
          {id:4, stock:10, nombre:"Conjunto Red Poison", category:"lenceria", descripcion:"Un rojo venenoso, para matar suavemete",precio:"3000", imagen: redPoison},
          {id:5, stock:10, nombre:"Vestido Red Priest", category:"vestidos", descripcion:"Sientete la saserdotisa mas bella",precio:"3000", imagen: redPriest }   
        ];

        export const Promesa = async () => {
          const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(listaProductos);
            }, 2000);
          });
          return promise;
        };
        
        
