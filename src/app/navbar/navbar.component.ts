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
    someElement.className = "navbar navbar-expand-lg navbar-dark fixed-top bgc";
  }
}
