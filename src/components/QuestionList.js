import React from "react";
import PropTypes from "prop-types";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, onDeleteQuestion, onUpdateQuestion }) {
  function handleDelete(id) {
    onDeleteQuestion(id);
  }

  function handleUpdate(updatedQuestion) {
    onUpdateQuestion(updatedQuestion);
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((question) => (
          <QuestionItem
            key={question.id}
            question={question}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
          />
        ))}
      </ul>
    </section>
  );
}

QuestionList.propTypes = {
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      prompt: PropTypes.string.isRequired,
      answers: PropTypes.arrayOf(PropTypes.string).isRequired,
      correctIndex: PropTypes.number.isRequired,
    })
  ).isRequired,
  onDeleteQuestion: PropTypes.func.isRequired,
  onUpdateQuestion: PropTypes.func.isRequired,
};

export default QuestionList;
