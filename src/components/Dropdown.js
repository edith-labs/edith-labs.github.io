import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

function Dropdown({ selectedOption, dropdownOptions, onSelect }) {
  const [isActive, setIsActive] = useState(false);

  const handleSelect = (option) => {
    onSelect(option);
    setIsActive(false);
  };

  return (
    <div className={`dropdown  ${isActive ? 'is-active' : ''}`}>
      <div className="dropdown-trigger">
        <button
          type="button"
          className="button"
          onClick={() => setIsActive(!isActive)}
        >
          <span>{selectedOption}</span>
          <span className="icon is-small">
            <FaChevronDown />
          </span>
        </button>
      </div>
      <div className="dropdown-menu" id="dropdown-menu" role="menu">
        <div className="dropdown-content">
          {
            dropdownOptions.map((option) => (
              <button
                type="button"
                className="dropdown-item"
                onClick={() => handleSelect(option)}
              >
                {option}
              </button>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
