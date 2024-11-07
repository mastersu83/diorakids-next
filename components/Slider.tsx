import Image from "next/image";

interface ISlider {
  props: any;
}

export const Slider = ({ props }: ISlider) => {
  return (
    <div className="h-[765px] flex flex-col gap-y-4 overflow-hidden">
      <div>
        <Image
          width={130}
          height={160}
          src={`https://apidiorakids.ru/uploads/IMG_6594.JPG.jpg`}
          alt={"cloth"}
          className="rounded-2xl"
        />
      </div>{" "}
      <div>
        <Image
          width={130}
          height={160}
          src={`https://apidiorakids.ru/uploads/IMG_6594.JPG.jpg`}
          alt={"cloth"}
          className="rounded-2xl"
        />
      </div>{" "}
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
  );
};
