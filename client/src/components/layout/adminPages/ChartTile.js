import React from "react"
import { Chart, registerables, ArcElement } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

const ChartTile = props => {

Chart.register(...registerables)
Chart.register(ArcElement)

const data = {
  labels: ['Purple Heart', 'Black Walnut', 'White Oak'],
  datasets: [{
    data: [50, 28, 19],
    backgroundColor: ['purple', 'blue', 'green']
  }]
}

  return (
    <div id="hardwoodChart">
      <h3>Top Woods In Active Projects</h3>
      <Doughnut data={data}/>
    </div>
  )
}

export default ChartTile
