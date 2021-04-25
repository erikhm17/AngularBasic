import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SidenavService} from '../sidenav/sidenav.service';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {



  constructor(public sidenavService: SidenavService) { }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.sidenavService.toggle();
  }
}
