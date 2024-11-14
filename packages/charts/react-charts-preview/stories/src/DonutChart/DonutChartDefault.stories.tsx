import * as React from 'react';
import { DonutChart, ChartProps, getColorFromToken } from '@fluentui/react-charts-preview';
import plotlyDataJson from './plotlyData.json';

interface PlotlyDataInterface {
  labels: string[];
  values: number[];
  type: string;
  marker: {
    colors: string[];
  };
}

const convertPlotlyToChartProps = (plotlyData: PlotlyDataInterface) => {
  const points = plotlyData.labels.map((label, index) => ({
    legend: label,
    data: plotlyData.values[index],
    color: getColorFromToken(plotlyData.marker.colors[index]),
  }));

  const data: ChartProps = {
    chartTitle: 'Donut chart basic example',
    chartData: points,
  };
  return data;
};

export const DonutChartBasic = () => {
  const chartProps = convertPlotlyToChartProps(plotlyDataJson);

  return (
    <DonutChart
      culture={typeof window !== 'undefined' ? window.navigator.language : 'en-us'}
      data={chartProps}
      innerRadius={55}
      href={'https://developer.microsoft.com/en-us/'}
      legendsOverflowText={'overflow Items'}
      hideLegend={false}
      height={220}
      valueInsideDonut={39000}
    />
  );
};

DonutChartBasic.parameters = {
  docs: {
    description: {},
  },
};
