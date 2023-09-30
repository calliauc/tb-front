import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements AfterViewInit {

  menu: HTMLElement|null = null;
  lienMenu: HTMLElement|null = null;
  URL_APP: string = environment.APP_URL;

  constructor () {  }

  afficheMenu: boolean = false;

  @ViewChild('menuTest') set menuRef(ref: ElementRef<HTMLElement>) {
    this.menu = ref.nativeElement;
  }

  @ViewChild('menuLien') set lienMenuRef(ref: ElementRef<HTMLElement>) {
    this.lienMenu = ref.nativeElement;
  }

  ngAfterViewInit(): void {
    this.lienMenu?.setAttribute("href", this.URL_APP);
  }


  public gererMenu(){
    
    if(this.afficheMenu === true){
      this.menu?.classList.add('hidden');
      this.afficheMenu=false;
    } else {
      this.menu?.classList.remove('hidden');
      this.afficheMenu=true;
    }
  }
}
