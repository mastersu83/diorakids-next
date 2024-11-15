"use client"; // Make this component a client component
import React, { FormEvent, useCallback, useState } from "react";
import Image from "next/image";
import { createImage } from "@/service/clothesApi";
import { cn } from "@/lib/utils";
import { useDropzone } from "react-dropzone";

const FileUploadForm = () => {
  const [images, setImages] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    setImages(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  // const handleFileSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.files) {
  //     //convert `FileList` to `File[]`
  //     const _files = Array.from(e.target.files);
  //     setImages(_files);
  //   }
  // };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("hello");

    if (!images.length) {
      return;
    }

    setUploading(true);
    await createImage(images);
    setUploading(false);
  };
  return (
    <form className="" onSubmit={handleSubmit}>
      <div className="flex items-center gap-x-9">
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <button
            className={cn(
              images.length
                ? "text-white hover:bg-customBlueLight hover:text-customBlue hover:shadow-customBlue hover:shadow-[5px_5px_0_0] active:shadow-none active:translate-x-[5px] active:translate-y-[5px] bg-customBlue cursor-pointer transition-all duration-300"
                : "border border-customBlue transition-all duration-800",
              "py-2.5 px-6 h-12 rounded-2xl transition-all duration-300"
            )}
          >
            Выбрать фалы
          </button>

          {/*{isDragActive ? (*/}
          {/*  <p>Drop the files here ...</p>*/}
          {/*) : (*/}
          {/*  <p>wevrmwe;lrvkmewlrkmv wervlkwerv werv ewrvwerv</p>*/}
          {/*)}*/}
        </div>
        {/*<input*/}
        {/*  className=""*/}
        {/*  // onChange={handleFileSelected}*/}
        {/*  type="file"*/}
        {/*  multiple*/}
        {/*  accept="image/*"*/}
        {/*/>*/}
        <button
          className={cn(
            images.length
              ? "text-white hover:bg-customBlueLight hover:text-customBlue hover:shadow-customBlue hover:shadow-[5px_5px_0_0] active:shadow-none active:translate-x-[5px] active:translate-y-[5px] bg-customBlue cursor-pointer opacity-100 transition-all duration-300"
              : "opacity-0 transition-all duration-800",
            "py-2.5 px-6 h-12 rounded-2xl transition-all duration-300"
          )}
          onClick={() => setImages([])}
        >
          Удалить
        </button>
        <button
          type="submit"
          disabled={!uploading}
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
              <Image src={src} alt={image.name} className="object-cover" fill />
              <div>{image.name}</div>
            </div>
          );
        })}
      </div>
      {/*<div className="grid grid-cols-12 gap-2 my-2">*/}
      {/*  {images.map((image) => {*/}
      {/*    const src = URL.createObjectURL(image);*/}
      {/*    return (*/}
      {/*      <div key={image.name} className="relative aspect-video col-span-4">*/}
      {/*        <Image src={src} alt={image.name} className="object-cover" fill />*/}
      {/*      </div>*/}
      {/*    );*/}
      {/*  })}*/}
      {/*</div>*/}
    </form>
  );
};

export default FileUploadForm;
