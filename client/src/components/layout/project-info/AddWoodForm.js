import React, { useEffect, useState } from 'react'
import Select from 'react-select'

const AddWoodForm = props => {
  const [selectedWood, setSelectedWood] = useState({
    projectId: props.projectId,
    boardFeet: "",
    hardwoodId: ""
  })
  const [hardwoods, setHardwoods] = useState([])
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
        // primary: 'rgb(255, 190, 141)',
        primary25: 'white',
        neutral0: 'rgb(255, 190, 141)',
        neutral5: 'rgb(35, 34, 34)',
        neutral10: 'rgb(35, 34, 34)',
        neutral20: 'rgb(35, 34, 34)',
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
    props.setToggleShowAddWoodForm(false)
  }

  const handleCancelClick = event => {
    event.preventDefault()
    props.setToggleShowAddWoodForm(false)
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
  
  let yourWoodList = <p>(List Empty)</p>

  if (hardwoods.length > 0) {
    yourWoodList = hardwoods.map(wood => {
      let woodName = woodOptionList.find(item => {
        return item.id === wood.hardwoodId
      })
      
      return (
        <li key={woodName.value} id="added-wood-list-item">
          {`${woodName.value}: ${wood.boardFeet} bdft`}
          <button 
            className="remove-wood-x"
            value={wood.hardwoodId}
            onClick={removeStagedWood}>
              ✖️
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
          >{`Add Selected ->`}
        </button>

      </form>

      <div className='show-added-wood'>

        <h4><strong>
          Wood(s) To Be Added:
        </strong></h4>
        <ul className="staged-woods">
          {yourWoodList}
        </ul>
        <button 
          type="button"
          id="save-button"
          className="save-button"
          onClick={handleSaveHardwoods}
          >Save wood(s) To Project
        </button>
        <button
          id="save-button"
          className="save-button"
          onClick={handleCancelClick}
        >
          Cancel
        </button>
      </div>
            
    </div>

  )

}

export default AddWoodForm