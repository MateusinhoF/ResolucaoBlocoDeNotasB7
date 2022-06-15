import prismaCliente from "../prisma";
import { io } from "../app";

class NoteModel{
    
    async getNotes(){
        const notes = await prismaCliente.note.findMany();
        io.emit("get_notes", notes);
        return notes;
    }

    async getNote(id_note){
        const notes = await prismaCliente.note.findFirst({
            where:{
                id: id_note
            }
        });
        io.emit("get_note", notes);
        return notes;
    }
    
    async addNote(params){
        const notes = await prismaCliente.note.create({
            data:{
                title: params.title,
                text: params.text, 
                color: params.color
            }
        });

        io.emit("new_note", notes);

        return notes;
    }

    async updateNote(params){
       const notes = await prismaCliente.note.update({
           where:{
               id: params.id
           },
           data:{
                title: params.title,
                text: params.text, 
                color: params.color
           }
       });

       io.emit("put_note", notes);

       return notes;
    }

    async deleteNote(params){

        try{
            const notes = await prismaCliente.note.delete({
                where:{
                    id: params.id
                }
            });
            io.emit("delete_note", ({"status":"successfull"}));
            return ({"status":"successfull"})
        }catch(error){
            return ({"status":"fail"})
        }
    }
}

export { NoteModel }