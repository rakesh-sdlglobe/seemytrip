import axios from 'axios';

// Replace with your backend API URL
const API_URL = 'http://localhost:3002';

// Function to fetch trains between stations and transform data
const trainData = async (leavingFrom, goingTo) => {
  try {
    // Fetch data from API
    const response = await axios.get(`${API_URL}/api/trains/`, {
      params: { leavingFrom, goingTo }  // Make sure these match backend query param names
    });

    // Transform data (ensure API fields match these exactly)
    const apiData = response.data;
    const transformedData = apiData.map(train => ({
      id: train.TrainID,
      name: train.TrainName,
      runsOn: train.RunningDays,
      departure: train.DepartureTime,
      departureStation: train.StartStationName,
      arrival: train.ArrivalTime,
      arrivalStation: train.EndStationName,
      duration: train.Duration,
      classes: [
        {
          type: 'SL',  // You might need to map other classes dynamically
          price: train.Price,  // Assuming this field exists
          status: train.Status,
          availability: train.Availability
        }
      ],
      lastUpdated: train.LastUpdated
    }));
   console.log(transformedData);
   
    return transformedData;
  } catch (error) {
    console.error('Error fetching or transforming train data:', error);
    throw error;  // Consider handling this error in the UI properly
  }
};

export default trainData;
