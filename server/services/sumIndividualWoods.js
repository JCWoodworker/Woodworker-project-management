const sumIndividualWoods = (obj) => {
  
  const newSummedArray = []
  const holder = {}
  
  obj.forEach(function(wood) {
    if (holder.hasOwnProperty(wood.name)) {
      holder[wood.name] = holder[wood.name] + parseInt(wood.boardFeet)
    } else {
      holder[wood.name] = parseInt(wood.boardFeet);
    }
  });
  
  for (const prop in holder) {
    newSummedArray.push({ name: prop, boardFeet: holder[prop] })
  }
  
  return newSummedArray
}

export default sumIndividualWoods