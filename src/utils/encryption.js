import CryptoJS from 'crypto-js';

// Secret key for encryption (you should store this in environment variables)
const SECRET_KEY = process.env.REACT_APP_ENCRYPTION_KEY || 'your-secret-key-here';

// Encrypt data
export const encryptData = (data) => {
  try {
    const jsonString = JSON.stringify(data);
    const encrypted = CryptoJS.AES.encrypt(jsonString, SECRET_KEY).toString();
    return encrypted;
  } catch (error) {
    console.error('Encryption error:', error);
    return null;
  }
};

// Decrypt data
export const decryptData = (encryptedData) => {
  try {
    const decrypted = CryptoJS.AES.decrypt(encryptedData, SECRET_KEY);
    const jsonString = decrypted.toString(CryptoJS.enc.Utf8);
    if (!jsonString) return null;
    return JSON.parse(jsonString);
  } catch (error) {
    console.error('Decryption error:', error);
    return null;
  }
};

// Encrypt and store in localStorage
export const setEncryptedItem = (key, data) => {
  try {
    const encrypted = encryptData(data);
    if (encrypted) {
      localStorage.setItem(key, encrypted);
      return true;
    }
    return false;
  } catch (error) {
    console.error('Error setting encrypted item:', error);
    return false;
  }
};

// Get and decrypt from localStorage
export const getEncryptedItem = (key) => {
  try {
    const encrypted = localStorage.getItem(key);
    if (encrypted) {
      return decryptData(encrypted);
    }
    return null;
  } catch (error) {
    console.error('Error getting encrypted item:', error);
    return null;
  }
};

// Remove encrypted item
export const removeEncryptedItem = (key) => {
  try {
    localStorage.removeItem(key);
    return true;
  } catch (error) {
    console.error('Error removing encrypted item:', error);
    return false;
  }
}; 