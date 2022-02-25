import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import translateServerErrors from '../../../services/translateServerErrors'

const AddWoodForm = props => {
  const [selectedWood, setSelectedWood] = useState({
    projectId: props.projectId,
    boardFeet: "",
    hardwoodId: ""
  })
  const [hardwoods, setHardwoods] = useState([])
  const [woodOptionList, setWoodOptionList] = useState([])
  const [errors, setErrors] = useState([])

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
          label: `${wood.name}: $${wood.price}/bdft`,
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
      projectId: props.projectId,
      boardFeet: "",
      hardwoodId: ""
    })
  }
  const clearSelectedWoodsList = () => {
    setHardwoods([])
  }

  const handleBoardFeetSelectionChange = event => {
    setSelectedWood({...selectedWood, [event.currentTarget.name]: event.currentTarget.value })
  }
  const handleHardwoodSelectionChange = selectedItem => {
    setSelectedWood({ ...selectedWood, hardwoodId: selectedItem.id })
  }
  const handleSaveHardwoods = event => {
    props.postWoodsToProject(hardwoods)
    clearSelectedWoodsList()
  }

  const handleWoodSubmit = event => {
    event.preventDefault()

    let duplicatePersistedWood = false
    props.selectedWoodArray.forEach(wood => {
      if (wood.id === selectedWood.hardwoodId) {
        return duplicatePersistedWood = true
      }
    })

    let duplicateWood = false
    hardwoods.forEach(wood => {
      if (wood.hardwoodId === selectedWood.hardwoodId) {
        return duplicateWood = true
      }
    })
    if (!duplicateWood && !duplicatePersistedWood) {
      if (selectedWood.hardwoodId && selectedWood.boardFeet) {
        setHardwoods(hardwoods.concat(selectedWood))
        clearForm()
      } else {
        alert(`Please fill out both fields`)
      }
    } else {
      let woodName = woodOptionList.find(item => {
        return item.id === selectedWood.hardwoodId
      })
      alert(`You've already added ${woodName.value}!`)
    }
  }

  const removeStagedWood = event => {
    setHardwoods(hardwoods.filter(wood => {
      return wood.hardwoodId != event.currentTarget.value
    }))
  }
  
  let yourWoodList = <p>Add some wood!</p>

  if (hardwoods.length > 0) {
    yourWoodList = hardwoods.map(wood => {
      let woodName = woodOptionList.find(item => {
        return item.id === wood.hardwoodId
      })
      
      return (
        <li key={woodName.value} id="added-wood-list-item">
          {`${woodName.value}: ${wood.boardFeet} board-ft`}
          <button 
            className="remove-wood-x"
            value={wood.hardwoodId}
            onClick={removeStagedWood}>
              x
          </button>
        </li>
      )
    })
  }
  
  return (

    <div className="add-woods-container">

      <form onSubmit={handleWoodSubmit} className="add-wood-form">

        <label htmlFor="hardwood">
          <Select 
            id="hardwood"
            name="hardwood"
            placeholder="Select Wood"
            onChange={handleHardwoodSelectionChange}
            theme={customTheme}
            options={woodOptionList}
            isSearchable
            autoFocus
          />
        </label>

        <label 
          htmlFor="boardFeet" 
          className="boardFeet-label-container">
            <h5 id="boardFeet-heading"><strong>Bdft Needed:</strong></h5>
            <input 
              type="number" min="0" max="999" step="0.25"
              id="boardFeet-input"
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
          >{`Add Selected-->`}
        </button>

      </form>

      <div className='show-added-wood'>

        <ul className="staged-woods">
          <h4><strong>
            To Be Added:
          </strong></h4>
          {yourWoodList}
          <button 
            type="button"
            id="save-button"
            className="save-button"
            onClick={handleSaveHardwoods}
            >Save List To Project
          </button>
        </ul>

      </div>
            
    </div>

  )

}

export default AddWoodForm