"use client";

import { Edit, Trash } from "iconsax-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";

interface UserActionsPopoverProps {
  onEdit: () => void;
  onDelete: () => void;
}

export const UserActionsPopover = ({
  onEdit,
  onDelete,
}: UserActionsPopoverProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          className="text-white cursor-pointer"
          onClick={(e) => e.stopPropagation()}
          aria-label="User Actions"
          
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M6 10a2 2 0 114 0 2 2 0 01-4 0zm5 0a2 2 0 114 0 2 2 0 01-4 0zm5 0a2 2 0 114 0 2 2 0 01-4 0z" />
          </svg>
        </button>
      </PopoverTrigger>
      <PopoverContent
        className="w-[192px] p-2 bg-white shadow-md rounded-[4px] border-0 z-50"
        align="end"
        sideOffset={8}
        onClick={(e) => e.stopPropagation()}
      >
        <ul className="text-sm">
          <li
            onClick={(e) => {
              e.stopPropagation();
              onEdit();
            }}
            className="flex items-center gap-3 p-2 cursor-pointer hover:bg-gray-100 rounded-sm"
          >
            <Edit color="#2C29B0" size={20} variant="Bold" />
            <span className="text-[#2C29B0]">Edit</span>
          </li>
          <div className="border-t my-1 border-gray-200"></div>
          <li
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
            }}
            className="flex items-center gap-3 p-1 cursor-pointer hover:bg-gray-100 rounded-sm"
          >
            <Trash color="#D8052B" size={20} variant="Bold" />
            <span className="text-[#D8052B] font-normal text-sm leading-5">
              Delete
            </span>
          </li>
        </ul>
      </PopoverContent>
    </Popover>
  );
};
