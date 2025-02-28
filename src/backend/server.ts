import express from "express";
import "reflect-metadata";
import { AppDataSource } from "./database/typeorm_config";
import { ensureDatabaseExists } from "./utils/db_checker";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

ensureDatabaseExists()
   .then(() => {
      return AppDataSource.initialize();
   })
   .then(() => {
      console.log("Database connected and synchronized.");

      app.listen(3000, () => {
         console.log("Server is running on port 3000");
      });
   })
   .catch((error) => console.log("Error connecting to the database:", error));
