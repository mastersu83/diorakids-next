import Image from "next/image";

interface ImagesGalleryProps {
  images: string[];
}

export const ImagesGallery = ({ images }: ImagesGalleryProps) => {
  return (
    <div className="flex flex-wrap">
      {images.map((image) => (
        <div key={image} className="px-2 h-auto w-1/2">
          <Image
            key={image}
            src={"/uploads/" + image}
            width={400}
            height={400}
            alt={image}
            className="object-cover w-full"
          />
        </div>
      ))}
    </div>
  );
};
