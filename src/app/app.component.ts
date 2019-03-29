import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'upload-file';

  isUploading : boolean;

  constructor() {
  	//
  }

  ngOnInit() : void {
  	this.isUploading = false;
  }
  
	onDropSuccesFile(object){
	  console.log('File loaded result callback', object);
	}

	onUploadingProgress(event) : void {
		console.log('uploading', event);
		this.isUploading = event.uploading;
	}
}
