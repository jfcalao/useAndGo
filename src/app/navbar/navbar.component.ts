import { NumberFormatStyle } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    
  }
  click(){
    var someElement= document.getElementById("mainNav");
    someElement.className = "navbar navbar-expand-lg navbar-dark fixed-top bg-dark";
  }
  @HostListener("document:scroll")
  scrollfunction(){
    var someElement= document.getElementById("mainNav");
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
      someElement.className = "navbar navbar-expand-lg navbar-dark fixed-top bg-dark";
    }else{
      someElement.classList.remove("bg-dark");
      someElement.className = "navbar navbar-expand-lg navbar-dark fixed-top mt-3 bg-transparent";
    }
  }
}
