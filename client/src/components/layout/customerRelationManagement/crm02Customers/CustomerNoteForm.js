import React, { useState } from "react"

const CustomerNoteForm = props => {
  const getCurrentDateAndTime = () => {
    const seconds = (new Date()).getSeconds()
    const minutes = (new Date()).getMinutes()
    const hours = (new Date()).getHours()
    const day = (new Date()).getDate()
    const month = ((new Date()).getMonth()) + 1
    return `${month}/${day} @ ${hours}:${minutes}:${seconds}`
  }

  const [addedNote, setAddedNote] = useState ({
    newNote: "",
    dateAndTime: getCurrentDateAndTime()
  })

  const clearForm = () => {
    setAddedNote({
      newNote: "",
      dateAndTime: ""
    })
  }

  const handleInputChange = event => {
    setAddedNote({
      ...addedNote,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }
  
  const submitNoteForm = () => {
    props.saveNewNote(addedNote)
    clearForm()
    props.setShowNoteForm(false)
  }

  return (
    <tr>
      <td>  
        <input 
          type="submit"
          onClick={submitNoteForm}
        />
      </td>
      <td>
        <textarea 
          rows="3"
          cols="30"
          name="newNote"
          onChange={handleInputChange}
        />
      </td>
    </tr>
  )

}

export default CustomerNoteForm