"use client"; // Make this component a client component
import React, { FormEvent, useState } from "react";
import Image from "next/image";
import ky from "ky";

const FileUploadForm = () => {
  const [images, setImages] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  const handleFileSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      //convert `FileList` to `File[]`
      const _files = Array.from(e.target.files);
      setImages(_files);
    }
  };

  console.log(images);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!images.length) {
      console.log("hello");
      return;
    }

    const formData = new FormData();
    images.forEach((image, i) => {
      formData.append(image.name, image);
    });
    setUploading(true);
    await ky.post("/api/upload", { body: formData });
    setUploading(false);
  };
  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <div className="flex justify-between">
        <input onChange={handleFileSelected} type="file" multiple />
        <button type="submit">Upload</button>
      </div>
      <div>
        <div className="grid grid-cols-12 gap-2 my-2">
          {images.map((image) => {
            const src = URL.createObjectURL(image);
            return (
              <div
                className="relative aspect-video col-span-4"
                key={image.name}
              >
                <Image
                  src={src}
                  alt={image.name}
                  className="object-cover"
                  fill
                />
              </div>
            );
          })}
        </div>
      </div>
    </form>
  );
};

export default FileUploadForm;
