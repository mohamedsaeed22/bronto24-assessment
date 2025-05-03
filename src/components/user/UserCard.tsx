import { CalendarTick, Clock } from "iconsax-react";
import Image from "next/image";
import { UserActionsPopover } from "@/components/user/UserActionsPopover";
import { User } from "@/types";

interface UserCardProps {
  user: User;
  onEdit: () => void;
  onDelete: () => void;
}

export default function UserCard({ user, onEdit, onDelete }: UserCardProps) {
  return (
    <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="absolute inset-0">
        <Image
          src="/imgs/card-img.jpg"
          alt="User background"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
        />
      </div>
      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(243.94deg, rgba(255, 237, 188, 0.25) -127.03%, rgba(18, 18, 18, 0.25) 100%)",
        }}
      ></div>

      {/* Top Right Dots */}
      <div className="absolute top-3 right-3 z-20">
        <UserActionsPopover onEdit={onEdit} onDelete={onDelete} />
      </div>

      {/* Bottom Content */}
      <div className="absolute bottom-2 w-full p-4 bg-gradient-to-t from-black/70 to-transparent text-white z-10 font-thin">
        <span className="inline-block bg-[#FFFAFA] text-[10px] px-3 py-1 rounded-full mb-2 text-black">
          {user.job_title}
        </span>
        <div className="text-sm font-bold mb-2 max-w-70">{user.name}</div>
        <div className="flex flex-row gap-4 text-xs">
          <div className="flex items-center space-x-1">
            <div className="relative w-4 h-4 rounded-full overflow-hidden">
              <Image
                src="/imgs/user-img.jpg"
                alt="Author"
                fill
                sizes="16px"
                className="object-cover"
                priority
              />
            </div>
            <span>{user.user_name}</span>
          </div>

          <div className="flex items-center space-x-1">
            <CalendarTick color="white" size={16} variant="Bold" />
            <span>
              {new Date(user?.created_at || "")
                .toLocaleDateString("en-GB")
                .replace(/\//g, ".")}{" "}
            </span>
          </div>

          <div className="flex items-center space-x-1">
            <Clock color="white" size={16} variant="Bold" />
            <span>{user.age}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
