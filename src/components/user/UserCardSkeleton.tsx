import { Skeleton } from "@/components/ui/skeleton";

const UserCardSkeleton = () => {
  return (
    <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-lg">
      <Skeleton className="absolute inset-0 bg-gray-200" />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-black/30" />
      <div className="absolute top-3 right-3 z-20">
        <Skeleton className="w-6 h-6 rounded-full bg-gray-300 dark:bg-gray-700" />
      </div>
      <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-black/70 to-transparent text-white z-10 space-y-2">
        <Skeleton className="h-5 w-20 rounded-full bg-gray-300 dark:bg-gray-600" />
        <Skeleton className="h-5 w-3/4 bg-gray-300 dark:bg-gray-600" />
        <div className="flex gap-3 mt-2">
          <div className="flex items-center space-x-1">
            <Skeleton className="w-4 h-4 rounded-full bg-gray-300 dark:bg-gray-600" />
            <Skeleton className="h-3 w-16 bg-gray-300 dark:bg-gray-600" />
          </div>
          <div className="flex items-center space-x-1">
            <Skeleton className="w-4 h-4 bg-gray-300 dark:bg-gray-600" />
            <Skeleton className="h-3 w-12 bg-gray-300 dark:bg-gray-600" />
          </div>
          <div className="flex items-center space-x-1">
            <Skeleton className="w-4 h-4 bg-gray-300 dark:bg-gray-600" />
            <Skeleton className="h-3 w-8 bg-gray-300 dark:bg-gray-600" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCardSkeleton;
