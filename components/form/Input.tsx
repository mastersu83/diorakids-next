import React from "react";
import { useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils";

interface IInput {
  name: string;
  placeholder?: string;
  type?: string;
  value?: string;
  required?: boolean;
  disabled?: boolean;
}

export const Input = ({
  placeholder,
  type,
  name,
  value,
  required,
  disabled,
}: IInput) => {
  const { register } = useFormContext();
  return (
    <input
      className={cn(
        type === "checkbox"
          ? ""
          : "w-full mb-1 text-sm outline-none p-2 border border-customBlue rounded"
      )}
      {...register(name, {
        required: required ? "Это поле не может быть пустым" : false,
        disabled,
      })}
      type={type}
      placeholder={placeholder}
      defaultValue={value}
    />
  );
};
