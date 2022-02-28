import React from "react"
// import { Chart } from 'chart.js/auto'
// import { Pie } from 'react-chartjs-2'

const ChartTile = props => {

// const data = {
//   labels: ['label1', 'label2'],
//   datasets: [
//     {
//       label: 'These are things',
//       backgroundColor: ['#46bfbd', '#f746a4'],
//       borderWidth: 1,
//       data: props.woodDta
//     }
//   ]
// }

// const options = {
//   title: {text: "title text", display: true},
//   legend: {display: true}
// }

  return (
    <div id="hardwoodChart">
      {/* <Pie data={data} /> */}
    </div>
  )
}

export default ChartTile


// google.charts.load('current', {'packages':['corechart']})
// google.charts.setOnLoadCallback(drawChart)

// function drawChart() {
  
//   var data = new google.visualization.DataTable()
//   data.addColumn('string', 'Hardwood')
//   data.addColumn('number', 'BoardFeet')
//   data.addRows(props.woodData)


//   var options = {
//     'title': `Top Woods by the boardfoot in customers' projects`,
//     'legend': 'bottom',
//     'width': 500,
//     'height': 600,
//   }

//   var chart = new google.visualization.BarChart(document.getElementById('hardwoodChart'))
//   chart.draw(data, options)

// }
