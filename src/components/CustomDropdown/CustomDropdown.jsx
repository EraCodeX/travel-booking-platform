import React, { useState, useEffect } from "react";
import AsyncSelect from "react-select/async";
import axios from "axios";
import "../CustomDropdown/customdropdown.css";
import { Dropdown, DropdownButton, ButtonGroup, Button } from "react-bootstrap";

const CustomDropdown = ({ label, onSelect }) => {
  const [guests, setGuests] = useState({ adults: 1, children: 0, infants: 0 });
  const [menuOpen, setMenuOpen] = useState(false);
  const totalGuests = guests.adults + guests.children + guests.infants;

  const handleChange = (type, increment) => {
    setGuests((prev) => {
      const newValue = prev[type] + (increment ? 1 : -1);
      return {
        ...prev,
        [type]: newValue >= 0 ? newValue : 0,
      };
    });
  };

  useEffect(() => {
    if (label === "Guests" && onSelect) {
      onSelect(totalGuests);
    }
  }, [totalGuests, onSelect, label]);

  const loadCityOptions = async (inputValue) => {
    if (!inputValue) return [];

    try {
      const response = await axios.get(
        `https://eratravel.site/backend/flights.php?keyword=${encodeURIComponent(inputValue)}`,
      );

      return (response.data.data || []).map((item) => ({
        label: `${item.address.cityName}, ${item.address.countryName}`,
        value: item.iataCode,
      }));
    } catch (error) {
      console.error("Error loading cities:", error);
      return [];
    }
  };

  return (
    <>
      {label && <label className="item-search-label">{label}</label>}

      {label === "Guests" ? (
        <DropdownButton
          as={ButtonGroup}
          title={totalGuests === 1 ? "1 Traveler" : `${totalGuests} Travelers`}
          variant="white"
          id="guest-dropdown"
          className="guest-dropdown-button"
        >
          {["adults", "children", "infants"].map((type) => (
            <Dropdown.Item as="div" key={type} className="guest-dropdown-item">
              <div className="guest-type-wrap">
                <span className="guest-type-label">
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </span>
              </div>

              <div className="guest-counter-controls">
                <Button
                  variant="outline-danger"
                  size="sm"
                  className="guest-counter-btn"
                  onClick={() => handleChange(type, false)}
                >
                  -
                </Button>

                <span className="guest-counter-value">{guests[type]}</span>

                <Button
                  variant="outline-danger"
                  size="sm"
                  className="guest-counter-btn"
                  onClick={() => handleChange(type, true)}
                >
                  +
                </Button>
              </div>
            </Dropdown.Item>
          ))}
        </DropdownButton>
      ) : (
        <AsyncSelect
          cacheOptions
          loadOptions={loadCityOptions}
          defaultOptions
          menuIsOpen={menuOpen}
          onMenuOpen={() => setMenuOpen(true)}
          onMenuClose={() => setMenuOpen(false)}
          onFocus={() => setMenuOpen(true)}
          noOptionsMessage={() => null}
          loadingMessage={() => "Searching..."}
          onChange={(selected) => {
            if (onSelect) onSelect(selected);
            setMenuOpen(false);
          }}
          placeholder="Search..."
          className="city-dropdown-select"
          classNamePrefix="city-select"
          styles={{
            control: (provided) => ({
              ...provided,
              border: "none",
              boxShadow: "none",
              backgroundColor: "transparent",
              padding: "0",
              minHeight: "unset",
              cursor: "text",
            }),
            dropdownIndicator: () => ({
              display: "none",
            }),
            indicatorSeparator: () => ({
              display: "none",
            }),
            valueContainer: (provided) => ({
              ...provided,
              padding: "0",
            }),
            input: (provided) => ({
              ...provided,
              margin: "0",
              padding: "0",
              color: "#0f172a",
              fontWeight: 600,
            }),
            singleValue: (provided) => ({
              ...provided,
              color: "#0f172a",
              fontWeight: 600,
            }),
            placeholder: (provided) => ({
              ...provided,
              color: "#98a2b3",
              fontWeight: 500,
            }),
            menu: (provided) => ({
              ...provided,
              zIndex: 9999,
              borderRadius: "18px",
              overflow: "hidden",
              boxShadow: "0 20px 45px rgba(15, 23, 42, 0.16)",
              border: "1px solid rgba(15, 23, 42, 0.08)",
            }),
            menuList: (provided) => ({
              ...provided,
              padding: "8px",
            }),
            option: (provided, state) => ({
              ...provided,
              borderRadius: "12px",
              padding: "12px 14px",
              fontSize: "14px",
              fontWeight: 600,
              backgroundColor: state.isFocused ? "#f8fafc" : "#ffffff",
              color: "#0f172a",
              cursor: "pointer",
            }),
          }}
        />
      )}
    </>
  );
};

export default CustomDropdown;
