import React from "react";
import Quiz from "./components/Quiz/index";
import { getQuestions } from "./api/questions";
import { shuffleArray } from "./utils";

const App = () => {
  // simulate api response
  const questions = shuffleArray(getQuestions());

  return (
    <div className="app">
      <Quiz questions={questions} />
    </div>
  );
};

export default App;
