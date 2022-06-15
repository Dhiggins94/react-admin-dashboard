import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
  Grid,
} from "@syncfusion/ej2-react-grids";

import {
  ordersData,
  ContextMenuItems,
  OrdersGrid,
  ordersGrid,
} from "../data/dummy";

import { Header } from "../components";

export default function Orders() {
  return (
    <div className="m-2 md:m-10 p-2 md:p=10 bg-white rounded-3xl">
      <Header category="Page" title="Orders" />
      <GridComponent
        id="gridcomp"
        dataSource={ordersData}
        allowPaging
        allowSorting
      >
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Resize,
            Sort,
            ContextMenu,
            Filter,
            Page,
            Edit,
            ExcelExport,
            PdfExport,
          ]}
        />
      </GridComponent>
    </div>
  );
}
// the data being mapped from the ordersGrid / data can have pagnation and sorting thanks to syncfusion's gridcomponent module injections . and the "inject services" to apply them
// inject info https://ej2.syncfusion.com/react/documentation/schedule/module-injection/
// things such as allowsorting and allowpaging https://ej2.syncfusion.com/react/documentation/grid/getting-started/
