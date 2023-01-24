import { Component, OnInit, Input } from '@angular/core';
import { UploadedFile } from 'src/app/interfaces/uploadedFile';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: [],
})
export class TableComponent implements OnInit {
  @Input() uploadedFiles: Array<UploadedFile> = [];
  displayedColumns: string[] = ['name', 'type', 'size'];

  constructor() {}

  ngOnInit(): void {}
}
