import React, { useMemo, useState } from "react";
import Question from "../Question";
import Result from "../Result";
import { AnswerType, QuestionType } from "../../api/questions";
import "./Quiz.scss";

type Props = {
  questions: QuestionType[];
};

const Quiz = (props: Props) => {
  const { questions } = props;
  const [answers, setAnswers] = useState<AnswerType[]>([]);
  const [questionIndex, setQuestionIndex] = useState<number>(-1);
  const hasNextQuestion = questionIndex < questions.length - 1;

  const state = useMemo((): string => {
    if (questionIndex < 0) {
      return "start";
    }
    if (questionIndex > questions.length - 1) {
      return "complete";
    }

    return "pending";
  }, [questionIndex, questions.length]);

  const score = useMemo(
    (): number => answers.reduce((sum, answer) => (sum += answer.points), 0),
    [answers]
  );

  const handleStart = (): void => {
    setQuestionIndex(0);
    setAnswers([]);
  };

  const handleSubmit = (answer: AnswerType): void => {
    setAnswers([...answers, answer]);
    setQuestionIndex(questionIndex + 1);
  };

  return (
    <div className="quiz">
      <div className="quiz-header">
        <h1>Quiz</h1>

        <p>
          Take our personality quiz to find out which restaurant you should
          visit.
        </p>
      </div>

      <div className="quiz-body">
        {state === "start" && (
          <button className="button" onClick={handleStart}>
            Start
          </button>
        )}
        {state === "pending" && (
          <Question
            buttonText={hasNextQuestion ? "Next Question" : "See Results"}
            key={questionIndex}
            onSubmit={handleSubmit}
            question={questions[questionIndex]}
          />
        )}

        {state === "complete" && (
          <>
            <Result score={score} />

            <button className="button" onClick={handleStart}>
              Start Over
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Quiz;
