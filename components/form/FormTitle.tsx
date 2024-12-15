import React from "react";

interface FormTitlePropsTypes {
  title: string;
}

export const FormTitle = ({ title }: FormTitlePropsTypes) => {
  return <div className="text-3xl">{title}</div>;
};
