import { Request, Response, NextFunction } from "express";
import { NoteModel } from "../models/NoteModel";

export async function verifyIDNote(req: Request, res: Response, next: NextFunction){
    const id = req.body.id;
    const notes = new NoteModel();

    if (!id){
        return res.status(400).json({
            errorCode: "id invalid"
        });
    }

    const note = await notes.getNote(id);
    if (note){
        return next();
    }

    return res.status(404).json({errorCode: "id notFound"})

}