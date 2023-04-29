import React, { useState } from "react";
import Header from "./Header";

import QuestionList from "./QuestionList";
import NewQuestionForm from "./NewQuestionForm";

function App() {

  const [questions, setQuestions] = useState([]);

  function handleAddQuestion(newQuestion) {
    setQuestions([...questions, newQuestion]);
  }

  function handleDeleteQuestion(id) {
    setQuestions(questions.filter((question) => question.id !== id));
  }

  function handleUpdateQuestion(updatedQuestion) {
    const updatedQuestions = questions.map((question) => {
      if (question.id === updatedQuestion.id) {
        return updatedQuestion;
      }
      return question;
    });
    setQuestions(updatedQuestions);
  }

  return (
    <div>
      <Header />
      <QuestionList
        questions={questions}
        onDeleteQuestion={handleDeleteQuestion}
        onUpdateQuestion={handleUpdateQuestion}
      />
      <NewQuestionForm onAddQuestion={handleAddQuestion} />
    </div>
  );
}

export default App;
