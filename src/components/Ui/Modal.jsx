
  import {  X } from 'lucide-react';
const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  
  return (
    <>

    <style jsx >{`
         .stat-popup {
          transition: all 0.3s ease;
          background: linear-gradient(
            135deg,
            rgba(59, 130, 246, 0.1),
            rgba(147, 51, 234, 0.1)
          );
          border: 1px solid rgba(59, 130, 246, 0.2);
        }
    `}

    </style>
    <div className="fixed inset-0  backdrop-blur-md bg-white/10 bg-opacity-50 flex items-center justify-center z-50 animate-fadeIn">
      <div className="stat-popup rounded-2xl p-6 w-full max-w-md mx-4 animate-slideUp shadow-2xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold  bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-2xl font-bold cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        {children}
      </div>
    </div>
    </>
  );
};

  export default Modal;