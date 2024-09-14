// trainsData.js
export const trainsData = [
    {
        id: '3456',
        name: 'Vijayawada-Hyderabad Express',
        startStationId: 6,  // Vijayawada Junction
        endStationId: 7,    // Hyderabad Deccan Nampally
        runsOn: 'Tue, Thu, Sun',  // Sample running schedule
        duration: '4h',           // Sample duration
    },
    {
        id: '1234',
        name: 'Vijayawada-Hyderabad Superfast',
        startStationId: 6,  // Vijayawada Junction
        endStationId: 7,    // Hyderabad Deccan Nampally
        runsOn: 'Mon, Wed, Fri',
        duration: '3h 45m',
    },
    {
        id: '2345',
        name: 'Krishna Express',
        startStationId: 6,  // Vijayawada Junction
        endStationId: 7,    // Hyderabad Deccan Nampally
        runsOn: 'Daily',
        duration: '5h',
    },
    {
        id: '5678',
        name: 'Satavahana Express',
        startStationId: 6,  // Vijayawada Junction
        endStationId: 7,    // Hyderabad Deccan Nampally
        runsOn: 'Tue, Thu, Sat',
        duration: '4h 15m',
    },
    {
        id: '7891',
        name: 'Vijayawada-Hyderabad Intercity',
        startStationId: 6,  // Vijayawada Junction
        endStationId: 7,    // Hyderabad Deccan Nampally
        runsOn: 'Sun, Mon, Wed',
        duration: '3h 50m',
    },
    {
        id: '7891',
        name: 'Vijayawada-Hyderabad Intercity',
        startStationId: 6,  // Vijayawada Junction
        endStationId: 5,    // Bengaluru City Junction
        runsOn: 'Sun, Mon, Wed',
        duration: '3h 50m',
    },
    {
        id: '7890',
        name: 'Bengaluru-Chennai Express',
        startStationId: 5,  // Bengaluru City Junction
        endStationId: 4,    // Chennai Egmore
        runsOn: 'Mon, Wed, Fri',  // Sample running schedule
        duration: '4h 30m',      // Sample duration
    },
    {
        id: '4321',
        name: 'Bengaluru-Delhi Express',
        startStationId: 5,  // Bengaluru City Junction
        endStationId: 1,    // New Delhi
        runsOn: 'Tue, Thu, Sat',  // Sample running schedule
        duration: '22h 30m',      // Sample duration
    },
    {
        id: '5678',
        name: 'Karnataka Sampark Kranti Express',
        startStationId: 5,  // Bengaluru City Junction
        endStationId: 1,    // New Delhi
        runsOn: 'Mon, Wed, Fri',  // Sample running schedule
        duration: '36h 45m',      // Sample duration
    },
    {
        id: '6789',
        name: 'Yesvantpur-Delhi Sarai Rohilla AC Duronto Express',
        startStationId: 5,  // Bengaluru City Junction (Yesvantpur)
        endStationId: 1,    // New Delhi (Sarai Rohilla)
        runsOn: 'Wed, Sat',  // Sample running schedule
        duration: '33h 30m',      // Sample duration
    },
    {
        id: '6543',
        name: 'Bengaluru-Howrah Express',
        startStationId: 5,  // Bengaluru City Junction
        endStationId: 3,    // Kolkata Howrah Junction
        runsOn: 'Mon, Wed, Fri',  // Sample running schedule
        duration: '23h 30m',      // Sample duration
    },
     {
        id: '6543',
        name: 'Bengaluru-Howrah Express',
        startStationId: 5,  // Bengaluru City Junction
        endStationId: 3,    // Kolkata Howrah Junction
        runsOn: 'Mon, Wed, Fri',  // Sample running schedule
        duration: '23h 30m',      // Sample duration
    },
    {
        id: '8765',
        name: 'Hyderabad-Mumbai Express',
        startStationId: 7,  // Hyderabad Deccan Nampally
        endStationId: 2,    // Mumbai Chhatrapati Shivaji Maharaj Terminus
        runsOn: 'Mon, Thu, Sat',  // Sample running schedule
        duration: '9h',           // Sample duration
    },
    {
        id: '9876',
        name: 'Vijayawada-Mumbai Express',
        startStationId: 6,  // Vijayawada Junction
        endStationId: 2,    // Mumbai Chhatrapati Shivaji Maharaj Terminus
        runsOn: 'Wed, Fri, Sun',  // Sample running schedule
        duration: '12h',          // Sample duration
    },
    {
        id: '6547',
        name: 'Mysuru-Hubballi Express',
        startStationId: 8,  // Mysuru Junction
        endStationId: 9,    // Hubballi Junction
        runsOn: 'Tue, Thu, Sat',  // Sample running schedule
        duration: '7h',           // Sample duration
    },
    {
        id: '7654',
        name: 'Delhi-Surat Express',
        startStationId: 1,   // New Delhi
        endStationId: 10,    // Surat
        runsOn: 'Mon, Wed, Fri',  // Sample running schedule
        duration: '11h',          // Sample duration
    },
    {
        id: '4321',
        name: 'Mumbai-Ahmedabad Express',
        startStationId: 2,   // Mumbai CSMT
        endStationId: 11,    // Ahmedabad Junction
        runsOn: 'Tue, Thu, Sat',  // Sample running schedule
        duration: '6h',           // Sample duration
    },
    {
        id: '9871',
        name: 'Delhi-Ahmedabad Express',
        startStationId: 1,   // New Delhi
        endStationId: 11,    // Ahmedabad Junction
        runsOn: 'Mon, Wed, Fri',  // Sample running schedule
        duration: '10h',          // Sample duration
    },
    {
        id: '5432',
        name: 'Delhi-Varanasi Express',
        startStationId: 1,   // New Delhi
        endStationId: 12,    // Varanasi Junction
        runsOn: 'Tue, Thu, Sat',  // Sample running schedule
        duration: '10h 30m',       // Sample duration
    },
    {
        id: '8765',
        name: 'Mumbai-Nagpur Express',
        startStationId: 2,   // Mumbai CSMT
        endStationId: 13,    // Nagpur Junction
        runsOn: 'Mon, Wed, Fri',  // Sample running schedule
        duration: '11h',          // Sample duration
    },
    {
        id: '3210',
        name: 'Varanasi-Howrah Express',
        startStationId: 12,  // Varanasi Junction
        endStationId: 3,    // Howrah Junction
        runsOn: 'Mon, Thu, Sat',  // Sample running schedule
        duration: '11h',         // Sample duration
    },
    {
        id: '6789',
        name: 'Bengaluru-Guwahati Express',
        startStationId: 14,  // Bengaluru City Junction
        endStationId: 15,    // Guwahati Junction
        runsOn: 'Mon, Thu, Sat',  // Sample running schedule
        duration: '14h',         // Sample duration
    },
    {
        id: '3456',
        name: 'Bengaluru-Goa Express',
        startStationId: 14,  // Bengaluru City Junction
        endStationId: 16,    // Madgaon Junction
        runsOn: 'Tue, Fri, Sun',  // Sample running schedule
        duration: '14h',         // Sample duration
    },
    {
        id: '5678',
        name: 'Bengaluru-Visakhapatnam Express',
        startStationId: 14,  // Bengaluru City Junction
        endStationId: 17,    // Visakhapatnam Junction
        runsOn: 'Mon, Thu, Sat',  // Sample running schedule
        duration: '12h',         // Sample duration
    },
    // Add more trains as needed
];
