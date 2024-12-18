import { ModelPage } from "@/components/pages/ModelPage";

interface PageProps {
  params: Promise<{ id: number }>;
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  return <ModelPage modelId={Number(id)} />;
}
