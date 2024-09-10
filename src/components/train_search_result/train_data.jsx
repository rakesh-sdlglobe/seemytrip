const trainData = [
    {
        id: 1,
        name: '12976 JP MYSORE EXP',
        runsOn: 'S M T W T F S • Mail/Express',
        departure: '00:10',
        departureStation: 'KCG',
        arrival: '12:55',
        arrivalStation: 'SBC',
        duration: '12hr 45min',
        classes: [
            { type: 'SL', price: '₹250', status: 'WL 23', availability: '67%' },
            { type: '3E', price: '₹500', status: 'AVL', availability: '85%' },
            { type: '3A', price: '₹950', status: 'WL 10', availability: '50%' },
            { type: '2A', price: '₹1600', status: 'AVL', availability: '90%' },
            { type: '1A', price: '₹2500', status: 'WL 50', availability: '15%' },
        ],
        lastUpdated: '11hr 15min ago'
    },
    {
        id: 2,
        name: '12654 DELHI RAJDHANI',
        runsOn: 'M T W T F S S • Rajdhani',
        departure: '17:10',
        departureStation: 'NDLS',
        arrival: '08:40',
        arrivalStation: 'JUC',
        duration: '15hr 30min',
        classes: [
            { type: 'SL', price: '₹300', status: 'AVL', availability: '90%' },
            { type: '3E', price: '₹700', status: 'WL 15', availability: '30%' },
            { type: '3A', price: '₹1200', status: 'AVL', availability: '70%' },
            { type: '2A', price: '₹2000', status: 'WL 20', availability: '40%' },
            { type: '1A', price: '₹3000', status: 'WL 35', availability: '5%' },
        ],
        lastUpdated: '6hr 25min ago'
    },

    {
        id: 3,
        name: '12654 DELHI RAJDHANI',
        runsOn: 'M T W T F S S • Rajdhani',
        departure: '17:10',
        departureStation: 'NDLS',
        arrival: '08:40',
        arrivalStation: 'JUC',
        duration: '15hr 30min',
        classes: [
            { type: 'SL', price: '₹300', status: 'AVL', availability: '90%' },
            { type: '3E', price: '₹700', status: 'NOT AVL', availability: '5%' },
            { type: '3A', price: '₹1200', status: 'AVL', availability: '60%' },
            { type: '2A', price: '₹2000', status: 'NOT AVL', availability: '0%' },
            { type: '1A', price: '₹3000', status: 'NOT AVL', availability: '0%' },
        ],
        lastUpdated: '6hr 25min ago'
    },
    {

        id: 4,
        name: '12654 DELHI RAJDHANI',
        runsOn: 'M T W T F S S • Rajdhani',
        departure: '17:10',
        departureStation: 'NDLS',
        arrival: '08:40',
        arrivalStation: 'JUC',
        duration: '15hr 30min',
        classes: [
            { type: 'SL', price: '₹300', status: 'AVL', availability: '90%' },
            { type: '3E', price: '₹700', status: 'NOT AVL', availability: '5%' },
            { type: '3A', price: '₹1200', status: 'AVL', availability: '60%' },
            { type: '2A', price: '₹2000', status: 'NOT AVL', availability: '0%' },
            { type: '1A', price: '₹3000', status: 'NOT AVL', availability: '0%' },
        ],
        lastUpdated: '6hr 25min ago'
    }
];

export default trainData;
