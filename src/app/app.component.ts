import {Component} from '@angular/core';
import {projectNewData} from '../data';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public data: object[] | undefined;
  public taskSettings: object | undefined;
  public labelSettings: object | undefined;
  public projectStartDate: Date | undefined;
  public projectEndDate: Date | undefined;

  public ngOnInit(): void {
    this.data = projectNewData;
    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      endDate: 'EndDate',
      duration: 'Duration',
      progress: 'Progress',
      dependency: 'Predecessor',
      child: 'subtasks'
    };
    this.projectStartDate = new Date('03/24/2019');
    this.projectEndDate = new Date('07/06/2019');
    this.labelSettings = {
      leftLabel: 'TaskName',
    };
  }
}
