import { RadarChart, RadarAxis } from '@mui/x-charts/RadarChart';

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
    areaOpacity: 0.25,
    valueFormatter,
  }));
  return (
    <RadarChart
      height={500}
      series={series}
      radar={{
        max: 100,
        metrics: metrics,
      }}
    >
      <RadarAxis
        metric= {metrics[0]}
        divisions={5}
        labelOrientation="horizontal"
        angle="360"
      />
    </RadarChart>
  );
}
