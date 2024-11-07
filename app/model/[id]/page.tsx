import { CustomBreadcrumbs } from "@/components/CustomBreadcrumbs";
import Image from "next/image";
import { ProductItem } from "@/components/ProductItem";
import { Slider } from "@/components/Slider";
import { SizesTable } from "@/components/SizesTable";
import { CategoryModels } from "@/components/CategoryModels";

interface IPage {
  props: any;
}

const Page = ({ props }: IPage) => {
  return (
    <div className="">
      <CustomBreadcrumbs props={""} />
      <div className="grid grid-cols-2 gap-x-6">
        <div className="grid grid-cols-[130px_1fr] justify-items-center">
          <Slider {...props} />
          <div>
            <Image
              width={510}
              height={700}
              src={`https://apidiorakids.ru/uploads/IMG_6594.JPG.jpg`}
              alt={"cloth"}
              className="rounded-2xl"
            />
          </div>
        </div>
        <div className="flex flex-col gap-y-5">
          <CategoryModels props={""} />
          <SizesTable props={""} />
        </div>
      </div>
      <div>
        <div className="text-3xl font-bold mt-16 mb-11">Рекомендации</div>
        <div className="flex justify-between gap-x-5 mb-6">
          <ProductItem props={""} />
          <ProductItem props={""} />
          <ProductItem props={""} />
          <ProductItem props={""} />
        </div>
      </div>
    </div>
  );
};

export default Page;
