import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {


  
// to bind with textboxes
  public s1:number = 0;
  public s2:string ="";
  public s3:string ="";
  public s4:number=0;
  public s5:number=0; 

  public product:any[] = [
    { pid:10, pname : "tv", brand : "sony",price:25000, qty:10},
    { pid:20, pname : "laptop", brand : "dell",price:55000, qty:20},
    { pid:30, pname : "tab", brand : "acer",price:7000, qty:7 },
    { pid:50, pname : "watch ", brand : "sony",price:10000, qty:10 },
    { pid:40, pname : "mobile", brand : "oneplus",price:35000, qty:11 },
    
  ];

  public addProduct():void
  {
    let obj:any = {};
    obj.pid =  this.s1;
    obj.pname =  this.s2;
    obj.brand =  this.s3;
    obj.price =  this.s4;
    obj.qty =  this.s5;
    var p:any = this.product.findIndex( item => item.pid ==  this.s1 );
    //alert(p);
    if(p!=-1)
    {
      alert("product id already present");

    } 
    else{  
    this.product.push( obj );    
    }
    
  }

  public removeProduct(dno:number):void
  { 
      var n:number = this.product.findIndex( item => item.pid ==  dno );
      this.product.splice(n, 1);
  }

  public selectProduct(dno:number):void
  {
      var obj:any  = this.product.find( item => item.pid ==  dno );

      this.s1 =  obj.pid;
      this.s2 = obj.pname;
      this.s3 = obj.brand;
      this.s4 = obj.price;
      this.s5 = obj.qty;
      
  }
public editProduct():any
  {
    

    var obj1:any = this.product.find( item => item.pid ==  this.s1 );
    obj1.pid =  this.s1;
    obj1.pname =  this.s2;
    obj1.brand =  this.s3;
    obj1.price =  this.s4;
    obj1.qty =  this.s5;

  //this.obj1.sort();
    
//alert(this.s2);


   
  }
  public sortid():any{
  this.product.sort((a, b)=>
  {
    return a.pid-b.pid
  }
  )
}

public sortprice():any{
  this.product.sort((a,b)=>
  {
    return a.price-b.price
  }
  )
}
public sortname():any{
  this.product.sort((a,b)=>
  {
var nameA=a.pname.toLowerCase(), nameB=b.pname.toLowerCase()
    if (nameA < nameB) //sort string ascending
        return -1 
       
    if (nameA > nameB)
        return 1
    return 0 //default return value (no sorting)
}
  )
}
public sortbrand():any{
  this.product.sort((a,b)=>
  {
var nameA=a.brand.toLowerCase(), nameB=b.brand.toLowerCase()
    if (nameA < nameB) //sort string ascending
        return -1 
       
    if (nameA > nameB)
        return 1
    return 0 //default return value (no sorting)
}
  )
}
}
