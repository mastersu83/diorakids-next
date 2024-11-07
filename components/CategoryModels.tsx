import styles from "./CategoryModels.module.scss";
import Image from "next/image";

interface ICategoryModels {
  props: any;
}

export const CategoryModels = ({ props }: ICategoryModels) => {
  return (
    <div className="flex flex-col gap-y-5">
      <div className="text-4xl">
        Комбинизон слип для новорожденного нательный
      </div>
      <div className="flex gap-x-9">
        <div>
          <Image
            width={130}
            height={160}
            src={`https://apidiorakids.ru/uploads/IMG_6594.JPG.jpg`}
            alt={"cloth"}
            className="rounded-2xl"
          />
        </div>
        <div>
          <Image
            width={130}
            height={160}
            src={`https://apidiorakids.ru/uploads/IMG_6594.JPG.jpg`}
            alt={"cloth"}
            className="rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};
