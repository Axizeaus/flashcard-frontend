import FlashcardForm from "./FlashcardForm";

const FlashcardGroup = ({
  group,
  onDelete,
  onEditClick,
  onFormSubmit,
  onFormClose,
  onEdit,
}) => {
  return (
    <div key={group.id}>
      <h2 className="text-2xl font-bold mb-2">{group.name}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {group.flashcards.map((flashcard) => {
          <div
            key={flashcard.id}
            className="relative bg-white p-4 rounded shadow-md"
          >
            <button
              className="absolute top-0 right-0 p-2 text-red-500 hover:bg-red-100 rounded"
              onClick={() => onDelete(group.id, flashcard.id)}
            >
              x
            </button>
            <button
              className="absolute bottom-0 right-0 p-2 rounded hover:opacity-80 hover:bg-blue-300"
              onClick={() => onEditClick(group.id, flashcard)}
            >
              edit
            </button>
            <h3 className="text-xl font-semibold mb-2">{flashcard.question}</h3>
            <p>{flashcard.answer}</p>
          </div>;
        })}
      </div>

      <FlashcardForm
        onClose={onFormClose}
        onSubmit={(formData) => onFormSubmit(formData, group.id)}
      />
    </div>
  );
};

export default FlashCardGroup;
