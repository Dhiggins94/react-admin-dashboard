import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  StackingColumnSeries,
  Tooltip,
} from "@syncfusion/ej2-react-charts";
import {
  stackedCustomSeries,
  stackedPrimaryXAxis,
  stackedPrimaryYAxis,
} from "../../data/dummy";

export default function Stacked({width, height}) {
  return <ChartComponent
    width={width}
    height={height}
    id="charts"
    primaryXAxis={stackedPrimaryXAxis}
    primaryYAxis={stackedPrimaryYAxis}
    chartArea={{ border: { width: 0 } }}
    tooltip={{ enable: true }}
    legendSettings={{background:"white"}}
  >
    <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]} />
    <SeriesCollectionDirective >
      {stackedCustomSeries.map((item, index) => (
        <SeriesDirective key={index} {...item} />
      ))}
    </SeriesCollectionDirective>
  </ChartComponent>;
}


// https://ej2.syncfusion.com/react/documentation/chart/how-to/stacking-total/ for stacked componens

// this is for charts https://ej2.syncfusion.com/react/documentation/chart/chart-dimensions/
// serives inside of inject means what kind of functinality we want our chart to have so things like a legend and a category are examples