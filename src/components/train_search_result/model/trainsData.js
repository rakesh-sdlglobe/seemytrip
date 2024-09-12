// trainsData.js
export const trainsData = [
    {
        id: '1234',
        name: 'Duront Express Train',
        startStationId: 1,  // Foreign key to Stations table
        endStationId: 2,    // Foreign key to Stations table
        runsOn: 'Mon, Wed, Fri',
        duration: '4h',
    },
    {
        id: '5678',
        name: 'Superfast Train',
        startStationId: 3,  // Foreign key to Stations table
        endStationId: 4,    // Foreign key to Stations table
        runsOn: 'Tue, Thu, Sat',
        duration: '3h',
    },
    // Add more trains as needed
];
