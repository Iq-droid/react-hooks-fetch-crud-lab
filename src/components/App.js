import React, { useState, useEffect } from "react";
import Header from "./Header";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("https://my-quiz-app.com/questions")
      .then((response) => response.json())
      .then((data) => setQuestions(data.questions))
      .catch((error) => console.error(error));
  }, []);

  function handleDelete(questionId) {
    setQuestions(questions.filter((question) => question.id !== questionId));
  }

  return (
    <>
      <Header />
      <main>
        <AdminNavBar onChangePage={setPage} />
        {page === "Form" ? <QuestionForm /> : <QuestionList questions={questions} onDelete={handleDelete} />}
      </main>
    </>
  );
}

export default App;
