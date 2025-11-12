# 🔍 Debug Guide: Insurance Booking Details Console Logs

## Step-by-Step Debugging Process

### 1. **Check if Component is Loading**
When you navigate to `/insurance-booking-details`, you should see:
```
🚀 Insurance_BookingDetails component loaded
```

### 2. **Check Redux State**
You should see the Redux state logged:
```
🔴 Redux State: { bookingDetailsLoading: false, bookingDetailsData: null, ... }
```

### 3. **Check useEffect Execution**
You should see:
```
🔄 useEffect triggered - loading policy data
📋 Starting loadPolicyData function
```

### 4. **Check BookingId Detection**
You should see:
```
🔍 URL params: bookingId=2013507
🔍 URL BookingId: 2013507
🔍 State BookingId: null
🔍 Current BookingId: 2013507
```

### 5. **Check API Call**
If BookingId is found, you should see:
```
🎯 fetchBookingDetails function called with BookingId: 2013507
🔍 Fetching booking details for BookingId: 2013507
📤 Booking Details API Payload: { EndUserIp: "183.83.197.45", ... }
```

### 6. **Check API Response**
You should see:
```
📥 Booking Details API Response: { Response: { ... } }
```

## 🚨 Common Issues & Solutions

### Issue 1: No Console Logs at All
**Problem**: Component not loading
**Solution**: Check if route is correct in App.js

### Issue 2: Component loads but no useEffect logs
**Problem**: useEffect not running
**Solution**: Check if dependencies are correct

### Issue 3: No BookingId found
**Problem**: URL parameter or navigation state missing
**Solution**: Navigate with `?bookingId=2013507` or pass in state

### Issue 4: API call not triggered
**Problem**: fetchBookingDetails not called
**Solution**: Check BookingId detection logic

### Issue 5: API call fails
**Problem**: Redux action or network issue
**Solution**: Check Redux state and network tab

## 🧪 Test URLs

### Test with URL Parameter:
```
http://:3000/insurance-booking-details?bookingId=2013507
```

### Test with Navigation State:
```javascript
navigate('/insurance-booking-details', { 
  state: { bookingId: "2013507" } 
});
```

## 📋 Expected Console Output

If everything works correctly, you should see this sequence:

```
🚀 Insurance_BookingDetails component loaded
🔴 Redux State: { bookingDetailsLoading: false, bookingDetailsData: null, ... }
🔄 useEffect triggered - loading policy data
📋 Starting loadPolicyData function
🔍 URL params: bookingId=2013507
🔍 URL BookingId: 2013507
🔍 State BookingId: null
🔍 Current BookingId: 2013507
🎯 fetchBookingDetails function called with BookingId: 2013507
🔍 Fetching booking details for BookingId: 2013507
📤 Booking Details API Payload: { EndUserIp: "183.83.197.45", TokenId: "", BookingId: "2013507" }
📥 Booking Details API Response: { Response: { ... } }
✅ Booking details fetched successfully
📋 Policy Data: { Response: { ... } }
👤 Passenger Data: { PolicyNo: "4168/O-SURAKSH/373559355/01/335", ... }
🔢 Policy Number: 4168/O-SURAKSH/373559355/01/335
🖥️ UI Debug - PolicyNo: 4168/O-SURAKSH/373559355/01/335
```

## 🔧 Quick Fixes

### If you see no logs at all:
1. Check browser console is open
2. Check if you're on the right URL
3. Check if component is imported correctly in App.js

### If you see component load but no API call:
1. Check URL has `?bookingId=2013507`
2. Check navigation state has bookingId
3. Check if fetchBookingDetails is being called

### If API call fails:
1. Check Redux state for errors
2. Check network tab for failed requests
3. Check if authentication is working
