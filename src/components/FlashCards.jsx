import { useState } from 'react';

import FlashCard from './FlashCard';

const questions = [
  {
    id: 3457,
    question: 'What language is React based on?',
    answer: 'JavaScript',
  },
  {
    id: 7336,
    question: 'What are the building blocks of React apps?',
    answer: 'Components',
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: 'JSX',
  },
  {
    id: 1297,
    question: 'How to pass data from parent to child components?',
    answer: 'Props',
  },
  {
    id: 9103,
    question: 'How to give components memory?',
    answer: 'useState hook',
  },
  {
    id: 2002,
    question:
      'What do we call an input element that is completely synchronised with state?',
    answer: 'Controlled element',
  },
];

function FlashCards() {
  const [activeID, setActiveID] = useState(null);

  const handleClick = (id) => {
    // if question.id is not same as activeID set it to id otherwise null
    setActiveID(id !== activeID ? id : null);
  };

  return (
    <div className='flashcards'>
      {questions.map((question) => (
        <FlashCard
          question={question}
          handleClick={handleClick}
          activeID={activeID}
          key={question.id}
        />
      ))}
    </div>
  );
}

export default FlashCards;
