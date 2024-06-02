import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import swaggerUi from 'swagger-ui-express';
import swaggerOutput from './swagger-output.json' assert { type: 'json' };

//routes import
import userRouter from "./routes/user.routes.js";
import productRouter from "./routes/product.routes.js";
import NodeCache from "node-cache";
import morgan from "morgan";
import orderRouter from "./routes/order.routes.js";
import bodyParser from "body-parser"; // Importing body-parser
import paymentRouter from "./routes/payment.routes.js";
import dashboard from "./routes/stats.routes.js";

export const myCache = new NodeCache();

const app = express();
const apiVersion = "/api/v1"; 
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerOutput));
app.use(bodyParser.json({ limit: "16kb" }));

app.use(bodyParser.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());
app.use(morgan("dev"));

//routes declaration

app.use(`${apiVersion}/users`, userRouter);
app.use(`${apiVersion}/product`, productRouter);
app.use(`${apiVersion}/order`, orderRouter);
app.use(`${apiVersion}/payment`, paymentRouter);
app.use(`${apiVersion}/dashboard`, dashboard);

import dotenv from "dotenv";
import ConnectDB from "./db/index.js";

dotenv.config({
  path: "./.env",
});
const asciiDog = `
  / \\__
 (    @\\____
 /         O 
/   (_____/
/_____/  UU
`;
ConnectDB()
  .then(() => {
    const port = process.env.PORT || 8000;
    app.listen(port, () => {
      console.log(asciiDog);
      console.log(`----------PORT:${port}--NODE-JS-SERVER-ACTIVE----------`);
    });
  })
  .catch((error) => console.log("Error DB : ", error));

export { app };
