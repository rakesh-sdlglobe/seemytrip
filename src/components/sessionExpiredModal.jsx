import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { HIDE_SESSION_EXPIRED_MODAL } from "../store/Actions/userActions";

const SessionExpiredModal = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const sessionExpired = useSelector((state) => state.user.sessionExpired);
    console.log("10 from jsx ",sessionExpired);
    const handleOkClick = () => {
        dispatch({ type: HIDE_SESSION_EXPIRED_MODAL });
        localStorage.removeItem("authToken"); // Clear auth token
        navigate("/login"); // Redirect to login page
    };

    if (!sessionExpired) return null;

    return (
        <div style={styles.overlay}>
        <div style={styles.modal}>
            <h2 style={styles.heading}>Session Expired</h2>
            <p style={styles.message}>Your session has expired. Please log in again.</p>
            <button style={styles.button} onClick={handleOkClick}>OK</button>
        </div>
        </div>
    );
};

const styles = {
    overlay: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
    },
    modal: {
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "8px",
        textAlign: "center",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        minWidth: "300px",
    },
    heading: {
        marginBottom: "10px",
        fontSize: "20px",
        color: "#333",
    },
    message: {
        marginBottom: "15px",
        fontSize: "16px",
        color: "#666",
    },
    button: {
        padding: "10px 20px",
        backgroundColor: "#d9534f",
        color: "white",
        border: "none",
        cursor: "pointer",
        borderRadius: "4px",
        fontSize: "16px",
    },
};

export default SessionExpiredModal;
