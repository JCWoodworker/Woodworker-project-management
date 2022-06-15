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
    note: "",
    date: getCurrentDateAndTime()
  })

  const clearForm = () => {
    setAddedNote({
      note: "",
      date: ""
    })
  }

  const handleInputChange = event => {
    setAddedNote({
      ...addedNote,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }
  console.log(addedNote)
  
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
          name="note"
          onChange={handleInputChange}
        />
      </td>
    </tr>
  )

}

export default CustomerNoteForm