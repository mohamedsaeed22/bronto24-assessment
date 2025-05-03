"use client";

import { useState } from "react";
import { useUsers } from "@/hooks/useUsers";
import { User } from "@/types";
import UserCard from "./UserCard";
import { UserForm } from "./UserForm";
import DeleteConfirmation from "../DeleteConfirmation";
import { Button } from "@/components/ui/button";
import { Add } from "iconsax-react";
import UserCardSkeleton from "./UserCardSkeleton";

export default function UserList() {
  const { users, isLoading, isError, deleteUser } = useUsers();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [userToDelete, setUserToDelete] = useState<number | null>(null);

  const handleEdit = (user: User) => {
    setCurrentUser(user);
    setIsFormOpen(true);
  };

  const handleDeleteClick = (id: number) => {
    setUserToDelete(id);
    setIsDeleteModalOpen(true);
  };

  const handleDeleteConfirm = () => {
    if (userToDelete) {
      try {
        deleteUser(userToDelete);
        setIsDeleteModalOpen(false);
        setUserToDelete(null);
      } catch (error) {
        console.error("Failed to delete user:", error);
      }
    }
  };

  const handleUserSaved = () => {
    setIsFormOpen(false);
    setCurrentUser(null);
  };

  if (isError) {
    return (
      <div className="container mx-auto p-4">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          Failed to load users. Please try again later.
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto">
      <div className="flex justify-end items-end w-full mb-4">
        <Button
          onClick={() => {
            setIsFormOpen(true);
            setCurrentUser(null);
          }}
          variant="primaryDarkBlue"
        >
          <Add color="#FDFDFF" /> New User
        </Button>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 auto-rows-[minmax(300px,auto)]">
          {[...Array(8)].map((_, i) => (
            <UserCardSkeleton key={i} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 auto-rows-[minmax(300px,auto)]">
          {users.length === 0 ? (
            <div className="col-span-full text-center py-12">
              No users found. Create your first user!
            </div>
          ) : (
            users.map((user: User) => (
              <UserCard
                key={user.id}
                user={user}
                onEdit={() => handleEdit(user)}
                onDelete={() => handleDeleteClick(user.id!)}
              />
            ))
          )}
        </div>
      )}

      <UserForm
        open={isFormOpen}
        onOpenChange={setIsFormOpen}
        onUserSaved={handleUserSaved}
        user={currentUser}
      />

      <DeleteConfirmation
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDeleteConfirm}
      />
    </div>
  );
}
