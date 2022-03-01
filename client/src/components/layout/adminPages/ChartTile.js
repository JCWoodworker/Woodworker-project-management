import React from "react"
import { Chart, registerables, ArcElement } from 'chart.js'
import { Pie } from 'react-chartjs-2'

const ChartTile = props => {

const backgroundColors = [
  'yellow',
  'blue',
  'purple',
  'green',
  'rgb(135, 135, 135)',
  'rgb(35, 34, 34, 1)',
  'rgb(255, 190, 141)'
]

Chart.register(...registerables)
Chart.register(ArcElement)

const chartData = {
  labels: props.labels,
  datasets: [{
    data: props.values,
    backgroundColor: backgroundColors
  }]
}

  return (
    <div id="hardwoodChart">
      <h3>Top Woods In Active Projects</h3>
      <Pie data={chartData}/>
    </div>
  )
}

export default ChartTile
