import React from 'react'

const ContactModel = ({closeModal}) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
        <h2 className="text-xl font-semibold mb-4">You can contact here</h2>
        <p className="mb-4">Email or website link</p>
        
        {/* Add more input fields or form elements here */}
        
        <button 
            onClick={closeModal} 
            className="bg-red-500 text-white rounded-md px-4 py-2 mt-4 hover:bg-red-600"
        >
            Close
        </button>
    </div>
</div>
  )
}

export default ContactModel