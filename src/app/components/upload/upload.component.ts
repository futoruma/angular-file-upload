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
    let curFile: File;
    if (event.type === "change") {
      curFile = event.target.files[0];
    } else {
      curFile = event.dataTransfer.files[0];
    }
    setTimeout(() => {
      this.isUploading = false;
      this.uploadedFiles.push({
        name: curFile.name,
        type: curFile.type,
        size: curFile.size
      })
    }, 1500)

    // if (file?.type.split('/')[0] === 'video') {
    //   console.error('video files are not supported');
    // }

    // const path = `test/${new Date().getTime()}_${file?.name}`;
  }
}
