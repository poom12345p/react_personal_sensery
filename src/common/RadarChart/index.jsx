import { RadarChart, RadarAxis } from '@mui/x-charts/RadarChart';
import Box from '@mui/material/Box';
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
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 900,        // control max width
        mx: "auto",           // center horizontally
      }}
    >
      <RadarChart
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
      </RadarChart>
    </Box>
  );
}
