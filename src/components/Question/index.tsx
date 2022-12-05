import React, { useState } from "react";
import { AnswerType, QuestionType } from "../../api/questions";
import "./Question.scss";

type Props = {
  buttonText: string;
  onSubmit: (answer: AnswerType) => void;
  question: QuestionType;
};

const Question = (props: Props) => {
  const [answer, setAnswer] = useState<AnswerType | null>(null);

  const { buttonText, onSubmit, question } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const value = parseInt(event.target.value);
    setAnswer(question.answers[value]);
  };

  const handleSubmit = (): void => {
    answer && onSubmit(answer);
  };

  return (
    <div className="question">
      <div className="question-header">
        <h2>{question.questionText}</h2>
      </div>

      <div className="question-body">
        {question.answers.map((option, idx) => (
          <label key={idx}>
            <input
              checked={option === answer}
              name="answer"
              onChange={handleChange}
              type="radio"
              value={idx}
            />
            <span>{option.content}</span>
          </label>
        ))}
      </div>

      <div className="question-footer">
        <button className="button" onClick={handleSubmit}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Question;
