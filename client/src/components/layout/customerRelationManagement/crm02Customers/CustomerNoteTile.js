import React from "react"

const CustomerNoteTile = props => {

  return (
    <tr>
      <td>{props.note.dateAndTime}</td>
      <td>{props.note.newNote}</td>
    </tr>
  )
}

export default CustomerNoteTile