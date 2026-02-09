export interface ScheduleEvent {
  time: string;
  event: string;
  category: string;
  round: string;
}

export interface SessionData {
  title: string;
  events: ScheduleEvent[];
}

export interface ScheduleDay {
  date: string;
  dayNumber: number;
  sessions: SessionData[];
}

export const officialSchedule: ScheduleDay[] = [
  {
    date: '13 February 2026',
    dayNumber: 1,
    sessions: [
      {
        title: 'Morning Session',
        events: [
          { time: '10:00 AM', event: '100 m Race', category: 'Boys', round: 'Heats' },
          { time: '10:30 AM', event: '100 m Race', category: 'Girls', round: 'Heats' },
          { time: '11:00 AM', event: 'Tug of War', category: 'Boys', round: 'Heats' },
          { time: '11:30 AM', event: 'Tug of War', category: 'Girls', round: 'Heats' },
          { time: '12:00 PM', event: '4x100 m Relay', category: 'Boys', round: 'Heats' },
        ],
      },
      {
        title: 'Evening Session',
        events: [
          { time: '02:30 PM', event: 'Opening Ceremony', category: 'Mixed', round: 'Ceremony' },
          { time: '03:00 PM', event: '800 m Race', category: 'Boys', round: 'Final' },
          { time: '03:20 PM', event: '800 m Race', category: 'Girls', round: 'Final' },
          { time: '03:35 PM', event: 'Sack Race', category: 'Boys', round: 'Final' },
          { time: '03:40 PM', event: 'Sack Race', category: 'Girls', round: 'Final' },
          { time: '03:40 PM', event: '100 m Race', category: 'Boys', round: 'Semifinal' },
          { time: '04:00 PM', event: '100 m Race', category: 'Girls', round: 'Semifinal' },
          { time: '04:00 PM', event: 'Chatti Race', category: 'Girls', round: 'Final' },
          { time: '04:10 PM', event: 'Shot Put', category: 'Boys', round: 'Final' },
          { time: '04:30 PM', event: '4x400 m Relay', category: 'Girls', round: 'Final' },
          { time: '04:50 PM', event: '4x400 m Relay', category: 'Boys', round: 'Final' },
        ],
      },
    ],
  },
  {
    date: '14 February 2026',
    dayNumber: 2,
    sessions: [
      {
        title: 'Morning Session',
        events: [
          { time: '09:00 AM', event: '110 m Hurdles', category: 'Boys', round: 'Heats' },
          { time: '09:30 AM', event: '200 m Race', category: 'Girls', round: 'Heats/Final' },
          { time: '09:30 AM', event: 'Discus Throw', category: 'Boys', round: 'Final' },
          { time: '09:40 AM', event: 'Triple Jump', category: 'Boys', round: 'Final' },
          { time: '09:50 AM', event: '1500 m Race', category: 'Boys', round: 'Final' },
          { time: '10:00 AM', event: '1500 m Race', category: 'Girls', round: 'Final' },
          { time: '10:30 AM', event: '200 m Race', category: 'Boys', round: 'Heats' },
          { time: '10:30 AM', event: 'High Jump', category: 'Boys', round: 'Final' },
          { time: '10:50 AM', event: 'Shot Put', category: 'Girls', round: 'Final' },
          { time: '11:00 AM', event: 'Best Physique / Mr. NIT', category: 'Boys', round: 'Final' },
        ],
      },
      {
        title: 'Evening Session',
        events: [
          { time: '02:30 PM', event: '100 m Hurdles', category: 'Girls', round: 'Final' },
          { time: '02:40 PM', event: '110 m Hurdles', category: 'Boys', round: 'Final' },
          { time: '02:40 PM', event: 'Triple Jump', category: 'Girls', round: 'Final' },
          { time: '03:00 PM', event: 'Obstacle Race', category: 'Boys', round: 'Final' },
          { time: '03:20 PM', event: 'Obstacle Race', category: 'Girls', round: 'Final' },
          { time: '03:30 PM', event: '200 m Race', category: 'Boys', round: 'Final' },
          { time: '03:40 PM', event: '3 km Cycle Race', category: 'Boys', round: 'Final' },
          { time: '03:50 PM', event: '1 km Cycle Race', category: 'Girls', round: 'Final' },
          { time: '03:50 PM', event: 'Slow Cycling 50 m', category: 'Boys', round: 'Final' },
          { time: '04:00 PM', event: 'Slow Cycling 50 m', category: 'Girls', round: 'Final' },
          { time: '04:00 PM', event: 'Weightlifting', category: 'Boys/Girls', round: 'Final' },
          { time: '04:10 PM', event: 'Hammer Throw', category: 'Boys', round: 'Final' },
        ],
      },
    ],
  },
  {
    date: '15 February 2026',
    dayNumber: 3,
    sessions: [
      {
        title: 'Morning Session',
        events: [
          { time: '09:00 AM', event: '5000 m', category: 'Boys', round: 'Final' },
          { time: '09:30 AM', event: 'Long Jump', category: 'Girls', round: 'Final' },
          { time: '09:40 AM', event: '400 m Hurdles', category: 'Boys', round: 'Final' },
          { time: '10:00 AM', event: 'Javelin Throw', category: 'Boys', round: 'Final' },
          { time: '10:20 AM', event: '400 m Race', category: 'Boys', round: 'Final' },
          { time: '10:30 AM', event: '400 m Race', category: 'Girls', round: 'Final' },
          { time: '10:30 AM', event: '4x100 m Relay', category: 'Girls', round: 'Final' },
          { time: '11:00 AM', event: 'Children Race', category: 'Mixed', round: 'Final' },
        ],
      },
      {
        title: 'Evening Session (Closing Ceremony)',
        events: [
          { time: '02:30 PM', event: '100 m Race', category: 'Girls', round: 'Final' },
          { time: '02:45 PM', event: '100 m Race', category: 'Boys', round: 'Final' },
          { time: '03:00 PM', event: '4x100 m Inter Teams Relay', category: 'Mixed', round: 'Final' },
          { time: '03:10 PM', event: '4x100 m Inter Clubs/Society Relay', category: 'Mixed', round: 'Final' },
          { time: '03:20 PM', event: 'Inter Staff/Faculty Relay', category: 'Mixed', round: 'Final' },
          { time: '03:30 PM', event: 'Guest Event', category: 'Mixed', round: 'Special' },
          { time: '03:40 PM', event: 'Tug of War', category: 'Mixed', round: 'Captains vs Faculty' },
          { time: '03:50 PM', event: 'Prize Distribution', category: 'Mixed', round: 'Ceremony' },
        ],
      },
    ],
  },
];
