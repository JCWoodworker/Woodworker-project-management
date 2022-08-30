import React, {useState, useEffect} from "react"
import translateServerErrors from '../../../../services/translateServerErrors'

import CustomerNoteTile from "./CustomerNoteTile"
import CustomerNoteForm from "./CustomerNoteForm"

const CustomerNotesIndex = props => {
  const [showNoteForm, setShowNoteForm] = useState(false)
  const [notes, setNotes] = useState ([])
  const [errors, setErrors] = useState([])
  const [customerId, setCustomerId] = useState(props.clickedCustomerId)

  const fetchCustomerNotes = async () => {
    try {
      const response = await fetch(`api/v1/customerNotes/${customerId}`)
      if (!response) {
        throw new Error(`${response.status} (${response.statusText})`)
      }
      const body = await response.json()
      setNotes(body.notes)
    } catch(error) {
      return console.error(`Error in fetch: ${error.message}`)
    }
  }

  const postNewNote = async newNoteData => {
    try {
      debugger
      const response = await fetch(`/api/v1/customerNotes`, {
        method: "POST",
        headers: new Headers ({
          "Content-Type": "application/json"
        }),
        body: JSON.stringify(newNoteData)
      })
      debugger
      if (!response.ok) {
        if (response.status === 422) {
          const body = await response.json()
          const newErrors = translateServerErrors(body.errors)
          setErrors(newErrors)
        }
        throw new Error(`${response.status} (${response.statusText})`)
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      } else {
        const body = await response.json()
        setErrors([])
        debugger
        // setNotes([...notes, body.note])
        return true
      }
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    fetchCustomerNotes()
  }, [])

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
        postNewNote={postNewNote}
        customerId={customerId}
        errors={errors}
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