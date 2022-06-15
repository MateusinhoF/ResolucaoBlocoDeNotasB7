import { FormEvent, useState } from 'react';
import { api } from '../../services/api';
import styles from './styles.module.scss';

export function AddNote(){

    const [title, setTitle] = useState('');
    const [color, setColor] = useState('');
    const [text, setText] = useState('');

    async function addNote(event: FormEvent) {
        event.preventDefault();
        console.log("Entrou")
        if (!title.trim()){
            return;
        }
        if (!color.trim()){
            return;
        }
        if (!text.trim()){
            return;
        }
        console.log(title)
        console.log(color)
        console.log(text)
        await api.post('/addNote', {title,color,text});
    }

    return(
        <div className={styles.addNote}>
            <form action="POST" onSubmit={addNote} className={styles.formNote}>
                <label htmlFor="title">Título</label>
                <input type="text" name="title" className={styles.title}
                    onChange={event => setTitle(event.target.value)}
                    value={title}/>
                <label htmlFor="color">Cor</label>
                <input type="color" name="color" className={styles.color}
                    onChange={event => setColor(event.target.value)}
                    value={color}/>
                <label htmlFor="text">Texto</label>
                <textarea name="text" className={styles.text}
                    onChange={event => setText(event.target.value)}
                    value={text}/>
                <input type="submit" value="Salvar" className={styles.save}/>
            </form> 
        </div>
    )
}