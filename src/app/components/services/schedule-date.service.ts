import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ScheduleDate } from 'src/app/domain/ScheduleDate';
import { ScheduleHour } from 'src/app/domain/ScheduleHour';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ScheduleDateService {

  API_URL = environment.api_url;

  constructor(private http: HttpClient) { }


  getAvaliableDates(): Observable<Array<ScheduleDate>> {
    return this.http.get<Array<ScheduleDate>>(`${this.API_URL}/dates`);
  }

  markSchedule(scheduleHour: ScheduleHour):  Observable<Array<ScheduleDate>> {
    return this.http.post<Array<ScheduleDate>>(`${this.API_URL}/schedule`, scheduleHour);
  }

}
