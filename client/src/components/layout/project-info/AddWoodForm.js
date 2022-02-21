import React, { useEffect, useState } from 'react'
import Select from 'react-select'

// const woodOptionList = [
//   {name: "hardwood", value: "Hard Maple", label: 'Hard Maple', price: 6.95},
//   {name: "hardwood", value: "Black Walnut", label: 'Black Walnut', price: 14.95},
//   {name: "hardwood", value: "Purple Heart", label: 'Purple Heart', price: 8.95},
//   {name: "hardwood", value: "White Oak", label: 'White Oak', price: 7.95},
// ]

const AddWoodForm = props => {
  const [selectedWood, setSelectedWood] = useState({
    hardwood: "",
    boardFeet: ""
  })
  const [hardwoods, setHardwoods] = useState([])
  const [toggleAddHardwoods, setToggleAddHardwoods] = useState(false)
  const [woodOptionList, setWoodOptionList] = useState([])

  const fetchHardwoods = async () => {
    try {
      const response = await fetch("/api/v1/hardwoods")
      if (!response) {
        throw new Error(`${response.status} (${response.statusText})`)
      }
      const body = await response.json()
      const updatedList = body.hardwoods.map(wood => {
        return {
          id: wood.id,
          name: "hardwood",
          value: wood.name,
          label: wood.name,
          price: wood.price
        }
      }
      )
      setWoodOptionList(updatedList)
    } catch (error) {
      return console.error(`Error in fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    fetchHardwoods()
  }, [])

  console.log(woodOptionList)

  const customTheme = theme => {
    return {
      ...theme,
      colors: {
        ...theme.colors,
        primary25: 'orange',
        primary: 'green'
      }
    }
  }

  const clearForm = () => {
    setSelectedWood ({
      hardwood: "",
      boardFeet: ""
    })
  }

  const handleBoardFeetSelectionChange = event => {
    setSelectedWood({...selectedWood, [event.currentTarget.name]: event.currentTarget.value })
  }
  const handleHardwoodSelectionChange = selectedItem => {
    setSelectedWood({...selectedWood, [selectedItem.name]: selectedItem.value })
  }
  const handleShowAddHardwoods = event => {
    toggleAddHardwoods? setToggleAddHardwoods(false) : setToggleAddHardwoods(true)
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

  let addWoodForm = (
    <div>

      <form onSubmit={handleWoodSubmit} className="add-wood-form">
        <label htmlFor="hardwood">
          <Select 
            name="hardwood"
            placeholder="Select Wood"
            onChange={handleHardwoodSelectionChange}
            theme={customTheme}
            options={woodOptionList}
            isSearchable
            autoFocus
          />
        </label>
        <label htmlFor="boardFeet">Board Feet Needed:
          <input 
            type="number" 
            id="boardFeet"
            name="boardFeet"
            value={selectedWood.boardFeet} 
            onChange={handleBoardFeetSelectionChange} 
          />
        </label>
        <button 
          type="button"
          id="add-selected-button"
          className="add-selected-button"
          onClick={handleWoodSubmit}
          >Add Selected
        </button>
        <button 
          type="button"
          id="done-adding-button"
          className="done-adding-button"
          onClick={handleShowAddHardwoods}
          >Done Adding
        </button>
      </form>

    </div>
  )

  if (!toggleAddHardwoods) {
      addWoodForm = 
        <button
          className="toggle-add-wood-button"
          onClick={handleShowAddHardwoods}>
          Add Wood To Project
        </button>
  }
  
  console.log(selectedWood)

  return (
    <div className="add-woods-container">
      {addWoodForm}
      <div className='show-added-wood'>
        <ul>Wood Needed:
          {yourWoodList}
        </ul>
      </div>
    </div>

  )

}

export default AddWoodForm
