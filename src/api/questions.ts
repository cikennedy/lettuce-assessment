export type AnswerType = {
  content: string;
  points: number;
};

export type QuestionType = {
  questionText: string;
  answers: AnswerType[];
};

export const getQuestions = (): QuestionType[] => {
  return [
    {
      questionText: "Pick a city you would like to jet off to",
      answers: [
        {
          points: 2,
          content: "Tokyo",
        },
        {
          points: 4,
          content: "Paris",
        },
        {
          points: 1,
          content: "Los Angeles",
        },
        {
          points: 3,
          content: "Nashville",
        },
      ],
    },
    {
      questionText: "Pick a Netflix show to binge watch",
      answers: [
        {
          points: 2,
          content: "Stranger Things",
        },
        {
          points: 4,
          content: "The Crown",
        },
        {
          points: 1,
          content: "House of Cards",
        },
        {
          points: 3,
          content: "Wednesday",
        },
      ],
    },
    {
      questionText: "What is the first thing you reach for in the morning?",
      answers: [
        {
          points: 1,
          content: "coffee",
        },
        {
          points: 4,
          content: "phone",
        },
        {
          points: 2,
          content: "glasses",
        },
        {
          points: 3,
          content: "TV remote",
        },
      ],
    },
    {
      questionText: "If you could be any animal, what would you pick?",
      answers: [
        {
          points: 1,
          content: "eagle",
        },
        {
          points: 3,
          content: "dog",
        },
        {
          points: 4,
          content: "deer",
        },
        {
          points: 2,
          content: "monkey",
        },
      ],
    },
    {
      questionText: "Pick a superpower",
      answers: [
        {
          points: 3,
          content: "invisibility",
        },
        {
          points: 4,
          content: "mind reading",
        },
        {
          points: 1,
          content: "telekinesis",
        },
        {
          points: 2,
          content: "flight",
        },
      ],
    },
    {
      questionText:
        "If you were to write a book about your life, what genre would it be?",
      answers: [
        {
          points: 4,
          content: "romance",
        },
        {
          points: 2,
          content: "thriller",
        },
        {
          points: 3,
          content: "comedy",
        },
        {
          points: 1,
          content: "adventure",
        },
      ],
    },
  ];
};
