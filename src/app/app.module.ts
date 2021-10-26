import {DropDownListAllModule, MultiSelectAllModule} from '@syncfusion/ej2-angular-dropdowns';
import {NumericTextBoxAllModule, TextBoxAllModule} from '@syncfusion/ej2-angular-inputs';
import {CheckBoxAllModule} from '@syncfusion/ej2-angular-buttons';
import {GanttAllModule} from '@syncfusion/ej2-angular-gantt';
import {BrowserModule} from '@angular/platform-browser';

import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    GanttAllModule,
    DropDownListAllModule,
    CheckBoxAllModule,
    TextBoxAllModule,
    NumericTextBoxAllModule,
    MultiSelectAllModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

