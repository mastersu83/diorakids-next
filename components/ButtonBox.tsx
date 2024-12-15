import React from "react";

interface FormButtonPropsTypes {
  disable: boolean;
  editMode: boolean;
}

const ButtonBox = ({ disable, editMode }: FormButtonPropsTypes) => {
  return (
    <div className="my-4 flex items-center justify-end gap-x-2">
      <button
        onClick={() => console.log("hello")}
        className={`w-max py-2.5 px-6 flex items-center justify-center gap-x-2 border border-customBlue h-12 rounded-2xl cursor-pointer transition-all duration-300`}
      >
        Отмена
      </button>
      <button
        type="submit"
        className={`bg-customBlue text-white py-2.5 px-6 flex items-center justify-center gap-x-2 border border-customBlue h-12 w-max rounded-2xl cursor-pointer transition-all duration-300`}
      >
        {editMode ? "Редактировать" : "Создать"}
      </button>
    </div>
  );
};

export default ButtonBox;
