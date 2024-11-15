"use server";

import ky from "ky";

export const getImages = async (): Promise<string[]> => {
  return await ky("http://localhost:3000/api/images").json();
};
