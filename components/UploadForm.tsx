import React from "react";
import { cn } from "@/lib/utils";
import { uploadImages } from "@/service/imagesApi";
import { image } from "@prisma/client";
import UserList from "@/components/UserList";

interface FileUploadFormProps {
  images: image[];
  setImages: (value: React.SetStateAction<image[]>) => void;
}

const FileUploadForm = ({ images, setImages }: FileUploadFormProps) => {
  const handleFileSelected = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const _files = Array.from(e.target.files);
      const imagesCloth = await uploadImages(_files);
      setImages(imagesCloth);
    }
  };

  return (
    <div>
      <div className="flex items-center gap-x-9">
        <input
          onChange={handleFileSelected}
          name="images"
          type="file"
          multiple
          accept="image/*"
        />
        <div
          className={cn(
            images?.length
              ? "text-white hover:bg-customBlueLight hover:text-customBlue hover:shadow-customBlue hover:shadow-[5px_5px_0_0] active:shadow-none active:translate-x-[5px] active:translate-y-[5px] bg-customBlue cursor-pointer opacity-100 transition-all duration-300"
              : "opacity-0 transition-all duration-800",
            "py-2.5 px-6 h-12 rounded-2xl transition-all duration-300"
          )}
          onClick={() => setImages([])}
        >
          Удалить
        </div>
      </div>

      <UserList images={images} setImages={setImages} />
    </div>
  );
};

export default FileUploadForm;
