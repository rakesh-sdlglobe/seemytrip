import React, { useState } from 'react';
import axios from 'axios';

const loadRazorpayScript = () => {
    return new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.onload = () => {
        resolve(true);
        };
        script.onerror = () => {
        resolve(false);
        };
        document.body.appendChild(script);
    });
};

const RazorpayPaymentButton = () => {
    const [amount, setAmount] = useState('');
    const [loading, setLoading] = useState(false);
    const [paymentResponse, setPaymentResponse] = useState(null);
    const [error, setError] = useState(null);

    const handlePayment = async () => {
        setLoading(true);
        setError(null);
        setPaymentResponse(null);

        // ✅ Validate amount
        if (!amount || isNaN(amount) || Number(amount) < 1) {
        setError('Please enter a valid amount (minimum ₹1)');
        setLoading(false);
        return;
        }

        const isScriptLoaded = await loadRazorpayScript();
        if (!isScriptLoaded) {
        setError('Razorpay SDK failed to load. Check your internet.');
        setLoading(false);
        return;
        }

        try {
        // 💸 Step 1: Create order from backend
        const { data } = await axios.post('http://localhost:3002/api/trains/getRazorpayOrder', {
            amount: Number(amount),
        });

        // 💳 Step 2: Configure Razorpay options
        const razorPayKey = process.env.REACT_APP_RAZORPAY_KEY_ID; // Use environment variable for Razorpay key
        console.log('key name is :', razorPayKey);
        const options = {
            key: razorPayKey, // Your Razorpay key ID
            amount: data.amount,
            currency: 'INR',
            name: 'Your Company',
            description: 'Custom Payment',
            order_id: data.id,
            handler: function (response) {
            setPaymentResponse(response);
            alert('✅ Payment Successful!');
            },
            prefill: {
            name: 'John Doe',
            email: 'john@example.com',
            contact: '9999999999',
            },
            notes: {
            address: 'Test Address',
            },
            theme: {
            color: '#0f9d58',
            },
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
        } catch (err) {
        console.error('Payment error:', err);
        setError('❌ Payment failed. Try again.');
        } finally {
        setLoading(false);
        }
    };

    return (
        <div style={{ maxWidth: 400, margin: '50px auto', padding: 20, border: '1px solid #ccc', borderRadius: 10 }}>
        <h2>Pay with Razorpay</h2>
        <input
            type="number"
            placeholder="Enter amount (e.g. 500)"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            style={{
            width: '100%',
            padding: '10px',
            marginBottom: '15px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            }}
        />
        <button
            onClick={handlePayment}
            disabled={loading}
            style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#0f9d58',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: loading ? 'not-allowed' : 'pointer',
            }}
        >
            {loading ? 'Processing...' : `Pay ₹${amount || 0}`}
        </button>

        {error && <p style={{ color: 'red', marginTop: '15px' }}>{error}</p>}

        {paymentResponse && (
            <div style={{ backgroundColor: '#f1f1f1', padding: '10px', marginTop: '15px', borderRadius: '5px' }}>
            <p><strong>Payment ID:</strong> {paymentResponse.razorpay_payment_id}</p>
            </div>
        )}
        </div>
    );
};

export default RazorpayPaymentButton;
