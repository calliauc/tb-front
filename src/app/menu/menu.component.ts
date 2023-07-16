import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  menu: HTMLElement|null = null;

  constructor () {  }

  @ViewChild('menuTest') set playerRef(ref: ElementRef<HTMLElement>) {
    this.menu = ref.nativeElement;
  }
  
  afficheMenu: boolean = false;

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
