import { Categories } from "@/components/Categories";
import { Container } from "@/components/Container";
import { getCategories } from "@/service/categoriesApi";
import { dbConnect } from "@/mongoose/db";

export default async function Home() {
  await dbConnect();

  const data = await getCategories();

  return (
    <div className="flex items-center justify-center flex-col">
      <Categories categories={data} />
      <Container />
    </div>
  );
}
