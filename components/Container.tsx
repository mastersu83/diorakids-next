import { Collections } from "@/components/Collections";
import { Content } from "@/components/Content";
import { getCollections } from "@/service/collectionsApi";

export const Container = async () => {
  const collections = await getCollections();

  return (
    <div className="w-full grid grid-cols-[240px_1fr] gap-x-12">
      <Collections collections={collections} />
      <Content />
    </div>
  );
};
