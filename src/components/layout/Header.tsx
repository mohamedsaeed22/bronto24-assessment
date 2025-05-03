"use client";
import {
  ArrowDown2,
  CalendarTick,
  HambergerMenu,
  Message,
  NotificationBing,
  SearchNormal1,
} from "iconsax-react";

export default function Header({
  toggleSidebar,
}: {
  toggleSidebar: () => void;
}) {
  return (
    <header className="h-16 bg-white shadow-xs px-6 flex items-center justify-between">
      <div className="flex items-center md:hidden">
        <button
          className="p-2 rounded-full hover:bg-gray-100 mr-3 "
          onClick={toggleSidebar}
        >
          <HambergerMenu size="20" color="gray" />
        </button>
      </div>

      <div className="hidden md:flex items-center justify-center gap-1 w-[104px] h-[36px] py-2 px-3 rounded-[6px] bg-[#EDEFF3]">
        <span className="text-sm text-[#001F56] font-[500]">Courses</span>
        <ArrowDown2 size={20} variant="Bold" color="#001F56" />
      </div>

      <div className="flex items-center space-x-6">
        <SearchNormal1 size={25} variant="Outline" color="gray" />
        <CalendarTick size={25} variant="Bold" color="gray" />
        <Message size={25} variant="Bold" color="gray" />
        <NotificationBing size={25} variant="Bold" color="gray" />
        <div className="w-8 h-8 rounded-full overflow-hidden">
          <img src="imgs/user-avatar.jpg" alt="Profile" />
        </div>
      </div>
    </header>
  );
}
