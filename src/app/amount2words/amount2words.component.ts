import { Component } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-amount2words',
  templateUrl: './amount2words.component.html',
  styleUrls: ['./amount2words.component.css']
})
export class Amount2wordsComponent {

  table1Data: string[][] = [];
  table1Header: string[] = ['Amount'];

  table2Data: string[][] = [];

  constructor(private clipboard: Clipboard) { }

  public getDataFromClipBoard($event: any) {
    navigator['clipboard'].readText().then((data) => {

      this.table1Data = data.split("\r\n").map(x => x.split("\t"));


    })

    //  this.table2Data = []
    // this.table2Header = []
    //  this.table1ColsChecked = []

  }



  inWords(amount: string): string {

    const a = ['', 'One ', 'Two ', 'Three ', 'Four ', 'Five ', 'Six ', 'Seven ', 'Eight ', 'Nine ', 'Ten ', 'Eleven ', 'Twelve ', 'Thirteen ', 'Fourteen ', 'Fifteen ', 'Sixteen ', 'Seventeen ', 'Eighteen ', 'Nineteen '];
    const b = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

    let num: string = amount.toString();
    if (num.length > 9) return 'overflow';
    let n: any = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return 'Err';
    var str = '';
    str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'Crore ' : '';
    str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'Lakh ' : '';
    str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'Thousand ' : '';
    str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'Hundred ' : '';
    str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) : '';
    return str;
  }

  convertToWords() {
    //duplicates has duplicates, but it is missing one duplicate of each duplicate item.
    this.table2Data = this.table1Data.map((row: string[]) => {
      return row.map((amount: string) => this.inWords(amount.trim().replaceAll(',', '').replaceAll(' ', '')))
    });
    // console.log(this.table2Data)
  }


  Copy(e: any) {


    // console.log(merged)
    let csvContent: string = '';

    this.table2Data.forEach(row => {
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
