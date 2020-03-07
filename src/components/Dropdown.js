import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

function Dropdown({ selectedOption, dropdownOptions, onSelect }) {
  const [isActive, setIsActive] = useState(false);

  const handleSelect = (option) => {
    onSelect(option)
    setIsActive(false);
  }

  return (
    <div class={`dropdown  ${isActive ? 'is-active' : ''}`}>
      <div class="dropdown-trigger">
        <button
          class="button"
          onClick={() => setIsActive(!isActive)}
        >
          <span>{selectedOption}</span>
          <span class="icon is-small">
            <FaChevronDown />
          </span>
        </button>
      </div>
      <div class="dropdown-menu" id="dropdown-menu" role="menu" >
        <div class="dropdown-content">
          {
            dropdownOptions.map((option) => (
              <a class="dropdown-item" onClick={() => handleSelect(option)}>
                {option}
              </a>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Dropdown;