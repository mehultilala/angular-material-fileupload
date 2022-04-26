import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  Renderer2,
} from '@angular/core';

/**
 * A material design file upload queue component.
 */
@Directive({
  selector: 'input[fileUploadInputFor], div[fileUploadInputFor]',
})
export class FileUploadInputForDirective {
  private _queue: any = null;
  private _element: HTMLElement;
  @Input() allowedExtension: string = '';
  @Output() public onFileSelected: EventEmitter<File[]> = new EventEmitter<
    File[]
  >();

  constructor(private element: ElementRef, private _renderer: Renderer2) {
    this._element = this.element.nativeElement;
  }

  ngOnInit() {
    if (this.allowedExtension) {
      this._renderer.setAttribute(
        this._element,
        'accept',
        this.allowedExtension
      );
    }
  }

  @Input('fileUploadInputFor')
  set fileUploadQueue(value: any) {
    if (value) {
      this._queue = value;
    }
  }

  @HostListener('change')
  public onChange(): any {
    let files = (
      Object.values(this.element.nativeElement.files) as File[]
    ).filter((el: any) => {
      return (
        !this.allowedExtension ||
        this.allowedExtension.includes(el.name.split('.').pop().toLowerCase())
      );
    });
    this.onFileSelected.emit(files);

    for (var i = 0; i < files.length; i++) {
      this._queue.add(files[i]);
    }
    this.element.nativeElement.value = '';
  }

  @HostListener('drop', ['$event'])
  public onDrop(event: any): any {
    let files = (Object.values(event.dataTransfer.files) as File[]).filter(
      (el: any) => {
        return (
          !this.allowedExtension ||
          this.allowedExtension.includes(el.name.split('.').pop().toLowerCase())
        );
      }
    );
    this.onFileSelected.emit(files);

    for (var i = 0; i < files.length; i++) {
      this._queue.add(files[i]);
    }
    event.preventDefault();
    event.stopPropagation();
    this.element.nativeElement.value = '';
  }

  @HostListener('dragover', ['$event'])
  public onDropOver(event: any): any {
    event.preventDefault();
  }
}
