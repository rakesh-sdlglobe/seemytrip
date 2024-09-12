export const routesData = [
    {
        trainId: '3456',  // New train ID
        departureTime: '07:30',  // Sample departure time from Vijayawada
        arrivalTime: '11:30',    // Sample arrival time at Hyderabad
        stops: [
            { stationId: 6, arrivalTime: '07:30', departureTime: '07:40' },  // Vijayawada Junction
            { stationId: 7, arrivalTime: '11:30', departureTime: null },      // Hyderabad Deccan Nampally
        ],
    },
    {
        trainId: '7890',  // New train ID
        departureTime: '06:00',  // Sample departure time from Bengaluru
        arrivalTime: '10:30',    // Sample arrival time at Chennai
        stops: [
            { stationId: 5, arrivalTime: '06:00', departureTime: '06:10' },  // Bengaluru City Junction
            { stationId: 4, arrivalTime: '10:30', departureTime: null },     // Chennai Egmore
        ],
    },
    {
        trainId: '4321',  // New train ID
        departureTime: '08:00',  // Sample departure time from Bengaluru
        arrivalTime: '06:30',    // Sample arrival time at New Delhi (next day)
        stops: [
            { stationId: 5, arrivalTime: '08:00', departureTime: '08:15' },  // Bengaluru City Junction
            { stationId: 1, arrivalTime: '06:30', departureTime: null },     // New Delhi
        ],
    },
    {
        trainId: '6543',  // New train ID
        departureTime: '09:00',  // Sample departure time from Bengaluru
        arrivalTime: '08:30',    // Sample arrival time at Howrah (next day)
        stops: [
            { stationId: 5, arrivalTime: '09:00', departureTime: '09:15' },  // Bengaluru City Junction
            { stationId: 3, arrivalTime: '08:30', departureTime: null },     // Kolkata Howrah Junction
        ],
    },
    {
        trainId: '8765',  // New train ID
        departureTime: '07:00',  // Sample departure time from Hyderabad
        arrivalTime: '16:00',    // Sample arrival time at Mumbai
        stops: [
            { stationId: 7, arrivalTime: '07:00', departureTime: '07:15' },  // Hyderabad Deccan Nampally
            { stationId: 2, arrivalTime: '16:00', departureTime: null },     // Mumbai Chhatrapati Shivaji Maharaj Terminus
        ],
    },
    {
        trainId: '9876',  // New train ID
        departureTime: '06:00',  // Sample departure time from Vijayawada
        arrivalTime: '18:00',    // Sample arrival time at Mumbai
        stops: [
            { stationId: 6, arrivalTime: '06:00', departureTime: '06:15' },  // Vijayawada Junction
            { stationId: 2, arrivalTime: '18:00', departureTime: null },     // Mumbai Chhatrapati Shivaji Maharaj Terminus
        ],
    },
    {
        trainId: '6547',  // New train ID
        departureTime: '07:30',  // Sample departure time from Mysuru
        arrivalTime: '14:30',    // Sample arrival time at Hubballi
        stops: [
            { stationId: 8, arrivalTime: '07:30', departureTime: '07:45' },  // Mysuru Junction
            { stationId: 9, arrivalTime: '14:30', departureTime: null },     // Hubballi Junction
        ],
    },
    {
        trainId: '7654',  // New train ID
        departureTime: '06:00',  // Sample departure time from New Delhi
        arrivalTime: '17:00',    // Sample arrival time at Surat
        stops: [
            { stationId: 1, arrivalTime: '06:00', departureTime: '06:15' },  // New Delhi
            { stationId: 10, arrivalTime: '17:00', departureTime: null },    // Surat
        ],
    },
    {
        trainId: '4321',  // New train ID
        departureTime: '07:00',  // Sample departure time from Mumbai
        arrivalTime: '13:00',    // Sample arrival time at Ahmedabad
        stops: [
            { stationId: 2, arrivalTime: '07:00', departureTime: '07:15' },  // Mumbai CSMT
            { stationId: 11, arrivalTime: '13:00', departureTime: null },    // Ahmedabad Junction
        ],
    },
    {
        trainId: '9871',  // New train ID
        departureTime: '08:00',  // Sample departure time from New Delhi
        arrivalTime: '18:00',    // Sample arrival time at Ahmedabad
        stops: [
            { stationId: 1, arrivalTime: '08:00', departureTime: '08:15' },  // New Delhi
            { stationId: 11, arrivalTime: '18:00', departureTime: null },    // Ahmedabad Junction
        ],
    },
    {
        trainId: '5432',  // New train ID
        departureTime: '07:00',  // Sample departure time from New Delhi
        arrivalTime: '17:30',    // Sample arrival time at Varanasi
        stops: [
            { stationId: 1, arrivalTime: '07:00', departureTime: '07:15' },  // New Delhi
            { stationId: 12, arrivalTime: '17:30', departureTime: null },    // Varanasi Junction
        ],
    },
    {
        trainId: '8765',  // New train ID
        departureTime: '10:00',  // Sample departure time from Mumbai
        arrivalTime: '21:00',    // Sample arrival time at Nagpur
        stops: [
            { stationId: 2, arrivalTime: '10:00', departureTime: '10:15' },  // Mumbai CSMT
            { stationId: 13, arrivalTime: '21:00', departureTime: null },    // Nagpur Junction
        ],
    },
    {
        trainId: '3210',  // New train ID
        departureTime: '18:00',  // Sample departure time from Varanasi
        arrivalTime: '05:00',    // Sample arrival time at Howrah
        stops: [
            { stationId: 12, arrivalTime: '18:00', departureTime: '18:15' },  // Varanasi Junction
            { stationId: 3, arrivalTime: '05:00', departureTime: null },      // Howrah Junction
        ],
    },
    {
        trainId: '6789',  // New train ID
        departureTime: '08:00',  // Sample departure time from Bengaluru
        arrivalTime: '22:00',    // Sample arrival time at Guwahati
        stops: [
            { stationId: 14, arrivalTime: '08:00', departureTime: '08:15' },  // Bengaluru City
            { stationId: 15, arrivalTime: '22:00', departureTime: null },     // Guwahati Junction
        ],
    },
    {
        trainId: '3456',  // New train ID
        departureTime: '16:00',  // Sample departure time from Bengaluru
        arrivalTime: '06:00',    // Sample arrival time at Goa
        stops: [
            { stationId: 14, arrivalTime: '16:00', departureTime: '16:15' },  // Bengaluru City
            { stationId: 16, arrivalTime: '06:00', departureTime: null },     // Madgaon Junction
        ],
    },
    {
        trainId: '5678',  // New train ID
        departureTime: '11:00',  // Sample departure time from Bengaluru
        arrivalTime: '23:00',    // Sample arrival time at Visakhapatnam
        stops: [
            { stationId: 14, arrivalTime: '11:00', departureTime: '11:15' },  // Bengaluru City
            { stationId: 17, arrivalTime: '23:00', departureTime: null },     // Visakhapatnam Junction
        ],
    },
    // Add more routes as needed
];
