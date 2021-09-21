import { React, useState } from "react";


function ItemCount({ stock, initial, onAdd }) {
  const [counter, setCounter] = useState(initial);

  const subsCounter = () => {
      if (counter > initial) {
        setCounter(counter - 1);
        }
    }
    const addCounter = () => {
        if (counter < stock) {
            //incrementa sólo si counter es menor al stock
            setCounter(counter + 1);
          }
    }
  return (
    <div className="d-flex flex-column ">
      <div className="d-inline-flex justify-content-center gap-5 py-4">
        <button className="btn btn-primary " onClick={subsCounter}  >
          -
        </button>
        <p className="fs-6">{counter}</p>
        <button className="btn btn-primary" onClick={ addCounter} >
          +
        </button>
      </div>
      <button className="btn btn-primary " onClick={() => onAdd(counter)}>
        Agregar
      </button>
    </div>
  );
}

export default ItemCount;
