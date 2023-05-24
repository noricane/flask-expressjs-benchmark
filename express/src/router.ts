/* No need for service */

import express, { Request, RequestHandler, Response } from "express";
import { timeout } from "./utils";


export const router = express.Router();

router.get("/GET_SLEEP", async (
    req: Request<{}, {}, {}>,
    res: Response<String>
) => { 
    try {
        console.log("HELO1");
        await timeout(1000/50);
        console.log("HELO2");
        res.status(200).send("ok")
    } catch (error) {
        
    }
});