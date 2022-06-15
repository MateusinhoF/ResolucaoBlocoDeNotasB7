import { Request, Response, NextFunction } from "express";

export async function verifyNewNote(req: Request, res: Response, next: NextFunction){
    const title = req.body.title;
    const text = req.body.text;
    const color = req.body.color;


    if (!title){
        return res.status(400).json({
            errorCode: "title invalid"
        });
    }

    if (!text){
        return res.status(400).json({
            errorCode: "text invalid"
        });
    }

    if (!color){
        return res.status(400).json({
            errorCode: "color invalid"
        });
    }

    return next();

}