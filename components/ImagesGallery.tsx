"use client";

import Image from "next/image";
import useSWR from "swr";
import { getImages } from "@/service/imagesApi";
import React from "react";

export const ImagesGallery = () => {
  const { data: images } = useSWR("images", getImages);

  if (!images) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-wrap">
      {images.map((image) => (
        <div key={image.id} className="px-2 h-auto w-1/2">
          <Image
            width={300}
            height={300}
            key={image.id}
            src={"/uploads/" + image.imageUrl}
            alt={image.imageUrl}
            className="object-cover w-full"
          />
        </div>
      ))}
    </div>
  );
};
