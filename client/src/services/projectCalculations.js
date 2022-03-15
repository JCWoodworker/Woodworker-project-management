export const calculations = (woodCost, projectHours, labor, markup) => {
  console.log(`*********`)
  console.log(`LABOR: ${labor}`)
  console.log(`MARKUP: ${markup}%`)
  console.log(`WOOD COST: $${woodCost}`)
  console.log(`PROJECT HOURS: ${projectHours}`)

  woodCost = parseInt(woodCost)
  projectHours = parseInt(projectHours)
  labor = parseInt(labor)
  markup = parseInt(((markup / 100) + 1).toFixed(2))
  const laborCost = (projectHours * labor).toFixed(2)
  const projectCost = parseInt(laborCost + woodCost).toFixed(2)
  const retailPrice = parseInt(projectCost) * markup
  
  console.log(`*********`)
  console.log(`LABOR: $${laborCost}`)
  console.log(`TOTAL PROJECT COST: $${projectCost}`)
  console.log(`RETAIL PRICE: $${retailPrice}`)
  console.log(`*********`)

  return retailPrice

}

