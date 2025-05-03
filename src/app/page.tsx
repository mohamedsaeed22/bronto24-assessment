"use client";

import UserList from "@/components/user/UserList";
import MainLayout from "@/components/layout/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <UserList />
    </MainLayout>
  );
}
