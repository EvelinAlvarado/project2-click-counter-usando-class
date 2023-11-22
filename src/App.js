import "./App.css";
import Boton from "./components/Boton";
import Contador from "./components/Contador";
// otra (en el projecto1 se uso{require()}) forma de importar una imagen: se le asigna un nombre como si fuera una variable y se pone la ubicacion
import freeCodeCampLogo from "./imagens/freecodecamp-logo.png";
import { useState } from "react";

//  *5 Pasos para el uso de HOOKS en el componente funcional:
/* --useState: es un hook que permite agregarle un estado a un componente funcional. 
-----1) Se tiene que IMPORTAR de react  */
function App() {
  /* 2) Se declara constante de un arreglo con 2 elementos: 
  -----n1:es el VALOR que queremos USAR COMO ESTADO, en este caso "numClics"
  -----n2: una FUNCION que nos permite actualizar el estado.
  ---------Convencion: [nombreEStado, setNombreEstado], set=asignar o establecer
   */
  /* 
  3) Se le asigna el VALOR RETORNADO POR EL HOOK useStage(aqui va el valor inicial del estado) */
  const [numClics, setNumClics] = useState(0);

  // Definir función en un componente
  /* Se quiere: incrementar en 1 al numero de clics y ese nuevo valor asignarlo al ESTADO DEL COMPONENTE*/
  const manejarClic = () => {
    /* 4) Se llama a la funcion setNumClics y se le pasa como argumento (numClics + 1), que es el nuevo valor que se le asignara a numClics. Asi se ACTUALIZA EL ESTADO */
    setNumClics(numClics + 1);
  };

  const reiniciarContador = () => {
    setNumClics(0);
  };
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
        {/* 5) Mostrar el valor de forma dinamica: Se para como PROPS la variable numClics (el ESTADO DEL COMPONENTE) */}
        <Contador numClics={numClics} />
        {/* en esBotonDeClic se pasa dependiendo del resultado del operador terceario, si es "Clic" es true y si es "Reiniciar" es false. Que son valores de JS por eso se usa {} */}
        {/* Pasar función como prop: las funciones manejarClic(no es el props) y reiniciarContador de {JS} seran asiganadas al valor de props "manejarClic" despues de hacer clic en Clic o Reiniciar. Luego la funcion es llamada cuando ocurra un evento de clic en onClick={manejarClic}*/}
        <Boton texto={"Clic"} esBotonDeClic={true} manejarClic={manejarClic} />
        <Boton
          texto={"Reiniciar"}
          esBotonDeClic={false}
          manejarClic={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
