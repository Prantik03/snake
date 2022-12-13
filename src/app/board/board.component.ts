import { Component, OnInit } from '@angular/core';
import { SharelocationService } from '../sharelocation.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit{

  ele1 = document.getElementById("p1");
  ele2 = document.getElementById("p2");
  loc = [];
  loc1 = 0;
  loc2 = 0;
  
  curr_elementP1 = document.getElementById("");
  curr_elementP2 = document.getElementById("");  
  win="";

  

  constructor(private rlocation:SharelocationService){
    this.changeclour()
  }
  ngOnInit(): void {
    this.rlocation.curmessage.subscribe(msg=>this.loc=msg)
   
  }

  changeclour(){
    if(this.loc[0]=="p1"){

      if(this.curr_elementP1!=null){
        this.curr_elementP1.style.backgroundColor="aliceblue"
      }
      this.ele1 = document.getElementById("p"+this.loc[1]);
      if(this.ele1!=null)
      this.ele1.style.backgroundColor="green";
        
      console.log("p1")
      this.curr_elementP1 = this.ele1;
      
    }
    else{
      if(this.curr_elementP2!=null){
        this.curr_elementP2.style.backgroundColor="aliceblue"
      }
      this.ele2 = document.getElementById("p"+this.loc[1])
      if(this.ele2!=null)
      this.ele2.style.backgroundColor="red";
        
      console.log("p2")
      this.curr_elementP2 = this.ele2
    }
    

  }
  funn(){
    this.changeclour()
    return true
  }


}
