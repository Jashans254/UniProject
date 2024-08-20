import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { MdEdit } from 'react-icons/md';

const ExperienceCard = ({ title, items, isExpanded, handleToggle }) => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    position: '',
    company: '',
    dates: '',
    description: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddClick = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add the formData to the experience section (the logic to handle this should be implemented)
    setShowModal(false);
  };

  return (
    <div className="bg-white flex flex-col gap-3 p-10 rounded-lg shadow-md max-w-full w-[90%] my-3 mx-10">
      <div className="flex items-center justify-between gap-20 w-full">
        <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
        <div className="flex gap-3">
          <FaPlus onClick={handleAddClick} className="text-blue-600 text-4xl p-2 rounded-lg font-semibold bg-slate-100 cursor-pointer" />
        </div>
      </div>

      {items.map((item, index) => (
        <div key={index}>
          <div className="flex items-center">
            {item.image && <img src={item.image} alt="" className="w-[50px] h-[50px] rounded mr-4" />}
            <div className="flex flex-col">
              {item.position && <h1 className="font-semibold">{item.position}</h1>}
              {item.company && <p className="text-gray-500">{item.company}</p>}
              {item.dates && <p className="text-gray-400">{item.dates}</p>}
              {item.description && <p className="text-gray-600">{item.description}</p>}
            </div>
          </div>
          {index < items.length - 1 && <hr />}
        </div>
      ))}

      <button onClick={handleToggle} className="text-blue-700 mt-2">
        {isExpanded ? 'Show Less' : 'Show More'}
      </button>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-[90%] max-w-md">
            <h2 className="text-xl font-bold mb-4">Add New Experience</h2>
            <form onSubmit={handleSubmit}>
              <label className="block mb-2 text-sm font-medium text-gray-700">Position</label>
              <input
                name="position"
                type="text"
                onChange={handleInputChange}
                value={formData.position}
                className="w-full p-2 mb-4 border rounded-lg"
              />

              <label className="block mb-2 text-sm font-medium text-gray-700">Company</label>
              <input
                name="company"
                type="text"
                onChange={handleInputChange}
                value={formData.company}
                className="w-full p-2 mb-4 border rounded-lg"
              />

              <label className="block mb-2 text-sm font-medium text-gray-700">Dates</label>
              <input
                name="dates"
                type="text"
                onChange={handleInputChange}
                value={formData.dates}
                className="w-full p-2 mb-4 border rounded-lg"
              />

              <label className="block mb-2 text-sm font-medium text-gray-700">Description</label>
              <textarea
                name="description"
                onChange={handleInputChange}
                value={formData.description}
                className="w-full p-2 mb-4 border rounded-lg"
                rows="4"
              />

              <div className="flex justify-end mt-4">
                <button type="button" onClick={handleModalClose} className="px-4 py-2 bg-gray-200 rounded-lg mr-2">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg">Save</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExperienceCard;
