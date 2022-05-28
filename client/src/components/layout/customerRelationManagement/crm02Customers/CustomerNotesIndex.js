import React, {useState, useEffect} from "react"

import CustomerNoteTile from "./CustomerNoteTile"
import CustomerNoteForm from "./CustomerNoteForm"

const CustomerNotesIndex = props => {
  const [showNoteForm, setShowNoteForm] = useState(false)
  const [notes, setNotes] = useState ([])

  const saveNewNote = (noteToSave) => {

    setNotes([
      ...notes,
      noteToSave
    ])
  }

  const notesList = notes.map(note => {
    return (
      <CustomerNoteTile 
        note={note}
      />
    )
  })

  const addNote = () => {
    showNoteForm? setShowNoteForm(false) : setShowNoteForm(true)
    }

  let formSymbol = "+"
  let notesForm = null
  if (showNoteForm) {
    notesForm = 
      <CustomerNoteForm
        saveNewNote={saveNewNote}
        setShowNoteForm={setShowNoteForm}
      />
    formSymbol = "-"
  }

  return (
    <div className='customer-notes-table'>
      <table>
        <thead>
          <tr>
            <td><button id="add-note" onClick={addNote}>{formSymbol}</button></td>
            <td id="note">Prospect Notes</td>
          </tr>
        </thead>
        <tbody>
          {notesForm}
          {notesList}
        </tbody>
      </table>
    </div>
  )
}

export default CustomerNotesIndex