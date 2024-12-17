import { Collections } from "@/components/Collections";
import { Content } from "@/components/Content";

export const MyContainer = async () => {
  return (
    <div className="w-full grid grid-cols-[240px_1fr] gap-x-12 h-full">
      <Collections />
      <Content />
    </div>
  );
};
