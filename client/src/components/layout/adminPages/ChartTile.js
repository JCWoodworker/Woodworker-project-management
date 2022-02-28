import React from "react"
import { Chart, registerables, ArcElement } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

const ChartTile = props => {

// let labels = []
// let data = []

// props.woodData.foreach(woodObject => {
//   labels.push(woodObject.name)
//   data.push(woodObject.boardFeet)
// })

Chart.register(...registerables)
Chart.register(ArcElement)

const chartData = {
  labels: labels,
  datasets: [{
    data: data
    // backgroundColor: ['purple', 'blue', 'green']
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
