import { Categories } from "@/components/Categories";
import { Container } from "@/components/Container";
import { getModels } from "@/service/clothesApi";

export default async function Home() {
  return (
    <div className="flex items-center justify-center flex-col">
      <Categories />
      <Container />
    </div>
  );
}
