import { ModelPage } from "@/components/pages/ModelPage";

interface PageProps {
  params: { id: string };
}

export default function Page({ params }: PageProps) {
  return <ModelPage modelId={params.id} />;
}
