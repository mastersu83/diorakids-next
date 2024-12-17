"use client";

import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import React from "react";

import { FormTitle } from "@/components/form/FormTitle";
import { Input } from "@/components/form/Input";
import { Flex } from "@radix-ui/themes";

export type AddModelFormFields = {
  name: string;
  password: string;
};

export const LoginForm = () => {
  const form = useForm<AddModelFormFields>({});

  const onSubmit: SubmitHandler<AddModelFormFields> = async (data) => {
    console.log(data);
  };

  return (
    <FormProvider {...form}>
      <Flex align="center" justify="center">
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-y-4 border w-80 border-customBlue p-4 rounded-2xl shadow-2xl"
        >
          <FormTitle title="Авторизация" />

          <Input placeholder="Введите логин" name="name" required />
          <Input
            placeholder="Введите пароль"
            name="password"
            type="password"
            required
          />
          <button
            type="submit"
            className={`bg-customBlue text-white py-2.5 rounded-2xl`}
          >
            Войти
          </button>
        </form>
      </Flex>
    </FormProvider>
  );
};
