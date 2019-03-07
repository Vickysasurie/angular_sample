import { Component,OnInit } from '@angular/core';

import { ApiService } from './api.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'app';
  public show:boolean = false;
  public option:Set<string>;
  public buttonName:any = 'Show';
  public category:any[];
  public responseData:any;
  public listData:any;
  public searchTex:any;

  count : number;

 
   getFoods(){
    this.data.loadData("foods").then((result)=>{
      this.responseData = result;
      console.log(this.responseData);
      if (this.responseData) {
        this.listData = this.responseData;
        console.log(this.listData);
      }else {
        console.log()
      }
    }, (err) => {
        console.log("Rejection");
    }).catch((err)=>{
      console.log('unHandledRejection', err.message);
    });
  }


  
  ngOnInit () { 
  //   for (let i in this.foods) {
  //     this.category[i]=this.foods[i].category;
  //  }
  //  this.option=new Set(this.category);
  //   //this.category=this.foods[].category;
  //   this.data.PostDetails('foods').then((result)=> {
      
  //     this.data.result1=result;
  //    },(err)=>{
   
  //    }).catch((err)=>{
  //      console.log("unhandled rejection",err.message);
  //      });
  

      }

//character=["veerA"];
   character={
    "foodList": {
      "foods": [
        {
          "id": "1",
          "category": "south Indian",
          "name": "Itly",
          "location": "Coimbatore"
        },
        {
          "id": "2",
          "category": "south Indian",
          "name": "Dosa",
          "location": "Coimbatore"
        },
        {
          "id": "3",
          "category": "south Indian",
          "name": "Dosa",
          "location": "Tirupur"
        },
        {
          "id": "4",
          "category": "North Indian",
          "name": "chappathi",
          "location": "Tirupur"
        },
        {
          "id": "5",
          "category": "North Indian",
          "name": "Poori",
          "location": "Tirupur"
        }
      ]
    }
  };

  foods=this.character.foodList.foods;
  
   toggle() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }
constructor(public data:ApiService,public router:Router){
this.getFoods();
  

}
enter(){
  this.router.navigate(['orderfood']); 
}
cart(){
  this.data.count=this.count;
    }
    
}


  