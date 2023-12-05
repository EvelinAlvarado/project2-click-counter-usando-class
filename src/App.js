import React from "react"; //Se tiene que IMPORTAR de react
import "./App.css";
import Boton from "./components/Boton";
import Contador from "./components/Contador";
// otra (en el projecto1 se uso{require()}) forma de importar una imagen: se le asigna un nombre como si fuera una variable y se pone la ubicacion
import freeCodeCampLogo from "./imagens/freecodecamp-logo.png";

// CREANDO COMPONENTE DE CLASE
class App extends React.Component {
  /* 2) Se define el constructor: Sólo se define si se quiere asignar un "estado" al componente u hacer operaciones especificas para pasar metodos a otros componentes */
  /* 3) Cuando se define un constructor, se llama a "super()" porque nos permite "heredar la funcionalidad" de React.Component */
  constructor() {
    super();
    /* 4) this.state: Es un objeto que va a contener las propiedades que definen el estado del componente.
    Se inicializa el estado del componente */
    this.state = {
      numClics: 0,
    };

    /* 12)
    !!importante
    Las 2 siguientes lineas son necesrias para el funcionamiento por cada método. Es para no "perder" el significado de "this" cuando se pasa un método a otro componente.
    *El Método bind() permite asociar el significado actual de "this" en el constructor con el significado o contexto de "this" en los métodos (otros componentes)
    */
    this.manejarClic = this.manejarClic.bind(this);
    this.reiniciarContador = this.reiniciarContador.bind(this);
  }

  /* 6) Se de define la función manejarClic como "Método" y no como arrow function del componente funcional */
  manejarClic() {
    /* 7) this.setState: Nos permite actualizar el objeto del estado
     **Se toma el objeto del estado {numclics} (Sintaxis de Desestructuración) para acceder a sua valor actual de la propiedad. Se incrementa el valor en 1 (numClics + 1), que es el nuevo valor que se le asignara a numClics. Asi se ACTUALIZA EL ESTADO */
    this.setState(({ numClics }) => ({ numClics: numClics + 1 }));
  }

  /* 9) Se de define la función reiniciarContador como "Método" y no como arrow function del componente funcional */
  reiniciarContador() {
    /* 10) Se actualiza el numClics a cero */
    this.setState({ numClics: 0 });
  }

  /* 1)se copia el JSX del componente funcional */
  render() {
    return (
      <div className="App">
        <div className="freecodecamp-logo-contenedor">
          <img
            className="freecodecamp-logo"
            src={freeCodeCampLogo}
            alt="Logo de freeCodeCamp"
          />
        </div>
        <div className="contenedor-principal">
          {/* 5) Mostrar el valor de forma dinamica: Se accede a la propiedad "numClics" a traves de "this.state" (el ESTADO DEL COMPONENTE) */}
          <Contador numClics={this.state.numClics} />
          {/* en esBotonDeClic se pasa dependiendo del resultado del operador terceario, si es "Clic" es true y si es "Reiniciar" es false. Que son valores de JS por eso se usa {} */}
          {/* Pasar función como prop: las funciones manejarClic(no es el props) y reiniciarContador de {JS} seran asiganadas al valor de props "manejarClic" despues de hacer clic en Clic o Reiniciar. Luego la funcion es llamada cuando ocurra un evento de clic en onClick={manejarClic}*/}
          {/* 8) Ahora se pasa como un prop usando "this" (se refiere al componente actual que esta mostrandose o llamando a ese método) */}
          <Boton
            texto={"Clic"}
            esBotonDeClic={true}
            manejarClic={this.manejarClic}
          />
          {/* 11) Ahora se pasa como un prop usando "this" (se refiere al componente actual que esta mostrandose o llamando a ese método) */}
          <Boton
            texto={"Reiniciar"}
            esBotonDeClic={false}
            manejarClic={this.reiniciarContador}
          />
        </div>
      </div>
    );
  }
}

export default App;
