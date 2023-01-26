import { Component, OnInit } from '@angular/core';
import { UploadedFile } from 'src/app/interfaces/uploadedFile';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: [],
})
export class UploadComponent implements OnInit {
  uploadedFiles: Array<UploadedFile> = [];
  isHovering: boolean = false;
  isUploading: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  startUpload(event: any) {
    this.isUploading = true;
    let curFileList: FileList;
    if (event.type === 'change') {
      curFileList = event.target.files;
    } else {
      curFileList = event.dataTransfer.files;
    }

    for (let i = 0; i < curFileList.length; i++) {
      setTimeout(() => {
        if (i == curFileList.length - 1) this.isUploading = false;
        this.uploadedFiles.push({
          name: curFileList[i].name,
          type: curFileList[i].type,
          size: curFileList[i].size,
        });
      }, (i + 1) * 500);
    }
  }
}
