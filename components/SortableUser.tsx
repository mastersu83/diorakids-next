import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { IImage } from "@/types/types";

export function SortableUser({ image }: { image: File }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: image.name });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };
  const src = URL.createObjectURL(image);

  console.log(image.name);

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className="flex items-center border-b border-gray-200 py-2 px-4 w-40 first:w-full h-max first:col-start-1 first:col-end-4"
    >
      <Image
        width={200}
        height={300}
        src={src}
        alt={src}
        className={cn("rounded-2xl first:w-full")}
      />
    </div>
  );
}
