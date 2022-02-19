import React, { useState } from 'react'

const AddWoodForm = props => {
  const [selectedWood, setSelectedWood] = useState({
    hardwood: "",
    boardFeet: ""
  })
  const [hardwoods, setHardwoods] = useState ([])

  const woodOptionList = [
    {value: "wood 1", label: 'Wood 1'},
    {value: "wood 2", label: 'Wood 2'},
    {value: "wood 3", label: 'Wood 3'},
    {value: "wood 4", label: 'Wood 4'},
  ]

  let woodOptions = woodOptionList.map(wood => {
    return (
      <option
        value={wood.value}
        key={wood.value}>
        {wood.label}
      </option>
    )
  })

  const clearForm = () => {
    setSelectedWood ({
      hardwood: "",
      boardFeet: ""
    })
  }

  const handleSelectionChange = event => {
    setSelectedWood({...selectedWood, [event.currentTarget.name]: event.currentTarget.value })
  }

  const handleWoodSubmit = event => {
    event.preventDefault()
    let duplicateWood = false
    hardwoods.forEach(wood => {
      if (wood.hardwood === selectedWood.hardwood) {
        return duplicateWood = true
      }
    })
    if (!duplicateWood) {
      if (selectedWood.hardwood && selectedWood.boardFeet) {
        setHardwoods(hardwoods.concat(selectedWood))
        clearForm()
      } else {
        alert(`Please fill out both fields`)
      }
    } else {
      alert(`You've already selected ${selectedWood.hardwood}!`)
    }
  }

  let yourWoodList = <p>Select Some Wood!</p>
  if (hardwoods) {
    yourWoodList = hardwoods.map(wood => {
      return (
        <li key={wood.hardwood}>
          {`${wood.hardwood}: ${wood.boardFeet} board-ft`}
        </li>
      )
    })
  }

  console.log(selectedWood)
  console.log(hardwoods)
  
  return (
    <div>

      <form onSubmit={handleWoodSubmit} className="add-wood-form">
        <label htmlFor="hardwood">
          <select 
            id="hardwood"
            name="hardwood"
            value={selectedWood.hardwood}
            onChange={handleSelectionChange}
            required
          >
            <option name= {null} value={null}>Select A Wood</option>
            {woodOptions}
          </select>
        </label>
        <label htmlFor="boardFeet">Board Feet Needed:
          <input 
            type="number" 
            id="boardFeet"
            name="boardFeet"
            value={selectedWood.boardFeet} 
            onChange={handleSelectionChange} 
          />
        </label>
        <button 
          type="button"
          id="add-wood-button"
          className="add-wood-button"
          onClick={handleWoodSubmit}
          >Add Selected
        </button>
      </form>
    
    </div>
  )

}

export default AddWoodForm
