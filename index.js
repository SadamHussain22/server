import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import clientRoutes from "./routes/client.js";
import generalRoutes from "./routes/general.js";
import managementRoutes from "./routes/management.js";
import salesRoutes from "./routes/sales.js";
import itServiceRoute from "./routes/itServices.js";
import progressRoute from "./routes/progress.js"
import aboutusRoute from "./routes/aboutus.js"
import sliderRoute from "./routes/slider.js"
import bsolutionRoute from "./routes/bsolution.js"
import offerRoute from "./routes/offer.js"
import workProcessRoute from "./routes/workProcess.js"
import blogRoute from "./routes/blog.js"
import uploadRoute from "./routes/upload.js"
import deleteRoute from "./routes/upload.js"
// data imports
import User from "./models/User.js";
import Product from "./models/Product.js";
import ProductStat from "./models/ProductStat.js";
import Transaction from "./models/Transaction.js";
import OverallStat from "./models/OverallStat.js";
import AffiliateStat from "./models/AffiliateStat.js";
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name in ES module context
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


import {
  dataUser,
  dataProduct,
  dataProductStat,
  dataTransaction,
  dataOverallStat,
  dataAffiliateStat,
} from "./data/index.js";

/* CONFIGURATION */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* ROUTES */
app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);
app.use("/sales", salesRoutes);
app.use("/itservices",itServiceRoute)
app.use("/progress",progressRoute)
app.use("/aboutus",aboutusRoute)
app.use("/slider",sliderRoute)
app.use("/bsolution",bsolutionRoute)
app.use("/offer",offerRoute)
app.use("/workprocess",workProcessRoute) 
app.use("/blog",blogRoute)
app.use("/upload",uploadRoute)
app.use("/delete",deleteRoute)
// Serve uploaded files statically
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
/* MONGOOSE SETUP */
const PORT = process.env.PORT || 9000;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }) 
  .then(() => { 
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    /* ONLY ADD DATA ONE TIME */
    // AffiliateStat.insertMany(dataAffiliateStat);
    // OverallStat.insertMany(dataOverallStat);
    // Product.insertMany(dataProduct);
    // ProductStat.insertMany(dataProductStat);
    // Transaction.insertMany(dataTransaction);
    // User.insertMany(dataUser);
  })
  .catch((error) => console.log(`${error} did not connect`));
 