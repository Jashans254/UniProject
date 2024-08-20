import React, { useState } from 'react';
import PublicationItem from './PublicationItem';

const PublicationForm = ({ onAdd, onClose }) => {
  const [title, setTitle] = useState('');
  const [authors, setAuthors] = useState('');
  const [journal, setJournal] = useState('');
  const [citedBy, setCitedBy] = useState('');
  const [year, setYear] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ title, authors, journal, citedBy, year });
    setTitle('');
    setAuthors('');
    setJournal('');
    setCitedBy('');
    setYear('');
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
        <h2 className="text-xl font-bold mb-4">Add New Publication</h2>
        <form onSubmit={handleSubmit} className="flex flex-col  ">
        
        
        <label className="block mb-2 text-sm font-medium text-gray-700">Title</label>
          <input
          className="w-full p-2 mb-4 border rounded-lg"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <label className="block mb-2 text-sm font-medium text-gray-700">Authors</label>
          <input
            className="w-full p-2 mb-4 border rounded-lg"
            type="text"
            placeholder="Authors"
            value={authors}
            onChange={(e) => setAuthors(e.target.value)}
            required
          />
          <label className="block mb-2 text-sm font-medium text-gray-700">Journal</label>
          <input
            className="w-full p-2 mb-4 border rounded-lg"
            type="text"
            placeholder="Journal"
            value={journal}
            onChange={(e) => setJournal(e.target.value)}
            required
          />
          <label className="block mb-2 text-sm font-medium text-gray-700">Cited By</label>
          <input
            className="w-full p-2 mb-4 border rounded-lg"
            type="text"
            placeholder="Cited By"
            value={citedBy}
            onChange={(e) => setCitedBy(e.target.value)}
            required
          />
          <label className="block mb-2 text-sm font-medium text-gray-700">Year</label>  
          <input
            className="w-full p-2 mb-4 border rounded-lg"
            type="number"
            placeholder="Year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            required
          />
          <div className="flex justify-end gap-4">
            <button type="button" onClick={onClose} className="bg-gray-500 text-white py-2 px-4 rounded-lg">Cancel</button>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg">Add</button>
          </div>
        </form>
      </div>
    </div>
  );
};

const PublicationList = ({ publications, setPublications }) => {
  const [showForm, setShowForm] = useState(false);

  const handleAddPublication = (publication) => {
    setPublications((prevPublications) => [...prevPublications, publication]);
  };

  return (
    <div className="flex flex-col gap-5 items-center justify-center w-[90%] p-10 max-w-full mx-5 rounded-xl bg-slate-50">
      <button
        onClick={() => setShowForm(true)}
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold text-2xl py-2 px-4 rounded-xl'
      >
        Add new
      </button>
      <div className="publication-list bg-white shadow-2xl w-[100%] rounded-lg p-6">
        {publications.map((publication, index) => (
          <PublicationItem
            key={index}
            title={publication.title}
            authors={publication.authors}
            journal={publication.journal}
            citedBy={publication.citedBy}
            year={publication.year}
          />
        ))}
      </div>
      {showForm && (
        <PublicationForm
          onAdd={handleAddPublication}
          onClose={() => setShowForm(false)}
        />
      )}
    </div>
  );
};

export default PublicationList;
