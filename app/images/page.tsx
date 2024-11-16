import UploadForm from "@/components/UploadForm";
import { ImagesGallery } from "@/components/ImagesGallery";

export default async function Home() {
  return (
    <main>
      <UploadForm />
      <ImagesGallery />
    </main>
  );
}
