import { RadarChart, RadarAxis } from '@mui/x-charts/RadarChart';
import Box from '@mui/material/Box';
import { useState } from "react";
import Chart from "react-apexcharts";
// Data from https://ourworldindata.org/emissions-by-fuel

function valueFormatter(v) {
  if (v === null) {
    return 'NaN';
  }
  return `${v.toFixed(2).toLocaleString()}%`;
}



export default function MultiSeriesRadar({ dataSeries, metrics }) {

  console.log(dataSeries);
  const series = dataSeries.map((item) => ({
    label: item.label,
    data: item.data,
    fillArea: true,
    color: item.color,
    areaOpacity: 0.25,
    valueFormatter,
  }));

  const series2 = dataSeries.map((item) => ({
    name: item.label,
    data: item.data,
    color: item.color,
  }));


  const [state, setState] = useState({

    series: series2,
    options: {
      chart: {
        height: 500,
        type: 'radar',
      },
      plotOptions: {
        radar: {
          size: 200,
          scale: {
            min: 0,
            max: 100,     // ✅ THIS is the correct place
            stepSize: 20, // optional
          }
        },
      },
      labels: metrics,
      grid: {
        padding: { left: 40, right: 40 },
      },
      responsive: [
        {
          breakpoint: 768, // tablet
          options: {
            chart: {
              height: 300,
            },
            plotOptions: {
              radar: {
                size: 110,
              },
            },
            grid: {
              padding: {
                left: 80,
                right: 80,
                top: 40,
                bottom: 40,
              }
            },
            xaxis: {
              labels: {
                style: {
                  style: {
                    fontSize: "10px",
                    fontWeight: 600,
                    whiteSpace: "pre-line",
                  }
                },
              },
            },
          },
        },
        {
          breakpoint: 480, // mobile
          options: {
            chart: {
              height: 300,
            },
            plotOptions: {
              radar: {
                size: 100,
              },
            },
            legend: {
              position: "bottom",
              offsetY: 5,
            },
            xaxis: {
              labels: {
                style: {
                  fontSize: "7px",
                },
              },
            },
            dataLabels: { 
                style: {
                  fontSize: "7px",
                },
            },
          },
        },
      ],
      dataLabels: {
        enabled: true
      },

      colors: series2.map(s => s.color),
      markers: {
        size: 3,
        colors: ['#fff'],
        strokeColor: series2.map(s => s.color),
        strokeWidth: 2,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val
          }
        }
      },
      xaxis: {
        categories: metrics
      },
      yaxis: {
        show: true,
        min: 0,
        max: 100,
         stepSize:20,
        labels: {
          formatter: function (val, i) {
            if (i % 2 === 0) {
              return val
            } else {
              return ''
            }
          }
        }
      }
    },


  });


  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 900,        // control max width
        mx: "auto",           // center horizontally
      }}
    >
      {/* <RadarChart
        height={500}
        margin={{
          left: 120,
          right: 120,
          top: 60,
          bottom: 60,
        }}
        series={series}
        radar={{
          max: 100,
          metrics: metrics,
        }}
        slotProps={{
          radarAxis: {
            tickLabelStyle: {
              fontSize: 14,
              fontWeight: 600,
              fill: "#4c13a8",
            },
              tickLabelFormatter: (value) => {
        if (typeof value === "number") {
          return Math.round(value).toString();
        }
        return value;
      }
          },
        }}

      >
        <RadarAxis
          metric={metrics[0]}
          divisions={5}
          labelOrientation="horizontal"
          angle="360"
        />
      </RadarChart> */}
      <Chart options={state.options} series={state.series} type="radar" height={state.height} />
    </Box>
  );
}
