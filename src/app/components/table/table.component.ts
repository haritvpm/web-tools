import { Component, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})



export class TableComponent {

  @Input() tableData: string[][] = [];
  @Input() tableHeader: string[] = [];


  dataSource = new MatTableDataSource(this.tableData);

  colsChecked: string[] = [];


  constructor() {
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  colToggle(col: string) {

    if (!this.colsChecked.includes(col)) {          //checking weather this.colsCheckeday contain the id
      this.colsChecked.push(col);               //adding to this.colsCheckeday because value doesnt exists
    } else {
      this.colsChecked.splice(this.colsChecked.indexOf(col), 1);  //deleting
    }

    console.log(this.colsChecked)
  }

  isColChecked(col: string) {

    return this.colsChecked.includes(col)
  }

}
