const Chart = require('chart.js');
const axios = require('axios');
const { JSDOM } = require('jsdom');
const mydom = new JSDOM('');
const $ = require('jquery')(mydom.window);

module.exports = {
  generateChart: function(chartData) {
    const ctx = $("#myChart");

    
    const pollOptions = [];
    const pollCounts = [];
    chartData.map((item, idx) => {
      pollOptions.push(item.pollOption);
      pollCounts.push(item.pollCount);
    });

    
  
  const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
  });

  },

  getLatestPost: function() {
    const latestPollDiv = ``;
    axios.get('/poll/latest').then(latestPoll => {
      latestPoll.map((item, index) => {
        latestPollDiv += `<div>${item.pollOptions}</div>`;
      });
      return 'asas';
    })
    .catch(err => console.log(err));
  }
} 