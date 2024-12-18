import Image from "next/image";
import Link from "next/link";
import { ResCloth } from "@/types/types";

interface IProductItem {
  cloth: ResCloth;
}

export const ProductItem = ({ cloth }: IProductItem) => {
  return (
    <Link href={`/model/${cloth.id}`} className="flex flex-col gap-y-5">
      <div className="flex items-center justify-center border border-customBlue rounded-2xl">
        <Image
          width={350}
          height={450}
          src={`/uploads/${cloth.images[0].imageUrl}`}
          alt={"cloth"}
          className="rounded-2xl"
        />
      </div>
      <div className="text-xl">{cloth.name}</div>
      {/*<div className="text-2xl font-bold">350 $</div>*/}
      {/*<div className="flex justify-center bg-customBlue text-white py-2.5 px-6 rounded-2xl">*/}
      {/*  Добавить*/}
      {/*</div>*/}
    </Link>
  );
};
