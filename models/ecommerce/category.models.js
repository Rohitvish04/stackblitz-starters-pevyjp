import mongoose from "mongoose"

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    requied: true,
  }
},{timestamps: true})

export const Category = mongoose.model("category")