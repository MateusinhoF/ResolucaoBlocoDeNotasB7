import { Request, Response, NextFunction } from "express";
import { NoteModel } from "../models/NoteModel";

export async function verifyNote(req: Request, res: Response, next: NextFunction){
    const id = req.body.id;
    const title = req.body.title;
    const text = req.body.text;
    const color = req.body.color;
    const notes = new NoteModel();

    if (!id){
        return res.status(400).json({
            errorCode: "id invalid"
        });
    }

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

    const note = await notes.getNote(id);
    if (note){
        return next();
    }

    return res.status(404).json({errorCode: "id notFound"})

}