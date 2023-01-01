import { Component } from '@angular/core';
import { ColumnCheckedEvent } from './../components/table/table.component';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-merge-tables',
  templateUrl: './merge-tables.component.html',
  styleUrls: ['./merge-tables.component.css']
})



export class MergeTablesComponent {

  table1Data: string[][] = [];
  table1Header: string[] = [];

  table2Data: string[][] = [];
  table2Header: string[] = [];

  table1ColsChecked: string[] = [];
  table2ColsChecked: string[] = [];



  constructor(private clipboard: Clipboard) { }

  public getDataFromClipBoard($event: any) {
    navigator['clipboard'].readText().then((data) => {

      this.table1Data = data.split("\r\n").map(x => x.split("\t"));
      this.table1Header = this.table1Data.splice(0, 1).flat()
    })
  }

  public getDataFromClipBoard2($event: any) {
    navigator['clipboard'].readText().then((data) => {

      this.table2Data = data.split("\r\n").map(x => x.split("\t"));
      this.table2Header = this.table2Data.splice(0, 1).flat()
    })
  }

  onHeader1Clicked(e: ColumnCheckedEvent) {

    if (e.checked) {
      this.table1ColsChecked.push(e.col);
    } else {
      this.table1ColsChecked.splice(this.table1ColsChecked.indexOf(e.col), 1);  //deleting
    }

  }
  onHeader2Clicked(e: ColumnCheckedEvent) {

    if (e.checked) {
      this.table2ColsChecked.push(e.col);
    } else {
      this.table2ColsChecked.splice(this.table2ColsChecked.indexOf(e.col), 1);  //deleting
    }

  }

  /*  function findByMatchingProperties(set, properties) {
     return set.filter(function (entry) {
         return Object.keys(properties).every(function (key) {
             return entry[key] === properties[key];
         });
     });
 } */

  findByMatchingProperties(keys: string[], set: any, firstItem: any) {
    return set.filter((entry: any[]) => keys.every(key => entry[this.table2Header.indexOf(key)] === firstItem[this.table1Header.indexOf(key)])).flat();
  }

  mergeAndCopy(e: any) {
    console.log('hi')
    let merged = this.table1Data.map(item => {


      let secondobj = this.findByMatchingProperties(this.table1ColsChecked, this.table2Data, item);
      //console.log(item[0], secondobj)

      //for each column to grab, find its index in originalheader and get item at that index
      let filteredsecond = this.table2ColsChecked.map(key => secondobj[this.table2Header.indexOf(key)]);
      // console.log(item[0], filteredsecond)

      return [...item, ...filteredsecond]

    })
    // console.log(merged)
    let csvContent = ''

    merged.forEach(row => {
      csvContent += row.join('\t') + "\r\n"
    })

    this.copyLargeText(csvContent)
  }

  copyLargeText(merged: string) {
    const pending = this.clipboard.beginCopy(merged);
    let remainingAttempts = 3;
    const attempt = () => {
      const result = pending.copy();
      if (!result && --remainingAttempts) {
        setTimeout(attempt);
      } else {
        // Remember to destroy when you're done!
        pending.destroy();
      }
    };
    attempt();
  }

}
