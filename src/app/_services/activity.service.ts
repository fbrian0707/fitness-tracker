import { Injectable } from '@angular/core';
import { IActivity } from '../_models/activity';
import { SAVED_ACTIVITIES } from '../data/activity.data';

@Injectable()
export class ActivityService {

constructor() {}

getActivities(): IActivity[] {
    return SAVED_ACTIVITIES.slice(0);
}

getTotalActivities(activities: IActivity[]) {
    return activities.length;
}

getTotalDistance(activities: IActivity[]) {
    let totalDistance = 0;
    for (let i = 0; i < activities.length ; i++) {
        totalDistance += activities[i].distance;
    }
    return totalDistance;
}


getFirstDate(activities: IActivity[]) {
    let earliestDate = new Date('01/01/2020');
    for (let i = 0; i < activities.length ; i++) {
        const currentDate = activities[i].date;
        // tslint:disable-next-line:curly
        if (currentDate < earliestDate)
        earliestDate = currentDate;
    }
    return  earliestDate;
}

}

