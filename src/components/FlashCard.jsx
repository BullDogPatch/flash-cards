function FlashCard({ question, activeID, handleClick }) {
  return (
    <div
      onClick={() => handleClick(question.id)}
      key={question.id}
      className={question.id === activeID ? 'selected' : ''}
    >
      <p>{question.id === activeID ? question.answer : question.question}</p>
    </div>
  );
}

export default FlashCard;
