import ky from "ky";

export const createImage = async (images: File[]) => {
  const formData = new FormData();
  images.forEach((image, i) => {
    formData.append(image.name, image);
  });

  const url = Array.from(formData.values());

  const urlList = url.map((u) => {
    return {
      type: "1",
      typeOfClothing: "Others",
      // @ts-ignore
      imageUrl: u.name,
    };
  });

  await ky.post("/api/upload", { body: formData });
};
