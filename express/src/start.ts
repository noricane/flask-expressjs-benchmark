import express from "express";
import { router } from "./router";


export const app = express();

app.use(express.json());
/* @ts-ignore */
app.use("/", router);