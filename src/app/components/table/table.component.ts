import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatTableDataSource } from '@angular/material/table';


export interface ColumnCheckedEvent {
  col: string;
  checked: boolean;

}
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})



export class TableComponent {

  @Input() tableData: string[][] = [];
  @Input() tableHeader: string[] = [];
  @Output() headerclick = new EventEmitter<ColumnCheckedEvent>();


  dataSource = new MatTableDataSource(this.tableData);



  constructor() {
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  colToggle(event: MatCheckboxChange, col: string) {

    this.headerclick.emit({ col, checked: event.checked })



  }



}
