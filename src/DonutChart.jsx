import { Chart } from "react-google-charts";

function DonutChart(props) {
 
  const data = [
    ["Category", "Amount"], 
    ["Total Investment", props.total_investment], 
    ["Total Interest", props.total_interest], 
  ];
  
  const options = {
    title: "PPF Calculator",
    pieHole: 0.6,
    is3D: false,
    legend: {position: 'bottom'},
    chartArea: { width: '100%', height: '80%' },
    height: 400,
    backgroundColor: { fill: 'transparent' },
    slices: [{color: '#eef0ff', textStyle: {color: '#5367ff'}}, {color: '#5367ff', textStyle: {color: '#eef0ff'}}],
    enableInteractivity: false
  };

  return (
    <div>
      <Chart
        chartType="PieChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
    </div>
  );
}

export default DonutChart;