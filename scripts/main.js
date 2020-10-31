

Highcharts.chart('container', {
    chart: {
        type: 'area'
    },
    title: {
        text: 'Officers Killed or Assaulted in the U.S.'
    },
    subtitle: {
        text: 'Source: <a href="https://www.fbi.gov/services/cjis/ucr/leoka">FBI</a>'
    },
    xAxis: {
        categories: ['2013', '2014', '2015', '2016', '2017', '2018', '2019'],
        tickmarkPlacement: 'on',
        title: {
            enabled: false
        }
    },
    yAxis: {
        title: {
            text: 'Number of Officers'
        },
        labels: {
            formatter: function () {
                return this.value / 1000;
            }
        }
    },
    tooltip: {
        split: true,

    },
    plotOptions: {
        area: {
            stacking: 'normal',
            lineColor: '#666666',
            lineWidth: 1,
            marker: {
                lineWidth: 1,
                lineColor: '#666666'
            }
        }
    },
    series: [{
        name: 'PO Killed',
        data: [27, 51, 21, 66, 46 , 55, 48]
    }, {
        name: 'PO Assaulted',
        data: [49851, 48315, 50212 , 57180 , 60211, 58866, 56034]
    }, {
        name: 'FP Killed',
        data: [4, 0, 1, 1, 0, 2, 0]
    }, {
        name: 'FP Assaulted',
        data: [1770, 1410 , 1336, 1447, 1784, 1766 , 2136]
    }, {
        name: 'PO Accident',
        data: [49, 45, 45, 52, 47 , 51, 41]
    }]
});
Highcharts.chart('container2', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Violent Crime'
    },
    subtitle: {
        text: 'Source: <a href="https://ucr.fbi.gov/crime-in-the-u.s/2018/crime-in-the-u.s.-2018/topic-pages/tables/table-1">FBI</a>'
    },
    xAxis: {
        type: 'category',
        labels: {
            rotation: -45,
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Number of Crimes (millions)'
        }
    },
    legend: {
        enabled: false
    },
    tooltip: {
        pointFormat: 'Crimes:<b>{point.y:.1f} million</b>'
    },
    series: [{
        name: 'Year',
        data: [
          ['2012',3.138],
          ['2013',3.164],
          ['2014',3.189],
          ['2015',3.208],
          ['2016',3.234],
          ['2017',3.251],
          ['2018',3.271],

        ],
        dataLabels: {
            enabled: true,
            rotation: -90,
            color: '#FFFFFF',
            align: 'right',
            format: '{point.y:.1f}', // one decimal
            y: 10, // 10 pixels down from the top
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    }]
});
