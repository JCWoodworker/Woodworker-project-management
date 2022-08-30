import React, { useState } from "react"
import ErrorList from '../..//ErrorList'

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
    date: getCurrentDateAndTime(),
    customerId: props.customerId
  })

  const clearForm = () => {
    setAddedNote({
      note: "",
      date: "",
      customerId: props.customerId
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
    props.postNewNote(addedNote)
    props.saveNewNote(addedNote)
    clearForm()
    props.setShowNoteForm(false)
  }

  return (
    <tr>
      <td>  
        <ErrorList errors={props.errors} />
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