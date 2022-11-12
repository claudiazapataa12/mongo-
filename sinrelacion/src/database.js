import mongoose from "mongoose";

const uri = "mongodb://127.0.0.1:27017/sinrelacion";

export const connectDb = async () => {
  try {
    const db = await mongoose.connect(uri);
    console.log("base de datos conectada", db.connection.name);
  } catch (error) {
    console.log(`erro al conectar a la base de datos ${error.mesagge}`);
  }
};