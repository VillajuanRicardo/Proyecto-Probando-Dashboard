var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Dic 9', 'Dic 11',
                'Dic 13','Dic 15','Dic 17','Dic 19','Dic 21','Dic 23','Dic 25'],
        datasets: [
            {
                label: 'Visitors',
                data: [ 10, 20,22,23,25,24,22,27,26],
                backgroundColor: '#07aa3d',
                borderColor: '#07aa3d',
                borderWidth: 2,
                pointBorderColor: '#07aa3d',
                pointBackgroundColor: "transparent",
                pointHoverBorderColor: "#04c14396",
                pointHoverBorderWidth: 10,
            },
            {
                label: 'Page views',
                data: [ 70, 79,83,88,94,99,120,100,150],
                backgroundColor: '#0966e6',
                borderColor: '#0966e6',
                borderWidth:2,
                pointBorderColor: '#0966e6',
                pointBackgroundColor: "transparent",
                pointHoverBorderColor: "#0965e68c",
                pointHoverBorderWidth: 10,
            }
            
        ]    
    },
    options: {
        responsive:true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    fontColor: "#ffffff",
                },
                gridLines:{
                    color: '#00000044'
                }
            }],
            xAxes:[{
                ticks:{
                    fontColor: "#ffffff",
                },
                gridLines:{
                    color: '#00000044'
                }
            }]
        },
        elements:{
            line:{
                fill: false,
            },
            
            // point:{
            //     radius:5,
            //     borderWidth:4,
            //     backgroundColor:'white',
            //     hoverRadius:7,
            //     hoverBorderWidth:4
            // }
        },
        legend:{
            labels: {
                fontColor: '#ffffff'
            }

        }
    }
});

// GRAFICO SPARKLINE DE LA TABLA
var sparklinePrimero=document.getElementById("sparkline-Unique-Visitor");
var graficoSparklinePrimero=new Chart(sparklinePrimero,{
    type:'line',
    data:{
        labels:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets:[{
            data:[435, 321, 532, 801, 1231, 1098, 732, 321, 451, 482, 513, 397],
            
            borderColor: '#ff3502',
            borderWidth:2,
        }],
        
    },
    options: {
        responsive:false,
        
        legend: {
          display: false
        },
        elements: {
          line: {
            borderColor: '#000000',
            borderWidth: 1
          },
          point: {
            radius: 0
          }
        },
        tooltips: {
          enabled: false
        },
        scales: {
          yAxes: [
            {
              display: false
            }
          ],
          xAxes: [
            {
              display: false
            }
          ]
        }
      }
});

var sparklineSegundo=document.getElementById('sparkline-Bounce-Rate');
var graficoSparklineSegundo=new Chart(sparklineSegundo,{
  type:'line',
  data:{
    labels:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets:[{
        data:[435, 321, 532, 801, 1231, 1098, 732, 321, 451, 482, 513, 397],
        
        borderColor: '#ff7b01',
        borderWidth:2,
    }],
    
  },
  options: {
      responsive:false,
      
      legend: {
        display: false
      },
      elements: {
        line: {
          borderColor: '#000000',
          borderWidth: 1
        },
        point: {
          radius: 0
        }
      },
      tooltips: {
        enabled: false
      },
      scales: {
        yAxes: [
          {
            display: false
          }
        ],
        xAxes: [
          {
            display: false
          }
        ]
      }
    }
});

var sparklineTercero=document.getElementById('sparkline-Total-Page');
var graficoSparklineTercero=new Chart(sparklineTercero,{
  type:'line',
  data:{
    labels:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets:[{
        data:[111, 222, 333, 8401, 131, 1098, 732, 321, 451, 482, 513, 397],
        
        borderColor: '#04c142',
        borderWidth:2,
    }],
    
  },
  options: {
      responsive:false,
      
      legend: {
        display: false
      },
      elements: {
        line: {
          borderColor: '#000000',
          borderWidth: 1
        },
        point: {
          radius: 0
        }
      },
      tooltips: {
        enabled: false
      },
      scales: {
        yAxes: [
          {
            display: false
          }
        ],
        xAxes: [
          {
            display: false
          }
        ]
      }
    }
});

var sparklineCuarto=document.getElementById('sparkline-Avg-Time');
var graficoSparklineCuarto=new Chart(sparklineCuarto,{
  type:'line',
  data:{
    labels:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets:[{
        data:[435, 321, 532, 801, 1231, 1098, 732, 321, 451, 482, 513, 397],
        
        borderColor: '#006cff',
        borderWidth:2,
    }],
    
  },
  options: {
      responsive:false,
      
      legend: {
        display: false
      },
      elements: {
        line: {
          borderColor: '#000000',
          borderWidth: 1
        },
        point: {
          radius: 0
        }
      },
      tooltips: {
        enabled: false
      },
      scales: {
        yAxes: [
          {
            display: false
          }
        ],
        xAxes: [
          {
            display: false
          }
        ]
      }
    }
});

var sparklineQuinto=document.getElementById('sparkline-New-Visit');
var graficoSparklineQuinto=new Chart(sparklineQuinto,{
  type:'line',
  data:{
    labels:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets:[{
        data:[435, 321, 532, 801, 1231, 1098, 732, 321, 451, 482, 513, 397],
        
        borderColor: '#b3b3b3',
        borderWidth:2,
    }],
    
  },
  options: {
      responsive:false,
      
      legend: {
        display: false
      },
      elements: {
        line: {
          borderColor: '#000000',
          borderWidth: 1
        },
        point: {
          radius: 0
        }
      },
      tooltips: {
        enabled: false
      },
      scales: {
        yAxes: [
          {
            display: false
          }
        ],
        xAxes: [
          {
            display: false
          }
        ]
      }
    }
});

var sparklineSexto=document.getElementById('sparkline-Return-Visitors');
var graficoSparklineSexto=new Chart(sparklineSexto,{
  type:'line',
  data:{
    labels:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets:[{
        data:[435, 321, 532, 801, 1231, 1098, 732, 321, 451, 482, 513, 397],
        
        borderColor: '#000000',
        borderWidth:2,
    }],
    
  },
  options: {
      responsive:false,
      
      legend: {
        display: false
      },
      elements: {
        line: {
          borderColor: 'black',
          borderWidth: 1
        },
        point: {
          radius: 0
        }
      },
      tooltips: {
        enabled: false
      },
      scales: {
        yAxes: [
          {
            display: false
          }
        ],
        xAxes: [
          {
            display: false
          }
        ]
      }
    }
});