import { Component, OnInit } from '@angular/core';
import { UploadedFile } from 'src/app/interfaces/uploadedFile';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: [],
})
export class TableComponent implements OnInit {
  dataSource: Array<UploadedFile> = [
    { name: 'hello.txt', type: 'txt/plain', size: 256 },
    { name: 'hello2.doc', type: 'application/word', size: 54321 },
  ];
  displayedColumns: string[] = ['name', 'type', 'size'];

  constructor() {}

  ngOnInit(): void {}
}
