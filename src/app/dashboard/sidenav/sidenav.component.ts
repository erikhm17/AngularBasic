import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {SidenavService} from './sidenav.service';
import {MatSidenav} from '@angular/material/sidenav';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit, AfterViewInit {

  @ViewChild('sidenav') sidenav: MatSidenav | undefined;

  constructor(public _sidenavService: SidenavService, private _router: Router) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this._sidenavService.setSideNav(this.sidenav);
  }


  redirectTo(url: string) {
    this._router.navigate([url]);
    this._sidenavService.close();
  }
}
