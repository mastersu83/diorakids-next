import { Categories } from "@/components/Categories";
import { MyContainer } from "@/components/MyContainer";

export default async function Home() {
  return (
    <div className="flex items-center justify-center flex-col">
      <Categories />
      <MyContainer />
    </div>
  );
}
