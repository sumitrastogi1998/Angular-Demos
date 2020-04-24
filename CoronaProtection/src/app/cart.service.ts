import { Injectable } from '@angular/core';
import { Items } from './model/items';
import { Router } from '../../node_modules/@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CartService {



  cartItems: Items[] = []
  unique: boolean[] = [true, true, true, true, true];


  total: number = 0;

  items: Items[] = [{ name: "Face Masks(Pack of 10)", imagePath: "../assets/images/mask.jpg", price: 100,counter: 0, isDisabled: true},
  { name: "Pollution masks", imagePath: "../assets/images/Advancemask.jpg", price: 40,counter: 0, isDisabled: true },
  { name: "Hand Gloves", imagePath: "../assets/images/handgloves.jpg", price: 40 ,counter: 0, isDisabled: true},
  { name: "Hand Sanitizers", imagePath: "../assets/images/Sanitizer.jpg", price: 60,counter: 0, isDisabled: true },
  { name: "Soap(Pack of 4)", imagePath: "../assets/images/Soap.jpg", price: 100,counter: 0 , isDisabled: true}]


  itemWiseTotal: number[] = [0,0,0,0,0]

  constructor(private router: Router) {
  }

  addItems() {
    
    console.log("Hello")
    for (let i = 0; i < 5; i++) {
      
      if (this.items[i].counter > 0 && this.unique[i] === true) {
        this.unique[i] = false;
        this.cartItems.unshift(this.items[i])
      }
    }
    this.calcTotal()
    this.router.navigate(['/cart']);
    
  }

   calcTotal(){
     this.total = 0;
     for (let index = 0; index < this.itemWiseTotal.length; index++) {
      this.itemWiseTotal[index] = this.items[index].counter * this.items[index].price;
       this.total += this.itemWiseTotal[index]
     }

   }

}
