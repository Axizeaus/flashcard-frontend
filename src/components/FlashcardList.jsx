import { useAppContext } from "./AppContext";
import FlashcardForm from "./FlashcardForm";

const FlashcardList = () => {
  const {
    flashcardGroups,
    selectedGroupId,
    handleDeleteGroup,
    showGroupForm,
    groupFormData,
    handleGroupClick,
    handleCreateClick,
    handleFormClose,
    handleFormSubmit,
    handleEditClick,
    handleEdit,
  } = useAppContext();

  const selectedGroup = flashcardGroups.find(
    (group) => group.id === selectedGroupId
  );

  if (!selectedGroup) {
    return null; // Render nothing if no group is selected
  }

  return (
    <div className="container mx-auto p-4">
      <nav className="flex justify-between my-4">
        <h1 className="text-3xl font-bold my-4">
          {selectedGroup.name} Flashcards
        </h1>
        <button
          className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600"
          onClick={handleCreateClick}
        >
          Create Flashcard
        </button>
      </nav>

      {/* Display flashcards in the selected group */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {selectedGroup.flashcards.map((flashcard) => (
          <div
            key={flashcard.id}
            className="relative bg-white p-4 rounded shadow-md"
          >
            <button
              className="absolute top-0 right-0 p-2 text-red-500 hover:bg-red-100 rounded"
              onClick={() => handleDeleteFlashcard(flashcard.id)}
            >
              x
            </button>
            <h2 className="text-xl font-semibold mb-2">{flashcard.question}</h2>
            <p>{flashcard.answer}</p>
            <button
              className="absolute bottom-0 right-0 p-2 rounded hover:opacity-80 hover:bg-green-300"
              onClick={() => handleEditClick(flashcard.id)}
            >
              edit
            </button>
          </div>
        ))}
      </div>

      {/* Display flashcard form when needed */}
      {showGroupForm && (
        <FlashcardForm
          onClose={handleFormClose}
          onSubmit={handleFormSubmit}
          initialData={groupFormData}
        />
      )}
    </div>
  );
};

export default FlashcardList;
