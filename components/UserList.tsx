import {
  closestCenter,
  closestCorners,
  rectIntersection,
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import React from "react";
import { SortableUser } from "./SortableUser";
import { image } from "@prisma/client";
import { Box, Grid } from "@radix-ui/themes";
import Image from "next/image";

export interface User {
  id: number;
  name: string;
  initials: string;
}
export interface IImage {
  id: string;
  imageUrl: string;
  clothId: string;
}

// export const users: User[] = [
//   { id: 1, name: "Alice Johnson", initials: "AJ" },
//   { id: 2, name: "Bob Smith", initials: "BS" },
//   { id: 3, name: "Charlie Brown", initials: "CB" },
//   { id: 4, name: "David Wilson", initials: "DW" },
//   { id: 5, name: "Eva Davis", initials: "ED" },
//   { id: 6, name: "Frank Miller", initials: "FM" },
//   { id: 7, name: "Grace Lee", initials: "GL" },
//   { id: 8, name: "Hannah White", initials: "HW" },
//   { id: 9, name: "Ian Green", initials: "IG" },
//   { id: 10, name: "Jack Black", initials: "JB" },
// ];
//
// const images: IImage[] = [
//   {
//     id: "675d62628905436ac7db8f66",
//     imageUrl: "9.png",
//     clothId: "675d62618905436ac7db8f60",
//   },
//   {
//     id: "675d62628905436ac7db8f67",
//     imageUrl: "10.png",
//     clothId: "675d62618905436ac7db8f60",
//   },
//   {
//     id: "675d62628905436ac7db8f68",
//     imageUrl: "11.png",
//     clothId: "675d62618905436ac7db8f60",
//   },
//   {
//     id: "675d62628905436ac7db8f69",
//     imageUrl: "12.png",
//     clothId: "675d62618905436ac7db8f60",
//   },
//   {
//     id: "675d62628905436ac7db8f6a",
//     imageUrl: "13.png",
//     clothId: "675d62618905436ac7db8f60",
//   },
//   {
//     id: "675d62628905436ac7db8f6b",
//     imageUrl: "14.png",
//     clothId: "675d62618905436ac7db8f60",
//   },
//   {
//     id: "675d62628905436ac7db8f6c",
//     imageUrl: "15.png",
//     clothId: "675d62618905436ac7db8f60",
//   },
//   {
//     id: "675d62628905436ac7db8f6d",
//     imageUrl: "16.png",
//     clothId: "675d62618905436ac7db8f60",
//   },
// ];

interface UserListProps {
  images: image[];
  setImages: (value: React.SetStateAction<image[]>) => void;
}

export default function UserList({ images, setImages }: UserListProps) {
  function onDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (active.id === over?.id) {
      return;
    }
    setImages((users) => {
      const oldIndex = users.findIndex((user) => user.id === active.id);
      const newIndex = users.findIndex((user) => user.id === over?.id);
      return arrayMove(users, oldIndex, newIndex);
    });
  }

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  return (
    <div className="p-8">
      <Box className="bg-white shadow-md rounded-lg">
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={onDragEnd}
        >
          <SortableContext
            items={images}
            strategy={verticalListSortingStrategy}
          >
            <Grid columns="3" rows="repeat(6, max-content)" gap="4px">
              {images.map((image) => (
                <SortableUser key={image.id} image={image} />
              ))}
            </Grid>
          </SortableContext>
        </DndContext>
      </Box>
    </div>
  );
}
