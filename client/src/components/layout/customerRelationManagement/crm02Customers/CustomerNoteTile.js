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
        >X
        </button>
      </td>
      <td>{note.date}</td>
      <td>{note.note}</td>
    </tr>
  )
}

export default CustomerNoteTile