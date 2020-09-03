import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { navItems } from '../../_nav';

//transloco
import { TranslocoService, AvailableLangs } from '@ngneat/transloco';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements AfterViewInit , OnDestroy{
  public sidebarMinimized = false;
  public navItems = navItems;

  // transloco
  private subscription: Subscription = Subscription.EMPTY;
  availableLangs: AvailableLangs;
  res: string='Dashboard';
  public now=  Date.now;
  constructor(private translocoService: TranslocoService) {
    this.availableLangs = this.translocoService.getAvailableLangs(); 
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  ngAfterViewInit(): void {
    this.navItems.map(x => {
      if (x.name) {
        this.translocoService.selectTranslate(x.name).subscribe(t=>{
          x.name = t;console.log(t.name);
        });
        
      }

    })
  }

  try(){
   //this.translocoService.selectTranslate('Dashboard',{},'es' );
  }
  ngOnInit(): void {
    // this.navItems.map(x => {
    //   if (name) {
    //     x.name = this.translocoService.translate(x.name);
    //     console.log(x.name);
    //   }

    // })
  }
  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  changeLanguages(lang) {
     // Ensure new active lang is loaded
     this.subscription.unsubscribe();
     this.subscription = this.translocoService
       .load(lang)
       .pipe(take(1))
       .subscribe(() => {
         this.translocoService.setActiveLang(lang);
       });
  }
}
