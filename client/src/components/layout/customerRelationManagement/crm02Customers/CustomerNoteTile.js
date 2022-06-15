import React from "react"

const CustomerNoteTile = ({ note }) => {
  return (
    <tr>
      <td>{note.date}</td>
      <td>{note.note}</td>
    </tr>
  )
}

export default CustomerNoteTile