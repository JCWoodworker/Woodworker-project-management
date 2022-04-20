export const calculations = (woodCost, projectHours, labor, markup) => {

  woodCost = parseInt(woodCost)
  projectHours = parseInt(projectHours)
  labor = parseInt(labor)
  markup = parseInt(((markup / 100) + 1).toFixed(2))
  const laborCost = (projectHours * labor).toFixed(2)
  const projectCost = parseInt(laborCost + woodCost).toFixed(2)
  const retailPrice = parseInt(projectCost) * markup
  
  return retailPrice

}

