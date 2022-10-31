import React from "react"


const CustomerNoteTile = ({ note, deleteNote }) => {
  
  const handleDeleteNote = (event) => {
    event.preventDefault()
    deleteNote(note.id)
  }
  

  return (
    <tr>
      <td>
        <button 
          id="delete-note"
          onClick={handleDeleteNote}
        >❌
        </button>
      </td>
      <td>{note.date} Eastern</td>
      <td>{note.note}</td>
    </tr>
  )
}

export default CustomerNoteTile