export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-sm w-full mx-4 relative">
        {children}
        <button 
          onClick={onClose}
          className="w-full mt-4 bg-violet-600 text-white py-2 rounded-lg hover:bg-violet-700 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
}

  
