import React, { useState } from 'react';

const EconomyDropdown = () => {
  const [selectedClass, setSelectedClass] = useState('Economy');
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    console.log('Dropdown state:', !isDropdownOpen); // Debug log
    setDropdownOpen(!isDropdownOpen);
  };

  const selectClass = (selected) => {
    setSelectedClass(selected);
    setDropdownOpen(false); // Close dropdown after selecting
  };

  return (
    <div className="economy-dropdown">
      <div className="dropdown-toggle economy-button" onClick={toggleDropdown}>
        <i className="fa-solid fa-basket-shopping text-muted me-2" />
        <span>{selectedClass}</span>
      </div>
      {isDropdownOpen && (
        <ul className="dropdown-menu1">
          <li onClick={() => selectClass('Economy')}>Economy</li>
          <li onClick={() => selectClass('Premium Economy')}>Premium Economy</li>
          <li onClick={() => selectClass('Business/First')}>Business/First</li>
          <li onClick={() => selectClass('Business')}>Business</li>
        </ul>
      )}
    </div>
  );
};

export default EconomyDropdown;
