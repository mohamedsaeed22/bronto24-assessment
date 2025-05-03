"use client";

import { Label } from "@/components/ui/label";
import { ReactNode } from "react";

interface FormFieldProps {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
}

export const FormField = ({ id, label, error, children }: FormFieldProps) => (
  <div className="grid w-full items-center gap-1.5 relative">
    <Label htmlFor={id}>{label}</Label>
    <div className="relative">
      {children}
      {error && (
        <p className="absolute right-2 top-[54px] transform -translate-y-1/2 text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  </div>
);
