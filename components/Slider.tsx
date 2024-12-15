import Image from "next/image";
import { image } from "@prisma/client";
import { cn } from "@/lib/utils";

interface SliderProps {
  images: image[] | undefined;
  setMainImageIndex: (index: number) => void;
  mainImageIndex: number;
}

export const Slider = ({
  images,
  setMainImageIndex,
  mainImageIndex,
}: SliderProps) => {
  return (
    <div className="h-[765px] flex flex-col gap-y-4 overflow-hidden">
      {images &&
        images.map((image, index) => (
          <div key={image.id} onClick={() => setMainImageIndex(index)}>
            <Image
              width={130}
              height={160}
              src={`/uploads/${image.imageUrl}`}
              alt={"cloth"}
              className={cn(
                index === mainImageIndex ? "border-2 border-customBlue" : "",
                "rounded-2xl cursor-pointer"
              )}
            />
          </div>
        ))}
    </div>
  );
};
