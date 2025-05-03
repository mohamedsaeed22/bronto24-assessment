"use client";

import { FormField } from "@/components/form/FormField";
import { RegisterOptions, UseFormRegister } from "react-hook-form";

interface SelectFieldProps {
  id: string;
  label: string;
  name: string;
  options: { value: string | number; label: string }[];
  placeholder?: string;
  rules?: RegisterOptions;
  disabled?: boolean;
  register: UseFormRegister<any>;
  errors?: any;
  valueAsNumber?: boolean;
  iconSrc?: string;
}

export const SelectField = ({
  id,
  label,
  name,
  options,
  placeholder,
  rules,
  disabled,
  register,
  errors,
  valueAsNumber = false,
  iconSrc = "/icons/arrow-down.svg",
}: SelectFieldProps) => {
  const registerOptions = {
    ...rules,
    ...(valueAsNumber && {
      setValueAs: (v: string) => (v === "" ? undefined : Number(v)),
    }),
  };

  return (
    <FormField id={id} label={label} error={errors?.[name]?.message as string}>
      <div className="relative">
        <select
          id={id}
          className="appearance-none h-11 w-full border rounded-sm px-3 pr-10 py-1 text-sm transition-colors outline-none focus:border-blue-500"
          {...register(name, registerOptions)}
          disabled={disabled}
          defaultValue=""
        >
          {placeholder && (
            <option value="" disabled hidden>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute right-2 top-[24px] -translate-y-1/2">
          <img src={iconSrc} alt="" className="w-full h-full object-contain" />
        </div>
      </div>
    </FormField>
  );
};
