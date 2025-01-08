// Utility function to calculate duration
const calculateDuration = (departureTime, arrivalTime) => {
    const dep = new Date(`1970-01-01T${departureTime}:00Z`);
    const arr = new Date(`1970-01-01T${arrivalTime}:00Z`);
    if (arr < dep) {
        // If arrival time is less than departure time, it means the flight crosses midnight
        arr.setDate(arr.getDate() + 1);
    }
    const duration = new Date(arr - dep);
    return `${duration.getUTCHours()}h ${duration.getUTCMinutes()}m`;
};

// Sample flight routes data with durations
const flightData = [
    {
        flightId: 'AI202',
        departureTime: '08:00',
        arrivalTime: '10:30',
        duration: calculateDuration('08:00', '10:30'),
        stops: [
            { airportId: 1, arrivalTime: '08:00', departureTime: '08:30' },  // Mumbai
            { airportId: 2, arrivalTime: '10:30', departureTime: null },     // Delhi
        ],
    },
    {
        flightId: 'AI203',
        departureTime: '10:00',
        arrivalTime: '12:30',
        duration: calculateDuration('10:00', '12:30'),
        stops: [
            { airportId: 1, arrivalTime: '10:00', departureTime: '10:30' },  // Mumbai
            { airportId: 2, arrivalTime: '12:30', departureTime: null },     // Delhi
        ],
    },
    {
        flightId: 'AI204',
        departureTime: '20:00',
        arrivalTime: '22:30',
        duration: calculateDuration('08:00', '10:30'),
        stops: [
            { airportId: 1, arrivalTime: '20:00', departureTime: '22:30' },  // Mumbai
            { airportId: 2, arrivalTime: '10:30', departureTime: null },     // Delhi
        ],
    },
    {
        flightId: 'DL205',
        departureTime: '15:00',
        arrivalTime: '17:45',
        duration: calculateDuration('08:00', '10:30'),
        stops: [
            { airportId: 1, arrivalTime: '08:00', departureTime: '08:30' },  // Mumbai
            { airportId: 2, arrivalTime: '10:30', departureTime: null },     // Delhi
        ],
    },
    {
        flightId: 'BA101',
        departureTime: '15:00',
        arrivalTime: '17:45',
        duration: calculateDuration('15:00', '17:45'),
        stops: [
            { airportId: 3, arrivalTime: '15:00', departureTime: '15:15' },  // London Heathrow
            { airportId: 4, arrivalTime: '17:45', departureTime: null },     // New York JFK
        ],
    },
    {
        flightId: 'DL200',
        departureTime: '22:00',
        arrivalTime: '07:30',
        duration: calculateDuration('22:00', '07:30'),
        stops: [
            { airportId: 5, arrivalTime: '22:00', departureTime: '22:30' },  // San Francisco
            { airportId: 6, arrivalTime: '07:30', departureTime: null },     // Tokyo Narita
        ],
    },
    {
        flightId: 'UA150',
        departureTime: '09:00',
        arrivalTime: '13:00',
        duration: calculateDuration('09:00', '13:00'),
        stops: [
            { airportId: 7, arrivalTime: '09:00', departureTime: '09:30' },  // Chicago O'Hare
            { airportId: 8, arrivalTime: '13:00', departureTime: null },     // Los Angeles LAX
        ],
    },
    {
        flightId: 'QF300',
        departureTime: '06:30',
        arrivalTime: '22:00',
        duration: calculateDuration('06:30', '22:00'),
        stops: [
            { airportId: 9, arrivalTime: '06:30', departureTime: '07:00' },  // Sydney
            { airportId: 10, arrivalTime: '22:00', departureTime: null },    // Auckland
        ],
    },
];
export {flightData};