import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const ConnectDB = async () => {
  try {
    const dbConnection = await mongoose.connect(
      `${process.env.MONGODB_URI}`
    );
    console.log(
      `\n MongoDB Connected !! DB HOST : ${dbConnection.connection.host}`
    );
  } catch (error) {
    console.log("DB Error : ", error);
    process.exit(1);
  }
};

export default ConnectDB;
