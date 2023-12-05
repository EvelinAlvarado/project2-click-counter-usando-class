import React from "react";
import "../stylesheets/Boton.css";

// Creando componente Boton CON PROPS
/* function Boton(props) {
  return <button>{props.texto}</button>;
} */

// CREANDO COMPONENTE DE CLASE
class Boton extends React.Component {
  render() {
    return (
      /* Clase dinamica Basada en Condición: usando el OPERADOR TERNARIO, entre {} porque es JS  */
      /* se adiciona un EVENTLISTENER: la funcion se recibe como un props. Esta funcion va a venir del componente que cree o renderice el boton */
      <button
        className={this.props.esBotonDeClic ? "boton-clic" : "boton-reiniciar"}
        onClick={this.props.manejarClic}
      >
        {this.props.texto}
      </button>
    );
  }
}

export default Boton;
