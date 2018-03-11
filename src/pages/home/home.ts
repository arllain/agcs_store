import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as WC from 'woocommerce-api';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  WooCommerce : any;

  constructor(public navCtrl: NavController) {
    this.WooCommerce = WC({
      url: "http://localhost/agcs/",
      consumerKey:"ck_db5387a79cf293a5f5600bbf12be278d1652cd83",
      consumerSecret:"cs_6fc7884f33d5048a29fe9f21460288e1478625cc",
      version: 'wc/v2',
      wpAPI: true
    });

    this.WooCommerce.getAsync("products").then((data)=>{
      console.log(JSON.parse(data.body));
    }, (err) => {
      console.log(err);
    })
  }

}
