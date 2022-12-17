import { ProService } from '../../../../services/product.service';
import { Product } from './../../../../home/home-page/components/Model/Products';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

formValue!:FormGroup;
proObject:Product=new Product()
proData:any;
showAdd!:boolean;
showUpdate!:boolean
  constructor(private Fb:FormBuilder ,private ProService:ProService ,private router:Router ) { }

  ngOnInit(): void {
    this.formValue=this.Fb.group({
     Src:[""],
     tittle:[""],
     subTittle:[""],
    });
    this.GetProduct()
  }
  clickUser() {
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }
PostProduct(){
  this.proObject.src=this.formValue.value.Src;
  this.proObject.tittle=this.formValue.value.tittle;
  this.proObject.subTittle=this.formValue.value.subTittle;
  this.ProService.postProduct(this.proObject).subscribe((res:any)=>{
    console.log(res);
    alert("Add New Product")
    this.formValue.reset();
    var cancel=document.getElementById("cancel");
    cancel?.click();

  })

}
GetProduct(){
this.ProService.getProduct().subscribe((res)=>{
  this.proData=res
})
}

onEdit(pro:Product){
  this.showUpdate = true;
  this.showAdd = false;
  this.proObject.id=pro.id
  this.formValue.controls['Src'].setValue(pro.src);
  this.formValue.controls['tittle'].setValue(pro.tittle);
  this.formValue.controls['subTittle'].setValue(pro.subTittle);
}
UPdatePro(){
  this.showUpdate = true;
  this.showAdd = false;
  this.proObject.src=this.formValue.value.Src;
  this.proObject.tittle=this.formValue.value.tittle;
  this.proObject.subTittle=this.formValue.value.subTittle;
  this.ProService.updateProduct(this.proObject,this.proObject.id)
  .subscribe((res:any)=>{
    console.log(res);
    alert("UpDate Your Product");
    var cancel=document.getElementById("cancel");
    cancel?.click();
    this.GetProduct();
  })
}
DeletePro(pro:Product){
  this.ProService.DeleteProduct(pro.id).subscribe((res:any)=>{
    alert('Your Product is Deleted')
    this.GetProduct();
  })

}
// openPid(pid:number){
// this.router.navigate(["/products",pid])
 
// }
}
