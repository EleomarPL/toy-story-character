import ShowCharacter from "./ShowCharacter";
import React, { Fragment, useState, useEffect, useContext } from "react";
import ContextPlayAgain from "../context/PlayAgain";

const Question = () => {
  const handleChangeQuestion = (id) => {
    switch (id) {
      case 0:
        // example update
        updateNodeQuestion({
          ...nodeQuestion,
          node: 2,
          questionText: "REX",
          numQuestion: 2,
          typeNode: 0,
          questions: ["Si", "No"],
        });
        //example play again
        setPlayAgain(true);
        break;
      case 1:
        break;
      case 2:
        break;
      case 3:
        break;
    }
  };

  const [nodeQuestion, updateNodeQuestion] = useState({
    node: 1,
    numQuestion: 1,
  });
  const { isPlayAgain, setPlayAgain } = useContext(ContextPlayAgain);
  useEffect(() => {
    // example initital data
    updateNodeQuestion({
      ...nodeQuestion,
      typeNode: 1,
      questionText: "Es un dinosaurio",
      questions: ["Si", "No", "Probablemente si", "Probablemente no"],
    });

    return () => {
      updateNodeQuestion({
        numQuestion: 1,
      });
    };
  }, []);
  useEffect(() => {
    if (!isPlayAgain) {
      console.log("cambiado");
      updateNodeQuestion({
        node: 1,
        numQuestion: 1,
        typeNode: 1,
        questionText: "Es un dinosaurio",
        questions: ["Si", "No", "Probablemente si", "Probablemente no"],
      });
    }
  }, [isPlayAgain]);

  return (
    <Fragment>
      <p className="text-box-question">{nodeQuestion.numQuestion}</p>
      <p className="text-center text-box-question mx-3 d-flex justify-content-center">
        {nodeQuestion.questionText !== undefined && nodeQuestion.typeNode === 1
          ? nodeQuestion.questionText
          : "tu personaje es: "}
      </p>
      {nodeQuestion.typeNode !== undefined && nodeQuestion.typeNode === 1 ? (
        <div className="d-flex flex-column align-items-center">
          {nodeQuestion.questions.map((answer, index) => {
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
        <ShowCharacter name={nodeQuestion.questionText} />
      )}
    </Fragment>
  );
};

export default Question;
