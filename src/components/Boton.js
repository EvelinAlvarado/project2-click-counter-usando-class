import React from "react";
import "../stylesheets/Boton.css";

// Creando componente Boton CON PROPS
/* function Boton(props) {
  return <button>{props.texto}</button>;
} */

// *Creando componente Boton con SINTAXIS DE DESESTRUCTURACION
// ---entre {} se escribe la propiedad del objeto que se va a pasar
function Boton({ texto, esBotonDeClic, manejarClic }) {
  return (
    /* Clase dinamica Basada en Condición: usando el OPERADOR TERNARIO, entre {} porque es JS  */
    /* se adiciona un EVENTLISTENER: la funcion se recibe como un props. Esta funcion va a venir del componente que cree o renderice el boton */
    <button
      className={esBotonDeClic ? "boton-clic" : "boton-reiniciar"}
      onClick={manejarClic}
    >
      {texto}
    </button>
  );
}

export default Boton;
