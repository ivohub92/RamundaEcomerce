import React from "react";
import CartWidget from "./navBar/CartWidget";

const NotFound = () => {
  return (
    <div>
      <h1>Pagina no encontrada</h1>
      <h3>Click en el logo para volver al inicio</h3>
      <div className='text-center'><CartWidget/></div>
    </div>
  );
};

export default NotFound;
