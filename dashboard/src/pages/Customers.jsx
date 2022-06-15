import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Filter,
  Page,
  Toolbar,
  Selection,
  Sort,
  Edit,
  Inject,
} from "@syncfusion/ej2-react-grids";

import { customersData, customersGrid } from "../data/dummy";

import { Header } from "../components";

export default function Customers() {
  return (
    <div className="m-2 md:m-10 p-2 md:p=10 bg-white rounded-3xl">
      <Header category="Page" title="Customers" />
      <GridComponent
        dataSource={customersData}
        allowPaging
        allowSorting
        toolbar={["Delete"]}
        editSettings={{ allowDeleting: true, allowEditing: true }}
        width="auto"
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Toolbar, Page, Selection, Edit, Sort, Filter]} />
      </GridComponent>
    </div>
  );
}
// crud functionality could work here with implemented with syncfusion
// example sources:
// 1. https://ej2.syncfusion.com/react/documentation/schedule/how-to/add-edit-and-remove-events/
// 2.https://ej2.syncfusion.com/react/documentation/data/manipulation/
// 3.https://ej2.syncfusion.com/react/documentation/grid/editing/edit/
// 4.https://www.syncfusion.com/blogs/post/how-to-perform-crud-operations-in-a-react-data-grid-using-redux-a-complete-guide.aspx
// 5.https://ej2.syncfusion.com/react/documentation/grid/editing/persisting-data-in-server/
