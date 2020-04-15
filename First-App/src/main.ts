import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';
import { NgModule }      from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

enableProdMode();

@Component({
  selector: 'my-app',
  template: "<div><h2>{{greet}}</h2></div>"
})

export class InlineTemplateComponent {
	greet:string="Hello World---It is a Demo of angular template!";
}

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ InlineTemplateComponent ],
  bootstrap:    [ InlineTemplateComponent ]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);

  