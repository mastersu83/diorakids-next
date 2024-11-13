import mongoose from "mongoose";

const cloth = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    sizes: [
      {
        size: String,
        quantity: String,
      },
    ],

    images: [{ imageUrl: String }],

    price: {
      type: Number,
      required: true,
    },
    article: {
      type: Number,
      required: true,
    },
    wbLink: {
      type: String,
      required: true,
    },

    color: {
      type: String,
      required: true,
    },
    collectionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Collection",
    },
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
  },
  { timestamps: true }
);

export const Cloth = mongoose.models.Cloth || mongoose.model("Cloth", cloth);
