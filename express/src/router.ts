/* No need for service */

import express, { Request, RequestHandler, Response } from "express";
import { timeout } from "./utils";


export const router = express.Router();

router.get("/GET_SLEEP", async (
    req: Request<{}, {}, {}>,
    res: Response<String>
) => { 
    try {
        await timeout(1000/50);
        res.status(200).send("ok")
    } catch (error) {
        res.status(500).send("internal blabla")
        
    }
});
router.get("/GET", async (
    req: Request<{}, {}, {}>,
    res: Response<String>
) => { 
    try {
        res.status(200).send("ok")
    } catch (error) {
        res.status(500).send("internal blabla")
    }
});