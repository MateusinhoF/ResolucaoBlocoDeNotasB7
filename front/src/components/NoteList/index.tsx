import styles from './styles.module.scss';
import { api } from '../../services/api';
import { FormEvent, useEffect, useState } from 'react';


type Note = {
    id: string,
    title: string,
    text: string,
    color: string
}

export function NoteList(){

    const [notes, setNotes] = useState<Note[]>([]);
 
    useEffect(()=>{
        api.get<Note[]>('/').then(response =>{
            setNotes(response.data)
        })
    },[])

    const onChangeTitle = (event, id) => {
        const updateNotes = notes.map(note=>{
            if (note.id === id){
                note.title = event.target.value;
            }
            return note;
        });
        
        setNotes(updateNotes);
    }

    const onChangeText = (event, id) => {
        const updateNotes = notes.map(note=>{
            if (note.id === id){
                note.text = event.target.value;
            }
            return note;
        });
        
        setNotes(updateNotes);
    }

    const onChangeColor = (event, id) => {
        const updateNotes = notes.map(note=>{
            if (note.id === id){
                note.color = event.target.value;
            }
            return note;
        });
        
        setNotes(updateNotes);
    }

    function editar(note: Note) {
        const id = note.id;
        const color = note.color;
        const title = note.title;
        const text = note.text;
        api.put('/updateNote', {id: note.id, title: note.title, text: note.text, color: note.color});
        return;
    }

    function excluir(note: Note) {
        const id = note.id;
        api.delete('/deleteNote', {data:{id:id}});
        return;
    }

    return(
        <div className={styles.noteListWrapper}>
        
            <ul className={styles.noteList}>
                {notes.map(note=>{
                    return (
                        <li key={note.id} className={styles.note} style={{ background:note.color }}>
                            <input type='text' className={styles.title} onChange={event => onChangeTitle(event, note.id)} value={note.title}/>
                            <input type='color' className={styles.color} onChange={event => onChangeColor(event, note.id)} value={note.color} />
                            <textarea className={styles.text} onChange={event => onChangeText(event, note.id)} value={note.text}/>
                            <button className={styles.editar} onClick={()=>{editar(note)}}>Salvar edição</button>
                            <button className={styles.excluir} onClick={()=>{excluir(note)}}>Exluir</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}