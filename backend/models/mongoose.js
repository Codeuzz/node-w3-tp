import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
mongoose.connect(process.env.MONGODB_URL).then(
  () => {
    console.log("Connected to DB");
  },
  (reason) => {
    console.log("Failed to access DB: " + reason);
  }
);

export default mongoose;
