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
<<<<<<< HEAD
            { type: 'SL', price: '₹250', status: 'WL 23', availability: '67%' },
            { type: '3E', price: '₹500', status: 'AVL', availability: '85%' },
            { type: '3A', price: '₹950', status: 'WL 10', availability: '50%' },
            { type: '2A', price: '₹1600', status: 'AVL', availability: '90%' },
            { type: '1A', price: '₹2500', status: 'WL 50', availability: '15%' },
=======
            { type: 'SL', price: '₹250', status: 'AVL', availability: '85%' },
            { type: 'CC', price: '₹855', status: 'NOT AVL', availability: '0%' },
            { type: '3E', price: '₹500', status: 'NOT AVL', availability: '10%' },
            { type: '3A', price: '₹950', status: 'AVL', availability: '70%' },
            { type: '2A', price: '₹1600', status: 'NOT AVL', availability: '5%' },
            { type: '1A', price: '₹2500', status: 'NOT AVL', availability: '0%' },
>>>>>>> 23b5cb7adc8550ac193dd9e8c159241ad462f68c
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
<<<<<<< HEAD
            { type: '3E', price: '₹700', status: 'WL 15', availability: '30%' },
            { type: '3A', price: '₹1200', status: 'AVL', availability: '70%' },
            { type: '2A', price: '₹2000', status: 'WL 20', availability: '40%' },
            { type: '1A', price: '₹3000', status: 'WL 35', availability: '5%' },
=======
            { type: 'CC', price: '₹1500', status: 'NOT AVL', availability: '0%' },
            { type: '3E', price: '₹700', status: 'NOT AVL', availability: '5%' },
            { type: '3A', price: '₹1200', status: 'AVL', availability: '60%' },
            { type: '2A', price: '₹2000', status: 'NOT AVL', availability: '0%' },
            { type: '1A', price: '₹3000', status: 'NOT AVL', availability: '0%' },
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
            { type: 'CC', price: '₹1500', status: 'NOT AVL', availability: '0%' },
            { type: '3E', price: '₹700', status: 'NOT AVL', availability: '5%' },
            { type: '3A', price: '₹1200', status: 'AVL', availability: '60%' },
            { type: '2A', price: '₹2000', status: 'NOT AVL', availability: '0%' },
            { type: '1A', price: '₹3000', status: 'NOT AVL', availability: '0%' },
>>>>>>> 23b5cb7adc8550ac193dd9e8c159241ad462f68c
        ],
        lastUpdated: '6hr 25min ago'
    },
    {
<<<<<<< HEAD
        id: 3,
        name: '11013 COIMBATORE EXP',
        runsOn: 'S M T W T F S • Mail/Express',
        departure: '23:50',
        departureStation: 'MAS',
        arrival: '07:45',
        arrivalStation: 'CBE',
        duration: '7hr 55min',
        classes: [
            { type: 'SL', price: '₹200', status: 'WL 30', availability: '55%' },
            { type: '3E', price: '₹700', status: 'WL 18', availability: '45%' },
            { type: '3A', price: '₹900', status: 'AVL', availability: '80%' },
            { type: '2A', price: '₹1400', status: 'WL 22', availability: '25%' },
            { type: '1A', price: '₹2200', status: 'AVL', availability: '60%' },
        ],
        lastUpdated: '9hr 50min ago'
    },
    {
        id: 4,
        name: '12296 SANGAMITHRA EXP',
        runsOn: 'S M T W T F S • Superfast',
        departure: '21:35',
        departureStation: 'SBC',
        arrival: '07:30',
        arrivalStation: 'NZM',
        duration: '33hr 55min',
        classes: [
            { type: 'SL', price: '₹350', status: 'WL 45', availability: '40%' },
            { type: '3E', price: '₹1200', status: 'WL 20', availability: '50%' },
            { type: '3A', price: '₹1600', status: 'AVL', availability: '75%' },
            { type: '2A', price: '₹2000', status: 'WL 10', availability: '35%' },
            { type: '1A', price: '₹3000', status: 'AVL', availability: '60%' },
        ],
        lastUpdated: '4hr 30min ago'
    },
    {
        id: 5,
        name: '12658 CHENNAI MAIL',
        runsOn: 'S M T W T F S • Mail/Express',
        departure: '22:30',
        departureStation: 'SBC',
        arrival: '07:50',
        arrivalStation: 'MAS',
        duration: '9hr 20min',
        classes: [
            { type: 'SL', price: '₹280', status: 'AVL', availability: '95%' },
            { type: '3E', price: '₹600', status: 'WL 40', availability: '15%' },
            { type: '3A', price: '₹1000', status: 'AVL', availability: '65%' },
            { type: '2A', price: '₹1500', status: 'WL 30', availability: '25%' },
            { type: '1A', price: '₹2000', status: 'AVL', availability: '80%' },
        ],
        lastUpdated: '2hr 10min ago'
    },
    {
        id: 6,
        name: '12623 TRIVANDRUM MAIL',
        runsOn: 'S M T W T F S • Mail/Express',
        departure: '19:15',
        departureStation: 'MAS',
        arrival: '06:00',
        arrivalStation: 'TVM',
        duration: '10hr 45min',
        classes: [
            { type: 'SL', price: '₹220', status: 'WL 50', availability: '30%' },
            { type: '3E', price: '₹800', status: 'WL 25', availability: '40%' },
            { type: '3A', price: '₹1100', status: 'AVL', availability: '75%' },
            { type: '2A', price: '₹1700', status: 'WL 12', availability: '20%' },
            { type: '1A', price: '₹2400', status: 'AVL', availability: '65%' },
        ],
        lastUpdated: '3hr 45min ago'
=======
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
            { type: 'CC', price: '₹1500', status: 'NOT AVL', availability: '0%' },
            { type: '3E', price: '₹700', status: 'NOT AVL', availability: '5%' },
            { type: '3A', price: '₹1200', status: 'AVL', availability: '60%' },
            { type: '2A', price: '₹2000', status: 'NOT AVL', availability: '0%' },
            { type: '1A', price: '₹3000', status: 'NOT AVL', availability: '0%' },
        ],
        lastUpdated: '6hr 25min ago'
>>>>>>> 23b5cb7adc8550ac193dd9e8c159241ad462f68c
    }
];

export default trainData;
