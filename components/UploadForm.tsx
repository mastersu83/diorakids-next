"use client";

import React, { FormEvent, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { uploadImages } from "@/service/imagesApi";

// const initialItems = ["🍅 Tomato", "🥒 Cucumber", "🧀 Cheese", "🥬 Lettuce"];

const FileUploadForm = () => {
  const [items, setItems] = useState<File[]>([]);
  const [images, setImages] = useState<File[]>([]);

  const handleFileSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      //convert `FileList` to `File[]`
      const _files = Array.from(e.target.files);
      setImages(_files);
      const files = _files.map((f) => f);
      setItems(files);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!images.length) {
      return;
    }

    await uploadImages(images);
  };
  return (
    <form className="" onSubmit={handleSubmit}>
      <div className="flex items-center gap-x-9">
        <input
          className=""
          onChange={handleFileSelected}
          type="file"
          multiple
          accept="image/*"
        />
        <div
          className={cn(
            images.length
              ? "text-white hover:bg-customBlueLight hover:text-customBlue hover:shadow-customBlue hover:shadow-[5px_5px_0_0] active:shadow-none active:translate-x-[5px] active:translate-y-[5px] bg-customBlue cursor-pointer opacity-100 transition-all duration-300"
              : "opacity-0 transition-all duration-800",
            "py-2.5 px-6 h-12 rounded-2xl transition-all duration-300"
          )}
          onClick={() => setImages([])}
        >
          Удалить
        </div>
        <button
          type="submit"
          disabled={!images.length}
          className={cn(
            !images.length
              ? "bg-gray-200 cursor-not-allowed"
              : "bg-customBlue hover:bg-customBlueLight hover:text-customBlue hover:shadow-customBlue hover:shadow-[5px_5px_0_0] active:shadow-none active:translate-x-[5px] active:translate-y-[5px] cursor-pointer",
            "text-white py-2.5 px-6 h-12 rounded-2xl transition-all duration-300"
          )}
        >
          Upload
        </button>
      </div>
      <div className="grid grid-cols-12 gap-2 my-2">
        {images.map((image) => {
          const src = URL.createObjectURL(image);
          return (
            <div key={image.name} className="relative aspect-video col-span-4">
              <Image
                width={200}
                height={200}
                src={src}
                alt={image.name}
                className="object-cove w-full"
              />
            </div>
          );
        })}
      </div>
    </form>
  );
};

export default FileUploadForm;
