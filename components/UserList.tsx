import {
  closestCenter,
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
import { Image } from "@prisma/client";
import { Box, Grid } from "@radix-ui/themes";

interface UserListProps {
  images: Image[];
  setImages: (value: React.SetStateAction<Image[]>) => void;
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
