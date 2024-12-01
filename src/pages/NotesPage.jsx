import "./NotesPage.css"

import { useContext, useEffect } from "react"
import HeaderComponent from "../components/HeaderComponent"
import { noteContext } from "../context/note.context"
import NoteCard from "../components/NoteCard"
import CreateNote from "../components/CreateNote"

function NotesPage() {
  const {notes, getNotes, hasError, hasLoaded}= useContext(noteContext)

  useEffect(() => {
    getNotes()
  },[])

  const noteCards = notes.map((note) => {
    return (
      <li key={note.id}>
        <NoteCard note={note}></NoteCard>
      </li>
    )
  })

  return (
    <>
      <HeaderComponent></HeaderComponent>
      <section id="notes-page">
        <h2>Notes</h2>
        <ul className="note-list">
          <li>
            <CreateNote></CreateNote>
          </li>

          {hasError ? (
            <h2> No se han obtenido obtener las notas </h2>
          ) : !hasLoaded ? (
            <h2> Cargando...</h2>
          ): (
             noteCards 
          )}
        </ul>
      </section>
    </>
  );
}

export default NotesPage