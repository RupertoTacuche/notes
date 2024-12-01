import {createContext, useState} from "react"

const noteContext = createContext()

const API_URL ="https://ca5d2ec0ef59e9e7bea3.free.beeceptor.com/api/notes/"

function NoteProviderWrapper(props){

    const [notes, setNotes] =useState([])
    const [hasError, setError] = useState(false)
    const [hasLoaded, setLoaded] = useState(false)

    const getNotes = async () => {
        try {
            const response = await fetch(API_URL)
            const data = await response.json()
            setNotes(data.reverse())
            setError(false)
            setLoaded(true)
        } catch (e) {
            console.log(e)
            setError(true)
        }

    }

    const addNote = async(newNote) => {
        try {
            await fetch(API_URL, {
                method: "POST", 
                body: JSON.stringify(newNote) 
            })
            setNotes([newNote, ...notes, ])
        } catch (e) {
            console.log(e);
        }
        
    }

    const updateNote = (updatedNote) => {
        const updatedNotes = notes.map((note) => {
            if(note.id !== updatedNote.id) return  note
            return updatedNote
        })
        setNotes(updatedNotes)
    }



    return(
    <noteContext.Provider value={{notes, hasError, hasLoaded, getNotes, setNotes, updateNote, addNote}}>
        {props.children}
    </noteContext.Provider>
    )
}

export {noteContext, NoteProviderWrapper}