import ShowCharacter from "./ShowCharacter";
import React, { Fragment, useState, useEffect, useContext } from "react";
import ContextPlayAgain from "../context/PlayAgain";

const Question = () => {
  /* 
    handleChangeQuestion ---> Reliza 2 operaciones en base al botón presionado
      Operación 1: Se comunica mediante el puente bidireccional y sincrónico (transmitiendo
        datos a través de contextos aislados) generada en la precarga de electron.
      Operación 2: Actualiza el estado "temporallyNode" para el control de las respuestas:
          probablemente si && probablemente no
    
    Switch y relación con las respuestas:
      case 0 ---> Si
      case 1 ---> No
      case 2 ---> Probablemente si
      case 3 ---> Probablemente no
  */
  const handleChangeQuestion = (id) => {
    switch (id) {
      case 0:
        electron.send("get:node", nodeQuestion.node * 2);
        break;
      case 1:
        electron.send("get:node", nodeQuestion.node * 2 + 1);
        break;
      case 2:
        updateTemporallyNode({
          ...temporallyNode,
          node: nodeQuestion.node,
        });
        electron.send("get:node", nodeQuestion.node * 2);
        break;
      case 3:
        updateTemporallyNode({
          ...temporallyNode,
          node: nodeQuestion.node,
        });
        electron.send("get:node", nodeQuestion.node * 2 + 1);
        break;
    }
  };
  /* 
    changeNode ---> Realiza 2 operaciones en base al botón presionado
      Operacion 1: Actualiza el atributo "isFirstTime" del estado "temporallyNode"
      Operacion 2: Carga la pregunta donde fue seleccionada (mediante el puente
        bidireccional y sincrónico generada en la precarga de electron) alguna de estas respuestas:
          *** Probablemente si
          *** Probablemente no
      Operacion 2: Actualiza el estado "temporallyNode" para el control de las respuestas:
          probablemente si && probablemente no
    
  */
  const changeNode = () => {
    updateTemporallyNode({
      ...temporallyNode,
      isFirstTime: false,
    });
    electron.send("get:node", temporallyNode.node);
  };
  /*
    Sección de estados
      nodeQuestion ---> almacena las preguntas que se obtienen del puente
        bidireccional y sincrónico generada en la precarga de electron
      isPlayAgain ---> Consumo del contexto para mostrar el botón jugar otra vez
        y a la vez se extrae su metodo para actualizar el contexto en mencion
      numberQuestion ---> Actualiza el numero de pregunta
  */
  const [nodeQuestion, updateNodeQuestion] = useState({
    node: 1,
  });
  const { isPlayAgain, setPlayAgain } = useContext(ContextPlayAgain);
  const [temporallyNode, updateTemporallyNode] = useState({
    node: null,
    isFirstTime: true,
  });
  const [numberQuestion, updateNumberQuestion] = useState(0);

  /*
    Sección de "useEffect", hook de React para permitir llevar a cabo efectos 
    secundarios en componentes funcionales, los cuales estan enlazados a los estados anteriores.
    Cada "useEffect" le corresponde al estado en base a su orden de declaración
  */

  useEffect(() => {
    /*
      Se establece el valor del contexto en falso, indicando que no se renderize el botón
      de jugar otra vez
    */
    setPlayAgain(false);
    /* 
      Escuchar cambios de parte del proceso principal de electron 
    */
    electron.on("send:data", (err, message) => {
      updateNumberQuestion((prev) => prev + 1);
      if (message.typeNode === 1) setPlayAgain(true);
      updateNodeQuestion({ ...message });
    });
    /*
      Eliminar el listener para el evento send:data, al desmontar el componente
      del DOM.
    */
    return () => {
      electron.removeAllListeners('send:data');
    };
  }, []);
  /*
    Efecto del estado "temporallyNode" para reestablecer los estados necesarios
    y jugar de nuevo
  */
  useEffect(() => {
    if (!isPlayAgain) {
      updateNumberQuestion(0);
      updateTemporallyNode({
        ...temporallyNode,
        node: null,
        isFirstTime: true,
      });
      /* 
        Enviar nodo mediante el puente generada en la precarga de electron
        Además inicializa el juego
      */
      electron.send("get:node", 1);
    }
  }, [isPlayAgain]);

  /*
    Cargar respuestas en base a la interacción del usuario
  */
  useEffect(() => {
    updateTemporallyNode({
      ...temporallyNode,
      questions:
        temporallyNode.node !== null
          ? ["Si", "No"]
          : ["Si", "No", "Probablemente si", "Probablemente no"],
    });
  }, [temporallyNode.node]);

  return (
    <Fragment>
      <p className="text-box-question">{numberQuestion}</p>
      <p className="text-center text-box-question mx-3 d-flex justify-content-center">
        {nodeQuestion.typeNode !== undefined && nodeQuestion.typeNode === 0
          ? nodeQuestion.questionText
          : "tu personaje "}
      </p>
      {nodeQuestion.typeNode === 0 ? (
        <div className="d-flex flex-column align-items-center">
          {temporallyNode.questions !== undefined &&
            temporallyNode.questions.map((answer, index) => {
              return (
                <button
                  key={answer}
                  className="answer text-center mx-4 px-0"
                  onClick={() => handleChangeQuestion(index)}
                >
                  {answer}
                </button>
              );
            })}
        </div>
      ) : (
        <Fragment>
          <ShowCharacter
            name={nodeQuestion.questionText}
            temporallyNode={temporallyNode.node}
          />
          <article className="d-flex justify-content-center mb-2">
            {temporallyNode.node !== null && temporallyNode.isFirstTime && (
              <button
                onClick={changeNode}
                className="btn btn-info text-light character-text"
              >
                No lo es
              </button>
            )}
          </article>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Question;
