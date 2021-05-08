let ctx = document.getElementById('myChart').getContext('2d');
let labels = ['TEAM WALLET', 'MARKETING', 'PUBLIC SALE', 'LIQUIDITY LOCK'];
let colorHex = ['#f1ac69', '#5f4bbc', '#d554e5', '#ffc000'];

let myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    datasets: [{
      data: [22300, 30000, 635000, 342700,],
      backgroundColor: colorHex
    }],
    labels: labels
  },
  options: {
    responsive: true,
    legend: {
      position: 'bottom'
    },
    plugins: {
      datalabels: {
        color: '#fff',
        anchor: 'end',
        align: 'start',
        offset: -10,
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 25,
        
        backgroundColor: (context) => {
          return context.dataset.backgroundColor;
        },
        font: {
          weight: 'bold',
          size: '10'
        },
        formatter: (value) => {
          return value + ' ';
        }
      }
    }
  }
})