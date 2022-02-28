import React from "react"

const ChartTile = props => {

  google.charts.load('current', {'packages':['corechart']})
  google.charts.setOnLoadCallback(drawChart)

  function drawChart() {
    
    var data = new google.visualization.DataTable()
    data.addColumn('string', 'Hardwood')
    data.addColumn('number', 'BoardFeet')
    data.addRows(props.woodData)


    var options = {
      'title': `Top Woods by the boardfoot in customers' projects`,
      'legend': 'bottom',
      'width': 500,
      'height': 600,
    }

    var chart = new google.visualization.BarChart(document.getElementById('hardwoodChart'))
    chart.draw(data, options)

  }


  return (
    <div id="hardwoodChart"></div>
  )
}

export default ChartTile