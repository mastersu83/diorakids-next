import { Categories } from "@/components/Categories";
import { Container } from "@/components/Container";
import { getCategories } from "@/service/categoriesApi";

export default async function Home() {
  const data = await getCategories();

  return (
    <div className="flex items-center justify-center flex-col">
      <Categories categories={data} />
      <Container />
    </div>
  );
}
