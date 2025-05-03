"use client";
import { CloseCircle, Folder, Home2 } from "iconsax-react";

export default function Sidebar({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}) {
  return (
    <>
      <div
        className={`
          fixed inset-y-0 left-0 z-40 transform 
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          transition-transform duration-300 ease-in-out
          md:relative md:translate-x-0
          w-64 md:w-14 bg-[#001F56] shadow-md flex flex-col items-center py-6 space-y-8
        `}
      >
        <button
          className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 md:hidden"
          onClick={toggle}
        >
          <CloseCircle size="20" />
        </button>
        <div className="flex flex-col items-center space-y-8">
          <img src="icons/main-icon.svg" className="w-7 h-7 object-contain" alt="Main Icon" />
          <Home2 color="white" size={24} variant="Bold" />
          <Folder color="gray" size={24} variant="Bold" />
        </div>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-opacity-50 z-30 md:hidden"
          onClick={toggle}
        />
      )}
    </>
  );
}
