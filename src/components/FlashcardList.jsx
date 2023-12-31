import { useState } from "react";
import FlashcardForm from "./FlashcardForm";

const FlashcardList = () => {
  const dummyData = [
    {
      id: 1,
      question: "What is React?",
      answer: "A JavaScript library for building user interfaces.",
    },
    {
      id: 2,
      question: "What is Django?",
      answer: "A high-level Python web framework.",
    },
    {
      id: 3,
      question: "What is Tailwind CSS?",
      answer: "A utility-first CSS framework.",
    },
    {
      id: 4,
      question: "What is REST?",
      answer:
        "Representational State Transfer, an architectural style for designing networked applications.",
    },
    {
      id: 5,
      question: "What is API?",
      answer:
        "Application Programming Interface, a set of rules for building and interacting with software applications.",
    },
    {
      id: 6,
      question: "What is SPA?",
      answer:
        "Single Page Application, a web application that interacts with the user by dynamically rewriting the current page, rather than loading entire new pages from the server.",
    },
    {
      id: 7,
      question: "What is Git?",
      answer:
        "A distributed version control system for tracking changes in source code during software development.",
    },
    {
      id: 8,
      question: "What is GraphQL?",
      answer:
        "A query language and runtime for APIs that allows clients to request only the data they need.",
    },
    {
      id: 9,
      question: "What is MVC?",
      answer:
        "Model-View-Controller, a design pattern for developing software that separates an application into three interconnected components: Model, View, and Controller.",
    },
    {
      id: 10,
      question: "What is Responsive Web Design?",
      answer:
        "An approach to web design that makes web pages render well on a variety of devices and window or screen sizes.",
    },
    {
      id: 11,
      question: "What is JavaScript?",
      answer:
        "A programming language that enables interactive web pages and is an essential part of web development.",
    },
    {
      id: 12,
      question: "What is a Database?",
      answer:
        "A structured set of data stored electronically, typically in a computer system, organized so that it can be easily accessed, managed, and updated.",
    },
  ];

  const [flashcards, setFlashcards] = useState(dummyData);
  const [showForm, setShowForm] = useState(false);
  const [editData, setEditData] = useState(null);

  const handleDelete = (id) => {
    const updatedFlashcards = flashcards.filter(
      (flashcard) => flashcard.id !== id
    );
    setFlashcards(updatedFlashcards);
  };

  const handleCreateClick = () => {
    setShowForm(true);
    setEditData(null); // Reset edit data when creating a new flashcard
  };

  const handleFormClose = () => {
    setShowForm(false);
    setEditData(null); // Reset edit data when closing the form
  };

  const handleFormSubmit = (formData) => {
    setFlashcards((prev) => [
      ...prev,
      {
        id: Date.now(),
        ...formData,
      },
    ]);
    setShowForm(false);
    setEditData(null); // Reset edit data after submission
  };

  const handleEditClick = (flashcard) => {
    setEditData(flashcard);
    setShowForm(true);
  };

  const handleEdit = (editedData) => {
    setFlashcards((prev) =>
      prev.map((flashcard) =>
        flashcard.id === editedData.id
          ? {
              ...flashcard,
              ...editedData,
            }
          : flashcard
      )
    );
    setShowForm(false);
    setEditData(null); // Reset edit data after editing
  };

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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {flashcards.map((flashcard) => (
          <div
            key={flashcard.id}
            className="relative bg-white p-4 rounded shadow-md"
          >
            <button
              className="absolute top-0 right-0 p-2 text-red-500 hover:bg-red-100 rounded"
              onClick={() => handleDelete(flashcard.id)}
            >
              x
            </button>
            <button
              className="absolute bottom-0 right-0 p-2 rounded hover:opacity-80 hover:bg-blue-300"
              onClick={() => handleEditClick(flashcard)}
            >
              edit
            </button>
            <h2 className="text-xl font-semibold mb-2">{flashcard.question}</h2>
            <p>{flashcard.answer}</p>
          </div>
        ))}
      </div>
      {showForm && (
        <FlashcardForm
          onClose={handleFormClose}
          onSubmit={editData ? handleEdit : handleFormSubmit}
          initialData={editData}
        />
      )}
    </div>
  );
};

export default FlashcardList;
