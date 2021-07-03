import { IActivity } from '../_models/activity';

export const SAVED_ACTIVITIES: IActivity[] = [
    {
        id: 1,
        name: 'Main Bike Event',
        date: new Date('06/09/2012'),
        distance: 12,
        comments: 'Nice Day, Cool',
        gpxData: '../../assets/gpx/1.gpx',
    },
    {
        id: 2,
        name: 'Mountain Hike Event',
        date: new Date('12/02/2012'),
        distance: 12,
        comments: 'Nice Nihhhy, Cool',
        gpxData: '../../assets/gpx/2.gpx',
    },
    {
        id: 3,
        name: 'Swiming',
        date: new Date('04/11/2012'),
        distance: 10,
        comments: 'Wet water, Cool',
        gpxData: '../../assets/gpx/3.gpx',
    },
    {
        id: 4,
        name: 'Hunting',
        date: new Date('04/11/2012'),
        distance: 10,
        comments: 'Wet water, Cool hunt',
        gpxData: '../../assets/gpx/4.gpx',
    }
];
