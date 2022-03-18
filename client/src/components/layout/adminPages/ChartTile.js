import React from "react"
import { Chart, registerables, ArcElement } from 'chart.js'
import { Bar } from 'react-chartjs-2'

const ChartTile = props => {
  
Chart.register(...registerables)
Chart.register(ArcElement)

const backgroundColors = [
  'rgb(255, 167, 99)',
  'rgb(94, 161, 85)',
  'rgb(128, 124, 122)',
  'rgb(133, 82, 44)',
  'rgb(53, 92, 48)',
  'rgb(77, 77, 77)',
  'rgb(69, 30, 0)',
  'rgb(6, 51, 0)',
  'rgb(48, 48, 48)',
  'rgb(33, 33, 33)',
]

const options = {
  
  scales: {
    y:
      {
        min: 0,
        max: props.values[0]
      }
  }
}

const chartData = {
  labels: props.labels,
  datasets: [{
    label: "Board Feet",
    data: props.values,
    backgroundColor: backgroundColors,
    borderWidth: 0
  }]
}

  return (
    <div id="hardwoodChart">
      <h3>Top Woods In Active Projects</h3>
      <Bar 
        data={chartData}
        options={options}
      />
    </div>
  )
}

export default ChartTile
