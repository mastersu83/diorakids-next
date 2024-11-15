import UploadForm from "@/components/UploadForm";
import { ImagesGallery } from "@/components/ImagesGallery";
import { getImages } from "@/service/imagesApi";

export default async function Home() {
  const data = await getImages();
  return (
    <main>
      <UploadForm />
      <ImagesGallery images={data} />
    </main>
  );
}
