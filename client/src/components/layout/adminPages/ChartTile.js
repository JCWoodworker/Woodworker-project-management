import React from "react"
import { Chart, registerables, ArcElement } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

const ChartTile = props => {

const backgroundColors = [
  'rgb(255, 190, 141)',
  'rgb(135, 135, 135)',
  'rgb(35, 34, 34, 1)',
  'yellow',
  'blue',
  'purple',
  'green'
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
      <Doughnut data={chartData}/>
    </div>
  )
}

export default ChartTile
