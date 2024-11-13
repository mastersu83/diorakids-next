import { ICollection } from "@/types/types";

interface IButton {
  setItemId: (id: string) => void;
  itemId: string;
  item: ICollection;
}

export const Button = ({ itemId, setItemId, item }: IButton) => {
  return (
    <div
      onClick={() => setItemId(item._id)}
      className={`${
        itemId === item._id
          ? "bg-customBlue text-white"
          : "hover:bg-customBlueLight"
      } py-2.5 px-6 flex items-center justify-center gap-x-2 border border-customBlue h-12 w-full rounded-2xl cursor-pointer transition-all duration-300`}
    >
      {item.name}
    </div>
  );
};
