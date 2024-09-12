export const routesData = [
    {
        trainId: '1234',  // Foreign key to Trains table
        departureTime: '08:10',  // Time when the train starts its journey
        arrivalTime: '12:00',    // Time when the train reaches its final destination
        stops: [
            { stationId: 1, arrivalTime: '08:00', departureTime: '08:10' },
            { stationId: 6, arrivalTime: '10:00', departureTime: '10:10' },
            { stationId: 2, arrivalTime: '12:00', departureTime: null },  // Final destination
        ],
    },
    {
        trainId: '5678',  // Foreign key to Trains table
        departureTime: '09:10',  // Time when the train starts its journey
        arrivalTime: '12:30',    // Time when the train reaches its final destination
        stops: [
            { stationId: 3, arrivalTime: '09:00', departureTime: '09:10' },
            { stationId: 7, arrivalTime: '11:00', departureTime: '11:10' },
            { stationId: 4, arrivalTime: '12:30', departureTime: null },  // Final destination
        ],
    },
    // Add more routes as needed
];
