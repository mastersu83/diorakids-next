import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@radix-ui/themes";

interface FormButtonPropsTypes {
  disable: boolean;
}

const ButtonBox = ({ disable }: FormButtonPropsTypes) => {
  return (
    <div className="my-4 flex items-center justify-end gap-x-2">
      <button
        onClick={() => console.log("hello")}
        className={`w-max py-2.5 px-6 flex items-center justify-center gap-x-2 border border-customBlue h-12 rounded-2xl cursor-pointer transition-all duration-300`}
      >
        Отмена
      </button>
      {/*<Button*/}
      {/*  onClick={closePopup}*/}
      {/*  className="p-2 rounded-[5px] cursor-pointer border border-amber-300 hover:bg-amber-100 hover:transition-all shadow-[3px_3px_5px_0_#000000] active:shadow-none"*/}
      {/*>*/}
      {/*  Отмена*/}
      {/*</Button>*/}
      <button
        type="submit"
        className={`bg-customBlue text-white py-2.5 px-6 flex items-center justify-center gap-x-2 border border-customBlue h-12 w-max rounded-2xl cursor-pointer transition-all duration-300`}
      >
        Создать
      </button>
    </div>
  );
};

export default ButtonBox;
