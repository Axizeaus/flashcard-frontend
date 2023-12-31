import { useState } from "react";

const FlashcardForm = ({ onClose, onSubmit, initialData }) => {
  const [formData, setFormData] = useState(
    initialData || { question: "", answer: "" }
  );

  console.log(formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">
          {initialData ? "Edit Flashcard" : "Create Flashcard"}
        </h2>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2">
            Question:
            <input
              type="text"
              name="question"
              value={formData.question}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </label>
          <label className="block mb-4">
            Answer:
            <textarea
              name="answer"
              value={formData.answer}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </label>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="mr-2 px-4 py-2 text-gray-700 bg-gray-300 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              {initialData ? "Save Changes" : "Create"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FlashcardForm;
