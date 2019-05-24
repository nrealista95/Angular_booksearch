import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @ViewChild('stickyMenu') menuElement: ElementRef;
  sticky = false;
  menuPosition: any;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.menuPosition = this.menuElement.nativeElement.offsetTop;
  }

  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    const windowScroll = window.pageYOffset;
    if(windowScroll >= this.menuPosition) {
        this.sticky = true;
    } else {
        this.sticky = false;
  }
}

}
