import React, { Fragment, useState, useEffect } from "react";
const Question = () => {
  const handleChangeQuestion = (id) => {
    switch (id) {
      case 0:
        // example update
        updateNodeQuestion({
          ...nodeQuestion,
          node: 2,
          questionText: "nueva pregunta",
          numQuestion: 2,
          questions: ["Si", "No"],
        });
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

  useEffect(() => {
    // example initital data
    updateNodeQuestion({
      ...nodeQuestion,
      typeQuestion: 1,
      questionText: "Es un dinosaurio",
      questions: ["Si", "No", "Probablemente si", "Probablemente no"],
    });

    return () => {
      updateNodeQuestion({
        numQuestion: 1,
      });
    };
  }, []);

  return (
    <Fragment>
      <p className="text-box-question">{nodeQuestion.numQuestion}</p>
      <p className="text-center text-box-question mx-3 d-flex justify-content-center">
        {nodeQuestion.questionText !== undefined && nodeQuestion.questionText}
      </p>
      <div className="d-flex flex-column align-items-center">
        {nodeQuestion.typeQuestion !== undefined &&
          nodeQuestion.questions.map((answer, index) => {
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
    </Fragment>
  );
};

export default Question;
