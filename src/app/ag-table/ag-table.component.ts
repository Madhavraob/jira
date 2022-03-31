import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { CustomTooltip } from './custom-tooltip.component';
import { MedalCellRenderer } from './MedalCellRenderer';
import { TotalValueRenderer } from './total-value-renderer.component';

@Component({
  selector: 'app-ag-table',
  templateUrl: './ag-table.component.html',
  styleUrls: ['./ag-table.component.scss']
})
export class AgTableComponent implements OnInit {

  columnDefs = [
    { headerName: 'Make', field: 'make', tooltipField: 'make', tooltipComponentParams: { color: '#ececec' } },
    { headerName: 'Model', field: 'model', tooltipField: 'model', tooltipComponentParams: { color: '#ececec' }, },
    { headerName: 'Price', field: 'price' },
    { field: 'bronze', cellRenderer: MedalCellRenderer },
    { field: 'total', minWidth: 175, cellRenderer: TotalValueRenderer },
  ];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000, bronze: 5, total: 5 },
    { make: 'Ford', model: 'Mondeo', price: 32000, bronze: 5, total: 5 },
    { make: 'Porsche', model: 'Boxter', price: 72000, bronze: 5, total: 5 }
  ];
  public gridOptions;
  public sideBar: string = 'columns';
  public defaultColDef: ColDef = {
    editable: true,
    sortable: true,
    flex: 1,
    minWidth: 100,
    filter: true,
    resizable: true,
    // allow every column to be aggregated
    enableValue: true,
    // allow every column to be grouped
    enableRowGroup: true,
    // allow every column to be pivoted
    enablePivot: true,
    tooltipComponent: CustomTooltip,
  };
  public tooltipShowDelay = 0;
  public tooltipHideDelay = 2000;

  constructor() {
    this.gridOptions = {
      enableSorting: true,
      enableFilter: true,
      unSortIcon: true,
      suppressCellSelection: true,
      enableColResize: false,
      enablePivot: true,
      domLayout: 'autoHeight',
      rowSelection: 'single',
      context: {},
      pagination: true,
      paginationPageSize: 10,
      onGridReady: (params) => {
        params.api.sizeColumnsToFit();
      },
      onGridSizeChanged: (params) => {
        params.api.sizeColumnsToFit();
      }
    }
  }

  ngOnInit() { }

  btnClick(): void {
    const columns = this.gridOptions.columnApi.getAllColumns();
    const modelColumn = columns.filter(column => column.getColDef().headerName === "model")[0];

    const newState = !modelColumn.isVisible();
    this.gridOptions.columnApi.setColumnVisible(modelColumn, newState);
    this.gridOptions.api.sizeColumnsToFit();
  }
}

// custom cell renderer
// https://www.ag-grid.com/angular-data-grid/component-cell-renderer/
// https://blog.ag-grid.com/learn-to-customize-angular-grid-in-less-than-10-minutes/