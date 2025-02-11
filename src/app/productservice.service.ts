import { Injectable } from '@angular/core';

export interface Product {
  pid: number;
  pname: string;
  city: string;
  price: number;
}

@Injectable({
  providedIn: 'root',
})
export class ProductserviceService {
  private products: Product[];  

  constructor() {
    this.products = [
      { pid: 1, pname: 'Laptop', city: 'New York', price: 1500 },
      { pid: 2, pname: 'Smartphone', city: 'Los Angeles', price: 800 },
      { pid: 3, pname: 'Tablet', city: 'Chicago', price: 600 },
      { pid: 4, pname: 'Headphones', city: 'Houston', price: 150 },
      { pid: 5, pname: 'Smartwatch', city: 'Phoenix', price: 300 },
      { pid: 6, pname: 'Camera', city: 'San Francisco', price: 1200 },
      { pid: 7, pname: 'Printer', city: 'Boston', price: 250 },
      { pid: 8, pname: 'Monitor', city: 'Miami', price: 400 },
      { pid: 9, pname: 'Keyboard', city: 'Seattle', price: 100 },
      { pid: 10, pname: 'Mouse', city: 'Denver', price: 50 },
    ];
  }
  getproductById(pid:any)
  {
return this.products.find(( p:any )=>p.pid==pid)
  }

   
  getProducts(): Product[] 
  {
    return this.products;
  }
}
