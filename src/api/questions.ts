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
          content: "Coffee",
        },
        {
          points: 4,
          content: "Phone",
        },
        {
          points: 2,
          content: "Glasses",
        },
        {
          points: 3,
          content: "TV Remote",
        },
      ],
    },
    {
      questionText: "If you could be any animal, what would you pick?",
      answers: [
        {
          points: 1,
          content: "Eagle",
        },
        {
          points: 3,
          content: "Dog",
        },
        {
          points: 4,
          content: "Deer",
        },
        {
          points: 2,
          content: "Monkey",
        },
      ],
    },
    {
      questionText: "Pick a superpower",
      answers: [
        {
          points: 3,
          content: "Invisibility",
        },
        {
          points: 4,
          content: "Mind Reading",
        },
        {
          points: 1,
          content: "Telekinesis",
        },
        {
          points: 2,
          content: "Flight",
        },
      ],
    },
    {
      questionText:
        "If you were to write a book about your life, what genre would it be?",
      answers: [
        {
          points: 4,
          content: "Romance",
        },
        {
          points: 2,
          content: "Thriller",
        },
        {
          points: 3,
          content: "Comedy",
        },
        {
          points: 1,
          content: "Adventure",
        },
      ],
    },
  ];
};
