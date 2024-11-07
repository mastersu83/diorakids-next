import { Collections } from "@/components/Collections";
import { Content } from "@/components/Content";
import { getCollections } from "@/service/collectionsApi";

interface IContent {
  props: any;
}

export const Container = async ({ props }: IContent) => {
  const collections = await getCollections();

  return (
    <div className="w-full grid grid-cols-[240px_1fr] gap-x-12">
      <Collections collections={collections} />
      <Content props={props} />
    </div>
  );
};
