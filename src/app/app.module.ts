import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgIFComponent } from './structural/ng-if/ng-if.component';
import { NgForComponent } from './structural/ng-for/ng-for.component';
import { NgSwitchComponent } from './structural/ng-switch/ng-switch.component';
import { NgClassComponent } from './attribute/ng-class/ng-class.component';
import { FormsModule } from '@angular/forms';
import { MyCustomDirective } from './directives/my-custom.directive';
import { Custom1Component } from './directives/custom1/custom1.component';
import { MyCustom2Directive } from './directives/my-custom2.directive';
import { MyCustom3Directive } from './directives/my-custom3.directive';
import { MyCustom4Directive } from './directives/my-custom4.directive';
import { CustomPipe1Pipe } from './CustomPipe/custom-pipe1.pipe';
import { MyCustom5Directive } from './directives/my-custom5.directive';
import { CustomPipeComponent } from './CustomPipe/custom-pipe/custom-pipe.component';
import { CustomPipe2Pipe } from './CustomPipe/custom-pipe2.pipe';
import { CustomPipe2Component } from './CustomPipe/custom-pipe2/custom-pipe2.component';
import { CustomPipe3Component } from './CustomPipe/custom-pipe3/custom-pipe3.component';

@NgModule({
  declarations: [
    AppComponent,
    NgIFComponent,
    NgForComponent,
    NgSwitchComponent,
    NgClassComponent,
    MyCustomDirective,
    Custom1Component,
    MyCustom2Directive,
    MyCustom3Directive,
    MyCustom4Directive,
    CustomPipe1Pipe,
    MyCustom5Directive,
    CustomPipeComponent,
    CustomPipe2Pipe,
    CustomPipe2Component,
    CustomPipe3Component
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CustomPipe2Pipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
