import { UserCircle } from "lucide-react";

interface IProductItem {
  props: any;
}

export const ProductItem = ({ props }: IProductItem) => {
  return (
    <div className="">
      <div className="h-[440px] flex items-center justify-center border border-customBlue rounded-2xl mb-5">
        <UserCircle />
      </div>
      <div className="text-2xl mb-5">
        Комбинизон слип для новорожденного нательный
      </div>
      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold">350 $</div>
        <div className="bg-customBlue text-white py-2.5 px-6 rounded-2xl">
          Добавить
        </div>
      </div>
    </div>
  );
};
