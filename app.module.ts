import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { App1Component } from './app1/app1.component';
import { App2Component } from './app2/app2.component';
import {HyphenSlashPipe} from './hyphenToSlash.pipe';
import {AddPrefixWithDr} from './app1/AddPrefix.pipe';
import {AccountNymberWithCross} from './app1/AccountNumberWithX.pipe';
import {ReverseStr} from './app1/ReverseString.pipe';
import {ReverseString} from './app2/ReverseString.pipe';
import {PrefixWithMr} from './app2/PrefixWithMr.pipe';
import {HyphenWithSlash} from './app2/HphentoSlash.pipe';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    App1Component,
    App2Component,
    HyphenSlashPipe,
    AddPrefixWithDr,
    AccountNymberWithCross, ReverseStr, ReverseString, PrefixWithMr, HyphenWithSlash
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [App2Component]
})
export class AppModule { }
