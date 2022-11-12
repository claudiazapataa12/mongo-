import mongoose from "mongoose";
import { studentModel } from "./studentModel.js";
const{ Schema, model}= mongoose;

const schoolSchema= new Schema({
        name:String,
        address:String,
        city: String,
        state:String,
        zipcode: String,
});
schoolSchema.pre('deleteOne', { document: true },async function() {
   await studentModel.deleteMany({school:this._id.toString() })
  });

export const schoolModel=model("school",schoolSchema);