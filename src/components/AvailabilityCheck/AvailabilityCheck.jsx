import React, { useState } from 'react';
import { checkAvailability } from '../../services/hotelService';
import styles from './AvailabilityCheck.module.css';

const AvailabilityCheck = ({ hotelId, roomTypes }) => {
  const [availabilityForm, setAvailabilityForm] = useState({
    roomType: '',
    checkInDate: '',
  });
  
  const [availabilityStatus, setAvailabilityStatus] = useState({
    checking: false,
    result: null,
    error: null
  });

  const handleAvailabilityCheck = async (e) => {
    e.preventDefault();
    setAvailabilityStatus({ checking: true, result: null, error: null });
    
    try {
      const result = await checkAvailability({
        hotelId,
        roomType: availabilityForm.roomType,
        dateOfCheckin: availabilityForm.checkInDate
      });
      setAvailabilityStatus({ checking: false, result, error: null });
    } catch (error) {
      setAvailabilityStatus({
        checking: false,
        result: null,
        error: error.message
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAvailabilityForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className={styles["availability-section"]}>
      <h2>Check Room Availability</h2>
      <form onSubmit={handleAvailabilityCheck} className={styles["availability-form"]}>
        <div className={styles["form-group"]}>
          <label htmlFor="roomType">Room Type:</label>
          <select
            id="roomType"
            name="roomType"
            value={availabilityForm.roomType}
            onChange={handleInputChange}
            required
            className={styles["form-control"]}
          >
            <option value="">Select Room Type</option>
            {roomTypes?.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div className={styles["form-group"]}>
          <label htmlFor="checkInDate">Check-in Date:</label>
          <input
            type="date"
            id="checkInDate"
            name="checkInDate"
            value={availabilityForm.checkInDate}
            onChange={handleInputChange}
            required
            min={new Date().toISOString().split('T')[0]}
            className={styles["form-control"]}
          />
        </div>

        <button 
          type="submit" 
          className={styles["check-btn"]}
          disabled={availabilityStatus.checking}
        >
          {availabilityStatus.checking ? 'Checking...' : 'Check Availability'}
        </button>
      </form>

      {/* Availability Results */}
      {availabilityStatus.error && (
        <div className={styles["availability-error"]}>
          {availabilityStatus.error}
        </div>
      )}
      {availabilityStatus.result && (
        <div className={styles["availability-result"]}>
          {availabilityStatus.result.available ? (
            <div className={styles["available"]}>
              Room is available! You can proceed with booking.
            </div>
          ) : (
            <div className={styles["not-available"]}>
              Sorry, the room is not available for the selected date.
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AvailabilityCheck;