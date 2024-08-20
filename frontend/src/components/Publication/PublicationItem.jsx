import React from 'react';

const PublicationItem = ({ title, authors, journal, citedBy, year }) => {
  return (
    <div className="publication-item flex justify-between items-center py-4 border-b border-gray-200">
      <div className="publication-info">
       <a href=""> <h2 className="text-blue-600 text-lg font-semibold">{title}</h2></a>
        <p className="text-gray-600">{authors}</p>
        <p className="text-gray-500">{journal}</p>
      </div>
      <div className="publication-meta flex gap-8">
        <div className="cited-by text-gray-500">
          <p className="font-semibold">{citedBy}</p>
          <p>CITED BY</p>
        </div>
        <div className="year text-gray-500">
          <p className="font-semibold">{year}</p>
          <p>YEAR</p>
        </div>
      </div>
    </div>
  );
};

export default PublicationItem;
