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
    postWoodsToProject(hardwoods)
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

  let yourWoodList = <p>Select Some Wood!</p>
  if (hardwoods) {
    yourWoodList = hardwoods.map(wood => {
      let woodName = woodOptionList.find(item => {
        return item.id === wood.hardwoodId
      })
      
      return (
        <li key={woodName.value}>
          {`${woodName.value}: ${wood.boardFeet} board-ft`}
        </li>
      )
    })
  }

  const postWoodsToProject = async addWoodData => {
    try {
      const response = await fetch(`/api/v1/projects/add-woods`, {
        method: "POST",
        headers: new Headers ({
          "Content-Type": "application/json",
        }),
        body: JSON.stringify(hardwoods)
      })
      if (!response.ok) {
        if (response.status === 422) {
          const body = await response.json()
          const newErrors = translateServerErrors(body.errors)
          setErrors(newErrors)
        }
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      } else {
        const body = await response.json()
        setErrors([])
      }
    } catch (error) {
      console.error(`Error in fetch ${error.message}`)
    }
  }
  
  return (

    <div className="add-woods-container">

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
          id="save-button"
          className="save-button"
          onClick={handleSaveHardwoods}
          >Save List To Project
        </button>

      </form>

      <div className='show-added-wood'>
        <ul>Selected Woods To Be Added:
          {yourWoodList}
        </ul>
      </div>
      
    </div>

  )

}

export default AddWoodForm