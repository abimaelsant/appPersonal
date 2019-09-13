import { Component } from '@angular/core';
import { InAppBrowser, InAppBrowserObject } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private iab: InAppBrowser) {
    this.abreLink();
  }

  abreLink() {
    const options = InAppBrowserObject
    const browser = this.iab.create('http://meutreino.life/', '_self', options);

    browser.on('loadstop').subscribe(event => {
      browser.insertCSS({ code: "body{color: red;" });
    });

  }

}
