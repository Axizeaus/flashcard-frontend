// MainPage.js
import React from "react";
import { AppProvider, useAppContext } from "./AppContext";
import FlashcardList from "./FlashcardList";
import GroupForm from "./GroupForm"; // Add GroupForm import

const FlashcardGroup = () => {
  const {
    flashcardGroups,
    selectedGroupId,
    showGroupForm,
    groupFormData,
    handleGroupClick,
    handleCreateClick,
    handleFormClose,
    handleFormSubmit,
    handleDeleteGroup,
  } = useAppContext();

  return (
    <div className="container mx-auto p-4">
      <nav className="flex justify-between my-4">
        <h1 className="text-3xl font-bold my-4">Flashcards</h1>
        <button
          className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600"
          onClick={handleCreateClick}
        >
          Create Flashcard
        </button>
      </nav>

      {/* Display flashcard groups */}
      {flashcardGroups.map((group) => (
        <div key={group.id} className="mb-4">
          <h2
            className="text-2xl font-bold mb-2 cursor-pointer"
            onClick={() => handleGroupClick(group.id)}
          >
            {group.name}
          </h2>
          <button
            className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 mr-2"
            onClick={() => handleCreateClick(group.id)}
          >
            Edit
          </button>
          <button
            className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
            onClick={() => handleDeleteGroup(group.id)}
          >
            Delete
          </button>
        </div>
      ))}

      {/* Display selected group's flashcards or flashcard list */}
      {selectedGroupId !== null ? <FlashcardList /> : null}

      {/* Display group form when needed */}
      {showGroupForm && (
        <GroupForm
          formData={groupFormData}
          onClose={handleFormClose}
          onSubmit={handleFormSubmit}
        />
      )}
    </div>
  );
};

const MainPage = () => {
  return (
    <AppProvider>
      <FlashcardGroup />
    </AppProvider>
  );
};

export default MainPage;
