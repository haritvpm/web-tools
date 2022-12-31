import { Component } from '@angular/core';

@Component({
  selector: 'app-merge-tables',
  templateUrl: './merge-tables.component.html',
  styleUrls: ['./merge-tables.component.css']
})
export class MergeTablesComponent {

  table1Data: String[][] = [];
  table1Header: String[] = [];

  public getDataFromClipBoard($event: any) {
    navigator['clipboard'].readText().then((data) => {

      this.table1Data = data.split("\r\n").map(x => x.split("\t"));
      this.table1Header = this.table1Data.splice(0, 1).flat()



    })
  }


}
