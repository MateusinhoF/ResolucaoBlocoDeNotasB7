import { Request, Response } from "express";
import { NoteModel } from "../models/NoteModel";

class NoteController {
    
    async getNotes(req: Request, res: Response){
        const notes = new NoteModel();
        return res.json(await notes.getNotes());
    }
    
    async addNote(req: Request, res: Response){
        const params = req.body;
        const notes = new NoteModel();
        let note = await notes.addNote(params);
        return res.json(note);
    }

    async updateNote(req: Request, res: Response){
        const params = req.body;
        const notes = new NoteModel();
        let note = await notes.updateNote(params);
        return res.json(note);
    }

    async deleteNote(req: Request, res: Response){
        const params = req.body;
        const notes = new NoteModel();
        let note = await notes.deleteNote(params);
        return res.json(note);
    }
}

export { NoteController }