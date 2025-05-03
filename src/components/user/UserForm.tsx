"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Country, User, UserFormData } from "@/types";
import { userSchema } from "@/lib/validations/userSchema";
import { useUsers } from "@/hooks/useUsers";
import { useCountries } from "@/hooks/useCountries";
import { useEffect } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FormField } from "@/components/form/FormField";
import { Input } from "@/components/ui/input";
import { SelectField } from "@/components/form/SelectField";
import { UserFormHeader } from "@/components/form/UserFormHeader";

interface UserFormProps {
  trigger?: React.ReactNode;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onUserSaved: () => void;
  user: User | null;
}

const defaultValues = {
  name: "",
  user_name: "",
  age: undefined,
  country: undefined,
  gender: "",
  job_title: "",
};

export function UserForm({
  trigger,
  open,
  onOpenChange,
  onUserSaved,
  user,
}: UserFormProps) {
  const { createUser, updateUser, isPending } = useUsers();
  const { countries, isLoading: isLoadingCountries } = useCountries();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty },
  } = useForm<UserFormData>({
    resolver: zodResolver(userSchema),
    defaultValues,
  });

  useEffect(() => {
    if (open && user) {
      reset({
        name: user.name,
        user_name: user.user_name,
        age: user.age,
        country: user.country.id,
        gender: user.gender,
        job_title: user.job_title,
      });
    } else if (!open) {
      reset(defaultValues);
    } else if (open && !user) {
      reset(defaultValues);
    }
  }, [user, reset, open]);

  const onSubmit = (data: UserFormData) => {
    try {
      if (user) {
        updateUser({ id: user.id!, userData: data });
      } else {
        createUser(data);
      }
      onUserSaved();
      onOpenChange(false);
    } catch (error) {
      console.error("Failed to save user:", error);
    }
  };

  const handleOpenChange = (newOpen: boolean) => {
    if (!newOpen) {
      reset(defaultValues);
    }
    onOpenChange(newOpen);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogContent className="max-h-[90vh]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <UserFormHeader isEdit={!!user} />

          <div className="grid gap-4 py-4">
            <FormField id="name" label="Name" error={errors.name?.message}>
              <Input
                id="name"
                className="w-full pr-20"
                {...register("name")}
                placeholder="John Doe"
              />
            </FormField>
            <FormField
              id="user_name"
              label="User name"
              error={errors.user_name?.message}
            >
              <Input
                id="user_name"
                className="w-full pr-20"
                {...register("user_name")}
                placeholder="john_doe"
              />
            </FormField>

            <SelectField
              id="gender"
              label="Gender"
              name="gender"
              options={[
                { value: "Male", label: "Male" },
                { value: "Female", label: "Female" },
              ]}
              placeholder="Select Gender"
              register={register}
              errors={errors}
            />

            <FormField id="age" label="Age" error={errors.age?.message}>
              <Input
                id="age"
                type="number"
                className="w-full"
                placeholder="Enter age"
                {...register("age", {
                  valueAsNumber: true,
                  setValueAs: (v) => (v === "" ? undefined : parseInt(v, 10)),
                })}
                min={18}
              />
            </FormField>

            <SelectField
              id="country"
              label="Country"
              name="country"
              options={countries.map((c: Country) => ({
                value: c.id,
                label: c.name,
              }))}
              placeholder="Select Country"
              disabled={isLoadingCountries}
              register={register}
              errors={errors}
              valueAsNumber={true}
            />

            <FormField
              id="job_title"
              label="Job Title"
              error={errors.job_title?.message}
            >
              <Input
                id="job_title"
                className="w-full pr-20"
                {...register("job_title")}
                placeholder="Job title"
              />
            </FormField>
          </div>

          <DialogFooter className="mt-4">
            <Button
              variant="outlineDarkBlue"
              type="button"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button
              variant="primaryDarkBlue"
              type="submit"
              disabled={(!isDirty && !!user) || isPending}
            >
              {isPending ? (
                <>{user ? "Updating..." : "Creating..."}</>
              ) : user ? (
                "Update User"
              ) : (
                "Save Changes"
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
