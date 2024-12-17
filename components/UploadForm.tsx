import React, { useState } from "react";
import { cn } from "@/lib/utils";
import UserList from "@/components/UserList";
import { IImage } from "@/types/types";
import { uploadImages } from "@/service/imagesApi";

interface FileUploadFormProps {
  images: IImage[];
  setImages: (value: React.SetStateAction<IImage[]>) => void;
}

const FileUploadForm = ({ images, setImages }: FileUploadFormProps) => {
  const [items, setItems] = useState<File[]>([]);
  const [images1, setImages1] = useState<File[]>([]);
  const handleFileSelected = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const _files = Array.from(e.target.files);
      const imagesCloth = await uploadImages(_files);
      console.log(imagesCloth);
      setImages(imagesCloth);
      setItems(_files);
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

      <UserList items={items} images={images} setImages={setImages} />
    </div>
  );
};

export default FileUploadForm;
