import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit{

buttonClicked="";
isLeft:boolean=false;
isRight:boolean=true;
isRefresh:boolean=false;

ngOnInit(){
  this.isRefresh=true;
}

moveLeft(){
  this.buttonClicked="left";
  this.isLeft=!this.isLeft;
  this.isRefresh=false;
}

moveRight(){
  this.buttonClicked="right";
  this.isRight=!this.isRight;
  this.isRefresh=false;
}
}
