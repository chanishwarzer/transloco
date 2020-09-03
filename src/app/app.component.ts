import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  // tslint:disable-next-line
  selector: 'body',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

//transloco testing
// Languages: Object[] = [
//   {
//     label: "English",
//     code: 'en'
//   }, 
//   {
//     label: 'Russian',
//     code: 'es'
//   }];
  direction: string;

  constructor(private router: Router) { 
    document.dir = this.direction;

  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }


}
