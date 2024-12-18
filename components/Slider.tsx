import Image from "next/image";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { motion } from "motion/react";
import { Box } from "@radix-ui/themes";
import { CircleChevronDown, CircleChevronUp } from "lucide-react";
import { IImage } from "@/types/types";

interface SliderProps {
  images: IImage[] | undefined;
  setMainImageIndex: (index: number) => void;
  mainImageIndex: number;
}

export const Slider = ({
  images,
  setMainImageIndex,
  mainImageIndex,
}: SliderProps) => {
  const [slideMove, setSlideMove] = useState<number>(0);

  const goToUp = () => {
    if (images?.length && (images.length - 3) * 188 > slideMove) {
      setSlideMove(slideMove + 188);
    }
  };
  const goToDown = () => {
    if (images?.length && slideMove > 0) {
      setSlideMove(slideMove - 188);
    }
  };

  return (
    <Box className="relative">
      {slideMove > 0 && (
        <Box
          width="60"
          height="60"
          className="bg-blue-50 cursor-pointer rounded-full absolute top-3 right-11 z-10"
          onClick={goToDown}
        >
          <CircleChevronUp size={48} />
        </Box>
      )}
      <div className="h-[620px] flex flex-col gap-y-4 overflow-hidden">
        {images &&
          images.map((image, index) => (
            <motion.div
              animate={{ y: -slideMove, transition: { duration: 0.5 } }}
              translate="yes"
              key={image.id}
              onClick={() => setMainImageIndex(index)}
            >
              <Image
                width={130}
                height={160}
                src={`/uploads/${image.imageUrl}`}
                alt={"cloth"}
                className={cn(
                  index === mainImageIndex
                    ? "border-customBlue"
                    : "border-transparent",
                  "rounded-2xl border-2 cursor-pointer"
                )}
              />
            </motion.div>
          ))}
      </div>
      <Box
        width="60"
        height="60"
        className="bg-blue-50 cursor-pointer rounded-full absolute bottom-0 right-11 z-10"
        onClick={goToUp}
      >
        <CircleChevronDown size={48} />
      </Box>
    </Box>
  );
};
