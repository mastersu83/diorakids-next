import { Collection } from "@prisma/client";

interface IButton {
  setItemId: (id: number) => void;
  itemId: number;
  item: Collection;
}

export const MenuButton = ({ itemId, setItemId, item }: IButton) => {
  return (
    <button
      onClick={() => setItemId(item.id)}
      className={`${
        itemId === item.id
          ? "bg-customBlue text-white"
          : "hover:bg-customBlueLight"
      } py-2.5 px-6 flex items-center justify-center gap-x-2 border border-customBlue h-12 w-full rounded-2xl cursor-pointer transition-all duration-300`}
    >
      {item.name}
    </button>
  );
};
