import { UserCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface IProductItem {
  props: any;
}

export const ProductItem = ({ props }: IProductItem) => {
  return (
    <Link href="/model/1" className="flex flex-col gap-y-5">
      <div className="flex items-center justify-center border border-customBlue rounded-2xl">
        <Image
          width={285}
          height={350}
          src={`https://apidiorakids.ru/uploads/IMG_6594.JPG.jpg`}
          alt={"cloth"}
          className="rounded-2xl"
        />
      </div>
      <div className="text-2xl">
        Комбинизон слип для новорожденного нательный
      </div>
      {/*<div className="text-2xl font-bold">350 $</div>*/}
      {/*<div className="flex justify-center bg-customBlue text-white py-2.5 px-6 rounded-2xl">*/}
      {/*  Добавить*/}
      {/*</div>*/}
    </Link>
  );
};
