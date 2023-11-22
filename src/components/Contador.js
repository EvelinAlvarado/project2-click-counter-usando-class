import React from "react";
import "../stylesheets/Contador.css";

// Creando una clase para el componente Contador
/* function Contador(props) {
  return(
    <div className="contador">
      {props.numClics}
    </div>
  )
} */

// *Creando componente Contador con SINTAXIS DE DESESTRUCTURACION
// ---entre {} se escribe la propiedad del objeto que se va a pasar
function Contador({ numClics }) {
  return <div className="contador">{numClics}</div>;
}

export default Contador;
