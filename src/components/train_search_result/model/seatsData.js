// seatsData.js
export const seatsData = [
    {
        trainId: '1234',  // Foreign key to Trains table
        classes: [
            { classType: '1A', price: 1500, status: 'Available', availability: 20 },
            { classType: '2A', price: 1000, status: 'Available', availability: 15 },
            { classType: '3A', price: 700, status: 'Available', availability: 25 },
            { classType: 'SL', price: 300, status: 'Available', availability: 30 },
        ],
    },
    {
        trainId: '5678',  // Foreign key to Trains table
        classes: [
            { classType: '1A', price: 1800, status: 'Available', availability: 10 },
            { classType: '2A', price: 1200, status: 'Available', availability: 8 },
            { classType: '3A', price: 800, status: 'Available', availability: 12 },
            { classType: 'SL', price: 350, status: 'Available', availability: 25 },
        ],
    },
    // Add more seat details as needed
];
