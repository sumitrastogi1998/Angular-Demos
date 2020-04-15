import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularFormsLab';

  public name;
  public id;
  public cost;
  public category = "";
  public availableOnline;
  public availableInStore = ["", "", "", ""];
  public stores;
  constructor(){
     this.stores = [];
  }

  addProduct() {
    this.stores = []
    if (!this.availableInStore[0] && !this.availableInStore[1] && !this.availableInStore[2] && !this.availableInStore[3])
      alert("Select atleast one item from store")
    else {
      if (this.availableInStore[0])
        this.stores.push("BigBazar")
      if (this.availableInStore[1])
        this.stores.push("Dmart")
      if (this.availableInStore[2])
        this.stores.push("Reliance")
      if (this.availableInStore[3])
        this.stores.push("Mega Store")
      console.log("Product Id :" +this.id + "\n" +"Product Name :" + this.name + "\n" +"Product Cost :" + this.cost + "\n" +"Product Category :" + this.category + "\n" +"Is Product Available Online :" + this.availableOnline +"\n"+"Stores containing Products:" + this.stores)
      alert("Product Id :" +this.id + "\n" +"Product Name :" + this.name + "\n" +"Product Cost :" + this.cost + "\n" +"Product Category :" + this.category + "\n" +"Is Product Available Online :" + this.availableOnline +"\n"+"Stores containing Products:" + this.stores)

    }
  }
}
