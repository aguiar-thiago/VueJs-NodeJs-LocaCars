export const planetChartData = {
    type: 'line',
    data: {
      labels: ['', '', '', '', '', '', '', '', ],
      datasets: [
        { // one line graph
          label: 'Number of Moons',
          data: [100, 80, 77, 91, 67, 62, 27, 14],
          backgroundColor: [
            'rgba(54,73,93,.5)', // Blue
            'rgba(54,73,93,.5)',
            'rgba(54,73,93,.5)',
            'rgba(54,73,93,.5)',
            'rgba(54,73,93,.5)',
            'rgba(54,73,93,.5)',
            'rgba(54,73,93,.5)',
            'rgba(54,73,93,.5)'
          ],
          borderColor: [
            '#36495d',
            '#36495d',
            '#36495d',
            '#36495d',
            '#36495d',
            '#36495d',
            '#36495d',
            '#36495d',
          ],
          borderWidth: 3
        },
        { // another line graph
          label: 'Planet Mass (x1,000 km)',
          data: [80, 95, 82, 76, 139.8, 116.4, 50.7, 49.2],
          backgroundColor: [
            "rgb(33, 220, 158)"
          ],
          borderColor: [
            '#47b784',
          ],
          borderWidth: 3
        }
      ]
    },
    options: {
      responsive: true,
      lineTension: 1,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            padding: 25,
            fontSize: 20,
          },
          gridLines: {
            display: false
          }
        }],
        xAxes: [{
            ticks: {
              beginAtZero: true,
              padding: 25,
              fontSize: 20,
            },
            gridLines: {
              display: false
            }
          }],
      }
    }
  }
  
  export default planetChartData;