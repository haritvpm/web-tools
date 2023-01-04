import { Component } from '@angular/core';

import { Clipboard } from '@angular/cdk/clipboard';
import { ColumnCheckedEvent } from '../shared/table/table.component';
@Component({
  selector: 'app-table-duplicate-finder',
  templateUrl: './table-duplicate-finder.component.html',
  styleUrls: ['./table-duplicate-finder.component.css']
})
export class TableDuplicateFinderComponent {
  table1Data: string[][] = [];
  table1Header: string[] = [];

  table2Data: string[][] = [];
  table2Header: string[] = [];

  table1ColsChecked: string[] = [];


  public getDataFromClipBoard($event: any) {
    navigator['clipboard'].readText().then((data) => {

      this.table1Data = data.split("\r\n").map(x => x.split("\t"));
      this.table1Header = this.table1Data.splice(0, 1).flat()
    })

    //  this.table2Data = []
    // this.table2Header = []
    //  this.table1ColsChecked = []

  }


  onHeader1Clicked(e: ColumnCheckedEvent) {

    if (e.checked) {
      this.table1ColsChecked.push(e.col);
    } else {
      this.table1ColsChecked.splice(this.table1ColsChecked.indexOf(e.col), 1);  //deleting
    }
  }

  findDuplicates(find: string) {

    //let keys = this.table1Data.map(item =>
    //  this.table1ColsChecked.map((key: string) => item[this.table1Header.indexOf(key)]).join('-').toLowerCase())
    // console.log(keys)
    const set = new Set();
    const setDups = new Set();

    this.table1Data.forEach(item => {
      let key = this.table1ColsChecked.map((key: string) => item[this.table1Header.indexOf(key)]).join('-').toLowerCase()
      if (set.has(key)) {
        setDups.add(key);
      } else {
        set.add(key);
      }
    });

    if (find === 'all-dups') {
      const duplicates = this.table1Data.filter(item => {
        let key = this.table1ColsChecked.map((key: string) => item[this.table1Header.indexOf(key)]).join('-').toLowerCase()
        return setDups.has(key)
      });
      //duplicates has duplicates, but it is missing one duplicate of each duplicate item.
      this.table2Data = duplicates
    } else if (find === 'unique-dups') {
      const duplicates = this.table1Data.filter(item => {
        let key = this.table1ColsChecked.map((key: string) => item[this.table1Header.indexOf(key)]).join('-').toLowerCase()
        if (setDups.has(key)) {
          setDups.delete(key)
          return true
        } else {
          return false
        }
      });
      //duplicates has duplicates, but it is missing one duplicate of each duplicate item.
      this.table2Data = duplicates
    } else if (find === 'remove-dups') {
      //remove duplicates and get list items with no duplicates
      const uniquelist = this.table1Data.filter(item => {
        let key = this.table1ColsChecked.map((key: string) => item[this.table1Header.indexOf(key)]).join('-').toLowerCase()
        if (set.has(key)) {
          set.delete(key)
          return true
        } else {
          return false
        }
      });
      //duplicates has duplicates, but it is missing one duplicate of each duplicate item.
      this.table2Data = uniquelist
    }
    this.table2Header = this.table1Header

  }

}
