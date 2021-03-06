import {Injectable} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  private sideNav: MatSidenav | undefined;

  public setSideNav(sidenav: MatSidenav | undefined) {
    this.sideNav = sidenav;
  }

  public open() {
    return this.sideNav?.open();
  }

  public close() {
    return this.sideNav?.close();
  }

  public toggle(): void {
    this.sideNav?.toggle();
  }
}
