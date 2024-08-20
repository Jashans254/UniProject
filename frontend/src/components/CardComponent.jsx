import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { MdEdit } from 'react-icons/md';

const CardComponent = ({ title, items, isExpanded, handleToggle, section }) => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({});

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
    // Add the formData to the respective section
    setShowModal(false);
  };

  const renderFormFields = () => {
    if (section === 'education') {
      return (
        <>
          <label className="block mb-2 text-sm font-medium text-gray-700">Degree Name</label>
          <input name="degree" type="text" onChange={handleInputChange} className="w-full p-2 mb-4 border rounded-lg" />

          <label className="block mb-2 text-sm font-medium text-gray-700">Institute</label>
          <input name="institute" type="text" onChange={handleInputChange} className="w-full p-2 mb-4 border rounded-lg" />

          <label className="block mb-2 text-sm font-medium text-gray-700">Year</label>
          <input name="year" type="text" onChange={handleInputChange} className="w-full p-2 mb-4 border rounded-lg" />
        </>
      );
    } else if (section === 'certification') {
      return (
        <>
          <label className="block mb-2 text-sm font-medium text-gray-700">Certificate Name</label>
          <input name="certificateName" type="text" onChange={handleInputChange} className="w-full p-2 mb-4 border rounded-lg" />

          <label className="block mb-2 text-sm font-medium text-gray-700">Issuing Organization</label>
          <input name="issuingOrg" type="text" onChange={handleInputChange} className="w-full p-2 mb-4 border rounded-lg" />

          <label className="block mb-2 text-sm font-medium text-gray-700">Year</label>
          <input name="year" type="text" onChange={handleInputChange} className="w-full p-2 mb-4 border rounded-lg" />
        </>
      );
    } else if (section === 'skills') {
      return (
        <>
          <label className="block mb-2 text-sm font-medium text-gray-700">Skill Name</label>
          <input name="skillName" type="text" onChange={handleInputChange} className="w-full p-2 mb-4 border rounded-lg" />
        </>
      );
    }
    // Add more sections if needed
  };

  return (
    <div className="bg-white flex flex-col gap-3 p-10 rounded-lg shadow-md max-w-full w-[90%] my-3 mx-10">
      <div className="flex items-center justify-between gap-20 w-full">
        <h1 className='text-2xl font-bold text-gray-800'>{title}</h1>
        <div className='flex gap-3'>
          <FaPlus onClick={handleAddClick} className="text-blue-600 text-4xl p-2 rounded-lg font-semibold bg-slate-100 cursor-pointer" />
        </div>
      </div>
      
      {items.map((item, index) => (
        <div key={index}>
          <div className='flex items-center justify-center'>
            {item.image && <img src={item.image} alt="" className='w-[50px] h-[50px] rounded mr-4' />}
            <div className="flex flex-col items-center justify-between">
              {item.name && <h1 className='text-lg font-semibold'>{item.name}</h1>}
              {item.details && <p className='text-base text-slate-600'>{item.details}</p>}
              {item.year && <p className='text-sm text-slate-600'>{item.year}</p>}
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
            <h2 className="text-xl font-bold mb-4">Add New {title}</h2>
            <form onSubmit={handleSubmit}>
              {renderFormFields()}
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

export default CardComponent;
