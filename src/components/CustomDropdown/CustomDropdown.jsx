import React, { useState, useEffect } from "react";
import AsyncSelect from "react-select/async";
import axios from "axios";
import "../CustomDropdown/customdropdown.css";
import { Dropdown, DropdownButton, ButtonGroup, Button } from "react-bootstrap";

const CustomDropdown = ({ label, onSelect }) => {
  const [guests, setGuests] = useState({ adults: 1, children: 0, infants: 0 });
  const [accessToken, setAccessToken] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

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
    if (label === "Guests") {
      const totalGuests = guests.adults + guests.children + guests.infants;
      if (onSelect) onSelect(totalGuests);
    }
  }, [guests, onSelect, label]);

  const getAccessToken = async () => {
    try {
      const response = await axios.post(
        "https://test.api.amadeus.com/v1/security/oauth2/token",
        new URLSearchParams({
          grant_type: "client_credentials",
          client_id: "3KXAm1KA2THO95bCcNGM2MnxByAyLW1B",
          client_secret: "YuV1QgyFkGfliWmb",
        }),

        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      const token = response.data.access_token;
      setAccessToken(token);
      return token;
    } catch (error) {
      console.error("Error fetching access token:", error);
      return null;
    }
  };

  const loadCityOptions = async (inputValue) => {
    if (!inputValue) return [];

    const token = accessToken || (await getAccessToken());
    if (!token) return [];

    try {
      const response = await axios.get(
        "https://test.api.amadeus.com/v1/reference-data/locations",
        {
          params: {
            keyword: inputValue,
            subType: "CITY",
          },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data.data.map((item) => ({
        label: `${item.address.cityName}, ${item.address.countryName}`,
        value: item.iataCode,
      }));
    } catch (error) {
      if (error.response?.status === 429) {
        console.error("Too many requests. Please wait a while and try again.");
      } else {
        console.error("Error loading cities:", error);
      }
      return [];
    }
  };

  return (
    <>
      <label className="item-search-label">{label}</label>
      {label === "Guests" ? (
        <DropdownButton
          as={ButtonGroup}
          title={`${guests.adults}Adults, ${guests.children}Children, ${guests.infants}Infants`}
          variant="white"
          id="guest-dropdown"
          style={{ width: "100%" }}
        >
          {["adults", "children", "infants"].map((type) => (
            <Dropdown.Item
              as="div"
              key={type}
              className="d-flex justify-content-between align-items-center py-2 px-3"
            >
              <span className="text-capitalize">{type}</span>
              <div>
                <Button
                  variant="outline-danger"
                  size="sm"
                  onClick={() => handleChange(type, false)}
                >
                  -
                </Button>
                <span className="mx-2">{guests[type]}</span>
                <Button
                  variant="outline-danger"
                  size="sm"
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
          styles={{
            control: (provided) => ({
              ...provided,
              border: "none",
              boxShadow: "none",
              backgroundColor: "transparent",
              padding: "0",
              minHeight: "auto",
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
            }),
            singleValue: (provided) => ({
              ...provided,
              color: "#000",
            }),
            placeholder: (provided) => ({
              ...provided,
              color: "#aaa",
            }),
          }}
        />
      )}
    </>
  );
};

export default CustomDropdown;