import React from "react"

const ChartTile = props => {

  google.charts.load('current', {'packages':['corechart']})
  google.charts.setOnLoadCallback(drawChart)

  function drawChart() {
    
    var data = new google.visualization.DataTable()
    data.addColumn('string', 'Hardwood')
    data.addColumn('number', 'BoardFeet')
    data.addRows([
      ['Purple Heart', 58],
      ['Black Walnut', 41],
      ['Maple', 28],
      ['Wenge', 23],
      ['Others', 1]
    ])

    var options = {
      'title': 'Top Woods Your Customers Need',
      'legend': 'bottom',
      'is3d': true,
      'width': 500,
      'height': 300,
    }

    var chart = new google.visualization.BarChart(document.getElementById('hardwoodChart'))
    chart.draw(data, options)

  }


  return (
    <div id="hardwoodChart"></div>
  )
}

export default ChartTile