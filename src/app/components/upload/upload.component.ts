import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: [],
})
export class UploadComponent implements OnInit {
  isHovering: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  startUpload(event: any) {
    let curFile;
    if (event.type === "change") {
      curFile = event.target.files[0];
    } else {
      curFile = event.dataTransfer.files[0];
    }
    console.log(curFile);

    // if (file?.type.split('/')[0] === 'video') {
    //   console.error('video files are not supported');
    // }

    // const path = `test/${new Date().getTime()}_${file?.name}`;
  }
}
