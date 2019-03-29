import { Directive, HostListener,  ElementRef, Renderer2, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Directive({
  selector: '[appDrapDropFile]'
})
export class DrapDropFileDirective implements OnInit {


	@Output() dropUploadFileHandler: EventEmitter<any> = new EventEmitter<any>();

	@Output() isUploadHandler: EventEmitter<any> = new EventEmitter<any>();

  constructor(public el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() : void {
  	console.log('[INIT] - Drag Custom Upload File Loaded - OK');
  }

  @HostListener('dragover', ['$event']) onDragOver(evt){
  	evt.preventDefault();
    evt.stopPropagation();

    this.renderer.addClass(this.el.nativeElement, 'drop-box-shadow');
  }

  @HostListener('dragleave', ['$event']) public onDragLeave(evt){

    evt.preventDefault();
    evt.stopPropagation();
    //do some stuff
    this.renderer.removeClass(this.el.nativeElement, 'drop-box-shadow');
  }

  @HostListener('drop', ['$event']) public onDrop(evt){

  	this.isUploadHandler.emit({
  		uploading: true
  	});

    evt.preventDefault();
    evt.stopPropagation();
    let files = evt.dataTransfer.files;
    if(files.length > 0){
    	
    	setTimeout(() => {
    		this.isUploadHandler.emit({
	  			uploading: false
	  		});

	      this.dropUploadFileHandler.emit({
	      	event: evt,
	      	file: files[0]
	      });

	      this.renderer.removeClass(this.el.nativeElement, 'drop-box-shadow');
    	}, 2000);
    	
    }
  }

}
