import React from "react";

export const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm transition-all duration-200"
          onClick={onClose}
        />
        <div className="relative bg-white rounded-lg shadow-xl max-w-4xl w-full">
          {children}
        </div>
      </div>
    </div>
  );
};
