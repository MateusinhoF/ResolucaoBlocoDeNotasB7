import { Router } from "express";
import { NoteController } from "./controllers/NoteController";
import { verifyIDNote } from "./middleware/verifyIDNote";
import { verifyNewNote } from "./middleware/verifyNewNote";
import { verifyNote } from "./middleware/verifyNote";

const router = Router();

router.get("/", new NoteController().getNotes)

router.post("/addNote", verifyNewNote,new NoteController().addNote)

//verificar como trabalhar com ele ja que a diferenca entre ele e o add esta
//em um ter o id e o outro nao
router.put("/updateNote", verifyNote, new NoteController().updateNote)

router.delete("/deleteNote", verifyIDNote, new NoteController().deleteNote)

export { router }