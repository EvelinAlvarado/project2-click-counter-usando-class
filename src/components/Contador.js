import React from "react";
import "../stylesheets/Contador.css";

// CREANDO COMPONENTE DE CLASE
class Contador extends React.Component {
  render() {
    return <div className="contador">{this.props.numClics}</div>;
  }
}

export default Contador;
