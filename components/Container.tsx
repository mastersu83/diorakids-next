import { Collections } from "@/components/Collections";
import { Content } from "@/components/Content";

interface IContent {
  props: any;
}

export const Container = ({ props }: IContent) => {
  return (
    <div className="w-full grid grid-cols-[240px_1fr] gap-x-12">
      <Collections props="" />
      <Content props={props} />
    </div>
  );
};
