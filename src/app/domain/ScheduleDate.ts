import { ScheduleHour } from "./ScheduleHour";

export interface ScheduleDate {
    month: string,
    dayDate: number;
    dayName: string;
    hours: Array<ScheduleHour>
}