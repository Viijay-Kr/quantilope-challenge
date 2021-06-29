import React from "react";
import QuestionMatrix from "components/organisms/QuestionMartix/QuestionMatrix";

const QuestionSection = () => {
  const questions = new Array(1).fill(0);
  return (
    <>
      {questions.map((_, index) => (
        <QuestionMatrix
          key={index}
          defaults={{ rows: 3, columns: 3, questionId: index }}
        />
      ))}
    </>
  );
};

export default QuestionSection;
