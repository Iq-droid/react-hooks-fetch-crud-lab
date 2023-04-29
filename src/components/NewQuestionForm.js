import React, { useState } from 'react';
import { postQuestion } from '../api/questionsApi';

const NewQuestionForm = ({ onUpdate }) => {
  const [prompt, setPrompt] = useState('');
  const [answers, setAnswers] = useState(['', '', '', '']);
  const [correctIndex, setCorrectIndex] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const question = {
      prompt,
      answers,
      correctIndex,
    };
    await postQuestion(question);
    onUpdate();
    setPrompt('');
    setAnswers(['', '', '', '']);
    setCorrectIndex(0);
  };

  const handleDelete = async (id) => {
    // await deleteQuestion(id);
    onUpdate();
  };

  const handleAnswerChange = async (e, index) => {
    const newAnswers = [...answers];
    newAnswers[index] = e.target.value;
    setAnswers(newAnswers);
    // await updateQuestion({ id: index + 1, answers: newAnswers });
  };

  return (
    <div>
      <h2>Add a new question:</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Prompt:
          <input type="text" value={prompt} onChange={(e) => setPrompt(e.target.value)} />
        </label>
        <br />
        <label>
          Answer 1:
          <input type="text" value={answers[0]} onChange={(e) => handleAnswerChange(e, 0)} />
        </label>
        <br />
        <label>
          Answer 2:
          <input type="text" value={answers[1]} onChange={(e) => handleAnswerChange(e, 1)} />
        </label>
        <br />
        <label>
          Answer 3:
          <input type="text" value={answers[2]} onChange={(e) => handleAnswerChange(e, 2)} />
        </label>
        <br />
        <label>
          Answer 4:
          <input type="text" value={answers[3]} onChange={(e) => handleAnswerChange(e, 3)} />
        </label>
        <br />
        <label>
          Correct answer:
          <select value={correctIndex} onChange={(e) => setCorrectIndex(parseInt(e.target.value))}>
            <option value={0}>1</option>
            <option value={1}>2</option>
            <option value={2}>3</option>
            <option value={3}>4</option>
          </select>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <hr />
      <h2>Current questions:</h2>
      {questions.map((question) => (
        <div key={question.id}>
          <h3>{question.prompt}</h3>
          <ul>
            {question.answers.map((answer) => (
              <li key={answer}>{answer}</li>
            ))}
          </ul>
          <button onClick={() => handleDelete(question.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default NewQuestionForm;