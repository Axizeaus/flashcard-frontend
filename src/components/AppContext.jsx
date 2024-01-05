// AppContext.js
import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

export const AppProvider = ({ children }) => {
  const [flashcardGroups, setFlashcardGroups] = useState([
    { id: 1, name: "Programming", flashcards: [] },
    { id: 2, name: "Music Theory", flashcards: [] },
    // Add more groups as needed
  ]);

  const [selectedGroupId, setSelectedGroupId] = useState(null);
  const [showGroupForm, setShowGroupForm] = useState(false);
  const [groupFormData, setGroupFormData] = useState({ name: "" });

  const handleGroupClick = (groupId) => {
    setSelectedGroupId(groupId);
  };

  const handleCreateClick = () => {
    setShowGroupForm(true);
    setGroupFormData({ name: "" });
  };

  const handleFormClose = () => {
    setShowGroupForm(false);
    setSelectedGroupId(null); // Reset selected group when closing the form
    setGroupFormData({ name: "" });
  };

  const handleFormSubmit = (formData) => {
    if (selectedGroupId === null) {
      // Creating a new group
      setFlashcardGroups((prevGroups) => [
        ...prevGroups,
        {
          id: Date.now(),
          ...formData,
          flashcards: [],
        },
      ]);
    } else {
      // Editing an existing group
      setFlashcardGroups((prevGroups) =>
        prevGroups.map((group) =>
          group.id === selectedGroupId ? { ...group, ...formData } : group
        )
      );
    }

    handleFormClose();
  };

  const handleDeleteGroup = (groupId) => {
    setFlashcardGroups((prevGroups) =>
      prevGroups.filter((group) => group.id !== groupId)
    );
  };

  const contextValue = {
    flashcardGroups,
    selectedGroupId,
    showGroupForm,
    groupFormData,
    handleGroupClick,
    handleCreateClick,
    handleFormClose,
    handleFormSubmit,
    handleDeleteGroup,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
