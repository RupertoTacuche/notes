import "./CreateNote.css"
import {useContext, useState} from "react"
import { noteContext } from "../context/note.context"

function CreateNote() {
    const {addNote}= useContext(noteContext)

    const [noteTitle, setNoteTitle] = useState("");

    const createId = () => {
        return Date.now().toString(36) + Math.random().toString(36).slice(2);
    }

    const handleInput = (e) => {
        setNoteTitle(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!noteTitle) return;

        const newNote = {
            id: createId(),
            title: noteTitle,
            marked: false,
        }

        addNote(newNote)
        setNoteTitle("")
    }

  return (
    <form className="note-form" onSubmit={handleSubmit}>
        <input 
        type="text" 
        className="note-title" 
        placeholder="Nueva Nota"
        value={noteTitle}
        onChange={handleInput}
         />
         <button className="create-btn">+</button>
    </form>
  )
}

export default CreateNote