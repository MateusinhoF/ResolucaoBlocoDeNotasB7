import styles from "./App.module.scss";
import { AddNote } from "./components/AddNote";
import { NoteList } from "./components/NoteList";


export function App() {
  return (
    <main className={styles.contentWrapper}>
      <NoteList/>
      <AddNote/>
    </main>
  )
}
